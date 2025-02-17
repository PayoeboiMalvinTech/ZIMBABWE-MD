const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson,
  getsize
} = require("./lib/functions");
function btregex(_0x47ecb5) {
  return h2k("/({11})/".test(_0x47ecb5));
}
buttonMessage = async (_0x465e5e, _0x425ad5) => {
  _0x425ad5.forEach((_0x51481c, _0x5e9afa) => {
    let _0x20b100 = 0x1;
    result += "\n*[" + mainNumber + "] " + _0x51481c.title + "*\n";
    reply("*Select number" + _0x20b100++ + _0x5e9afa + result);
    _0x5e9afa.push(Json(_0x465e5e));
  });
};
listMessage = async (_0x1ea13f, _0x5a762c) => {
  _0x5a762c.forEach((_0x4363ee, _0x5db0a2) => {
    let _0x2decaa = 0x1;
    result += "\n*[" + mainNumber + "] " + _0x4363ee.title + "*\n";
    reply("*Select number" + _0x2decaa++ + _0x5db0a2 + result);
    _0x5db0a2.push(Json(_0x1ea13f));
  });
};
module["export"] = {
  'listMessage': listMessage,
  'buttonMessage': buttonMessage,
  'btregex': btregex
};