module.exports.config = {
	name: "baicao",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "Game bài cào dành cho nhóm có đặt cược",
	commandCategory: "game",
	usages: "[create/start/join/info/leave]",
	cooldowns: 1
};

module.exports.handleEvent = async ({ event, api, Users, Currencies }) => {
	const { senderID, threadID, body, messageID } = event;

	if (!global.moduleData.baicao) global.moduleData.baicao = new Map();
	if (!global.moduleData.baicao.has(threadID)) return;
	var values = global.moduleData.baicao.get(threadID);
	if (values.start != 1) return;

	if (body.indexOf("Chia") == 0) {
		if (values.chiabai == 1) return;
		for(var i = 0; i < values.player.length; i++) {
			const card1 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
			const card2 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
			const card3 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
			var tong = (card1 + card2 + card3);
			if (tong >= 20) tong -= 20;
			if (tong >= 10) tong -= 10;
			values.player[i].card1 = card1;
			values.player[i].card2 = card2;
			values.player[i].card3 = card3;
			values.player[i].tong = tong;
			api.sendMessage(`Bài của bạn: ${card1} | ${card2} | ${card3} \n\nTổng bài của bạn: ${tong}`, values.player[i].id);
		}
		values.chiabai = 1;
		global.moduleData.baicao.set(threadID, values);
		return api.sendMessage("Bài đã được chia thành công! tất cả mọi người đều có 2 lượt đổi bài nêú không thâý bài hãy kiểm tra lại tin nhắn chờ", threadID);
	}

	if (body.indexOf("Đổi") == 0) {
		if (values.chiabai != 1) return;
		var player = values.player.find(item => item.id == senderID);
		if (player.doibai == 0) return api.sendMessage("Bạn đã sử dụng toàn bộ lượt đổi bài", threadID, messageID);
		if (player.ready == true) return api.sendMessage("Bạn đã xong, bạn không thể đổi bài!", threadID, messageID);
		const card = ["card1","card2","card3"];
		player[card[(Math.floor(Math.random() * card.length))]] = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
		player.tong = (player.card1 + player.card2 + player.card3);
		if (player.tong >= 20) player.tong -= 20;
		if (player.tong >= 10) player.tong -= 10;
		player.doibai -= 1;
		global.moduleData.baicao.set(values);
		return api.sendMessage(`Bài của bạn sau khi được đổi: ${player.card1} | ${player.card2} | ${player.card3} \n\nTổng bài của bạn: ${player.tong}`, player.id);
	}

	if (body.indexOf("Xong") == 0) {
		if (values.chiabai != 1) return;
		const player = values.player.find(item => item.id == senderID);
		if (player.ready == true) return;
		const name = global.data.userName.get(player.id) || await Users.getNameUser(player.id);
		values.ready += 1;
		player.ready = true;
		api.sendMessage(`Người chơi: ${name} Đã sẵn sàng lật bài, còn lại: ${values.player.length - values.ready} người chơi chưa lật bài`, event.threadID);
		if (values.player.length == values.ready) {
			const player = values.player;
			player.sort((a, b) => {
				if (a.tong > b.tong) return -1;
				if (a.tong < b.tong) return 1;
			});

			var ranking = [], num = 1;

			for (const info of player) {
				const name = global.data.userName.get(info.id) || await Users.getNameUser(info.id);
				ranking.push(`${num++} • ${name} với ${info.card1} | ${info.card2} | ${info.card3} => ${info.tong} nút\n`);
			}

			try {
				Currencies.increaseMoney(player[0].id, values.rateBet * player.length);
			} catch (e) {};

			global.moduleData.baicao.delete(threadID);
			return api.sendMessage(`Kết quả:\n\n ${ranking.join("\n")}\n\nRiêng người chơi đứng đầu nhận được ${values.rateBet * player.length}$`, threadID);
		}
		else return
	}
	if (body.indexOf("Nonready") == 0) {
		const data = values.player.filter(item => item.ready == false);
		var msg = [];

		for (const info of data) {
			const name = global.data.userName.get(info.id) || await Users.getNameUser(info.id);
			msg.push(name);
		}
		if (msg.length != 0) return api.sendMessage("Những người chơi chưa đã xong bao gồm: " + msg.join(", "), threadID);
		else return;
	}
}

module.exports.run = async ({ api, event, args, Currencies }) => {
	const { senderID, threadID, messageID } = event;
	
	if (!global.moduleData.baicao) global.moduleData.baicao = new Map();
	var values = global.moduleData.baicao.get(threadID) || {};

	if (args[0] == "tạo") {
		if (global.moduleData.baicao.has(threadID)) return api.sendMessage("Hiện tại nhóm này đang có bàn bài cào đang được mở", threadID, messageID);
		if (!args[1] || isNaN(args[1]) || parseInt(args[1]) <= 1) return api.sendMessage("Mức đặt cược của bạn không phải là một con số hoặc mức đặt cược của bạn bé hơn 1$", threadID, messageID);
		
		try {
			await Currencies.decreaseMoney(senderID, parseInt(args[1]));
		} catch (e) {  return api.sendMessage(`Bạn không đủ tiền để có thể khởi tạo bàn với giá: ${args[1]}$`, threadID, messageID) }

		global.moduleData.baicao.set(event.threadID, { "author": senderID, "start": 0, "chiabai": 0, "ready": 0, rateBet: parseInt(args[1]), player: [ { "id": senderID, "card1": 0, "card2": 0, "card3": 0, "doibai": 2, "ready": false } ] });
		
		return api.sendMessage("Bàn bài cào của bạn đã được tạo thành công!, để tham gia bạn hãy nhập /baicao vào", threadID, messageID);
	}

	else if (args[0] == "vào") {
		if (!values) return api.sendMessage("Hiện tại chưa có bàn bài cào nào, bạn có thể tạo bằng cách sử dụng /baicao tạo", threadID, messageID);
		if (values.start == 1) return api.sendMessage("Hiện tại bàn bài cào đã được bắt đầu", threadID, messageID);
		
		try {
			await Currencies.decreaseMoney(senderID, values.rateBet);
		} catch (e) {  return api.sendMessage(`Bạn không đủ ${values.rateBet}$ để có thể tham gia`, threadID, messageID) }
		
		if (values.player.find(item => item.id == senderID)) return api.sendMessage("Bạn đã tham gia vào bàn bài cào này!", threadID, messageID);
		values.player.push({ "id": senderID, "card1": 0, "card2": 0, "card3": 0, "tong": 0, "doibai": 3, "xong": false });
		global.moduleData.baicao.set(threadID, values);
		return api.sendMessage("Bạn đã tham gia thành công!", threadID, messageID);
	}

	else if (args[0] == "info") {
		if (typeof values.player == "undefined") return api.sendMessage("Hiện tại chưa có bàn bài cào nào, bạn có thể tạo bằng cách sử dụng /baicao tạo", threadID, messageID);
		return api.sendMessage(
			"=== Bàn Bài Cào ===" +
			"\n- Author Bàn: " + values.author +
			"\n- Tổng số người chơi: " + values.player.length + " Người" +
			"\n- Mức cược: " + values.rateBet + "$"
		, threadID, messageID);
	}

	else if (args[0] == "rời") {
		if (typeof values.player == "undefined") return api.sendMessage("Hiện tại chưa có bàn bài cào nào, bạn có thể tạo bằng cách sử dụng /baicao tạo", threadID, messageID);
		if (!values.player.some(item => item.id == senderID)) return api.sendMessage("Bạn chưa tham gia vào bàn bài cào trong nhóm này!", threadID, messageID);
		if (values.start == 1) return api.sendMessage("Hiện tại bàn bài cào đã được bắt đầu", threadID, messageID);
		if (values.author == senderID) {
			global.moduleData.baicao.delete(threadID);

			for (const player of values.player) {
				try {
					Currencies.increaseMoney(player.id, values.rateBet);
				} catch (e) {  };
			}

			api.sendMessage("chủ phòng đã rời khỏi bàn, đồng nghĩa với việc bàn sẽ bị giải tán!", threadID, messageID);
		}
		else {
			values.player.splice(values.player.findIndex(item => item.id === senderID), 1);

			try {
				Currencies.increaseMoney(senderID, values.rateBet);
			} catch (e) {  };

			api.sendMessage("Bạn đã rời khỏi bàn bài cào này!", threadID, messageID);
			global.moduleData.baicao.set(threadID, values);
		}
		return;
	}

	else if (args[0] == "start" && values.author == senderID) {
		if (!values) return api.sendMessage("Hiện tại chưa có bàn bài cào nào, bạn có thể tạo bằng cách sử dụng /baicao tạo", threadID, messageID);
		if (values.player.length <= 1) return api.sendMessage("Hiện tại bàn của bạn không có người chơi nào tham gia, bạn có thể mời người đấy tham gia bằng cách yêu cầu người chơi khác nhập /baicao vào", threadID, messageID);
		if (values.start == 1) return api.sendMessage("Hiện tại bàn đã được bắt đầu bởi chủ bàn", threadID, messageID);
		values.start = 1;
		return api.sendMessage("Bàn bài cào của bạn được bắt đầu", threadID, messageID);
	}

	else if (args[0] == "hdsd") return api.sendMessage("Hướng dẫn sử dụng bài cào\n\n/baicao tạo 100(100 là số tiền đặt) : để tạo bàn chơi\n/baicao start : để bắt đầu ván đấu\n/baicao join : để tham gia ván đấu\nChia : dành cho người tạo bàn đấu \nready : dể hạ bài\nĐổi : để đổi bài nếu bài xấu(Chỉ có 3 lượt)\n/baicao info : để xem thông tin bàn đấu \n/baicao rời : để rời khỏi bàn chơi \n/balance : để xem số dư tài khoản", threadID, messageID);

	else return global.utils.throwError(this.config.name, threadID, messageID);
}
