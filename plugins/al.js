const config = require('../config');
const {
  cmd,
  commands
} = require("../command");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require('../lib/functions');
const cheerio = require('cheerio');
const axios = require("axios");
const {
  Maker
} = require("imagemaker.js");
const {
  iosNews
} = require("ios-news");
const fetch = require("node-fetch");
let {
  img2url
} = require("@blackamda/telegram-image-url");
const mumaker = require("mumaker");
class AdobeFirefly {
  constructor(_0x1d069d = {}) {
    this.options = _0x1d069d;
  }
  ["generate"] = _0x231bf7 => new Promise(async _0x5901fd => {
    try {
      const _0x2c40dc = await (await axios.post('https://firefly.adobe.io/v2/images/generate', {
        'prompt': _0x231bf7,
        'size': {
          'width': 0x800,
          'height': 0x800
        },
        'visualIntensity': 0x6,
        'locale': "en-ID",
        'seeds': [0xeffe, 0x1738f, 0xa41a, 0xa4dd]
      }, {
        'headers': {
          ...this.options
        }
      })).data;
      if (!_0x2c40dc.outputs || _0x2c40dc.outputs.length < 0x1) {
        return {
          'status': false,
          'msg': "Can't generate image!"
        };
      }
      _0x5901fd({
        'status': true,
        'data': _0x2c40dc.outputs
      });
    } catch (_0x219d18) {
      _0x5901fd({
        'status': false,
        'msg': _0x219d18.message
      });
    }
  });
}
cmd({
  'pattern': 'ailogo',
  'alias': ["logoai", "ail", "gptlogo"],
  'react': '🤖',
  'category': 'ai',
  'desc': "It creates ai logos.",
  'use': ".ailogo <query>",
  'filename': __filename
}, async (_0x421321, _0x15f2b7, _0x46e64a, {
  from: _0x5d9aff,
  l: _0x20d495,
  prefix: _0xe97957,
  quoted: _0x3a9769,
  body: _0x337625,
  isCmd: _0x1d03b9,
  command: _0x499ffe,
  args: _0x321b3d,
  q: _0x4fe5e3,
  isGroup: _0x3316e2,
  sender: _0x4e19d7,
  senderNumber: _0xb24394,
  botNumber2: _0x580267,
  botNumber: _0x1208e0,
  pushname: _0x5eea69,
  isMe: _0x1dfead,
  isOwner: _0x46e487,
  groupMetadata: _0x167cb6,
  groupName: _0x3ca58b,
  participants: _0x2f4eaa,
  groupAdmins: _0x477679,
  isBotAdmins: _0x5e5120,
  isAdmins: _0xb6debf,
  reply: _0x175fab
}) => {
  try {
    if (!_0x4fe5e3) {
      return _0x175fab("Please enter a query");
    }
    const _0x12bbb2 = new AdobeFirefly();
    let _0x5d548e = await _0x12bbb2(_0x4fe5e3);
    _0x421321.sendMessage(_0x5d9aff, {
      'image': {
        'url': _0x5d548e.data
      },
      'caption': "ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ\nᴀ sɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ"
    }, {
      'quoted': _0x15f2b7
    });
  } catch (_0x378219) {
    _0x175fab("I cant create that logo");
    console.log(_0x378219);
  }
});
cmd({
  'pattern': "blackbox",
  'alias': ['bb'],
  'react': '👾',
  'desc': "Blackbox ai chat",
  'category': 'ai',
  'use': ".blackbox <query>",
  'filename': __filename
}, async (_0x1bfd06, _0x2c7a76, _0x36b9ca, {
  from: _0x2b5195,
  l: _0x1784ce,
  prefix: _0x4f8106,
  quoted: _0x3c487e,
  body: _0x35352d,
  isCmd: _0x59cb47,
  command: _0x390dc0,
  args: _0x42724c,
  q: _0x877f1d,
  isGroup: _0x407eaa,
  sender: _0x5a58b5,
  senderNumber: _0x2ba06e,
  botNumber2: _0x3a7a78,
  botNumber: _0x4fda0f,
  pushname: _0xeede79,
  isMe: _0x8ccbb9,
  isOwner: _0x5e58ae,
  groupMetadata: _0x10a277,
  groupName: _0xe6a8e6,
  participants: _0xf6d3a7,
  groupAdmins: _0x476ef0,
  isBotAdmins: _0x161432,
  isAdmins: _0x51b23b,
  reply: _0x21af0b
}) => {
  try {
    if (!_0x877f1d) {
      return _0x21af0b("Need a keyword");
    }
    var _0x57be5d = (await fetchJson('https://api-pink-venom.vercel.app/api/blackboxAIChat?message=' + _0x877f1d)).data;
    return await _0x21af0b(_0x57be5d.response);
  } catch (_0x44808b) {
    _0x21af0b("Unable to generate");
    _0x1784ce(_0x44808b);
  }
});
cmd({
  'pattern': "bingimgai",
  'alias': ["bingimg"],
  'react': '📷',
  'desc': "Generate Images using Bing AI",
  'category': 'ai',
  'use': ".bingimgai <prompt>",
  'filename': __filename
}, async (_0x1b580f, _0x84e483, _0x4d6bf8, {
  from: _0x2eeb98,
  l: _0x1739ff,
  quoted: _0x22c817,
  body: _0x1ff987,
  isCmd: _0x1553a4,
  command: _0x2b0c98,
  args: _0x1795cf,
  q: _0x48f63b,
  isGroup: _0x329595,
  sender: _0x2499e5,
  senderNumber: _0x258104,
  botNumber2: _0x2ea314,
  botNumber: _0x17b05b,
  pushname: _0x36039f,
  isMe: _0x18b50c,
  isOwner: _0x174352,
  groupMetadata: _0x4fbdfb,
  groupName: _0x21c276,
  participants: _0x875c76,
  groupAdmins: _0xda5938,
  isBotAdmins: _0x4d6736,
  isAdmins: _0x1ed32e,
  reply: _0x1b73b2
}) => {
  try {
    if (!_0x48f63b) {
      return await _0x1b73b2("*Give me a prompt to generate images*");
    }
    let _0x1fe42d = await fetchJson("https://widipe.com/bingimg?text=" + encodeURIComponent(_0x48f63b));
    if (_0x1fe42d && _0x1fe42d.result && Array.isArray(_0x1fe42d.result) && _0x1fe42d.result.length > 0x0) {
      for (let _0x259201 = 0x0; _0x259201 < _0x1fe42d.result.length; _0x259201++) {
        await _0x1b580f.sendMessage(_0x2eeb98, {
          'image': {
            'url': _0x1fe42d.result[_0x259201]
          },
          'caption': "ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ\nᴀ sɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ"
        }, {
          'quoted': _0x84e483
        });
      }
    } else {
      _0x1b73b2("No images found for the given prompt");
    }
  } catch (_0x3a8fd1) {
    _0x1b73b2("Unable to generate images to the given prompt");
    _0x1739ff(_0x3a8fd1);
  }
});
cmd({
  'pattern': "aiimg",
  'alias': ["imgai"],
  'react': '📷',
  'desc': "Generate Images using Bing AI",
  'category': 'ai',
  'use': ".aiimg <prompt>",
  'filename': __filename
}, async (_0x5a3650, _0x14b0c7, _0x236268, {
  from: _0x275d30,
  l: _0x2bf230,
  quoted: _0x1f0c67,
  body: _0x4f4134,
  isCmd: _0x2acae1,
  command: _0x5377e8,
  args: _0x3e8651,
  q: _0x337b1f,
  isGroup: _0x597f9b,
  sender: _0x525c2a,
  senderNumber: _0x34eb38,
  botNumber2: _0x5cfc88,
  botNumber: _0x1078b0,
  pushname: _0x269943,
  isMe: _0x44697b,
  isOwner: _0x154b5a,
  groupMetadata: _0x5bf716,
  groupName: _0x3fbc45,
  participants: _0x2ad894,
  groupAdmins: _0x4e988e,
  isBotAdmins: _0xac3bbe,
  isAdmins: _0x2f3b07,
  reply: _0xcd635a
}) => {
  try {
    if (!_0x337b1f) {
      return await _0xcd635a("*Give me a prompt to generate images*");
    }
    await _0x5a3650.sendMessage(_0x275d30, {
      'image': {
        'url': "https://sms-bomb.vercel.app/api/aipic.php?prompt=" + encodeURIComponent(_0x337b1f)
      },
      'caption': "ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ\nᴀ sɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴋɪɴɢ ᴍᴀʟᴠɪɴ"
    }, {
      'quoted': _0x14b0c7
    });
  } catch (_0x55158a) {
    _0xcd635a("Unable to generate images to the given prompt");
    _0x2bf230(_0x55158a);
  }
});
async function aiArtGenerator(_0x5baf68) {
  try {
    const _0x7020ab = await fetch('https://ai-api.magicstudio.com/api/ai-art-generator', {
      'method': "POST",
      'headers': {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0",
        'Accept': "application/json, text/plain, */*",
        'Accept-Encoding': "gzip, deflate, br, zstd",
        'Accept-Language': 'en-US,en;q=0.9',
        'Origin': 'https://magicstudio.com',
        'Referer': "https://magicstudio.com/ai-art-generator/"
      },
      'body': new URLSearchParams({
        'prompt': _0x5baf68,
        'output_format': "bytes",
        'user_profile_id': "null",
        'anonymous_user_id': "a584e30d-1996-4598-909f-70c7ac715dc1",
        'request_timestamp': Date.now(),
        'user_is_subscribed': "false",
        'client_id': 'pSgX7WgjukXCBoYwDM8G8GLnRRkvAoJlqa5eAVvj95o'
      })
    });
    if (!_0x7020ab.ok) {
      throw new Error("Network response was not ok");
    }
    const _0x5f265b = await _0x7020ab.arrayBuffer();
    return _0x5f265b;
  } catch (_0x1472d8) {
    console.error("Error fetching data:", _0x1472d8);
    throw _0x1472d8;
  }
}
cmd({
  'pattern': "aiartgen",
  'alias': ["aiart"],
  'react': '📷',
  'desc': "Generate Images using Bing AI",
  'category': 'ai',
  'use': ".aiart <prompt>",
  'filename': __filename
}, async (_0x5cd32d, _0x3c6bc9, _0x1a34db, {
  from: _0xae358,
  l: _0x422caf,
  quoted: _0x2d988c,
  body: _0x471b32,
  isCmd: _0x5eb898,
  command: _0x5dbbed,
  args: _0x3e7ee8,
  q: _0x726587,
  isGroup: _0x57df92,
  sender: _0x440eca,
  senderNumber: _0x4df267,
  botNumber2: _0x36e4a8,
  botNumber: _0x1875f8,
  pushname: _0x5ae5cc,
  isMe: _0x59d525,
  isOwner: _0x417b5b,
  groupMetadata: _0x59d33e,
  groupName: _0x13f8fe,
  participants: _0x4a24ca,
  groupAdmins: _0x5b737b,
  isBotAdmins: _0xde30fa,
  isAdmins: _0xa3b499,
  reply: _0x5ec42d
}) => {
  try {
    if (!_0x726587) {
      return await _0x5ec42d("*Give me a prompt to generate images*");
    }
    const _0x188b3a = await aiArtGenerator(_0x726587);
    await _0x5cd32d.sendMessage(_0xae358, {
      'image': Buffer.from(_0x188b3a),
      'caption': "ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ\nᴀ sɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ"
    }, {
      'quoted': _0x3c6bc9
    });
  } catch (_0x3370c2) {
    _0x5ec42d("Unable to generate images to the given prompt");
    console.log(_0x3370c2);
  }
});
cmd({
  'pattern': "wabeta",
  'alias': ['wabetainfo', "betawa"],
  'react': '✔️',
  'desc': "tmsg",
  'category': "search",
  'use': '.wabeta'
}, async (_0x1dde6f, _0x50d810, _0x1ed0f1, {
  from: _0x4dec6f,
  l: _0x4be0af,
  quoted: _0xfba539,
  body: _0x4a9386,
  isCmd: _0x48fe31,
  command: _0x2c6efd,
  args: _0x5b8828,
  q: _0x35dd57,
  isGroup: _0x338a34,
  sender: _0x574fe4,
  senderNumber: _0x6fea44,
  botNumber2: _0x1c28c5,
  botNumber: _0x27131d,
  pushname: _0x3c4f64,
  isMe: _0x2889c1,
  isOwner: _0x2bae88,
  groupMetadata: _0x37573b,
  groupName: _0x5204bf,
  participants: _0x192470,
  groupAdmins: _0x14123e,
  isBotAdmins: _0x134bf3,
  isAdmins: _0x1e7334,
  reply: _0x4e4510
}) => {
  try {
    const _0x1f9b0f = (await fetchJson("https://vihangayt.me/details/wabetainfo")).data;
    let _0x405437 = "*🥏 ᴛɪᴛᴛʟᴇ :* " + _0x1f9b0f.title + "\n*📅 ᴅᴀᴛᴇ :* " + _0x1f9b0f.date + "\n*🖥️ ᴘʟᴀᴛғᴏʀᴍ :* " + _0x1f9b0f.platform + "\n*🔗 ᴜʀʟ :* " + _0x1f9b0f.url + "\n*🗞️ ᴅᴇsᴄ :*\n" + _0x1f9b0f.shortdesc + "\n\n*ℹ️ ғᴀϙ*\n\n*❓ ϙᴜᴇsᴛɪᴏɴ :* " + _0x1f9b0f.faq[0x0].question + "\n*👨🏻‍💻 ᴀɴsᴡᴇʀ :* " + _0x1f9b0f.faq[0x0].answer + "\n\n*❓ ϙᴜᴇsᴛɪᴏɴ :* " + _0x1f9b0f.faq[0x1].question + "\n*👨🏻‍💻 ᴀɴsᴡᴇʀ :* " + _0x1f9b0f.faq[0x1].answer + "\n\n*❓ ϙᴜᴇsᴛɪᴏɴ :* " + _0x1f9b0f.faq[0x2].question + "\n*👨🏻‍💻 ᴀɴsᴡᴇʀ :* " + _0x1f9b0f.faq[0x2].answer + "\n\n*❓ ϙᴜᴇsᴛɪᴏɴ :* " + _0x1f9b0f.faq[0x3].question + "\n*👨🏻‍💻 ᴀɴsᴡᴇʀ :* " + _0x1f9b0f.faq[0x3].answer + "\n\n*📰 ғᴜʟʟ ᴅᴇsᴄ :*\n" + _0x1f9b0f.fulldesc;
    return await _0x1dde6f.sendMessage(_0x4dec6f, {
      'image': {
        'url': _0x1f9b0f.image
      },
      'caption': _0x405437
    }, {
      'quoted': _0x50d810
    });
  } catch (_0x56927a) {
    _0x4be0af(_0x56927a);
  }
});
cmd({
  'pattern': "enhance",
  'react': '↗️',
  'alias': ['imgenhance', "quality", "qualityimage", 'tohd'],
  'desc': "desct",
  'category': 'convert',
  'use': ".enhance <reply low quality image>",
  'filename': __filename
}, async (_0x5be51d, _0x1700fc, _0x10c5cd, {
  from: _0x590d2c,
  l: _0x3121ee,
  prefix: _0x3dd789,
  quoted: _0x344906,
  body: _0x513a7b,
  isCmd: _0x5478c4,
  command: _0x4155aa,
  args: _0x15bdd5,
  q: _0x3832ba,
  isGroup: _0x8558b4,
  sender: _0x3acafe,
  senderNumber: _0x361695,
  botNumber2: _0x119021,
  botNumber: _0x3f950f,
  pushname: _0x356e97,
  isMe: _0x3ccbc1,
  isOwner: _0x55416c,
  groupMetadata: _0x4bec8b,
  groupName: _0x42fb82,
  participants: _0x182e9b,
  groupAdmins: _0x20c696,
  isBotAdmins: _0x4fb901,
  isAdmins: _0x49dc8f,
  reply: _0x559827
}) => {
  try {
    const _0x2d37cf = _0x10c5cd.quoted ? _0x10c5cd.quoted.type === "viewOnceMessage" : false;
    const _0x322722 = _0x10c5cd.quoted ? _0x10c5cd.quoted.type === "imageMessage" || (_0x2d37cf ? _0x10c5cd.quoted.msg.type === "imageMessage" : false) : false;
    if (_0x10c5cd.type === "imageMessage" || _0x322722) {
      const _0x13105a = require("file-type");
      var _0x16adf9 = getRandom('');
      let _0x49f3ff = _0x322722 ? await _0x10c5cd.quoted.download(_0x16adf9) : await _0x10c5cd.download(_0x16adf9);
      let _0x15a6e1 = await _0x13105a.fromBuffer(_0x49f3ff);
      await fs.promises.writeFile('./' + _0x15a6e1.ext, _0x49f3ff);
      img2url('./' + _0x15a6e1.ext).then(async _0x5f31bb => {
        await _0x5be51d.sendMessage(_0x590d2c, {
          'image': await getBuffer("https://vihangayt.me/tools/enhance?url=" + _0x5f31bb),
          'caption': config.FOOTER
        }, {
          'quoted': _0x1700fc
        });
      });
    } else {
      return _0x559827(imgmsg);
    }
  } catch (_0x18b329) {
    _0x559827(cantf);
    _0x3121ee(_0x18b329);
  }
});
cmd({
  'pattern': "ios",
  'alias': ["apple", 'applenews'],
  'react': '🍎',
  'desc': "tmsg",
  'category': 'search',
  'use': '.ios'
}, async (_0x44e6cb, _0x14af90, _0x573270, {
  from: _0x41165,
  l: _0x3f83be,
  quoted: _0x360789,
  body: _0x553a40,
  isCmd: _0x242165,
  command: _0x44bd28,
  args: _0x47ee62,
  q: _0x8cb89,
  isGroup: _0xc39bef,
  sender: _0x3487ef,
  senderNumber: _0x3b2fd6,
  botNumber2: _0x3515f1,
  botNumber: _0x49894e,
  pushname: _0x299969,
  isMe: _0x3d03a4,
  isOwner: _0x3de935,
  groupMetadata: _0x3c8bd6,
  groupName: _0x1b0e31,
  participants: _0x33754c,
  groupAdmins: _0xc55113,
  isBotAdmins: _0x209f7d,
  isAdmins: _0x281fa9,
  reply: _0x4677fa
}) => {
  try {
    const _0x16e630 = (await iosNews()).result[0x0];
    let _0x1216f7 = "*📃 ᴛɪᴛᴛʟᴇ :* " + _0x16e630.title + "\n*🕒 ᴛɪᴍᴇ:* " + _0x16e630.time + " \n*⛓️ ʟɪɴᴋ:* " + _0x16e630.link + "\n*📚 ᴅᴇsᴄ:* " + _0x16e630.desc + "\n";
    return await _0x44e6cb.sendMessage(_0x41165, {
      'image': {
        'url': _0x16e630.img
      },
      'caption': _0x1216f7
    }, {
      'quoted': _0x14af90
    });
  } catch (_0x31acb2) {
    _0x3f83be(_0x31acb2);
  }
});
cmd({
  'pattern': "naruto",
  'alias': ["textpro"],
  'react': '💫',
  'desc': "Text to Image Collection",
  'category': "logo",
  'use': ".naruto",
  'filename': __filename
}, async (_0x56ecfc, _0x454b9a, _0x23edb0, {
  from: _0x55f9c4,
  l: _0x1b6767,
  quoted: _0x50e4c3,
  body: _0x424d27,
  isCmd: _0x42e282,
  command: _0xcf0a72,
  args: _0xc9ca62,
  q: _0x42f044,
  isGroup: _0x4f2038,
  sender: _0x2b255a,
  senderNumber: _0x2233f,
  botNumber2: _0x17d3d6,
  botNumber: _0x1ac1fc,
  pushname: _0x10e896,
  isMe: _0x50c70d,
  isOwner: _0x5c51fd,
  groupMetadata: _0x17fff1,
  groupName: _0x134983,
  participants: _0x28f7af,
  groupAdmins: _0x2a9a98,
  isBotAdmins: _0x12478f,
  isAdmins: _0x323bd8,
  reply: _0x539251
}) => {
  try {
    if (!_0x42f044) {
      return await _0x539251("🚩 *Text not found ! Please type a text to Make Art*");
    }
    let _0x397773 = await mumaker.textpro("https://textpro.me/create-naruto-logo-style-text-effect-online-1125.html", _0x42f044);
    let _0x264ec4 = {
      'url': _0x397773.image
    };
    await _0x56ecfc.sendMessage(_0x55f9c4, {
      'image': {
        'url': _0x264ec4
      },
      'caption': "ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ\nᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴍᴀʟᴠɪɴ ᴋɪɴɢ™"
    }, {
      'quoted': _0x454b9a
    });
  } catch (_0x1e9a88) {
    _0x539251("🚩 *Not Found !*");
    console.log(_0x1e9a88);
  }
});
cmd({
  'pattern': 'rose',
  'alias': ['textpro2'],
  'react': '💫',
  'desc': "Text to Image Collection",
  'category': "logo",
  'use': ".rose",
  'filename': __filename
}, async (_0x1383aa, _0x127502, _0x38489e, {
  from: _0x2dd27f,
  l: _0x684663,
  quoted: _0x4a7a9a,
  body: _0x2d623b,
  isCmd: _0x3f3c85,
  command: _0x44d9bb,
  args: _0x349845,
  q: _0x196f5d,
  isGroup: _0x4f0768,
  sender: _0x2dcfee,
  senderNumber: _0x542b8e,
  botNumber2: _0x30ca19,
  botNumber: _0x2916cf,
  pushname: _0x39d25a,
  isMe: _0x236249,
  isOwner: _0x179b41,
  groupMetadata: _0x3e0ba9,
  groupName: _0x1f5c3f,
  participants: _0x58c0fa,
  groupAdmins: _0xcce7e5,
  isBotAdmins: _0x541aaf,
  isAdmins: _0xe91f4b,
  reply: _0xfc5865
}) => {
  try {
    if (!_0x196f5d) {
      return await _0xfc5865("🚩 *Text not found ! Please type a text to Make Art*");
    }
    let _0x47c6fd = await mumaker.textpro("https://textpro.me/create-online-elegant-3d-ruby-text-effect-1137.html", _0x196f5d);
    let _0x5e8329 = {
      'url': _0x47c6fd.image
    };
    await _0x1383aa.sendMessage(_0x2dd27f, {
      'image': {
        'url': _0x5e8329
      },
      'caption': "ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ\nᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴍᴀʟᴠɪɴ ᴋɪɴɢ"
    }, {
      'quoted': _0x127502
    });
  } catch (_0x492bc9) {
    _0xfc5865("🚩 *Not Found !*");
    console.log(_0x492bc9);
  }
});
cmd({
  'pattern': "cake",
  'alias': ['textpro3'],
  'react': '💫',
  'desc': "Text to Image Collection",
  'category': 'logo',
  'use': ".cake",
  'filename': __filename
}, async (_0x5048ac, _0x501e89, _0x4abb3d, {
  from: _0x3c39c8,
  l: _0x1a4c62,
  quoted: _0x4c62de,
  body: _0x54ba4c,
  isCmd: _0x2dfde4,
  command: _0xd92d7b,
  args: _0x152807,
  q: _0x1d1be9,
  isGroup: _0x436971,
  sender: _0x2f7b81,
  senderNumber: _0x2ce4aa,
  botNumber2: _0x548510,
  botNumber: _0x442034,
  pushname: _0x47bfd9,
  isMe: _0x50b2bd,
  isOwner: _0x182d9d,
  groupMetadata: _0x4f01ad,
  groupName: _0x39912c,
  participants: _0x15e8a7,
  groupAdmins: _0x2e358f,
  isBotAdmins: _0xa4dee2,
  isAdmins: _0x34564a,
  reply: _0x32593b
}) => {
  try {
    if (!_0x1d1be9) {
      return await _0x32593b("🚩 *Text not found ! Please type a text to Make Art*");
    }
    let _0x4e21a5 = await mumaker.textpro("https://textpro.me/create-3d-chocolate-cake-text-effect-online-1135.html", _0x1d1be9);
    let _0x1df26a = {
      'url': _0x4e21a5.image
    };
    await _0x5048ac.sendMessage(_0x3c39c8, {
      'image': {
        'url': _0x1df26a
      },
      'caption': "ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ\nᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴍᴀʟᴠɪɴ ᴋᴋɴɢ™"
    }, {
      'quoted': _0x501e89
    });
  } catch (_0xa646c6) {
    _0x32593b("🚩 *Not Found !*");
    console.log(_0xa646c6);
  }
});
cmd({
  'pattern': "pokemon",
  'alias': ["textpro4"],
  'react': '💫',
  'desc': "Text to Image Collection",
  'category': "logo",
  'use': ".pokemon",
  'filename': __filename
}, async (_0x16ef28, _0x2573e0, _0x58b106, {
  from: _0x285347,
  l: _0x412747,
  quoted: _0x3806e6,
  body: _0x39414b,
  isCmd: _0x2b2b17,
  command: _0x2c6488,
  args: _0x57ce9c,
  q: _0x253d7d,
  isGroup: _0x489dcf,
  sender: _0x3923fe,
  senderNumber: _0x10e71b,
  botNumber2: _0x52b40f,
  botNumber: _0x41bd16,
  pushname: _0x4142f9,
  isMe: _0x1b607c,
  isOwner: _0x5f13a7,
  groupMetadata: _0x246b98,
  groupName: _0x43af49,
  participants: _0x483b93,
  groupAdmins: _0x35037e,
  isBotAdmins: _0x5975c3,
  isAdmins: _0x1e945e,
  reply: _0x4dbe26
}) => {
  try {
    if (!_0x253d7d) {
      return await _0x4dbe26("🚩 *Text not found ! Please type a text to Make Art*");
    }
    let _0x4b36ca = await mumaker.textpro("https://textpro.me/create-pokemon-logo-style-text-effect-online-1134.html", _0x253d7d);
    let _0x489abb = {
      'url': _0x4b36ca.image
    };
    await _0x16ef28.sendMessage(_0x285347, {
      'image': {
        'url': _0x489abb
      },
      'caption': "*ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ\nᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴍᴀʟᴠɪɴ ᴋɪɴɢ*"
    }, {
      'quoted': _0x2573e0
    });
  } catch (_0x3486e5) {
    _0x4dbe26("🚩 *Not Found !*");
    console.log(_0x3486e5);
  }
});
cmd({
  'pattern': "liquid",
  'alias': ["textpro5"],
  'react': '💫',
  'desc': "Text to Image Collection",
  'category': "logo",
  'use': ".liquid",
  'filename': __filename
}, async (_0x2dfe6d, _0x208530, _0x16668f, {
  from: _0x418994,
  l: _0x368e84,
  quoted: _0x5a41d1,
  body: _0xbb35e5,
  isCmd: _0x159cc6,
  command: _0x134417,
  args: _0x10a2ce,
  q: _0x4d4cd3,
  isGroup: _0xacfc98,
  sender: _0x13a959,
  senderNumber: _0x531281,
  botNumber2: _0x4e7f77,
  botNumber: _0x4e529f,
  pushname: _0x435512,
  isMe: _0x1f8c8d,
  isOwner: _0x1eced5,
  groupMetadata: _0x265283,
  groupName: _0x45df9d,
  participants: _0x2f6632,
  groupAdmins: _0x4bab5e,
  isBotAdmins: _0x562db7,
  isAdmins: _0x2c91ce,
  reply: _0x265bb3
}) => {
  try {
    if (!_0x4d4cd3) {
      return await _0x265bb3("🚩 *Text not found ! Please type a text to Make Art*");
    }
    let _0x396f68 = await mumaker.textpro("https://textpro.me/create-3d-liquid-metal-text-effect-1112.html", _0x4d4cd3);
    let _0x1139c9 = {
      'url': _0x396f68.image
    };
    await _0x2dfe6d.sendMessage(_0x418994, {
      'image': {
        'url': _0x1139c9
      },
      'caption': "*ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ\nᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴍᴀʟᴠɪɴ ᴋɪɴɢ™*"
    }, {
      'quoted': _0x208530
    });
  } catch (_0x7f681f) {
    _0x265bb3("🚩 *Not Found !*");
    console.log(_0x7f681f);
  }
});
cmd({
  'pattern': "rusty",
  'alias': ["textpro6"],
  'react': '💫',
  'desc': "Text to Image Collection",
  'category': "logo",
  'use': '.rusty',
  'filename': __filename
}, async (_0x31f0b5, _0x508370, _0x53370c, {
  from: _0x1d78eb,
  l: _0x59af13,
  quoted: _0xb4162e,
  body: _0x5018da,
  isCmd: _0x2057af,
  command: _0x484035,
  args: _0x4e321b,
  q: _0x2aec83,
  isGroup: _0x1b299f,
  sender: _0x2e91a4,
  senderNumber: _0x4cdd80,
  botNumber2: _0x1ad3c7,
  botNumber: _0x239950,
  pushname: _0x1a1281,
  isMe: _0x52e07c,
  isOwner: _0x27eb21,
  groupMetadata: _0x4c62fe,
  groupName: _0x2b54de,
  participants: _0x1f9b62,
  groupAdmins: _0x4f7abd,
  isBotAdmins: _0x30f44f,
  isAdmins: _0x3558b7,
  reply: _0x3ccaab
}) => {
  try {
    if (!_0x2aec83) {
      return await _0x3ccaab("🚩 *Text not found ! Please type a text to Make Art*");
    }
    let _0x5a8db4 = await mumaker.textpro("https://textpro.me/online-3d-rusty-metal-text-effect-maker-1133.html", _0x2aec83);
    let _0xbab2b0 = {
      'url': _0x5a8db4.image
    };
    await _0x31f0b5.sendMessage(_0x1d78eb, {
      'image': {
        'url': _0xbab2b0
      },
      'caption': "ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ\nᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴋɪɴɢ ᴍᴀʟᴠɪɴ™"
    }, {
      'quoted': _0x508370
    });
  } catch (_0x2f10ab) {
    _0x3ccaab("🚩 *Not Found !*");
    console.log(_0x2f10ab);
  }
});
cmd({
  'pattern': "neon",
  'alias': ['textpro7'],
  'react': '💫',
  'desc': "Text to Image Collection",
  'category': 'logo',
  'use': ".cake",
  'filename': __filename
}, async (_0x51a623, _0x1083fd, _0xc2b4ac, {
  from: _0x16e35d,
  l: _0x1e39fe,
  quoted: _0xa9c207,
  body: _0xac3725,
  isCmd: _0x3e0ed3,
  command: _0xb81464,
  args: _0x2144fe,
  q: _0x4fb141,
  isGroup: _0x21925f,
  sender: _0x4a19bd,
  senderNumber: _0x1eff8b,
  botNumber2: _0x4d41b0,
  botNumber: _0x57983e,
  pushname: _0x27b45c,
  isMe: _0x3a5ed2,
  isOwner: _0x1205e6,
  groupMetadata: _0x5a40f3,
  groupName: _0x3ca0fb,
  participants: _0x17ed66,
  groupAdmins: _0x25bf5d,
  isBotAdmins: _0x22527f,
  isAdmins: _0x3a4c5b,
  reply: _0x4788a1
}) => {
  try {
    if (!_0x4fb141) {
      return await _0x4788a1("🚩 *Text not found ! Please type a text to Make Art*");
    }
    let _0x38414d = await mumaker.textpro("https://textpr/neon-light-style-3d-text-effect-online-1132.html", _0x4fb141);
    let _0x152a17 = {
      'url': _0x38414d.image
    };
    await _0x51a623.sendMessage(_0x16e35d, {
      'image': {
        'url': _0x152a17
      },
      'caption': "ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ\nᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴋɪɴɢ ᴍᴀʟᴠɪɴ™"
    }, {
      'quoted': _0x1083fd
    });
  } catch (_0x3c021f) {
    _0x4788a1("🚩 *Not Found !*");
    console.log(_0x3c021f);
  }
});
cmd({
  'pattern': "pcartoon",
  'alias': ["textpro8"],
  'react': '💫',
  'desc': "Text to Image Collection",
  'category': "logo",
  'use': '.pcartoon',
  'filename': __filename
}, async (_0x275e01, _0x45ffc8, _0x362fff, {
  from: _0x3c60d7,
  l: _0xadecad,
  quoted: _0x37fd1d,
  body: _0x3420e8,
  isCmd: _0x29c57d,
  command: _0x1745d5,
  args: _0x1ad7b9,
  q: _0x33902b,
  isGroup: _0x568fbd,
  sender: _0x291502,
  senderNumber: _0x34fa5b,
  botNumber2: _0x1223df,
  botNumber: _0x1adf3d,
  pushname: _0x36ab98,
  isMe: _0x3a4da2,
  isOwner: _0x1b86bc,
  groupMetadata: _0x154029,
  groupName: _0x5bbbc9,
  participants: _0x1b4005,
  groupAdmins: _0x1e6911,
  isBotAdmins: _0x2837bb,
  isAdmins: _0x5d5dbf,
  reply: _0x2db287
}) => {
  try {
    if (!_0x33902b) {
      return await _0x2db287("🚩 *Text not found ! Please type a text to Make Art*");
    }
    let _0x213717 = await mumaker.textpro("https://textpro.me/create-pink-cute-3d-cartoon-text-effect-online-1131.html", _0x33902b);
    let _0x1bf053 = {
      'url': _0x213717.image
    };
    await _0x275e01.sendMessage(_0x3c60d7, {
      'image': {
        'url': _0x1bf053
      },
      'caption': "ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ\nᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴋɪɴɢ™"
    }, {
      'quoted': _0x45ffc8
    });
  } catch (_0x5a4b83) {
    _0x2db287("🚩 *Not Found !*");
    console.log(_0x5a4b83);
  }
});
cmd({
  'pattern': "dragon",
  'alias': ['textpro9'],
  'react': '💫',
  'desc': "Text to Image Collection",
  'category': "logo",
  'use': ".dragon",
  'filename': __filename
}, async (_0x2a2174, _0x26af1b, _0x2ea79d, {
  from: _0x3dba2e,
  l: _0x3e22ed,
  quoted: _0x572ab5,
  body: _0x3ae108,
  isCmd: _0x38ab1f,
  command: _0x2a98bc,
  args: _0x2500a0,
  q: _0x346e87,
  isGroup: _0x1fe95c,
  sender: _0x9e2937,
  senderNumber: _0x2288d2,
  botNumber2: _0xda78e6,
  botNumber: _0x5430df,
  pushname: _0x35fdb5,
  isMe: _0x1b7349,
  isOwner: _0x54d880,
  groupMetadata: _0x2fcdeb,
  groupName: _0x1f48af,
  participants: _0x19fa03,
  groupAdmins: _0x54b510,
  isBotAdmins: _0x53fafa,
  isAdmins: _0x1b4d16,
  reply: _0x4acece
}) => {
  try {
    if (!_0x346e87) {
      return await _0x4acece("🚩 *Text not found ! Please type a text to Make Art*");
    }
    let _0x5d7346 = await mumaker.textpro("https://textpro.me/create-3d-dragon-scale-text-effect-online-1127.html", _0x346e87);
    let _0x50039b = {
      'url': _0x5d7346.image
    };
    await _0x2a2174.sendMessage(_0x3dba2e, {
      'image': {
        'url': _0x50039b
      },
      'caption': "ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ\nᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴋɪɴɢ™"
    }, {
      'quoted': _0x26af1b
    });
  } catch (_0x306f2a) {
    _0x4acece("🚩 *Not Found !*");
    console.log(_0x306f2a);
  }
});
cmd({
  'pattern': 'sunset',
  'alias': ['textpro10'],
  'react': '💫',
  'desc': "Text to Image Collection",
  'category': "logo",
  'use': ".sunset",
  'filename': __filename
}, async (_0x99ad77, _0x2b631a, _0x3aca9e, {
  from: _0x27bf52,
  l: _0x436a9a,
  quoted: _0x4e5079,
  body: _0x42dae2,
  isCmd: _0x59e917,
  command: _0x232c24,
  args: _0x5c5efb,
  q: _0x551446,
  isGroup: _0xdbb9ef,
  sender: _0x243e91,
  senderNumber: _0x44ba2e,
  botNumber2: _0x1d7c8d,
  botNumber: _0x1302d3,
  pushname: _0x1a9cc7,
  isMe: _0x4608e9,
  isOwner: _0x14c5cb,
  groupMetadata: _0x6c3223,
  groupName: _0x2dc415,
  participants: _0x3866ae,
  groupAdmins: _0x183403,
  isBotAdmins: _0x3f413e,
  isAdmins: _0x5985b3,
  reply: _0x2e70b3
}) => {
  try {
    if (!_0x551446) {
      return await _0x2e70b3("🚩 *Text not found ! Please type a text to Make Art*");
    }
    let _0x34bc09 = await mumaker.textpro("https://textpro.me/create-sunset-light-text-effects-online-for-free-1124.html", _0x551446);
    let _0x3e6259 = {
      'url': _0x34bc09.image
    };
    await _0x99ad77.sendMessage(_0x27bf52, {
      'image': {
        'url': _0x3e6259
      },
      'caption': "ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ\nᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴍᴀʟᴠɪɴ ᴋᴋɴɢ™"
    }, {
      'quoted': _0x2b631a
    });
  } catch (_0x513faf) {
    _0x2e70b3("🚩 *Not Found !*");
    console.log(_0x513faf);
  }
});
cmd({
  'pattern': "3dcartoon",
  'alias': ["textpro11"],
  'react': '💫',
  'desc': "Text to Image Collection",
  'category': "logo",
  'use': ".3dcartoon",
  'filename': __filename
}, async (_0x59edd7, _0x42b032, _0x4f5269, {
  from: _0x347c3a,
  l: _0x36980a,
  quoted: _0x38724c,
  body: _0x26fd1b,
  isCmd: _0x389d3b,
  command: _0x5bab4e,
  args: _0x1e784a,
  q: _0x5f52e9,
  isGroup: _0x5f0698,
  sender: _0x267388,
  senderNumber: _0x18104d,
  botNumber2: _0x14d1ff,
  botNumber: _0x5bc3e0,
  pushname: _0x4a80ea,
  isMe: _0x1f321,
  isOwner: _0x256a8c,
  groupMetadata: _0x20fac1,
  groupName: _0x5cf136,
  participants: _0x1f8132,
  groupAdmins: _0xd9972e,
  isBotAdmins: _0x44ab28,
  isAdmins: _0x337f0d,
  reply: _0x2228f5
}) => {
  try {
    if (!_0x5f52e9) {
      return await _0x2228f5("🚩 *Text not found ! Please type a text to Make Art*");
    }
    let _0x1242bb = await mumaker.textpro('https://textpro.me/create-3d-cartoon-text-effect-online-1120.html', _0x5f52e9);
    let _0x30b8f5 = {
      'url': _0x1242bb.image
    };
    await _0x59edd7.sendMessage(_0x347c3a, {
      'image': {
        'url': _0x30b8f5
      },
      'caption': "ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ\nᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴍᴀʟᴠɪɴ ᴋɪɴɢ™"
    }, {
      'quoted': _0x42b032
    });
  } catch (_0x1f0f86) {
    _0x2228f5("🚩 *Not Found !*");
    console.log(_0x1f0f86);
  }
});
cmd({
  'pattern': "grunge",
  'alias': ["textpro12"],
  'react': '💫',
  'desc': "Text to Image Collection",
  'category': "logo",
  'use': ".grunge",
  'filename': __filename
}, async (_0x3f88e4, _0x45132c, _0xba873f, {
  from: _0x164d06,
  l: _0x38b0ba,
  quoted: _0x53fc4a,
  body: _0x49720e,
  isCmd: _0x3cc2f3,
  command: _0x4c549b,
  args: _0x554906,
  q: _0x422751,
  isGroup: _0x4779df,
  sender: _0x464f0c,
  senderNumber: _0x45a8e6,
  botNumber2: _0x20d9f2,
  botNumber: _0x4c4a1e,
  pushname: _0x239610,
  isMe: _0x21c71c,
  isOwner: _0x2e4c1b,
  groupMetadata: _0x309a74,
  groupName: _0x2d7a7e,
  participants: _0x2853ee,
  groupAdmins: _0x2d2844,
  isBotAdmins: _0x243c6e,
  isAdmins: _0x132b3a,
  reply: _0x1b4912
}) => {
  try {
    if (!_0x422751) {
      return await _0x1b4912("🚩 *Text not found ! Please type a text to Make Art*");
    }
    let _0x57189e = await mumaker.textpro("https://textpro.me/grunge-metallic-3d-text-effect-online-1115.html", _0x422751);
    let _0x45c3ef = {
      'url': _0x57189e.image
    };
    await _0x3f88e4.sendMessage(_0x164d06, {
      'image': {
        'url': _0x45c3ef
      },
      'caption': "ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ\nᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴍᴀʟᴠɪɴ ᴋɪɴɢ™"
    }, {
      'quoted': _0x45132c
    });
  } catch (_0x4ec9b5) {
    _0x1b4912("🚩 *Not Found !*");
    console.log(_0x4ec9b5);
  }
});
cmd({
  'pattern': "multicolor",
  'alias': ["textpro13"],
  'react': '💫',
  'desc': "Text to Image Collection",
  'category': "logo",
  'use': '.multicolour',
  'filename': __filename
}, async (_0x4d8cc5, _0xe93cad, _0x311333, {
  from: _0x2c6549,
  l: _0xd9112,
  quoted: _0x6789e5,
  body: _0x2c718f,
  isCmd: _0x594de3,
  command: _0x46d794,
  args: _0x41cf18,
  q: _0x2701f,
  isGroup: _0x2b20fa,
  sender: _0x369210,
  senderNumber: _0x355e4e,
  botNumber2: _0x1f8a49,
  botNumber: _0x2cf9ef,
  pushname: _0x572fa8,
  isMe: _0x5020e3,
  isOwner: _0x4b00f9,
  groupMetadata: _0x4fc333,
  groupName: _0x14f71a,
  participants: _0x744800,
  groupAdmins: _0x16d2de,
  isBotAdmins: _0x4ae016,
  isAdmins: _0x25bfe9,
  reply: _0x468144
}) => {
  try {
    if (!_0x2701f) {
      return await _0x468144("🚩 *Text not found ! Please type a text to Make Art*");
    }
    let _0x2eaf84 = await mumaker.textpro('https://textpro.me/create-3d-multicolor-paint-text-effect-online-1114.html', _0x2701f);
    let _0x2307a3 = {
      'url': _0x2eaf84.image
    };
    await _0x4d8cc5.sendMessage(_0x2c6549, {
      'image': {
        'url': _0x2307a3
      },
      'caption': "ᴍᴀʟᴠɪɴ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ\nᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴋɪɴɢ™"
    }, {
      'quoted': _0xe93cad
    });
  } catch (_0x277b7e) {
    _0x468144("🚩 *Not Found !*");
    console.log(_0x277b7e);
  }
});
cmd({
  'pattern': "3dmetalic",
  'alias': ["textpro14"],
  'react': '💫',
  'desc': "Text to Image Collection",
  'category': "logo",
  'use': '.3dnetalic',
  'filename': __filename
}, async (_0x47bc5b, _0x51f11d, _0x41857f, {
  from: _0x596079,
  l: _0x52b97a,
  quoted: _0xe289c8,
  body: _0x3cab7b,
  isCmd: _0xf9cb80,
  command: _0x543677,
  args: _0x144f15,
  q: _0x1d6295,
  isGroup: _0x3480d3,
  sender: _0x55020d,
  senderNumber: _0x379c65,
  botNumber2: _0x1cebab,
  botNumber: _0x14ab9f,
  pushname: _0x28eee4,
  isMe: _0x2e3cb8,
  isOwner: _0x229e4d,
  groupMetadata: _0x5918de,
  groupName: _0x15532d,
  participants: _0x425c98,
  groupAdmins: _0x537bd7,
  isBotAdmins: _0x127747,
  isAdmins: _0xe85523,
  reply: _0x2eeac2
}) => {
  try {
    if (!_0x1d6295) {
      return await _0x2eeac2("🚩 *Text not found ! Please type a text to Make Art*");
    }
    let _0x680899 = await mumaker.textpro(res, _0x1d6295);
    let _0x570ae3 = {
      'url': _0x680899.image
    };
    await _0x47bc5b.sendMessage(_0x596079, {
      'image': {
        'url': _0x570ae3
      },
      'caption': "ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ\nᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴍᴀʟᴠɪɴ ᴋɪɴɢ™"
    }, {
      'quoted': _0x51f11d
    });
  } catch (_0x349455) {
    _0x2eeac2("🚩 *Not Found !*");
    console.log(_0x349455);
  }
});
cmd({
  'pattern': "party",
  'alias': ["textpro15"],
  'react': '💫',
  'desc': "Text to Image Collection",
  'category': 'logo',
  'use': ".party",
  'filename': __filename
}, async (_0x2ce39f, _0x352e64, _0x3f4f6f, {
  from: _0x45796e,
  l: _0x597990,
  quoted: _0xea9881,
  body: _0x26791a,
  isCmd: _0x24cdc8,
  command: _0x433f12,
  args: _0x176f08,
  q: _0x3ac3c5,
  isGroup: _0x38221a,
  sender: _0x12a0fb,
  senderNumber: _0x58878b,
  botNumber2: _0x3ba731,
  botNumber: _0x10ea97,
  pushname: _0x1edef5,
  isMe: _0x2b9ff5,
  isOwner: _0x4202e6,
  groupMetadata: _0x112d23,
  groupName: _0x4e8627,
  participants: _0x46b3ae,
  groupAdmins: _0x59e20f,
  isBotAdmins: _0x4bedc5,
  isAdmins: _0x16b929,
  reply: _0x281e58
}) => {
  try {
    if (!_0x3ac3c5) {
      return await _0x281e58("🚩 *Text not found ! Please type a text to Make Art*");
    }
    let _0xa924ad = await mumaker.textpro("https://textpro.me/party-text-effect-with-the-night-event-theme-1105.html", _0x3ac3c5);
    let _0x146df7 = {
      'url': _0xa924ad.image
    };
    await _0x2ce39f.sendMessage(_0x45796e, {
      'image': {
        'url': _0x146df7
      },
      'caption': "ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ\nᴄʀᴇᴀᴛᴇᴅ ʙʏ • king™"
    }, {
      'quoted': _0x352e64
    });
  } catch (_0x4032bc) {
    _0x281e58("🚩 *Not Found !*");
    console.log(_0x4032bc);
  }
});
cmd({
  'pattern': "logo",
  'alias': ["logo6", "ephoto360", "ephoto"],
  'desc': "desc",
  'category': 'logo',
  'use': ".logo Malvin",
  'filename': __filename
}, async (_0x4eaa67, _0x183e61, _0x51f00a, {
  from: _0x4d2b8c,
  l: _0x52900,
  prefix: _0x4f86bb,
  quoted: _0x947c70,
  body: _0x48ef35,
  isCmd: _0x3c79ac,
  command: _0x3e6f38,
  args: _0x219d0a,
  q: _0x4a5571,
  isGroup: _0x4dacd1,
  sender: _0x31574c,
  senderNumber: _0x526db3,
  botNumber2: _0x58ba6e,
  botNumber: _0x52511b,
  pushname: _0x1d91c7,
  isMe: _0x9382bd,
  isOwner: _0x5794e5,
  groupMetadata: _0x443eb1,
  groupName: _0x589af4,
  participants: _0x4d5fb6,
  groupAdmins: _0x36eaad,
  isBotAdmins: _0x1548eb,
  isAdmins: _0x26317e,
  reply: _0x369204
}) => {
  try {
    if (!_0x4a5571) {
      return await _0x369204(imgmsg);
    }
    const _0x3b37a2 = [{
      'title': "Result from ephoto360. 📲",
      'rows': [{
        'title': "Blackpink",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + 'https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html'
      }, {
        'title': "Dragon ball",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + 'https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html'
      }, {
        'title': "Naruto shippuden",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html"
      }, {
        'title': "Sunset light",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + 'https://en.ephoto360.com/create-sunset-light-text-effects-online-807.html'
      }, {
        'title': "beautiful 3d foil baloon",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/beautiful-3d-foil-balloon-effects-for-holidays-and-birthday-803.html"
      }, {
        'title': "Digital glitch",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html"
      }, {
        'title': "Write text on wet glass",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html"
      }, {
        'title': "Glossy silver 3D text effect",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html"
      }, {
        'title': "Colorful neon light text effect",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html"
      }, {
        'title': "Thor logo style",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + 'https://en.ephoto360.com/create-thor-logo-style-text-effects-online-for-free-796.html'
      }, {
        'title': "Typography text effect on pavement",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html"
      }, {
        'title': "Impressive neon Glitch text effect",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
      }, {
        'title': "Handwritten text on foggy glass",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html"
      }, {
        'title': "Impressive decorative 3D metal text",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + 'https://en.ephoto360.com/impressive-decorative-3d-metal-text-effect-798.html'
      }, {
        'title': "Frozen Christmas text",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/create-a-frozen-christmas-text-effect-online-792.html"
      }, {
        'title': "Hacker avatar",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html"
      }, {
        'title': "3D colorful paint text",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html"
      }, {
        'title': "Women's Day",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/create-a-greeting-video-card-for-international-women-s-day-on-march-8-784.html"
      }, {
        'title': "Pixel Glitch",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
      }, {
        'title': "Americal flag",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html"
      }, {
        'title': "Erasing",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html"
      }, {
        'title': "Multicolored signature attachment arrow",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/create-multicolored-signature-attachment-arrow-effect-714.html"
      }, {
        'title': "Blackpink 02",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html"
      }, {
        'title': "Blackpink neon",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + 'https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html'
      }, {
        'title': "Star Wars character mascot",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + 'https://en.ephoto360.com/create-a-star-wars-character-mascot-logo-online-707.html'
      }, {
        'title': "Glowing text",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/create-glowing-text-effects-online-706.html"
      }, {
        'title': "Funny animations of a traveling bear",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + 'https://en.ephoto360.com/create-funny-animations-of-a-traveling-bear-701.html'
      }, {
        'title': "Beach 3D",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/create-3d-text-effect-on-the-beach-online-688.html"
      }, {
        'title': "Cute girl gamer mascot",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/create-cute-girl-gamer-mascot-logo-online-687.html"
      }, {
        'title': "3D underwater",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
      }, {
        'title': "Bear logo",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/free-bear-logo-maker-online-673.html"
      }, {
        'title': "Football team logo",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + 'https://en.ephoto360.com/create-football-team-logo-online-free-671.html'
      }, {
        'title': "Cartoon style graffiti",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html"
      }, {
        'title': "Multicolor 3D paper",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
      }, {
        'title': "Watercolor text",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html"
      }, {
        'title': "Light text effect futuristic technology",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + 'https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html'
      }, {
        'title': "Write text effect clouds in the sky",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html"
      }, {
        'title': "PUBG logo maker cute character",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/pubg-logo-maker-cute-character-online-617.html"
      }, {
        'title': "PUBG Mascot Logo Maker for an eSports",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + 'https://en.ephoto360.com/pubg-mascot-logo-maker-for-an-esports-team-612.html'
      }, {
        'title': "Black Pink 03",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/create-blackpink-logo-online-free-607.html"
      }, {
        'title': "Funny warning sign",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + 'https://en.ephoto360.com/create-funny-warning-sign-602.html'
      }, {
        'title': "3D gradient text",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html"
      }, {
        'title': "Write in sand summer beach",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html"
      }, {
        'title': "Luxury gold text",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html"
      }, {
        'title': "3D light",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/create-realistic-vintage-3d-light-bulb-608.html"
      }, {
        'title': "Multicolored neon light signatures",
        'rowId': _0x4f86bb + "dlogo6 " + _0x4a5571 + '+' + "https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html"
      }]
    }];
    const _0x3246ec = {
      'text': "*╭─「ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ」*\n*│╭─────────────────────────╮*\n*│ ✘🎭  EPHOTO360  LOGO  🎭✘│*\n*│──────────────────────────╯*\n\n*🗃️ ᴀᴅᴅ ɴᴀᴍᴇ:* " + _0x4a5571,
      'image': {
        'url': config.LOGO
      },
      'footer': config.FOOTER,
      'title': "Result from ephoto360. 📲",
      'buttonText': "⦁⦂⦁━┉━┉━┉━┉━┉━┉━┉━❉\n◊\n◊ ֻ❉  ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ɴᴜᴍʙᴇʀ༆֓\n◊\n⦁⦂⦁━┉━┉━┉━┉━┉━┉━┉━❉",
      'sections': _0x3b37a2
    };
    await _0x4eaa67.listMessage(_0x4d2b8c, _0x3246ec, _0x183e61);
  } catch (_0x414ef6) {
    _0x369204(errt);
    _0x52900(_0x414ef6);
  }
});
cmd({
  'pattern': "banner",
  'alias': ["ytbanner", 'cover', 'channelbanner'],
  'desc': 'desc2',
  'category': "logo",
  'use': ".banner malvinkingtech+yt",
  'filename': __filename
}, async (_0x2b9d05, _0x20d1ad, _0x24b405, {
  from: _0x5f031b,
  l: _0x243f59,
  quoted: _0x7da7e4,
  body: _0x4e909f,
  isCmd: _0x2e2cd8,
  command: _0x201565,
  args: _0x1005a5,
  q: _0x20e9d4,
  isGroup: _0xb45d06,
  sender: _0x545e82,
  senderNumber: _0x3fbde6,
  botNumber2: _0x27f69f,
  botNumber: _0x326afb,
  pushname: _0x366c08,
  isMe: _0x576de8,
  isOwner: _0x64389a,
  groupMetadata: _0xf4a7c,
  groupName: _0x5eaf8f,
  participants: _0x36f7f9,
  groupAdmins: _0x25d346,
  isBotAdmins: _0x3fc72b,
  isAdmins: _0x4c7c72,
  reply: _0xc32926
}) => {
  try {
    await _0x2b9d05.sendMessage(_0x5f031b, {
      'react': {
        'text': '🎆',
        'key': _0x20d1ad.key
      }
    });
    if (!_0x20e9d4.includes('+')) {
      return await _0xc32926(imgmsg2);
    }
    let [_0x35f565, _0x2f2498] = _0x20e9d4.split('+');
    new Maker().Ephoto360("https://en.ephoto360.com/create-overwatch-2-banner-for-the-online-youtube-channel-782.html", ['' + _0x35f565, '' + _0x2f2498]).then(async _0x36a6e0 => {
      await _0x2b9d05.sendMessage(_0x5f031b, {
        'image': await getBuffer(_0x36a6e0.imageUrl),
        'caption': config.FOOTER
      }, {
        'quoted': _0x20d1ad
      });
      await _0x2b9d05.sendMessage(_0x5f031b, {
        'react': {
          'text': '✔',
          'key': _0x20d1ad.key
        }
      });
    });
  } catch (_0x30b622) {
    _0xc32926(errt);
    _0x243f59(_0x30b622);
  }
});
cmd({
  'pattern': "banner2",
  'alias': ["ytbanner2", "cover2", "channelbanner2"],
  'desc': "desc2",
  'category': "logo",
  'use': ".banner2 ᴢɪᴍʙᴀʙᴡᴇ+yt",
  'filename': __filename
}, async (_0x3d47e4, _0x1e6cf1, _0x3c38c6, {
  from: _0x4887f6,
  l: _0x34bc2a,
  quoted: _0x314e53,
  body: _0x1a0c4d,
  isCmd: _0x18a937,
  command: _0x41146c,
  args: _0xbef9ee,
  q: _0x394eb6,
  isGroup: _0x44f8c2,
  sender: _0x18f2d1,
  senderNumber: _0x3fac55,
  botNumber2: _0x964da9,
  botNumber: _0x40e204,
  pushname: _0x47b599,
  isMe: _0x47a0b6,
  isOwner: _0x254b8e,
  groupMetadata: _0x12d638,
  groupName: _0x4404e9,
  participants: _0x58e6be,
  groupAdmins: _0x26c4eb,
  isBotAdmins: _0x36e0d2,
  isAdmins: _0x23b07d,
  reply: _0x2f9111
}) => {
  try {
    await _0x3d47e4.sendMessage(_0x4887f6, {
      'react': {
        'text': '🎆',
        'key': _0x1e6cf1.key
      }
    });
    if (!_0x394eb6.includes('+')) {
      return await _0x2f9111(imgmsg3);
    }
    let [_0x3f8dd2, _0x311f50] = _0x394eb6.split('+');
    new Maker().Ephoto360("https://en.ephoto360.com/make-your-own-free-fire-youtube-banner-online-free-562.html", ['' + _0x3f8dd2, '' + _0x311f50]).then(async _0x4e6745 => {
      await _0x3d47e4.sendMessage(_0x4887f6, {
        'image': await getBuffer(_0x4e6745.imageUrl),
        'caption': config.FOOTER
      }, {
        'quoted': _0x1e6cf1
      });
      await _0x3d47e4.sendMessage(_0x4887f6, {
        'react': {
          'text': '✔',
          'key': _0x1e6cf1.key
        }
      });
    });
  } catch (_0x37fe48) {
    _0x2f9111(errt);
    _0x34bc2a(_0x37fe48);
  }
});
cmd({
  'pattern': 'banner3',
  'alias': ['ytbanner3', "cover3", 'channelbanner3'],
  'desc': "desc2",
  'category': "logo",
  'use': ".banner3 ᴢɪᴍʙᴀʙᴡᴇ+yt",
  'filename': __filename
}, async (_0x491dc0, _0x24b3f0, _0x4450ce, {
  from: _0x251436,
  l: _0x273526,
  quoted: _0x37af8e,
  body: _0x3e1b9d,
  isCmd: _0xa64bee,
  command: _0x421ec9,
  args: _0x3f5a38,
  q: _0x2589b2,
  isGroup: _0x208ef4,
  sender: _0x2c98f4,
  senderNumber: _0x9d55f1,
  botNumber2: _0x3a255a,
  botNumber: _0x1371c3,
  pushname: _0x529f,
  isMe: _0x505e64,
  isOwner: _0x151ad4,
  groupMetadata: _0x578acc,
  groupName: _0x44ff3a,
  participants: _0x2f2fdd,
  groupAdmins: _0x2c16a0,
  isBotAdmins: _0xc3d782,
  isAdmins: _0xce4dc3,
  reply: _0x400012
}) => {
  try {
    await _0x491dc0.sendMessage(_0x251436, {
      'react': {
        'text': '🎆',
        'key': _0x24b3f0.key
      }
    });
    if (!_0x2589b2.includes('+')) {
      return await _0x400012(imgmsg4);
    }
    let [_0xabbb4, _0x4617ad] = _0x2589b2.split('+');
    new Maker().Ephoto360("https://en.ephoto360.com/create-a-youtube-banner-game-of-pubg-cool-402.html", ['' + _0xabbb4, '' + _0x4617ad]).then(async _0x317580 => {
      await _0x491dc0.sendMessage(_0x251436, {
        'image': await getBuffer(_0x317580.imageUrl),
        'caption': config.FOOTER
      }, {
        'quoted': _0x24b3f0
      });
      await _0x491dc0.sendMessage(_0x251436, {
        'react': {
          'text': '✔',
          'key': _0x24b3f0.key
        }
      });
    });
  } catch (_0x1ac349) {
    _0x400012(errt);
    _0x273526(_0x1ac349);
  }
});
cmd({
  'pattern': "banner4",
  'alias': ["ytbanner4", "cover4", "channelbanner4"],
  'desc': "desc2",
  'category': "logo",
  'use': ".banner4 malvin+yt",
  'filename': __filename
}, async (_0x41b1a6, _0xcf9daa, _0x5ad526, {
  from: _0x344520,
  l: _0x2abeb3,
  quoted: _0x281c0c,
  body: _0x51fd14,
  isCmd: _0x2408d3,
  command: _0x3dbeb4,
  args: _0x373acf,
  q: _0x16ed4f,
  isGroup: _0x54740f,
  sender: _0x3451ab,
  senderNumber: _0x4270cd,
  botNumber2: _0x461ede,
  botNumber: _0x5a13c6,
  pushname: _0x30ac06,
  isMe: _0x3ff237,
  isOwner: _0x452a0f,
  groupMetadata: _0x12fa85,
  groupName: _0x44d90c,
  participants: _0x5045d8,
  groupAdmins: _0x37d2fc,
  isBotAdmins: _0x1fd0a2,
  isAdmins: _0x43af76,
  reply: _0x5376d0
}) => {
  try {
    await _0x41b1a6.sendMessage(_0x344520, {
      'react': {
        'text': '🎆',
        'key': _0xcf9daa.key
      }
    });
    if (!_0x16ed4f.includes('+')) {
      return await _0x5376d0(imgmsg5);
    }
    let [_0x536f6b, _0x55d16e] = _0x16ed4f.split('+');
    new Maker().Ephoto360("https://en.ephoto360.com/create-call-of-duty-warzone-youtube-banner-online-548.html", ['' + _0x536f6b, '' + _0x55d16e]).then(async _0xe7297d => {
      await _0x41b1a6.sendMessage(_0x344520, {
        'image': await getBuffer(_0xe7297d.imageUrl),
        'caption': config.FOOTER
      }, {
        'quoted': _0xcf9daa
      });
      await _0x41b1a6.sendMessage(_0x344520, {
        'react': {
          'text': '✔',
          'key': _0xcf9daa.key
        }
      });
    });
  } catch (_0x4d4430) {
    _0x5376d0(errt);
    _0x2abeb3(_0x4d4430);
  }
});
cmd({
  'pattern': "banner5",
  'alias': ["ytbanner5", 'cover5', "channelbanner5"],
  'desc': 'desc2',
  'category': "logo",
  'use': ".banner5 malvin+yt",
  'filename': __filename
}, async (_0x31b35c, _0x129716, _0x40d60c, {
  from: _0x4210a9,
  l: _0x3b4a55,
  quoted: _0x5c5ac8,
  body: _0x547948,
  isCmd: _0x3352dd,
  command: _0x4ec239,
  args: _0x1675a6,
  q: _0x546a20,
  isGroup: _0x56a231,
  sender: _0x225157,
  senderNumber: _0x2b4495,
  botNumber2: _0x551c6d,
  botNumber: _0x2c1584,
  pushname: _0x33f992,
  isMe: _0x323b8f,
  isOwner: _0x56af48,
  groupMetadata: _0x5e62ae,
  groupName: _0x22007c,
  participants: _0x1cbaa2,
  groupAdmins: _0x23e459,
  isBotAdmins: _0x137535,
  isAdmins: _0x3352ac,
  reply: _0x2cd7bc
}) => {
  try {
    await _0x31b35c.sendMessage(_0x4210a9, {
      'react': {
        'text': '🎆',
        'key': _0x129716.key
      }
    });
    if (!_0x546a20.includes('+')) {
      return await _0x2cd7bc(imgmsg6);
    }
    let [_0x463c37, _0x587f10] = _0x546a20.split('+');
    new Maker().Ephoto360("https://en.ephoto360.com/create-banner-youtube-game-apex-legend-online-406.html", ['' + _0x463c37, '' + _0x587f10]).then(async _0x3ec6ea => {
      await _0x31b35c.sendMessage(_0x4210a9, {
        'image': await getBuffer(_0x3ec6ea.imageUrl),
        'caption': config.FOOTER
      }, {
        'quoted': _0x129716
      });
      await _0x31b35c.sendMessage(_0x4210a9, {
        'react': {
          'text': '✔',
          'key': _0x129716.key
        }
      });
    });
  } catch (_0xb85ae2) {
    _0x2cd7bc(errt);
    _0x3b4a55(_0xb85ae2);
  }
});
cmd({
  'pattern': "logo6",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0xab9eb2, _0x23ad8a, _0x281ce7, {
  from: _0x4cb904,
  l: _0x2f0ee1,
  quoted: _0x35c832,
  body: _0x525ee1,
  isCmd: _0x34b7c6,
  command: _0x3da6b9,
  args: _0x1b6ed2,
  q: _0x4ad1f2,
  isGroup: _0x9081d2,
  sender: _0x5f2d84,
  senderNumber: _0x53d29a,
  botNumber2: _0x3cf959,
  botNumber: _0x185fa5,
  pushname: _0x2ed7b6,
  isMe: _0x38b07f,
  isOwner: _0x436115,
  groupMetadata: _0x5ba243,
  groupName: _0xfbe3a9,
  participants: _0x837eee,
  groupAdmins: _0x48d1ad,
  isBotAdmins: _0x155d3d,
  isAdmins: _0x5664db,
  reply: _0x2e5af1
}) => {
  try {
    await _0xab9eb2.sendMessage(_0x4cb904, {
      'react': {
        'text': '🎆',
        'key': _0x23ad8a.key
      }
    });
    let [_0x47ef9f, _0x3dffca] = _0x4ad1f2.split('+');
    let _0x43bb75 = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=' + _0x3dffca + "&name=" + _0x47ef9f);
    await _0xab9eb2.sendMessage(_0x4cb904, {
      'image': {
        'url': _0x43bb75.result.download_url
      },
      'caption': "ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ\nᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴍᴀʟᴠɪɴ ᴋɪɴɢ™"
    }, {
      'quoted': _0x23ad8a
    });
    await _0xab9eb2.sendMessage(_0x4cb904, {
      'react': {
        'text': '✔',
        'key': _0x23ad8a.key
      }
    });
  } catch (_0x55e6f8) {
    _0x2e5af1(errt);
    _0x2f0ee1(_0x55e6f8);
  }
});
async function animeVideo() {
  const _0x1aaafb = await fetch("https://shortstatusvideos.com/anime-video-status-download/");
  const _0x4dbf90 = await _0x1aaafb.text();
  const _0xf40475 = cheerio.load(_0x4dbf90);
  const _0x484617 = [];
  _0xf40475("a.mks_button.mks_button_small.squared").each((_0x46a215, _0x1ef587) => {
    const _0x559ca9 = _0xf40475(_0x1ef587).attr("href");
    const _0xdfd09a = _0xf40475(_0x1ef587).closest('p').prevAll('p').find('strong').text();
    _0x484617.push({
      'title': _0xdfd09a,
      'source': _0x559ca9
    });
  });
  const _0x265481 = Math.floor(Math.random() * _0x484617.length);
  return _0x484617[_0x265481];
}
cmd({
  'pattern': "chatgpt",
  'alias': ['ai'],
  'react': '👾',
  'desc': "copilot ai chat",
  'category': 'ai',
  'use': ".chatgpt *<Your Quoestion>*",
  'filename': __filename
}, async (_0x404908, _0x4e528d, _0x4a31e9, {
  from: _0x19b70c,
  l: _0x2f28e1,
  prefix: _0x19f139,
  quoted: _0x12b442,
  body: _0x516fd1,
  isCmd: _0x1cd434,
  command: _0x198a75,
  args: _0x39e655,
  q: _0x5ef8e6,
  isGroup: _0x244605,
  sender: _0x337dd6,
  senderNumber: _0x4692f8,
  botNumber2: _0x286e7a,
  botNumber: _0x58e208,
  pushname: _0x13f708,
  isMe: _0x1e06cb,
  isOwner: _0xc3f63a,
  groupMetadata: _0x17da31,
  groupName: _0x4bf8b2,
  participants: _0x55abaf,
  groupAdmins: _0x1c0d0b,
  isBotAdmins: _0x3d9f3b,
  isAdmins: _0x40cdaf,
  reply: _0x55af3e
}) => {
  try {
    if (!_0x5ef8e6) {
      return _0x55af3e("Need a keyword");
    }
    var _0x54d8b9 = await fetchJson("https://loco.web.id/wp-content/uploads/api/v1/bingai.php?q=" + _0x5ef8e6);
    return await _0x55af3e(_0x54d8b9.result.ai_response);
  } catch (_0x488967) {
    _0x55af3e("Unable to generate");
    _0x2f28e1(_0x488967);
  }
});
cmd({
  'pattern': "chatgpt4",
  'alias': ["ai2"],
  'react': '👾',
  'desc': "copilot ai chat",
  'category': 'ai',
  'use': ".chatgpt4 *<Your Quoestion>*",
  'filename': __filename
}, async (_0x784fff, _0x313861, _0x307a58, {
  from: _0x9740be,
  l: _0x1c95cf,
  prefix: _0x434720,
  quoted: _0x55eba3,
  body: _0x26c8b4,
  isCmd: _0x525983,
  command: _0xaa242a,
  args: _0x2c64cd,
  q: _0x12aaf2,
  isGroup: _0x1eb764,
  sender: _0x5405e6,
  senderNumber: _0x596778,
  botNumber2: _0x2017e5,
  botNumber: _0x15c6b4,
  pushname: _0x454c43,
  isMe: _0x36d2d1,
  isOwner: _0x528d78,
  groupMetadata: _0x571758,
  groupName: _0x159eda,
  participants: _0x584575,
  groupAdmins: _0x554efe,
  isBotAdmins: _0x4b859f,
  isAdmins: _0x3de874,
  reply: _0x1ee908
}) => {
  try {
    if (!_0x12aaf2) {
      return _0x1ee908("Need a keyword");
    }
    var _0x5efe00 = await fetchJson('https://loco.web.id/wp-content/uploads/api/v1/bingai.php?q=' + _0x12aaf2);
    return await _0x1ee908(_0x5efe00.result.ai_response);
  } catch (_0x581d9f) {
    _0x1ee908("Unable to generate");
    _0x1c95cf(_0x581d9f);
  }
});
cmd({
  'pattern': "status",
  'alias': ["wastatus"],
  'react': '💫',
  'desc': "Download status videos.",
  'category': "download",
  'use': ".status <facebook url>",
  'filename': __filename
}, async (_0x523fbc, _0x5a080d, _0x5310d6, {
  from: _0x51d57f,
  l: _0x46f245,
  quoted: _0x33bd3f,
  body: _0xb66c56,
  isCmd: _0x3cd55c,
  command: _0x1c9d8f,
  args: _0x204dae,
  q: _0x493cb6,
  isGroup: _0x36e6bb,
  sender: _0x156e4f,
  senderNumber: _0x324d37,
  botNumber2: _0x32a597,
  botNumber: _0x2c72d5,
  pushname: _0x42463d,
  isMe: _0x126d89,
  isOwner: _0x12ace6,
  groupMetadata: _0x9fca8,
  groupName: _0x3e8c06,
  participants: _0x1ee8ef,
  groupAdmins: _0x19b9d1,
  isBotAdmins: _0x18f628,
  isAdmins: _0x483b4f,
  reply: _0x35adc1
}) => {
  try {
    let _0x3af2b2 = await animeVideo();
    await _0x523fbc.sendMessage(_0x51d57f, {
      'video': {
        'url': _0x3af2b2.source
      },
      'caption': "ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ\nᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴋɪɴɢ ᴍ™"
    }, {
      'quoted': _0x5a080d
    });
  } catch (_0x2f3637) {
    _0x35adc1(cantf);
    console.log(_0x2f3637);
  }
});
cmd({
  'pattern': "modapk",
  'react': '📱',
  'alias': ['androidapksfree', "mod"],
  'desc': "urlneed",
  'category': "download",
  'use': ".modapk whatsapp",
  'filename': __filename
}, async (_0x552ebc, _0x41e1d2, _0x573342, {
  from: _0x2c0282,
  prefix: _0x93542a,
  l: _0x5c0e94,
  quoted: _0x276a4d,
  body: _0x30ccb7,
  isCmd: _0x374257,
  command: _0x1966f1,
  args: _0x517df7,
  q: _0x282103,
  isGroup: _0x3e198e,
  sender: _0x2dce2c,
  senderNumber: _0x58b897,
  botNumber2: _0x3e1675,
  botNumber: _0x191bd0,
  pushname: _0x3f785b,
  isMe: _0x809ad5,
  isOwner: _0x136765,
  groupMetadata: _0x89070a,
  groupName: _0x41485e,
  participants: _0x5bd56d,
  groupAdmins: _0x81de61,
  isBotAdmins: _0x100ee3,
  isAdmins: _0x4da7dc,
  reply: _0x1c546f
}) => {
  try {
    if (!_0x282103) {
      return await _0x552ebc.sendMessage(_0x2c0282, {
        'text': imgmsg
      }, {
        'quoted': _0x41e1d2
      });
    }
    const _0x551c13 = await axios.get('https://androidapksfree.com/?s=' + _0x282103, {
      'withCredentials': true
    });
    var _0x23ab69 = [];
    const _0x2bb262 = cheerio.load(_0x551c13.data);
    _0x2bb262("html > body > div.main-wrap > div.main.wrap.cf > div > div > div > div > div.boxed-content > div.devapk-apps-list > section").each(function (_0x114716, _0x38afe9) {
      const _0x36b1c6 = _0x2bb262(_0x38afe9).find("h1 > a").attr('href');
      const _0x2c0eac = _0x2bb262(_0x38afe9).find('h1').text();
      const _0x5d8aa4 = _0x2bb262(_0x38afe9).find("div.date-on-tax").text().replaceAll("\n", '');
      _0x23ab69.push({
        'link': _0x36b1c6,
        'title': _0x2c0eac,
        'update': _0x5d8aa4
      });
    });
    if (_0x23ab69.length < 0x1) {
      return await _0x552ebc.sendMessage(_0x2c0282, {
        'text': N_FOUND
      }, {
        'quoted': _0x41e1d2
      });
    }
    var _0x2917de = [];
    for (var _0x5bcbe3 = 0x0; _0x5bcbe3 < _0x23ab69.length; _0x5bcbe3++) {
      _0x2917de.push({
        'title': _0x23ab69[_0x5bcbe3].title,
        'rowId': _0x93542a + "apk2 " + _0x23ab69[_0x5bcbe3].link + '+' + _0x23ab69[_0x5bcbe3].title
      });
    }
    const _0x446f77 = [{
      'title': "_[Result from androidapksfree.]_",
      'rows': _0x2917de
    }];
    const _0x53b201 = {
      'text': "┌───[ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ]\n\n   *MOD APK DOWNLOADER*\n\n*📱 ᴀᴘᴋ ɴᴀᴍᴇ:* " + _0x282103,
      'footer': config.FOOTER,
      'title': "Result from androidapksfree. 📲",
      'buttonText': "*🔢 Reply below number*",
      'sections': _0x446f77
    };
    await _0x552ebc.listMessage(_0x2c0282, _0x53b201, _0x41e1d2);
  } catch (_0x9836aa) {
    _0x1c546f("*ERROR !!*");
    _0x5c0e94(_0x9836aa);
  }
});
cmd({
  'pattern': "apk2",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x20ea17, _0x373188, _0x51541d, {
  from: _0x34dd8f,
  l: _0x31e746,
  quoted: _0x305bee,
  body: _0x53459d,
  isCmd: _0x3ab06e,
  command: _0x48d1c1,
  args: _0x3bb52a,
  q: _0x18f017,
  isGroup: _0x58df39,
  sender: _0x2dc7f3,
  senderNumber: _0x5e74f5,
  botNumber2: _0x209e2e,
  botNumber: _0x3c839d,
  pushname: _0x578a80,
  isMe: _0x1cd131,
  isOwner: _0x2fa869,
  groupMetadata: _0x2fc127,
  groupName: _0x4839be,
  participants: _0x360a04,
  groupAdmins: _0x14cbed,
  isBotAdmins: _0xb44df8,
  isAdmins: _0x4a3a2a,
  reply: _0xc5b14a
}) => {
  try {
    await _0x20ea17.sendMessage(_0x34dd8f, {
      'react': {
        'text': '📥',
        'key': _0x373188.key
      }
    });
    if (!_0x18f017) {
      return await _0x20ea17.sendMessage(_0x34dd8f, {
        'text': "*Need apk link...*"
      }, {
        'quoted': _0x373188
      });
    }
    let [_0x131665, _0x4f8969] = _0x18f017.split('+');
    const _0x426193 = await axios.get(_0x131665 + "download/", {
      'withCredentials': true
    });
    const _0x4a35a8 = cheerio.load(_0x426193.data);
    const _0x849dfe = _0x4a35a8("html > body > div.main-wrap > div.main.wrap.cf > div > div > div > div > div.post-container.cf > div > div > div.box > div.boxed-content.boxed-content-mobile > div > div > div.download-button-main.centered-element > a").attr("href");
    const _0x3f66ef = _0x4a35a8("div.app-icon-new > img").attr("src");
    const _0x268d09 = _0x4a35a8("html > body > div.main-wrap > div.main.wrap.cf > div > div > div > div > div.post-container.cf > div > div > div.box > div.boxed-content.boxed-content-mobile > div > div > div.download-button-main.centered-element > a").text().split('(')[0x1].replaceAll(')', '');
    let _0x3a86d4 = "*📚 ɴᴀᴍᴇ :* " + _0x4f8969 + "\n*📥 sɪᴢᴇ :* " + _0x268d09;
    await _0x20ea17.sendMessage(_0x34dd8f, {
      'image': {
        'url': _0x3f66ef
      },
      'caption': _0x3a86d4
    }, {
      'quoted': _0x373188
    });
    if (_0x268d09.includes('GB')) {
      return await _0x20ea17.sendMessage(_0x34dd8f, {
        'text': "*File size is too big...*"
      }, {
        'quoted': _0x373188
      });
    }
    if (_0x268d09.includes('MB') && _0x268d09.replace(" MB", '') > config.MAX_SIZE) {
      return await _0x20ea17.sendMessage(_0x34dd8f, {
        'text': "*File size is too big...*"
      }, {
        'quoted': _0x373188
      });
    }
    let _0x58af5b = await _0x20ea17.sendMessage(_0x34dd8f, {
      'document': {
        'url': _0x849dfe
      },
      'mimetype': "application/vnd.android.package-archive",
      'fileName': _0x4f8969 + '.' + 'apk',
      'caption': ''
    }, {
      'quoted': _0x373188
    });
    await _0x20ea17.sendMessage(_0x34dd8f, {
      'react': {
        'text': '📁',
        'key': _0x58af5b.key
      }
    });
    await _0x20ea17.sendMessage(_0x34dd8f, {
      'react': {
        'text': '✔',
        'key': _0x373188.key
      }
    });
  } catch (_0xf0eb4) {
    _0xc5b14a("*ERROR !!*");
    _0x31e746(_0xf0eb4);
  }
});