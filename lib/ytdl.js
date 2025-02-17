/*This file has been encripted !
its mean is this file is not for others.

Don't clone without permission, publishing in the 3rd class is strictly prohibited.

BOT NAME: ZIMBABWE-MD
OWNER: MR MALVIN ( TECHLORD )
TEAM: NEXUS
GITHUB: 
    - @kingmalvn
    - @techlord01

Contact Methods;
 - Whatsapp channels
    > https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z
    
- Telegram;
    > https://t.me/malvintech
    
*/
const axios = require("axios");
const qs = require("querystring");
const cheerio = require("cheerio");
const getBuffer = async (_0x184a66, _0x53f249) => {
  try {
    if (_0x53f249) {
      _0x53f249;
    } else {
      ({});
    }
    var _0x55b81b = await axios({
      'method': 'get',
      'url': _0x184a66,
      'responseType': "arraybuffer"
    });
    return _0x55b81b.data;
  } catch (_0x21984b) {
    console.log(_0x21984b);
  }
};
async function getsize(_0x1c0815) {
  function _0x5ada53(_0x4c0899) {
    let _0x2b6a6c = ['B', 'KB', 'MB', 'GB', 'TB'];
    let _0x2c4d91 = _0x4c0899;
    let _0x240358;
    for (_0x240358 = 0x0; _0x2c4d91 >= 0x400 && _0x240358 < 0x4; _0x240358++) {
      _0x2c4d91 /= 0x400;
    }
    return _0x2c4d91.toFixed(0x2) + " " + _0x2b6a6c[_0x240358];
  }
  return _0x5ada53(Buffer.byteLength(await getBuffer(_0x1c0815)));
}
ytmp4 = async _0x3628c2 => {
  const _0x6592da = {
    'url': _0x3628c2,
    'format': "mp4",
    'lang': 'en'
  };
  let _0x328208 = await axios.post('https://s64.notube.net/recover_weight.php', qs.stringify(_0x6592da));
  let _0x456058 = await axios.get("https://notube.net/en/download?token=" + _0x328208.data.token);
  let _0x1727ae = cheerio.load(_0x456058.data);
  return {
    'title': _0x1727ae("#breadcrumbs-section h2").text(),
    'download': _0x1727ae("#breadcrumbs-section #downloadButton").attr('href'),
    'size': await getsize(_0x1727ae("#breadcrumbs-section #downloadButton").attr("href"))
  };
};
ytmp4hd = async _0xe3ac1c => {
  const _0x36d204 = {
    'url': _0xe3ac1c,
    'format': "mp4hd",
    'lang': 'en'
  };
  let _0x45b0c7 = await axios.post("https://s61.notube.net/recover_weight.php", qs.stringify(_0x36d204));
  let _0x3fd14d = await axios.get("https://notube.net/en/download?token=" + _0x45b0c7.data.token);
  let _0x4a30b3 = cheerio.load(_0x3fd14d.data);
  return {
    'title': _0x4a30b3("#breadcrumbs-section h2").text(),
    'download': _0x4a30b3("#breadcrumbs-section #downloadButton").attr("href"),
    'size': await getsize(_0x4a30b3("#breadcrumbs-section #downloadButton").attr("href"))
  };
};
ytmp3 = async _0x4471f3 => {
  const _0x57ae32 = {
    'url': _0x4471f3,
    'format': "mp3",
    'lang': 'en'
  };
  let _0x2f895e = await axios.post("https://s64.notube.net/recover_weight.php", qs.stringify(_0x57ae32));
  let _0x102e35 = await axios.get("https://notube.net/en/download?token=" + _0x2f895e.data.token);
  let _0x585f26 = cheerio.load(_0x102e35.data);
  return {
    'title': _0x585f26("#breadcrumbs-section h2").text(),
    'download': _0x585f26("#breadcrumbs-section #downloadButton").attr("href"),
    'size': await getsize(_0x585f26("#breadcrumbs-section #downloadButton").attr("href"))
  };
};
module.exports = {
  'ytmp3': ytmp3,
  'ytmp4': ytmp4,
  'ytmp4hd': ytmp4hd
};