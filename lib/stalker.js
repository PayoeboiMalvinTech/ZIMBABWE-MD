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
const cheerio = require("cheerio");
async function tikstalk(_0x28afb9) {
  let _0x22e0a2 = await axios.get("https://urlebird.com/user/" + _0x28afb9 + '/');
  let _0xc390ce = cheerio.load(_0x22e0a2.data);
  const _0x50f97 = _0xc390ce("div[class=\"col-md-auto justify-content-center text-center\"] > img").attr("src");
  const _0x41475a = _0xc390ce('h1.user').text().trim();
  const _0x5d1847 = _0xc390ce("div.content > h5").text().trim();
  const _0x3c7ac8 = _0xc390ce("div[class=\"col-7 col-md-auto text-truncate\"]").text().trim().split(" ")[0x1];
  const _0x53d846 = _0xc390ce("div[class=\"col-auto d-none d-sm-block text-truncate\"]").text().trim().split(" ")[0x1];
  const _0x2a5c4d = _0xc390ce("div.content > p").text().trim();
  return {
    'profile': _0x50f97,
    'name': _0x5d1847,
    'username': _0x41475a,
    'followers': _0x3c7ac8,
    'following': _0x53d846,
    'desc': _0x2a5c4d,
    'bio': _0xc390ce("body > div.main > div.container-fluid.mt-4.mt-md-2 > div > div.col-md-auto.text-center.text-md-left.pl-0 > div > p").text().trim(),
    'likes': _0xc390ce("body > div.main > div.container-fluid.mt-4.mt-md-2 > div > div.col-md-auto.text-center.text-md-left.pl-0 > div > div > div > div:nth-child(1)").text().trim().split("💙 ")[0x1]
  };
}
function igstalker(_0x1fc0b1) {
  return new Promise((_0x46a88c, _0x43079a) => {
    axios.get("https://dumpor.com/v/" + encodeURIComponent(_0x1fc0b1), {
      'headers': {
        'cookie': "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        'user-agent': "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(_0x5727ee => {
      const _0x3a3342 = cheerio.load(_0x5727ee.data);
      const _0x5a5829 = {
        'profile': _0x3a3342("#user-page > div.user > div.row > div > div.user__img").attr("style").replace(/(background-image: url\(\'|\'\);)/gi, ''),
        'fullname': _0x3a3342("#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1").text(),
        'username': _0x3a3342("#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4").text(),
        'post': _0x3a3342("#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)").text().replace(" Posts", ''),
        'followers': _0x3a3342("#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)").text().replace(" Followers", ''),
        'following': _0x3a3342("#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)").text().replace(" Following", ''),
        'bio': _0x3a3342("#user-page > div.user > div > div.col-md-5.my-3 > div").text().trim()
      };
      _0x46a88c(_0x5a5829);
    });
  });
}
module.exports = {
  'igstalker': igstalker,
  'tikstalk': tikstalk
};