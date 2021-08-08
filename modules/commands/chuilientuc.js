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
a("Bắt đầu chửi !");
setTimeout(() => {a({body: "Triệu Hồi Gấp Ra Nghe Lệnh Bổn Cung" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "Bổn Cung Kêu Mà Núp Đâu Rồi" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "Lẹ Làng Lên Nào ://" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "Triệu Hồi Gấp Ra Đây Nhanh" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "Triệu Hồi Gấp Ra Đây Nhanh" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "Triệu Hồi Gấp Ra Đây Nhanh" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "Triệu Hồi Gấp Ra Đây Nhanh" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "Triệu Hồi Gấp Ra Đây Nhanho" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "Triệu Hồi Gấp Ra Đây Nhanh" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "Triệu Hồi Gấp Ra Đây Nhanh" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "Triệu Hồi Gấp Ra Đây Nhanh" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "Triệu Hồi Gấp Ra Đây Nhanh" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "Triệu Hồi Gấp Ra Đây Nhanh" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "Triệu Hồi Gấp Ra Đây Nhanh" + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "Triệu Hồi Gấp Ra Đây Nhanh" + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "Triệu Hồi Gấp Ra Đây Nhanh" + " " + name, mentions: arraytag})}, 42000);
setTimeout(() => {a({body: "Thôi Nào Chui Ra Đây Nào" + " " + name, mentions: arraytag})}, 44000);
setTimeout(() => {a({body: "Sao Núp Kĩ Thế" + " " + name, mentions: arraytag})}, 48000);
setTimeout(() => {a({body: "Làm Nghề Réo Thuê Cũng Khổ mà" + " " + name, mentions: arraytag})}, 50000);
setTimeout(() => {a({body: "Năn Nỉ Đó Chui Ra Đi Mà" + " " + name, mentions: arraytag})}, 52000);
setTimeout(() => {a("Thôi Nào Bro Come on baby")} , 54000);
setTimeout(() => {a({body: "Hmu hmu bot cũng biết mệt mà" + " " + name, mentions: arraytag})}, 58000);
setTimeout(() => {a({body: "Hỏng Ra Thì Thui Dị" + " " + name, mentions: arraytag})}, 60000);
setTimeout(() => {a({body: "Hiccc méc AD nè hmu hmu" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a("Nhớ mặt tao đó🥺")} , 70000);


  
  }
