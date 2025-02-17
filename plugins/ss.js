const config = require("../config");
const {
  cmd,
  commands
} = require("../command");
const {
  Download
} = require("nima-threads-dl-api");
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
} = require("../lib/functions");
const axios = require("axios");
const {
  igstalker,
  tikstalk
} = require("../lib/stalker");
const fg = require("api-dylux");
const {
  mediafireDl
} = require("mfiredlcore-vihangayt");
const fs = require('fs');
async function sswebA(_0x498588 = '', _0xb1c269 = false, _0x584840 = "desktop") {
  _0x584840 = _0x584840.toLowerCase();
  if (!["desktop", "tablet", 'phone'].includes(_0x584840)) {
    _0x584840 = "desktop";
  }
  let _0xd13d0d = new URLSearchParams();
  _0xd13d0d.append("url", _0x498588);
  _0xd13d0d.append("device", _0x584840);
  if (!!_0xb1c269) {
    _0xd13d0d.append('full', 'on');
  }
  _0xd13d0d.append('cacheLimit', 0x0);
  let _0x4ad613 = await axios({
    'url': "https://www.screenshotmachine.com/capture.php",
    'method': "post",
    'data': _0xd13d0d
  });
  let _0x549aef = _0x4ad613.headers["set-cookie"];
  let _0x1a0d10 = await axios({
    'url': "https://www.screenshotmachine.com/" + _0x4ad613.data.link,
    'headers': {
      'cookie': _0x549aef.join('')
    },
    'responseType': "arraybuffer"
  });
  return Buffer.from(_0x1a0d10.data);
}
var imgmsg = '';
if (config.LANG === 'SI') {
  imgmsg = "*කරුණාකර මට url එකක් දෙන්න !*";
} else {
  imgmsg = "*Please give me a url !*";
}
var descg = '';
if (config.LANG === 'SI') {
  descg = "එය ලබා දී ඇති url හි desktop ප්‍රමාණයේ තිර රුවක් ලබා දෙයි.";
} else {
  descg = "It gives desktop size screenshot of given url.";
}
var descp = '';
if (config.LANG === 'SI') {
  descp = "එය ලබා දී ඇති url හි දුරකථන ප්‍රමාණයේ තිර රුවක් ලබා දෙයි.";
} else {
  descp = "It gives phone size screenshot of given url.";
}
var desct = '';
if (config.LANG === 'SI') {
  desct = "එය ලබා දී ඇති url හි ටැබ්ලට් ප්‍රමාණයේ තිර රුවක් ලබා දෙයි.";
} else {
  desct = "It gives tablet size screenshot of given url.";
}
var cant = '';
if (config.LANG === 'SI') {
  cant = "*මට තිර රුවක් ලබා ගත නොහැක. පසුව නැවත උත්සාහ කරන්න.*";
} else {
  cant = "*I can't get a screenshot. Try again later.*";
}
cmd({
  'pattern': 'ss',
  'react': '📸',
  'alias': ["screenshot", "ssweb", "ssdesktop"],
  'desc': 'descg',
  'category': 'download',
  'use': ".ss <url>",
  'filename': __filename
}, async (_0x18ef25, _0x2b5b9b, _0x4888ac, {
  from: _0x4d7800,
  l: _0x71c427,
  quoted: _0x5a638c,
  prefix: _0x4cfb6f,
  body: _0x337995,
  isCmd: _0x486074,
  command: _0x50c740,
  args: _0x16b5a3,
  q: _0x573aac,
  isGroup: _0x13f0e0,
  sender: _0x301556,
  senderNumber: _0x12a361,
  botNumber2: _0x2cffd0,
  botNumber: _0x14b873,
  pushname: _0x21bb51,
  isMe: _0x32d11b,
  isOwner: _0x5c1db1,
  groupMetadata: _0x1f92db,
  groupName: _0x546c17,
  participants: _0x44b94a,
  groupAdmins: _0x21303b,
  isBotAdmins: _0x1558e2,
  isAdmins: _0x5dcfc9,
  reply: _0xb0710e
}) => {
  try {
    if (!_0x573aac) {
      return _0xb0710e(imgmsg);
    }
    let _0x19287d = getRandom('');
    let _0x4aed56 = await sswebA(_0x573aac, true, "desktop");
    fs.writeFileSync(_0x19287d + ".jpg", _0x4aed56);
    const _0x33e934 = [{
      'buttonId': _0x4cfb6f + "ssd " + _0x19287d + ".jpg",
      'buttonText': {
        'displayText': "DOCUMENT"
      },
      'type': 0x1
    }, {
      'buttonId': _0x4cfb6f + "ssi " + _0x19287d + ".jpg",
      'buttonText': {
        'displayText': "IMAGE"
      },
      'type': 0x1
    }];
    const _0x54a0b9 = {
      'caption': "┌───[ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ]\n\n   *📸 SCREENSHOT GETTER*",
      'footer': config.FOOTER,
      'buttons': _0x33e934,
      'headerType': 0x1
    };
    return await _0x18ef25.buttonMessage(_0x4d7800, _0x54a0b9, _0x2b5b9b);
  } catch (_0x448171) {
    _0xb0710e(cant);
    _0x71c427(_0x448171);
  }
});
cmd({
  'pattern': "ssphone",
  'react': '📸',
  'desc': "descp",
  'category': "download",
  'use': ".ss <url>",
  'filename': __filename
}, async (_0x4bfc3a, _0x1c0050, _0x38ecb3, {
  from: _0x119e77,
  l: _0x39f763,
  quoted: _0x6d2498,
  prefix: _0x282bba,
  body: _0xc69aa,
  isCmd: _0x39019e,
  command: _0x493ba2,
  args: _0x4ebfd9,
  q: _0x2fb137,
  isGroup: _0x48e400,
  sender: _0x584d9d,
  senderNumber: _0x147540,
  botNumber2: _0x3f3aca,
  botNumber: _0x16427c,
  pushname: _0x14a9f0,
  isMe: _0x14336e,
  isOwner: _0x4297b6,
  groupMetadata: _0x204427,
  groupName: _0x59c869,
  participants: _0x836316,
  groupAdmins: _0x4bb5e5,
  isBotAdmins: _0x68803f,
  isAdmins: _0x494fb6,
  reply: _0xe9b211
}) => {
  try {
    if (!_0x2fb137) {
      return _0xe9b211(imgmsg);
    }
    let _0x26e965 = getRandom('');
    let _0x45caea = await sswebA(_0x2fb137, true, "phone");
    fs.writeFileSync(_0x26e965 + ".jpg", _0x45caea);
    const _0x4110fd = [{
      'buttonId': _0x282bba + "ssd " + _0x26e965 + ".jpg",
      'buttonText': {
        'displayText': "DOCUMENT"
      },
      'type': 0x1
    }, {
      'buttonId': _0x282bba + "ssi " + _0x26e965 + '.jpg',
      'buttonText': {
        'displayText': "IMAGE"
      },
      'type': 0x1
    }];
    const _0x2b4396 = {
      'caption': "┌───[ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ]\n\n   *📸 SCREENSHOT GETTER*",
      'footer': config.FOOTER,
      'buttons': _0x4110fd,
      'headerType': 0x1
    };
    return await _0x4bfc3a.buttonMessage(_0x119e77, _0x2b4396, _0x1c0050);
  } catch (_0x2d9427) {
    _0xe9b211(cant);
    _0x39f763(_0x2d9427);
  }
});
cmd({
  'pattern': 'sstab',
  'react': '📸',
  'desc': 'desct',
  'category': "download",
  'use': ".ss <url>",
  'filename': __filename
}, async (_0x2f13b3, _0x2e8fde, _0x26a72c, {
  from: _0x3680b7,
  l: _0x1d1d43,
  quoted: _0x46077a,
  prefix: _0x41038b,
  body: _0x3e01f9,
  isCmd: _0x452969,
  command: _0x367a69,
  args: _0x3eb0a9,
  q: _0xdca14c,
  isGroup: _0x111ff3,
  sender: _0x2796ef,
  senderNumber: _0x247065,
  botNumber2: _0x474c4b,
  botNumber: _0x2eada8,
  pushname: _0x5b0f95,
  isMe: _0x46b1e0,
  isOwner: _0x367c54,
  groupMetadata: _0x54fea2,
  groupName: _0x53f524,
  participants: _0x2b07ae,
  groupAdmins: _0x1ead8a,
  isBotAdmins: _0x496720,
  isAdmins: _0x304381,
  reply: _0x19a93f
}) => {
  try {
    if (!_0xdca14c) {
      return _0x19a93f(imgmsg);
    }
    let _0x33c6e6 = getRandom('');
    let _0x5b4afe = await sswebA(_0xdca14c, true, 'tablet');
    fs.writeFileSync(_0x33c6e6 + ".jpg", _0x5b4afe);
    const _0x119cea = [{
      'buttonId': _0x41038b + "ssd " + _0x33c6e6 + '.jpg',
      'buttonText': {
        'displayText': "DOCUMENT"
      },
      'type': 0x1
    }, {
      'buttonId': _0x41038b + "ssi " + _0x33c6e6 + ".jpg",
      'buttonText': {
        'displayText': "IMAGE"
      },
      'type': 0x1
    }];
    const _0x326d51 = {
      'caption': "┌───[ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ]\n\n   *📸 SCREENSHOT GETTER*",
      'footer': config.FOOTER,
      'buttons': _0x119cea,
      'headerType': 0x1
    };
    return await _0x2f13b3.buttonMessage(_0x3680b7, _0x326d51, _0x2e8fde);
  } catch (_0x45254a) {
    _0x19a93f(cant);
    _0x1d1d43(_0x45254a);
  }
});
cmd({
  'pattern': 'ssi',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x2472ad, _0x4503b6, _0x26d21, {
  from: _0x49e9d8,
  l: _0x4bb3c5,
  quoted: _0x518bff,
  body: _0x2a297e,
  isCmd: _0xc06c50,
  command: _0x1cf1e7,
  args: _0x4da040,
  q: _0x36b8c4,
  isGroup: _0x228fcf,
  sender: _0x1e6238,
  senderNumber: _0x1dc1a0,
  botNumber2: _0x7ce822,
  botNumber: _0x403f2a,
  pushname: _0x350d8d,
  isMe: _0x597b89,
  isOwner: _0x1b2053,
  groupMetadata: _0x2ac160,
  groupName: _0x3268e5,
  participants: _0x4f11f8,
  groupAdmins: _0x441616,
  isBotAdmins: _0x5d996f,
  isAdmins: _0x11a246,
  reply: _0x22482d
}) => {
  try {
    await _0x2472ad.sendMessage(_0x49e9d8, {
      'react': {
        'text': '📥',
        'key': _0x4503b6.key
      }
    });
    await _0x2472ad.sendMessage(_0x49e9d8, {
      'image': fs.readFileSync(_0x36b8c4),
      'caption': config.FOOTER
    }, {
      'quoted': _0x4503b6
    });
    await _0x2472ad.sendMessage(_0x49e9d8, {
      'react': {
        'text': '✔',
        'key': _0x4503b6.key
      }
    });
  } catch (_0x197d26) {
    _0x22482d("*ERROR !!*");
    _0x4bb3c5(_0x197d26);
  }
});
cmd({
  'pattern': 'ssd',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x73785b, _0x3465d3, _0x1dd05c, {
  from: _0x34f463,
  l: _0x51b3dc,
  quoted: _0xa6a872,
  body: _0x486693,
  isCmd: _0x5374ba,
  command: _0x2222e3,
  args: _0x4d7caa,
  q: _0x476a4c,
  isGroup: _0x55c525,
  sender: _0x351ebc,
  senderNumber: _0x37724a,
  botNumber2: _0x29e3eb,
  botNumber: _0x400d7b,
  pushname: _0x43055e,
  isMe: _0x418f46,
  isOwner: _0xba6b59,
  groupMetadata: _0x5c7cd0,
  groupName: _0x3956f6,
  participants: _0x6ef346,
  groupAdmins: _0x5525ab,
  isBotAdmins: _0x78199b,
  isAdmins: _0x223860,
  reply: _0x31e786
}) => {
  try {
    await _0x73785b.sendMessage(_0x34f463, {
      'react': {
        'text': '📥',
        'key': _0x3465d3.key
      }
    });
    await _0x73785b.sendMessage(_0x34f463, {
      'document': fs.readFileSync(_0x476a4c),
      'mimetype': "image/jpeg",
      'fileName': "screenshot.jpg",
      'caption': config.FOOTER
    }, {
      'quoted': _0x3465d3
    });
    await _0x73785b.sendMessage(_0x34f463, {
      'react': {
        'text': '✔',
        'key': _0x3465d3.key
      }
    });
  } catch (_0x4d915a) {
    _0x31e786("*ERROR !!*");
    _0x51b3dc(_0x4d915a);
  }
});
cmd({
  'pattern': "mediafire",
  'alias': ["mfire"],
  'react': '📁',
  'desc': "Download mediafire files.",
  'category': 'download',
  'use': ".mediafire <mediafire link>",
  'filename': __filename
}, async (_0x4e9495, _0x52fca, _0x598217, {
  from: _0x536eb9,
  l: _0x37ab62,
  quoted: _0x5eef77,
  body: _0x48b112,
  isCmd: _0x481348,
  command: _0x17b77d,
  args: _0x4bb488,
  q: _0x3996e0,
  isGroup: _0x297288,
  sender: _0x375c2c,
  senderNumber: _0x311a04,
  botNumber2: _0x599bdc,
  botNumber: _0x4619d4,
  pushname: _0x9a0841,
  isMe: _0x34e791,
  isOwner: _0x4e9f74,
  groupMetadata: _0x2aa126,
  groupName: _0x778cc8,
  participants: _0x1b4208,
  groupAdmins: _0x33a01b,
  isBotAdmins: _0x2a8224,
  isAdmins: _0x964c44,
  reply: _0x3c11e6
}) => {
  try {
    if (!_0x3996e0) {
      return await _0x3c11e6("*Please give me google drive url*");
    }
    if (!_0x3996e0.includes("mediafire.com")) {
      return await _0x3c11e6("*Please give me google drive url*");
    }
    if (!_0x3996e0.includes("/file")) {
      return await _0x3c11e6("*Please give me google drive url*");
    }
    const _0x45ead9 = await mediafireDl(_0x3996e0);
    if (_0x45ead9.size.includes('MB') && _0x45ead9.size.replace('MB', '') > config.MAX_SIZE) {
      return await _0x3c11e6("*This file is too big !!*");
    }
    if (_0x45ead9.size.includes('GB')) {
      return await _0x3c11e6("*This file is too big !!*");
    }
    const _0x5bfaf2 = _0x4e9495.sendMessage(_0x536eb9, {
      'document': {
        'url': _0x45ead9.link
      },
      'fileName': _0x45ead9.name,
      'mimetype': _0x45ead9.mime,
      'caption': "*💡 ɴᴀᴍᴇ* : " + _0x45ead9.name + "\n*📊 sɪᴢᴇ* : " + _0x45ead9.size + "\n*🕹️ ᴍɪᴍᴇ* : " + _0x45ead9.mime
    }, {
      'quoted': _0x52fca
    });
    await _0x4e9495.sendMessage(_0x536eb9, {
      'react': {
        'text': '📁',
        'key': _0x5bfaf2.key
      }
    });
  } catch (_0x37e62b) {
    _0x3c11e6("*Error !!*");
    _0x37ab62(_0x37e62b);
  }
});
cmd({
  'pattern': "gdrive",
  'alias': ["googledrive'"],
  'react': '📑',
  'desc': "Download googledrive files.",
  'category': "download",
  'use': ".gdrive <googledrive link>",
  'filename': __filename
}, async (_0x16eab8, _0x43f4f9, _0x55c2d0, {
  from: _0x1b192b,
  l: _0x1e3d70,
  quoted: _0x12cc9e,
  body: _0x4401e3,
  isCmd: _0x2fd3b5,
  command: _0x373962,
  args: _0x187677,
  q: _0x3c93c9,
  isGroup: _0x45f9b9,
  sender: _0x333ce0,
  senderNumber: _0x337f52,
  botNumber2: _0x27babe,
  botNumber: _0xa663c5,
  pushname: _0x56b836,
  isMe: _0x36a204,
  isOwner: _0x4c3f4d,
  groupMetadata: _0x5d4f4c,
  groupName: _0x35887b,
  participants: _0x1c53d5,
  groupAdmins: _0x169c10,
  isBotAdmins: _0x430057,
  isAdmins: _0x548132,
  reply: _0x4f326b
}) => {
  try {
    if (!_0x3c93c9) {
      return await _0x4f326b("*Please give me googledrive url !!*");
    }
    let _0x152256 = await fg.GDriveDl(_0x3c93c9);
    _0x4f326b("*📝 ғɪʟᴇ ɴᴀᴍᴇ:*  " + _0x152256.fileName + "\n*💈 ғɪʟᴇ sɪᴢᴇ:* " + _0x152256.fileSize + "\n*🕹️ ғɪʟᴇ ᴛʏᴘᴇ:* " + _0x152256.mimetype);
    _0x16eab8.sendMessage(_0x1b192b, {
      'document': {
        'url': _0x152256.downloadUrl
      },
      'fileName': _0x152256.fileName,
      'mimetype': _0x152256.mimetype
    }, {
      'quoted': _0x43f4f9
    });
  } catch (_0xcd5f3b) {
    _0x4f326b("*Error !!*");
    _0x1e3d70(_0xcd5f3b);
  }
});
cmd({
  'pattern': "tikstalk",
  'alias': ["tiktokstalk", 'stalktiktok', "tikstalk"],
  'react': '📱',
  'desc': "desct",
  'category': "search",
  'use': ".tikstalk <tiktok username>",
  'filename': __filename
}, async (_0x97ac78, _0x2e920f, _0x451dcc, {
  from: _0x16a1ac,
  l: _0x589bb4,
  quoted: _0x34202f,
  body: _0x185a16,
  isCmd: _0x131e51,
  command: _0x1b9501,
  args: _0x5a8636,
  q: _0x3a4ed,
  isGroup: _0xb1dc33,
  sender: _0x2fcb35,
  senderNumber: _0x583103,
  botNumber2: _0x478e08,
  botNumber: _0x2dd9e6,
  pushname: _0x564d70,
  isMe: _0x2ace6d,
  isOwner: _0x274c23,
  groupMetadata: _0x48e864,
  groupName: _0x400f5f,
  participants: _0x366e01,
  groupAdmins: _0x4ee653,
  isBotAdmins: _0x32a4b8,
  isAdmins: _0x3ae41f,
  reply: _0x54d5ed
}) => {
  try {
    if (!_0x3a4ed) {
      return _0x54d5ed(needus);
    }
    const _0x5c4731 = await tikstalk(_0x5a8636[0x0]);
    const _0x365231 = "╭───[ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ]\n\n    *TIKTOK STALKER*\n\n*🆔 ᴜsᴇʀɴᴇ:* " + _0x5c4731.username + "\n\n*👤 ɴᴀᴍᴇ:* " + _0x5c4731.name + "\n\n*🐾 ʙɪᴏ:* " + _0x5c4731.bio + "\n\n*🚶🏽 ғᴏʟʟᴏᴡɪɴɢ:* " + _0x5c4731.following + "\n\n*👥 ғᴏʟʟᴏᴡᴇʀs:* " + _0x5c4731.followers + "\n\n*💌 ʟɪᴋᴇs:* " + _0x5c4731.likes + "\n\n╰───────────◉➣➣";
    await _0x97ac78.sendMessage(_0x16a1ac, {
      'image': {
        'url': _0x5c4731.img
      },
      'caption': _0x365231
    }, {
      'quoted': _0x2e920f
    });
  } catch (_0x1d205d) {
    _0x54d5ed(cantf);
    _0x589bb4(_0x1d205d);
  }
});
cmd({
  'pattern': "igstalk",
  'alias': ["instastalk", "instagramstalk", 'igstalker'],
  'react': '📷',
  'desc': "desct",
  'category': "search",
  'use': ".igstalk <instagram username>",
  'filename': __filename
}, async (_0x1b201b, _0x1b0c5e, _0xf65207, {
  from: _0x3af20b,
  l: _0x20bf68,
  quoted: _0x3438e3,
  body: _0xa3b81f,
  isCmd: _0x3d8fa4,
  command: _0x566210,
  args: _0x651a33,
  q: _0x184a63,
  isGroup: _0x10711d,
  sender: _0x5dfdab,
  senderNumber: _0x3f745c,
  botNumber2: _0x35874b,
  botNumber: _0x1da1c9,
  pushname: _0x325eeb,
  isMe: _0x5847bf,
  isOwner: _0x56dd6e,
  groupMetadata: _0xb36b58,
  groupName: _0x168c41,
  participants: _0x355e7b,
  groupAdmins: _0x55226d,
  isBotAdmins: _0x16611a,
  isAdmins: _0x3ecfcb,
  reply: _0x38ec4f
}) => {
  try {
    if (!_0x184a63) {
      return _0x38ec4f(needus);
    }
    const _0x11ba3 = await igstalker(_0x184a63);
    const _0x38a6c5 = "╭───[ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ]\n\n    *IG STALKER*\n\n*🆔 ᴜsᴇʀɴᴀᴍᴇ:* " + _0x11ba3.username + "\n\n*👤 ɴᴀᴍᴇ:* " + _0x11ba3.fullname + "\n\n*🐾 ʙɪᴏ:* " + _0x11ba3.bio + "\n\n*🚶🏽 ғᴏʟʟᴏᴡɪɴɢ:* " + _0x11ba3.following + "\n\n*👥 ғᴏʟʟᴏᴡᴇʀs:* " + _0x11ba3.followers + "\n\n*📬 ᴘᴏsᴛ ᴄᴏᴜɴᴛ:* " + _0x11ba3.post + "\n\n╰───────────◉➣➣";
    await _0x1b201b.sendMessage(_0x3af20b, {
      'image': {
        'url': _0x11ba3.profile
      },
      'caption': _0x38a6c5
    }, {
      'quoted': _0x1b0c5e
    });
  } catch (_0x171b56) {
    _0x38ec4f(cantf);
    _0x20bf68(_0x171b56);
  }
});
cmd({
  'pattern': 'threads',
  'alias': ["thread"],
  'react': '🧵',
  'desc': "Download threads videos/photos.",
  'category': "download",
  'use': ".threads <threads link>",
  'filename': __filename
}, async (_0x5acc8c, _0x3c1404, _0xf7bef6, {
  from: _0x2a8885,
  l: _0x560daa,
  quoted: _0x46cacc,
  body: _0x32c889,
  isCmd: _0x4476b6,
  command: _0x324970,
  args: _0x3a4180,
  q: _0x425f33,
  isGroup: _0x529d69,
  sender: _0x19a96c,
  senderNumber: _0x43a287,
  botNumber2: _0x430143,
  botNumber: _0x2463f8,
  pushname: _0x41e535,
  isMe: _0x23ce3b,
  isOwner: _0x5c6be9,
  groupMetadata: _0x26850f,
  groupName: _0xa337b2,
  participants: _0x5c201a,
  groupAdmins: _0x34a678,
  isBotAdmins: _0x4fc638,
  isAdmins: _0x486fa9,
  reply: _0x560973
}) => {
  try {
    if (!_0x425f33) {
      return await _0x560973(needus);
    }
    let _0x1b7e08 = await Download(_0x425f33);
    for (let _0x5cd836 = 0x0; _0x5cd836 < _0x1b7e08.download.length; _0x5cd836++) {
      if (_0x1b7e08.download[_0x5cd836].type === 'image') {
        await _0x5acc8c.sendMessage(_0x2a8885, {
          'image': {
            'url': _0x1b7e08.download[_0x5cd836].url
          },
          'caption': config.FOOTER
        }, {
          'quoted': _0x3c1404
        });
      } else {
        await _0x5acc8c.sendMessage(_0x2a8885, {
          'video': {
            'url': _0x1b7e08.download[_0x5cd836].url
          },
          'caption': config.FOOTER
        }, {
          'quoted': _0x3c1404
        });
      }
    }
  } catch (_0x26fab2) {
    _0x560973(cantf);
    _0x560daa(_0x26fab2);
  }
});
cmd({
  'pattern': "fmmods",
  'alias': ["wamod", 'wamods', "fmmod"],
  'react': '📲',
  'desc': "Download all fmmods.",
  'category': "download",
  'use': ".fmmods",
  'filename': __filename
}, async (_0xfad221, _0x1b2cd1, _0x2e905f, {
  from: _0x59536d,
  l: _0x417696,
  quoted: _0x341aca,
  prefix: _0x4cb582,
  body: _0x73cfb0,
  isCmd: _0x5690eb,
  command: _0x8ae4b1,
  args: _0x217e91,
  q: _0xa4ccbf,
  isGroup: _0x47093a,
  sender: _0x44990f,
  senderNumber: _0x346611,
  botNumber2: _0x8813ab,
  botNumber: _0x40e75c,
  pushname: _0x26a90b,
  isMe: _0x16b53b,
  isOwner: _0x2a304d,
  groupMetadata: _0x16fb4a,
  groupName: _0x543a6e,
  participants: _0x579d69,
  groupAdmins: _0x2381ec,
  isBotAdmins: _0x3146a1,
  isAdmins: _0x579937,
  reply: _0x2af6a2
}) => {
  try {
    let _0x3c9761 = (await fetchJson("https://vihangayt.me/download/fmmods")).data;
    var _0x4b6d11 = [{
      'buttonId': _0x4cb582 + "dmod " + _0x3c9761.com_whatsapp.link + '+' + _0x3c9761.com_whatsapp.name,
      'buttonText': {
        'displayText': _0x3c9761.com_whatsapp.name
      },
      'type': 0x1
    }, {
      'buttonId': _0x4cb582 + "dmod " + _0x3c9761.com_fmwhatsapp.link + '+' + _0x3c9761.com_fmwhatsapp.name,
      'buttonText': {
        'displayText': _0x3c9761.com_fmwhatsapp.name
      },
      'type': 0x1
    }, {
      'buttonId': _0x4cb582 + "dmod " + _0x3c9761.com_gbwhatsapp.link + '+' + _0x3c9761.com_gbwhatsapp.name,
      'buttonText': {
        'displayText': _0x3c9761.com_gbwhatsapp.name
      },
      'type': 0x1
    }, {
      'buttonId': _0x4cb582 + "dmod " + _0x3c9761.com_yowhatsapp.link + '+' + _0x3c9761.com_yowhatsapp.name,
      'buttonText': {
        'displayText': _0x3c9761.com_yowhatsapp.name
      },
      'type': 0x1
    }];
    const _0x2cf296 = {
      'caption': "┌───[ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ]\n      \n*Foud Whatsapp Mod Downloader 📲*\n",
      'footer': config.FOOTER,
      'buttons': _0x4b6d11,
      'headerType': 0x1
    };
    return await _0xfad221.buttonMessage(_0x59536d, _0x2cf296, _0x1b2cd1);
  } catch (_0x2699f2) {
    _0x2af6a2("*Error !!*");
    _0x417696(_0x2699f2);
  }
});
cmd({
  'pattern': "dmod",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x3d19b4, _0x1e07e3, _0x3fe4e4, {
  from: _0x4bb6b9,
  l: _0x5e960f,
  quoted: _0x3c55ef,
  body: _0x52ef43,
  isCmd: _0x286358,
  command: _0x327d51,
  args: _0x6c816f,
  q: _0x25d205,
  isGroup: _0x23298d,
  sender: _0x30ee47,
  senderNumber: _0x570961,
  botNumber2: _0x38c246,
  botNumber: _0x359eda,
  pushname: _0x1b6fe5,
  isMe: _0x5d1cc6,
  isOwner: _0x53375a,
  groupMetadata: _0x42e0f1,
  groupName: _0x196629,
  participants: _0x459944,
  groupAdmins: _0x484a4e,
  isBotAdmins: _0x1694b6,
  isAdmins: _0x49490c,
  reply: _0x34ad31
}) => {
  try {
    await _0x3d19b4.sendMessage(_0x4bb6b9, {
      'react': {
        'text': '📥',
        'key': _0x1e07e3.key
      }
    });
    let [_0x2f0921, _0x21ea63] = _0x25d205.split`+`;
    await _0x3d19b4.sendMessage(_0x4bb6b9, {
      'document': {
        'url': _0x2f0921
      },
      'fileName': _0x21ea63 + '.apk',
      'mimetype': 'application/vnd.android.package-archive'
    }, {
      'quoted': _0x1e07e3
    });
    await _0x3d19b4.sendMessage(_0x4bb6b9, {
      'react': {
        'text': '✔',
        'key': _0x1e07e3.key
      }
    });
  } catch (_0x943162) {
    _0x34ad31("*ERROR !!*");
    _0x5e960f(_0x943162);
  }
});
cmd({
  'pattern': "block",
  'react': '⛔',
  'alias': ["band"],
  'desc': "🔒 Block a user",
  'category': "owner",
  'use': ".block",
  'filename': __filename
}, async (_0x19dcb2, _0x36bbb3, _0x273e99, {
  from: _0x44704a,
  isMe: _0x1ff117,
  isOwner: _0x4edada,
  reply: _0x1c821c
}) => {
  try {
    if (!_0x4edada && !_0x1ff117) {
      return await _0x1c821c("🚫 *This command is only for the owner!*");
    }
    if (!_0x44704a.endsWith("@s.whatsapp.net")) {
      return _0x1c821c("⚠️ *This command can only be used in private chat!*");
    }
    await _0x1c821c("🔒 *User has been blocked successfully!*");
    await _0x19dcb2.updateBlockStatus(_0x44704a, 'block');
    _0x273e99.react('✔️');
  } catch (_0x5bfd7b) {
    _0x273e99.react('❌');
    console.error(_0x5bfd7b);
    _0x1c821c("⚠️ *Error:* " + _0x5bfd7b.message);
  }
});
cmd({
  'pattern': "unblock",
  'react': '✅',
  'alias': ["unband"],
  'desc': "🔓 Unblock a user",
  'category': "owner",
  'use': ".unblock",
  'filename': __filename
}, async (_0x439dcb, _0x13fb72, _0x93e4b4, {
  from: _0x5330ff,
  isMe: _0x32ac02,
  isOwner: _0x24b029,
  reply: _0x556968
}) => {
  try {
    if (!_0x24b029 && !_0x32ac02) {
      return await _0x556968("🚫 *This command is only for the owner!*");
    }
    if (!_0x5330ff.endsWith('@s.whatsapp.net')) {
      return _0x556968("⚠️ *This command can only be used in private chat!*");
    }
    await _0x556968("🔓 *User has been unblocked successfully!*");
    await _0x439dcb.updateBlockStatus(_0x5330ff, "unblock");
    _0x93e4b4.react('✔️');
  } catch (_0x2a6ef7) {
    _0x93e4b4.react('❌');
    console.error(_0x2a6ef7);
    _0x556968("⚠️ *Error:* " + _0x2a6ef7.message);
  }
});