module.exports.config = {
    name: "chuilientuc",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "HelyT",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "chuilientuc @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn chửi", event.threadID);
    let data = await api.getUserInfo(mention);
    let name = data[parseInt(mention)].name;
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Ey dzooo !");
setTimeout(() => {a({body: "Trời đất dung hoa, vạn vật sinh sôi" + " " + name, mentions: arraytag})}, 2000);
setTimeout(() => {a({body: "Con mẹ mày lôi thôi, đầu xanh mỏ đỏ" + " " + name, mentions: arraytag})}, 4000);
setTimeout(() => {a({body: "Gặm cỏ thay cơm" + " " + name, mentions: arraytag})}, 6000);
setTimeout(() => {a({body: "Đầu tóc bờm xờm, Khạc đờm tung tóe" + " " + name, mentions: arraytag})}, 8000);
setTimeout(() => {a({body: "Tao địt con mẹ mày" + " " + name, mentions: arraytag})}, 10000);
setTimeout(() => {a({body: "Như lồn trâu lồn chó" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "Lồn bó xi măng" + " " + name, mentions: arraytag})}, 14000);
setTimeout(() => {a({body: "Lồn chằng mạng nhện mà lồn bện là khoai" + " " + name, mentions: arraytag})}, 16000);
setTimeout(() => {a({body: "Lồn quai lá mít, Lồn đít lồn cơm" + " " + name, mentions: arraytag})}, 18000);
setTimeout(() => {a({body: "Lồn tơm lồn đậm" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "Lồn đười ươi nó địt lồn con vịt nó phang" + " " + name, mentions: arraytag})}, 22000);
setTimeout(() => {a({body: "Lồn giang mai lồn ỉa chảy lồn nhảy hiphop" + " " + name, mentions: arraytag})}, 24000);
setTimeout(() => {a({body: "Lồn hàng xốp làm hàng hiệu" + " " + name, mentions: arraytag})}, 26000);
setTimeout(() => {a({body: "Lồn hàng triệu con súc vật" + " " + name, mentions: arraytag})}, 28000);
setTimeout(() => {a({body: "Mà tao địt con đĩ mẹ mày" + " " + name, mentions: arraytag})}, 30000);
setTimeout(() => {a({body: "Đứng từ trên cao, mà lao đầu xuống đất" + " " + name, mentions: arraytag})}, 32000);
setTimeout(() => {a({body: "Địt lất phất như mưa rơi, địt tơi bởi như bom đạn" + " " + name, mentions: arraytag})}, 34000);
setTimeout(() => {a({body: "Địt lãng mạn như Romeo và Juliet" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "Địt khoét cái lỗ sâu" + " " + name, mentions: arraytag})}, 38000);
setTimeout(() => {a({body: "Địt khắp cái lỗ bướm" + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "Địt đứng tim phổi, địt cặp mắt nai" + " " + name, mentions: arraytag})}, 42000);
setTimeout(() => {a({body: "Mà địt chai lỗ đít, địt khít cái lỗ lồn" + " " + name, mentions: arraytag})}, 44000);
setTimeout(() => {a({body: "Con đĩ mẹ mày, mà tao địt con đĩ mẹ mày" + " " + name, mentions: arraytag})}, 46000);
setTimeout(() => {a({body: "Như gà mái mổ giun, như chó càn cắn dậu" + " " + name, mentions: arraytag})}, 48000);
setTimeout(() => {a({body: "Thằng cậu mày hiếp dâm, tao bật cái cánh cửa" + " " + name, mentions: arraytag})}, 50000);
setTimeout(() => {a({body: "Cho con mẹ mày nằm ngửa" + " " + name, mentions: arraytag})}, 52000);
setTimeout(() => {a({body: "Bửa nát tử cung" + " " + name, mentions: arraytag})}, 54000);
setTimeout(() => {a({body: "Khai thông buồng trứng" + " " + name, mentions: arraytag})}, 56000); 
setTimeout(() => {a({body: "Hứng full tinh trùng" + " " + name, mentions: arraytag})}, 58000);
setTimeout(() => {a({body: "Địt bồi hồi cảm xúc, địt như bánh đúc ra lò" + " " + name, mentions: arraytag})}, 60000);
setTimeout(() => {a({body: "Địt như mấy con phò bên hồ Hoàn Kiếm" + " " + name, mentions: arraytag})}, 62000);
setTimeout(() => {a({body: "Địt như mấy con điếm bên chợ Đồng Xuân" + " " + name, mentions: arraytag})}, 64000);
setTimeout(() => {a({body: "Địt đằng chân mà lên đằng đầu" + " " + name, mentions: arraytag})}, 68000);
setTimeout(() => {a({body: "Địt sập cầu sập cống" + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "Địt con mẹ mày sống" + " " + name, mentions: arraytag})}, 72000);
setTimeout(() => {a({body: "Địt con mẹ mày chết" + " " + name, mentions: arraytag})}, 74000);
setTimeout(() => {a({body: "Cho con mẹ mày AIDS" + " " + name, mentions: arraytag})}, 76000);
setTimeout(() => {a({body: "Cho con mẹ mày sida" + " " + name, mentions: arraytag})}, 78000);
setTimeout(() => {a({body: "Và tao địt từ Nga, mà qua tới Pháp" + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "Tao lại địt về Việt Nam mà ra hàng Cỏ" + " " + name, mentions: arraytag})}, 82000);
setTimeout(() => {a({body: "Gọi một trăm thằng da đỏ, một nghìn thằng da đen" + " " + name, mentions: arraytag})}, 84000);
setTimeout(() => {a({body: "Nó lại bem vào cái lỗ lồn con đĩ mẹ mày" + " " + name, mentions: arraytag})}, 86000);
setTimeout(() => {a({body: "Địt vô đầu gối ,Địt thối màng trinh" + " " + name, mentions: arraytag})}, 88000);
setTimeout(() => {a({body: "Địt bất thình lình" + " " + name, mentions: arraytag})}, 90000);
setTimeout(() => {a({body: "Địt kiểu âu tướng" + " " + name, mentions: arraytag})}, 92000);
setTimeout(() => {a({body: "Địt hướng mặt trời" + " " + name, mentions: arraytag})}, 94000);
setTimeout(() => {a({body: "Địt chơi địt bời" + " " + name, mentions: arraytag})}, 96000);
setTimeout(() => {a({body: "Địt ra kiểu mới" + " " + name, mentions: arraytag})}, 98000);
setTimeout(() => {a({body: "Địt tới địt lui" + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: "Địt búi cả đầu" + " " + name, mentions: arraytag})}, 102000);
setTimeout(() => {a({body: "Địt đâu cũng chết" + " " + name, mentions: arraytag})}, 104000);
setTimeout(() => {a({body: "Địt bết cả lồn" + " " + name, mentions: arraytag})}, 106000);
setTimeout(() => {a({body: "Địt kiểu teo kiểu héo kiểu ngang kiểu dọc " + " " + name, mentions: arraytag})}, 108000);
setTimeout(() => {a({body: "Kiểu không cần khoa học" + " " + name, mentions: arraytag})}, 110000);
setTimeout(() => {a({body: "Cũng chọc thủng lồn con đĩ mẹ mày" + " " + name, mentions: arraytag})}, 112000);
setTimeout(() => {a ("Nhớ Chưa Địt Mẹ Mày")} , 120000);



}
