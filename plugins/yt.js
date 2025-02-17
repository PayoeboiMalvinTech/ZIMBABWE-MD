const config = require("../config");
const cheerio = require('cheerio');
const fetch = require("node-fetch");
const {
  search,
  ytmp3,
  ytmp4,
  ytdlv2,
  channel
} = require("@vreden/youtube_scraper");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  getsize,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");
const {
  cmd,
  commands
} = require('../command');
const yts = require("ytsearch-venom");
function ytreg(_0x3ac92b) {
  const _0x11b6f3 = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
  return _0x11b6f3.test(_0x3ac92b);
}
cmd({
  'pattern': 'yts',
  'alias': ["ytsearch"],
  'use': ".yts lelena",
  'react': '🔎',
  'desc': "Search songs",
  'category': "search",
  'filename': __filename
}, async (_0x3693ec, _0x5075b4, _0x18a6fb, {
  from: _0xfb78bf,
  l: _0x13ab67,
  quoted: _0x2d2c0e,
  body: _0x650b4c,
  isCmd: _0x52aa1c,
  command: _0x1b24ca,
  args: _0x1c5f40,
  q: _0x233913,
  isGroup: _0x3de412,
  sender: _0x4a93a0,
  senderNumber: _0x1ceff4,
  botNumber2: _0x5d9f2e,
  botNumber: _0x319f52,
  pushname: _0xfc6e33,
  isMe: _0x346aab,
  isOwner: _0x2b2e78,
  groupMetadata: _0x1bbe65,
  groupName: _0x454164,
  participants: _0x5b11c0,
  groupAdmins: _0x56abec,
  isBotAdmins: _0x5434d2,
  isAdmins: _0x537d08,
  reply: _0x13efed
}) => {
  try {
    if (!_0x233913) {
      return await _0x13efed(imgmsg);
    }
    if (isUrl(_0x233913) && !ytreg(_0x233913)) {
      return await _0x13efed(imgmsg);
    }
    try {
      let _0x34b054 = require("ytsearch-venom");
      var _0x40f0f0 = await _0x34b054(_0x233913);
    } catch (_0x420987) {
      _0x13ab67(_0x420987);
      return await _0x3693ec.sendMessage(_0xfb78bf, {
        'text': "*Error !!*"
      }, {
        'quoted': _0x5075b4
      });
    }
    var _0x92587d = '';
    _0x40f0f0.all.map(_0x83fd2 => {
      _0x92587d += " *🖲️" + _0x83fd2.title + "*\n🔗 " + _0x83fd2.url + "\n\n";
    });
    await _0x3693ec.sendMessage(_0xfb78bf, {
      'text': _0x92587d
    }, {
      'quoted': _0x5075b4
    });
  } catch (_0x477ec3) {
    _0x13ab67(_0x477ec3);
    _0x13efed("*Error !!*");
  }
});
cmd({
  'pattern': "song",
  'alias': ["ytsong"],
  'use': ".song yimmy",
  'react': '🎶',
  'desc': "Download songs",
  'category': "download",
  'filename': __filename
}, async (_0x1681d9, _0x3baab7, _0x590fea, {
  from: _0x16be84,
  prefix: _0x1cfa78,
  l: _0xc70a55,
  quoted: _0x9eb5dc,
  body: _0x15a2ee,
  isCmd: _0xdff822,
  command: _0x4be3c4,
  args: _0x12164b,
  q: _0x385e98,
  isGroup: _0x2cce45,
  sender: _0x4ab536,
  senderNumber: _0x1437d6,
  botNumber2: _0x272a39,
  botNumber: _0x216f5f,
  pushname: _0x5808da,
  isMe: _0x58e864,
  isOwner: _0x155dcd,
  groupMetadata: _0x115408,
  groupName: _0x2e7f1d,
  participants: _0x1f54fe,
  groupAdmins: _0x193f9e,
  isBotAdmins: _0x19547f,
  isAdmins: _0x54f29b,
  reply: _0x3d0daa
}) => {
  try {
    if (!_0x385e98) {
      return await _0x3d0daa("*Please enter a query or a url!*");
    }
    const _0x2b9fd4 = _0x385e98.replace(/\?si=[^&]*/, '');
    var _0x13b5df = await yts(_0x2b9fd4);
    let _0x46eb8f = config.FOOTER;
    var _0x548a52 = _0x13b5df.videos[0x0];
    let _0x3f6d4e = "*╭─「ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ」*\n*│*\n*│𝚂𝙾𝙽𝙶 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁🎵 *\n*│❑ 📝 ᴛɪᴛɪʟᴇ:* " + _0x548a52.title + "\n*│❑ 👀 ᴠɪᴇᴡꜱ:* " + _0x548a52.views + "\n*│❑ 🕒 ᴀɢᴏ:* " + _0x548a52.ago + "\n*│❑ ⏳ ᴅᴜʀᴀᴛɪᴏɴ:* " + _0x548a52.duration + "\n*│▪ 🔗 ᴜʀʟ:* " + _0x548a52.url;
    const _0x96995e = [{
      'buttonId': _0x1cfa78 + "ytaa " + _0x548a52.url,
      'buttonText': {
        'displayText': "ᴀᴜᴅɪᴏ ꜱᴏɴɢ 🎶"
      },
      'type': 0x1
    }, {
      'buttonId': _0x1cfa78 + "ytad " + _0x548a52.url + '±' + _0x548a52.title,
      'buttonText': {
        'displayText': "ᴅᴏᴄᴜᴍᴇɴᴛ ꜱᴏɴɢ 📁"
      },
      'type': 0x1
    }];
    const _0x27f279 = {
      'image': {
        'url': _0x548a52.thumbnail
      },
      'caption': _0x3f6d4e,
      'footer': _0x46eb8f,
      'buttons': _0x96995e,
      'headerType': 0x4
    };
    await _0x1681d9.buttonMessage(_0x16be84, _0x27f279, _0x3baab7);
  } catch (_0x5cdd15) {
    _0x3d0daa(N_FOUND);
    console.log(_0x5cdd15);
  }
});
function tolow(_0x5a771a) {
  const _0x52c6fe = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const _0x2f4a6c = _0x5a771a.match(_0x52c6fe);
  if (_0x2f4a6c && _0x2f4a6c[0x1]) {
    const _0x9188e7 = _0x2f4a6c[0x1];
    const _0x4addac = 'https://i.ytimg.com/vi/' + _0x9188e7 + "/hqdefault.jpg";
    return _0x4addac;
  } else {
    console.log("Invalid YouTube URL");
  }
}
cmd({
  'pattern': "ytaa",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x453bcc, _0x4c8cc0, _0x533e85, {
  from: _0x465b0c,
  q: _0xb10645,
  reply: _0x2b0816
}) => {
  try {
    if (!_0xb10645) {
      return _0x2b0816("*Please give me a youtube url!*");
    }
    const _0x5982c2 = await ytmp3(_0xb10645, "128");
    if (!_0x5982c2.download.url) {
      return _0x2b0816("❌ Error: Unable to fetch audio!");
    }
    await _0x453bcc.sendMessage(_0x465b0c, {
      'react': {
        'text': '⬆️',
        'key': _0x4c8cc0.key
      }
    });
    await _0x453bcc.sendMessage(_0x465b0c, {
      'react': {
        'text': '✔️',
        'key': _0x4c8cc0.key
      }
    });
    await _0x453bcc.sendMessage(_0x465b0c, {
      'audio': {
        'url': _0x5982c2.download.url
      },
      'mimetype': 'audio/mpeg'
    }, {
      'quoted': _0x4c8cc0
    });
  } catch (_0x460bef) {
    console.error(_0x460bef);
    _0x2b0816("❌ Error: " + _0x460bef.message);
  }
});
cmd({
  'pattern': "ytad",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x3f13a0, _0x5b79d1, _0x8277d5, {
  from: _0xa5ed2c,
  q: _0x43374c,
  reply: _0x4815b8
}) => {
  try {
    if (!_0x43374c) {
      return await _0x4815b8("*Please give me a youtube url!*");
    }
    const _0x202145 = _0x43374c.split('±')[0x0];
    const _0xc7784 = _0x43374c.split('±')[0x1];
    let _0x57d670 = await tolow(_0x202145);
    await _0x3f13a0.sendMessage(_0xa5ed2c, {
      'react': {
        'text': '⬆️',
        'key': _0x5b79d1.key
      }
    });
    const _0x4d5f20 = await ytmp3(_0x202145, "128");
    if (!_0x4d5f20.download.url) {
      return _0x4815b8("❌ Error: Unable to fetch audio!");
    }
    const _0x2b3c2b = {
      'document': {
        'url': _0x4d5f20.data.download
      },
      'mimetype': 'audio/mpeg',
      'caption': config.FOOTER,
      'jpegThumbnail': await (await fetch(_0x57d670)).buffer(),
      'fileName': _0xc7784 + ".mp3"
    };
    await _0x3f13a0.sendMessage(_0xa5ed2c, _0x2b3c2b, {
      'quoted': _0x5b79d1
    });
    await _0x3f13a0.sendMessage(_0xa5ed2c, {
      'react': {
        'text': '✔️',
        'key': _0x5b79d1.key
      }
    });
  } catch (_0x18d380) {
    console.log(_0x18d380);
  }
});
cmd({
  'pattern': "video",
  'alias': ['ytvideo'],
  'use': ".video yimmy",
  'react': '📽️',
  'desc': "Download videos",
  'category': "download",
  'filename': __filename
}, async (_0xc2ee6d, _0x8ea11b, _0x30abff, {
  from: _0x48a110,
  prefix: _0x3a66f0,
  l: _0x149b58,
  quoted: _0x551e33,
  body: _0x1e9f88,
  isCmd: _0x456f25,
  command: _0x464002,
  args: _0x17872d,
  q: _0x612d70,
  isGroup: _0x1bc387,
  sender: _0x18df01,
  senderNumber: _0x216b0b,
  botNumber2: _0x2aaaf9,
  botNumber: _0x57e3f4,
  pushname: _0x16c702,
  isMe: _0x4af3a3,
  isOwner: _0xee38a4,
  groupMetadata: _0x3b78da,
  groupName: _0x7b9cb,
  participants: _0xbdf3cc,
  groupAdmins: _0x506edc,
  isBotAdmins: _0x181cca,
  isAdmins: _0x2d86ad,
  reply: _0x313bc1
}) => {
  try {
    if (!_0x612d70) {
      return await _0x313bc1("*Please enter a query or a url!*");
    }
    const _0xb3db6b = _0x612d70.replace(/\?si=[^&]*/, '');
    var _0x517cce = await yts(_0xb3db6b);
    let _0x1e3d8c = config.FOOTER;
    var _0xe7ef54 = _0x517cce.videos[0x0];
    let _0x30723a = "*╭─「ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ」*\n*│ 𝚅𝙸𝙳𝙴𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁🎥 *\n*│❉ 📝 ᴛɪᴛɪʟᴇ:* " + _0xe7ef54.title + "\n\n*│❉ 👀 ᴠɪᴇᴡꜱ:* " + _0xe7ef54.views + "\n\n*│❉ 🕰 ᴀɢᴏ:* " + _0xe7ef54.ago + "\n\n*│❉ ⏳ ᴅᴜʀᴀᴛɪᴏɴ:* " + _0xe7ef54.duration + "\n\n*│❉ 🔗 ᴜʀʟ:* " + _0xe7ef54.url;
    const _0x3455e2 = [{
      'buttonId': _0x3a66f0 + "360pv " + _0xe7ef54.url,
      'buttonText': {
        'displayText': "360P VIDEO"
      },
      'type': 0x1
    }, {
      'buttonId': _0x3a66f0 + "480pv " + _0xe7ef54.url,
      'buttonText': {
        'displayText': "480P VIDEO"
      },
      'type': 0x1
    }, {
      'buttonId': _0x3a66f0 + "720pv " + _0xe7ef54.url,
      'buttonText': {
        'displayText': "720P VIDEO"
      },
      'type': 0x1
    }, {
      'buttonId': _0x3a66f0 + "1080pv " + _0xe7ef54.url,
      'buttonText': {
        'displayText': "1080P VIDEO"
      },
      'type': 0x1
    }];
    const _0x11651c = {
      'image': {
        'url': _0xe7ef54.thumbnail
      },
      'caption': _0x30723a,
      'footer': _0x1e3d8c,
      'buttons': _0x3455e2,
      'headerType': 0x4
    };
    await _0xc2ee6d.buttonMessage(_0x48a110, _0x11651c, _0x8ea11b);
  } catch (_0x3d582c) {
    _0x313bc1(N_FOUND);
    console.log(_0x3d582c);
  }
});
cmd({
  'pattern': "360pv",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x4eb008, _0x4f4303, _0xbb960a, {
  from: _0x109732,
  q: _0x55d492,
  reply: _0x1096fd
}) => {
  try {
    if (!_0x55d492) {
      return _0x1096fd("*Please give me a youtube url!*");
    }
    const _0x54b1e3 = await ytmp4(_0x55d492, "360");
    if (!_0x54b1e3.download.url) {
      return _0x1096fd("❌ Error: Unable to fetch audio!");
    }
    await _0x4eb008.sendMessage(_0x109732, {
      'react': {
        'text': '⬆️',
        'key': _0x4f4303.key
      }
    });
    await _0x4eb008.sendMessage(_0x109732, {
      'react': {
        'text': '✔️',
        'key': _0x4f4303.key
      }
    });
    await _0x4eb008.sendMessage(_0x109732, {
      'audio': {
        'url': _0x54b1e3.download.url
      },
      'mimetype': "video/mp4"
    }, {
      'quoted': _0x4f4303
    });
  } catch (_0x150c13) {
    console.error(_0x150c13);
    _0x1096fd("❌ Error: " + _0x150c13.message);
  }
});
cmd({
  'pattern': "480pv",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x4a3689, _0x458539, _0x252914, {
  from: _0x20506f,
  q: _0x202320,
  reply: _0x2d1a8b
}) => {
  try {
    if (!_0x202320) {
      return _0x2d1a8b("*Please give me a youtube url!*");
    }
    const _0x25012f = await ytmp4(_0x202320, '480');
    if (!_0x25012f.download.url) {
      return _0x2d1a8b("❌ Error: Unable to fetch audio!");
    }
    await _0x4a3689.sendMessage(_0x20506f, {
      'react': {
        'text': '⬆️',
        'key': _0x458539.key
      }
    });
    await _0x4a3689.sendMessage(_0x20506f, {
      'react': {
        'text': '✔️',
        'key': _0x458539.key
      }
    });
    await _0x4a3689.sendMessage(_0x20506f, {
      'audio': {
        'url': _0x25012f.download.url
      },
      'mimetype': "video/mp4"
    }, {
      'quoted': _0x458539
    });
  } catch (_0x130cc7) {
    console.error(_0x130cc7);
    _0x2d1a8b("❌ Error: " + _0x130cc7.message);
  }
});
cmd({
  'pattern': '720pv',
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x5881ab, _0x474de1, _0x58a4e7, {
  from: _0x4bf1e0,
  q: _0x410e53,
  reply: _0x43c58c
}) => {
  try {
    if (!_0x410e53) {
      return _0x43c58c("*Please give me a youtube url!*");
    }
    const _0x43ff83 = await ytmp4(_0x410e53, '720');
    if (!_0x43ff83.download.url) {
      return _0x43c58c("❌ Error: Unable to fetch audio!");
    }
    await _0x5881ab.sendMessage(_0x4bf1e0, {
      'react': {
        'text': '⬆️',
        'key': _0x474de1.key
      }
    });
    await _0x5881ab.sendMessage(_0x4bf1e0, {
      'react': {
        'text': '✔️',
        'key': _0x474de1.key
      }
    });
    await _0x5881ab.sendMessage(_0x4bf1e0, {
      'audio': {
        'url': _0x43ff83.download.url
      },
      'mimetype': 'video/mp4'
    }, {
      'quoted': _0x474de1
    });
  } catch (_0x1f4adf) {
    console.error(_0x1f4adf);
    _0x43c58c("❌ Error: " + _0x1f4adf.message);
  }
});
cmd({
  'pattern': '1080pv',
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x2802c6, _0x15e111, _0x65097a, {
  from: _0x4284ad,
  q: _0x594309,
  reply: _0x1f2f15
}) => {
  try {
    if (!_0x594309) {
      return _0x1f2f15("*Please give me a youtube url!*");
    }
    const _0x3e4c9d = await ytmp4(_0x594309, "1080");
    if (!_0x3e4c9d.download.url) {
      return _0x1f2f15("❌ Error: Unable to fetch audio!");
    }
    await _0x2802c6.sendMessage(_0x4284ad, {
      'react': {
        'text': '⬆️',
        'key': _0x15e111.key
      }
    });
    await _0x2802c6.sendMessage(_0x4284ad, {
      'react': {
        'text': '✔️',
        'key': _0x15e111.key
      }
    });
    await _0x2802c6.sendMessage(_0x4284ad, {
      'audio': {
        'url': _0x3e4c9d.download.url
      },
      'mimetype': "video/mp4"
    }, {
      'quoted': _0x15e111
    });
  } catch (_0x234439) {
    console.error(_0x234439);
    _0x1f2f15("❌ Error: " + _0x234439.message);
  }
});
async function xnxxs(_0x4dd1ec) {
  return new Promise((_0x26eaec, _0x4310ac) => {
    fetch("https://www.xnxx.com/search/" + _0x4dd1ec + '/' + (Math.floor(Math.random() * 0x3) + 0x1), {
      'method': "get"
    }).then(_0x48c468 => _0x48c468.text()).then(_0x412780 => {
      const _0x35cafb = cheerio.load(_0x412780, {
        'xmlMode': false
      });
      const _0x322f6a = [];
      const _0x2a7a06 = [];
      const _0x49af38 = [];
      const _0x2169eb = [];
      _0x35cafb("div.mozaique").each(function (_0x334cc2, _0xf0179f) {
        _0x35cafb(_0xf0179f).find('div.thumb').each(function (_0x1d1148, _0x196f36) {
          _0x2a7a06.push("https://www.xnxx.com" + _0x35cafb(_0x196f36).find('a').attr("href").replace("/THUMBNUM/", '/'));
        });
      });
      _0x35cafb("div.mozaique").each(function (_0x5957be, _0x37d7b7) {
        _0x35cafb(_0x37d7b7).find('div.thumb-under').each(function (_0xf439e5, _0x4bb667) {
          _0x49af38.push(_0x35cafb(_0x4bb667).find("p.metadata").text());
          _0x35cafb(_0x4bb667).find('a').each(function (_0x479814, _0x4ad275) {
            _0x322f6a.push(_0x35cafb(_0x4ad275).attr("title"));
          });
        });
      });
      for (let _0x5b1ef2 = 0x0; _0x5b1ef2 < _0x322f6a.length; _0x5b1ef2++) {
        _0x2169eb.push({
          'title': _0x322f6a[_0x5b1ef2],
          'info': _0x49af38[_0x5b1ef2],
          'link': _0x2a7a06[_0x5b1ef2]
        });
      }
      _0x26eaec({
        'status': true,
        'result': _0x2169eb
      });
    })["catch"](_0x205153 => _0x4310ac({
      'status': false,
      'result': _0x205153
    }));
  });
}
cmd({
  'pattern': "xnxx",
  'alias': ["xnxxs"],
  'react': '🤫',
  'use': ".xnxx <query>",
  'desc': "Search and DOWNLOAD VIDEOS from xnxx.",
  'category': "download",
  'filename': __filename
}, async (_0x339c4d, _0x54f2a4, _0x49e6b2, {
  from: _0x1cc255,
  prefix: _0x5443f3,
  l: _0x36ec02,
  quoted: _0x443774,
  body: _0x2162d4,
  isCmd: _0x90d70f,
  command: _0x1642a0,
  args: _0x15f4fd,
  q: _0x559696,
  isGroup: _0x36f327,
  sender: _0x34298d,
  senderNumber: _0x31fffa,
  botNumber2: _0x451875,
  botNumber: _0x3e992e,
  pushname: _0x87a425,
  isMe: _0x4017b1,
  isOwner: _0x340cb4,
  isPreUser: _0x1813c0,
  groupMetadata: _0x3644a1,
  groupName: _0x359ae9,
  participants: _0x4a083b,
  groupAdmins: _0x5ac5a9,
  isBotAdmins: _0x132ccd,
  isAdmins: _0x5a89a6,
  reply: _0x2cb22e
}) => {
  try {
    if (!_0x559696) {
      return _0x2cb22e("🚩 *Please give me words to search*");
    }
    let _0x1c54d1 = await xnxxs(_0x559696);
    let _0x2198ee = _0x1c54d1.result;
    if (_0x2198ee.length < 0x1) {
      return await _0x339c4d.sendMessage(_0x1cc255, {
        'text': N_FOUND
      }, {
        'quoted': _0x54f2a4
      });
    }
    var _0xf57e62 = [];
    _0x1c54d1.result.map(_0x20cc0f => {
      _0xf57e62.push({
        'buttonId': _0x5443f3 + ("xnxxdl " + _0x20cc0f.link),
        'buttonText': {
          'displayText': '' + _0x20cc0f.title
        },
        'type': 0x1
      });
    });
    const _0x1afaa5 = {
      'image': {
        'url': "https://1000logos.net/wp-content/uploads/2021/04/XNXX-logo.png"
      },
      'caption': "🫣 *X N X X - S E A R C H* 🥶",
      'footer': config.FOOTER,
      'buttons': _0xf57e62,
      'headerType': 0x4
    };
    return await _0x339c4d.buttonMessage(_0x1cc255, _0x1afaa5, _0x54f2a4);
  } catch (_0x35e348) {
    _0x2cb22e("*Error !!*");
    console.log(_0x35e348);
  }
});
async function xdl(_0x1affb1) {
  return new Promise((_0x4e9e51, _0x35c7c3) => {
    fetch('' + _0x1affb1, {
      'method': "get"
    }).then(_0x386051 => _0x386051.text()).then(_0x29a651 => {
      const _0x5a53ad = cheerio.load(_0x29a651, {
        'xmlMode': false
      });
      const _0x1fc97e = _0x5a53ad("meta[property=\"og:title\"]").attr("content");
      const _0x33abfa = _0x5a53ad("meta[property=\"og:duration\"]").attr('content');
      const _0xaf3c58 = _0x5a53ad("meta[property=\"og:image\"]").attr("content");
      const _0x353f10 = _0x5a53ad("meta[property=\"og:video:type\"]").attr("content");
      const _0x357fd8 = _0x5a53ad("meta[property=\"og:video:width\"]").attr('content');
      const _0x29701c = _0x5a53ad("meta[property=\"og:video:height\"]").attr("content");
      const _0x547b73 = _0x5a53ad("span.metadata").text();
      const _0x844b43 = _0x5a53ad("#video-player-bg > script:nth-child(6)").html();
      const _0x453a6b = {
        'low': (_0x844b43.match("html5player.setVideoUrlLow\\('(.*?)'\\);") || [])[0x1],
        'high': _0x844b43.match("html5player.setVideoUrlHigh\\('(.*?)'\\);" || [])[0x1],
        'HLS': _0x844b43.match("html5player.setVideoHLS\\('(.*?)'\\);" || [])[0x1],
        'thumb': _0x844b43.match("html5player.setThumbUrl\\('(.*?)'\\);" || [])[0x1],
        'thumb69': _0x844b43.match("html5player.setThumbUrl169\\('(.*?)'\\);" || [])[0x1],
        'thumbSlide': _0x844b43.match("html5player.setThumbSlide\\('(.*?)'\\);" || [])[0x1],
        'thumbSlideBig': _0x844b43.match("html5player.setThumbSlideBig\\('(.*?)'\\);" || [])[0x1]
      };
      _0x4e9e51({
        'status': true,
        'result': {
          'title': _0x1fc97e,
          'URL': _0x1affb1,
          'duration': _0x33abfa,
          'image': _0xaf3c58,
          'videoType': _0x353f10,
          'videoWidth': _0x357fd8,
          'videoHeight': _0x29701c,
          'info': _0x547b73,
          'files': _0x453a6b
        }
      });
    })["catch"](_0x19a737 => _0x35c7c3({
      'status': false,
      'result': _0x19a737
    }));
  });
}
cmd({
  'pattern': "xnxxdown",
  'react': '⬇️',
  'alias': ['dlxnxx', "xnxxdl"],
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x1d9d2f, _0x144b5c, _0x5a26a6, {
  from: _0x3ad0c2,
  l: _0x2df627,
  quoted: _0x2772f8,
  body: _0x25b37f,
  isCmd: _0x385164,
  command: _0x29d849,
  args: _0x25ff86,
  q: _0x28028b,
  isGroup: _0x264beb,
  sender: _0x51714e,
  senderNumber: _0x4e10ba,
  botNumber2: _0x496871,
  botNumber: _0x4dad4d,
  pushname: _0x12c662,
  isMe: _0x55d060,
  isOwner: _0x19355b,
  isPreUser: _0x4f93ea,
  groupMetadata: _0x2e2818,
  groupName: _0x10bdd3,
  participants: _0x5ca4bb,
  groupAdmins: _0xfc7dd0,
  isBotAdmins: _0x3657e6,
  isAdmins: _0x42e3cf,
  reply: _0x1e972e
}) => {
  try {
    if (!_0x28028b) {
      return _0x1e972e("*Please give me xnxx url !!*");
    }
    let _0x2cc194 = await xdl(_0x28028b);
    let _0x548de4 = "😎\n";
    _0x548de4 += '' + config.FOOTER;
    let _0xd61af0 = _0x2cc194.result.title;
    let _0xa3fff7 = _0x2cc194.result.image;
    await _0x1d9d2f.sendMessage(_0x3ad0c2, {
      'document': {
        'url': _0x2cc194.result.files.high
      },
      'jpegThumbnail': await (await fetch(_0xa3fff7)).buffer(),
      'mimetype': "video/mp4",
      'fileName': _0xd61af0 + ".mp4",
      'caption': _0x548de4
    }, {
      'quoted': _0x144b5c
    });
    await _0x1d9d2f.sendMessage(_0x3ad0c2, {
      'react': {
        'text': '✔️',
        'key': _0x144b5c.key
      }
    });
  } catch (_0x2e967b) {
    _0x1e972e("*Error !!*");
    console.log(_0x2e967b);
  }
});