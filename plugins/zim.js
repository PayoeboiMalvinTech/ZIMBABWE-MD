const config = require("../config");
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
} = require("../lib/functions");
const cheerio = require("cheerio");
const fetch = require("node-fetch");
const {
  fbdown
} = require('../lib/fbdl');
const os = require('os');
cmd({
  'pattern': 'alive',
  'react': '👋',
  'alias': ["online", "test", "bot"],
  'desc': "Get bot's alive msg.",
  'category': "main",
  'use': ".alive",
  'filename': __filename
}, async (_0x479f27, _0xb1d165, _0x30998d, {
  from: _0x7bc95c,
  prefix: _0x2b253d,
  l: _0x377cb7,
  quoted: _0x4e1033,
  body: _0x4cd244,
  isCmd: _0x385a77,
  command: _0x118829,
  args: _0x59028c,
  q: _0x5dbad9,
  isGroup: _0x170049,
  sender: _0x5e5685,
  senderNumber: _0x1ffb3d,
  botNumber2: _0x50b2a4,
  botNumber: _0x344bd3,
  pushname: _0x358954,
  isMe: _0x2cb702,
  isOwner: _0x4d064b,
  groupMetadata: _0x5eea63,
  groupName: _0x3135c7,
  participants: _0x503abc,
  groupAdmins: _0x5401ad,
  isBotAdmins: _0x536853,
  isAdmins: _0x183e47,
  reply: _0xaa273f
}) => {
  try {
    if (os.hostname().length == 0xc) {
      hostname = "replit";
    } else {
      if (os.hostname().length == 0x24) {
        hostname = 'heroku';
      } else {
        if (os.hostname().length == 0x8) {
          hostname = "koyeb";
        } else {
          hostname = os.hostname();
        }
      }
    }
    const _0x1af575 = [{
      'buttonId': _0x2b253d + "menu",
      'buttonText': {
        'displayText': "COMMANDS MENU"
      },
      'type': 0x1
    }, {
      'buttonId': _0x2b253d + "ping",
      'buttonText': {
        'displayText': "BOT'S SPEED"
      },
      'type': 0x1
    }];
    const _0x4de2c5 = {
      'image': {
        'url': config.LOGO
      },
      'caption': "```🤖 Hello " + _0x358954 + "```" + "\n  \n> *Version:* " + require("../package.json").version + "\n> *Memory:* " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB\n> *Runtime:* " + runtime(process.uptime()) + "\n> *Platform:* " + hostname,
      'footer': config.FOOTER,
      'buttons': _0x1af575,
      'headerType': 0x4
    };
    return await _0x479f27.buttonMessage(_0x7bc95c, _0x4de2c5, _0xb1d165);
  } catch (_0x2b84db) {
    _0xaa273f("*Error !!*");
    _0x377cb7(_0x2b84db);
  }
});
cmd({
  'pattern': "ping",
  'react': '🌠',
  'alias': ["speed"],
  'desc': "Check bot's ping",
  'category': "main",
  'use': ".ping",
  'filename': __filename
}, async (_0x31ca3c, _0x123c85, _0xf18227, {
  from: _0xea03dc,
  quoted: _0x2d4c64,
  body: _0x38eec5,
  isCmd: _0x559636,
  command: _0x508b22,
  args: _0x405568,
  q: _0x31f060,
  isGroup: _0x1c1931,
  sender: _0x5de09e,
  senderNumber: _0x263773,
  botNumber2: _0x343fa4,
  botNumber: _0x4f51c1,
  pushname: _0x44796f,
  isMe: _0x2e6e65,
  isOwner: _0x312f44,
  groupMetadata: _0x21bb8b,
  groupName: _0x41f523,
  participants: _0x5d3772,
  groupAdmins: _0xf5c992,
  isBotAdmins: _0x41831b,
  isAdmins: _0x4d4798,
  reply: _0x4597e7
}) => {
  try {
    var _0x5706a3 = new Date().getTime();
    let _0x5369e8 = await _0x31ca3c.sendMessage(_0xea03dc, {
      'text': "```Pinging To index.js!!!```"
    }, {
      'quoted': _0x123c85
    });
    var _0x4984e3 = new Date().getTime();
    return await _0x31ca3c.edit(_0x5369e8, "*Pong*\n *" + (_0x4984e3 - _0x5706a3) + " ms* ");
  } catch (_0x30a23c) {
    _0x4597e7("*Error !!*");
    console.log(_0x30a23c);
  }
});
cmd({
  'pattern': 'menu',
  'react': '📖',
  'alias': ["panel", "list", "commands"],
  'desc': "Get bot's command list.",
  'category': 'main',
  'use': ".menu",
  'filename': __filename
}, async (_0xbdab60, _0x571fea, _0x47d080, {
  from: _0x24fec4,
  prefix: _0x1c9b3f,
  l: _0x1505d4,
  quoted: _0x5159bf,
  body: _0x15172b,
  isCmd: _0x16198e,
  command: _0x59175f,
  args: _0x11a86e,
  q: _0x564f38,
  isGroup: _0x369026,
  sender: _0x319d53,
  senderNumber: _0x4461f4,
  botNumber2: _0x205f14,
  botNumber: _0x1a7ef2,
  pushname: _0x32732a,
  isMe: _0x43c2ba,
  isOwner: _0xdacfe8,
  groupMetadata: _0x40cce3,
  groupName: _0x3adaf8,
  participants: _0x4b2fc6,
  groupAdmins: _0x10c079,
  isBotAdmins: _0x223fbd,
  isAdmins: _0x31edbe,
  reply: _0x513bde
}) => {
  try {
    if (os.hostname().length == 0xc) {
      hostname = 'replit';
    } else {
      if (os.hostname().length == 0x24) {
        hostname = "heroku";
      } else {
        if (os.hostname().length == 0x8) {
          hostname = "koyeb";
        } else {
          hostname = os.hostname();
        }
      }
    }
    const _0x4f1830 = [{
      'buttonId': _0x1c9b3f + 'aimn',
      'buttonText': {
        'displayText': "• ᴀɪ ᴍᴇɴᴜ"
      },
      'type': 0x1
    }, {
      'buttonId': _0x1c9b3f + "searchmenu",
      'buttonText': {
        'displayText': "• ꜱᴇʀᴀᴄʜ ᴍᴇɴᴜ"
      },
      'type': 0x1
    }, {
      'buttonId': _0x1c9b3f + "convertmenu",
      'buttonText': {
        'displayText': "• ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ"
      },
      'type': 0x1
    }, {
      'buttonId': _0x1c9b3f + "othermenu",
      'buttonText': {
        'displayText': "• ᴏᴛʜᴇʀ ᴍᴇɴᴜ"
      },
      'type': 0x1
    }, {
      'buttonId': _0x1c9b3f + "downmenu",
      'buttonText': {
        'displayText': "• ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ"
      },
      'type': 0x1
    }, {
      'buttonId': _0x1c9b3f + "groupmenu",
      'buttonText': {
        'displayText': "• ɢʀᴏᴜᴘ ᴍᴇɴᴜ"
      },
      'type': 0x1
    }, {
      'buttonId': _0x1c9b3f + 'logomenu',
      'buttonText': {
        'displayText': "• ʟᴏɢᴏ ᴍᴇɴᴜ"
      },
      'type': 0x1
    }, {
      'buttonId': _0x1c9b3f + "main",
      'buttonText': {
        'displayText': "• ᴍᴀɪɴ ᴍᴇɴᴜ"
      },
      'type': 0x1
    }, {
      'buttonId': _0x1c9b3f + "ownermenu",
      'buttonText': {
        'displayText': "• ᴏᴡɴᴇʀ ᴍᴇɴᴜ"
      },
      'type': 0x1
    }, {
      'buttonId': _0x1c9b3f + "newsmenu",
      'buttonText': {
        'displayText': "• ɴᴇᴡꜱ ᴍᴇɴᴜ"
      },
      'type': 0x1
    }, {
      'buttonId': _0x1c9b3f + "mnmenu",
      'buttonText': {
        'displayText': "• ɴᴇᴡ ᴄᴍᴅ ᴍᴇɴᴜ"
      },
      'type': 0x1
    }];
    const _0x472ce2 = {
      'image': {
        'url': "https://files.catbox.moe/375czc.jpg"
      },
      'caption': "```💎 Hello " + _0x32732a + '```' + "\n◦ ɪ ᴀᴍ ᴀɴ ᴀᴜᴛᴏᴍᴀᴛᴇᴅ ꜱʏꜱᴛᴇᴍ *(ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ)* ᴛʜᴀᴛ ᴄᴀɴ ʜᴇʟᴘ ᴛᴏ ᴅᴏ ꜱᴏᴍᴇᴛʜɪɴɢ, ꜱᴇᴀʀᴄʜ ᴀɴᴅ ɢᴇᴛ ᴅᴀᴛᴀ / ɪɴғᴏʀᴍᴀᴛɪᴏɴ ᴏɴʟʏ ᴛʜʀᴏᴜɢʜ *ᴡʜᴀᴛꜱᴀᴘᴘ.*\n> ➤ *ʙᴏᴛ ɴᴀᴍᴇ* : ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ\n> ➤ *ᴠᴇʀsɪᴏɴ* : 1.0.0\n> ➤ *ᴛʏᴘᴇ* : ᴘʟᴜɢɪɴs\n> ➤ *ʀᴀᴍ ᴜsᴀɢᴇ:* " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB\n> ➤ *ʀᴜɴᴛɪᴍᴇ:* " + runtime(process.uptime()) + "\n> ➤ *ᴘʟᴀᴛғᴏʀᴍ:* " + hostname,
      'footer': config.FOOTER,
      'buttons': _0x4f1830,
      'headerType': 0x4
    };
    return await _0xbdab60.buttonMessage(_0x24fec4, _0x472ce2, _0x571fea);
  } catch (_0x102f05) {
    _0x513bde("*Error !!*");
    _0x1505d4(_0x102f05);
  }
});
cmd({
  'pattern': 'downmenu',
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x3acdfd, _0xba7e50, _0x807320, {
  from: _0xd1a18d,
  prefix: _0x3dee4b,
  l: _0x47bc83,
  quoted: _0x12be2b,
  body: _0x4ae940,
  isCmd: _0x449f2f,
  command: _0x41a386,
  args: _0x4c96f9,
  q: _0x2e57d0,
  isGroup: _0x45e7d1,
  sender: _0xec0599,
  senderNumber: _0x3ec632,
  botNumber2: _0x250dfd,
  botNumber: _0x5c8b6f,
  pushname: _0x2bbdb2,
  isMe: _0x5d8e19,
  isOwner: _0x50430a,
  groupMetadata: _0x4b9c3e,
  groupName: _0x349956,
  participants: _0xbe5aed,
  groupAdmins: _0x4057f2,
  isBotAdmins: _0x1fdfdc,
  isAdmins: _0x30ec49,
  reply: _0xea09b9
}) => {
  try {
    let _0x5e1e53 = "*╭─「ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ」*\n*│╭───────────────╮*\n*│♘ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙼𝙴𝙽𝚄 📁    ▎*\n*├────────────────╯*\n\n";
    for (let _0x384600 = 0x0; _0x384600 < commands.length; _0x384600++) {
      if (commands[_0x384600].category === "download") {
        if (!commands[_0x384600].dontAddCommandList) {
          _0x5e1e53 += "╭──────────────────●●➣\n│ • *Command:* " + commands[_0x384600].pattern + "\n│ • *Use:* " + commands[_0x384600].use + "\n╰──────────────────●●➣\n\n";
        }
      }
    }
    ;
    let _0x726b1 = [{
      'buttonId': _0x3dee4b + 'sc',
      'buttonText': {
        'displayText': "GET BOT'S SCRIPT"
      },
      'type': 0x1
    }, {
      'buttonId': _0x3dee4b + "ping",
      'buttonText': {
        'displayText': "GET BOT'S PING"
      },
      'type': 0x1
    }];
    let _0x1027fa = {
      'image': {
        'url': 'https://files.catbox.moe/ds9nke.jpg'
      },
      'caption': _0x5e1e53,
      'footer': config.FOOTER,
      'headerType': 0x4,
      'buttons': _0x726b1
    };
    return await _0x3acdfd.buttonMessage(_0xd1a18d, _0x1027fa, _0xba7e50);
  } catch (_0x45ffa8) {
    _0xea09b9("*ERROR !!*");
    _0x47bc83(_0x45ffa8);
  }
});
cmd({
  'pattern': "groupmenu",
  'react': "👨‍👩",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x5184fc, _0x2a5b86, _0x2efce5, {
  from: _0x5ced30,
  prefix: _0xa2c6,
  l: _0x314ded,
  quoted: _0x450142,
  body: _0x6d388a,
  isCmd: _0x3caea0,
  command: _0x493a29,
  args: _0x4434d6,
  q: _0x380060,
  isGroup: _0x1d516d,
  sender: _0x5ea5e2,
  senderNumber: _0x86846a,
  botNumber2: _0xe2490,
  botNumber: _0x20944e,
  pushname: _0xe2727,
  isMe: _0x409a39,
  isOwner: _0x387b7e,
  groupMetadata: _0x5bb606,
  groupName: _0x9b2f79,
  participants: _0x4395d8,
  groupAdmins: _0xc0a86c,
  isBotAdmins: _0x31c851,
  isAdmins: _0x472726,
  reply: _0x467220
}) => {
  try {
    let _0x277c9c = "*╭─「ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ」*\n*│╭───────────────╮*\n*│      𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙽𝚄 📁     ▎*\n*├────────────────╯*\n\n";
    for (let _0x58e9a0 = 0x0; _0x58e9a0 < commands.length; _0x58e9a0++) {
      if (commands[_0x58e9a0].category === "group") {
        if (!commands[_0x58e9a0].dontAddCommandList) {
          _0x277c9c += "╭──────────────────●●➣\n│ • *Command:* " + commands[_0x58e9a0].pattern + "\n│ • *Use:* " + commands[_0x58e9a0].use + "\n╰──────────────────●●➣\n\n";
        }
      }
    }
    ;
    let _0x455d7e = [{
      'buttonId': _0xa2c6 + 'sc',
      'buttonText': {
        'displayText': "GET BOT'S SCRIPT"
      },
      'type': 0x1
    }, {
      'buttonId': _0xa2c6 + "ping",
      'buttonText': {
        'displayText': "GET BOT'S PING"
      },
      'type': 0x1
    }];
    let _0x1ba355 = {
      'image': {
        'url': "https://files.catbox.moe/1g46e2.jpg"
      },
      'caption': _0x277c9c,
      'footer': config.FOOTER,
      'headerType': 0x4,
      'buttons': _0x455d7e
    };
    return await _0x5184fc.buttonMessage(_0x5ced30, _0x1ba355, _0x2a5b86);
  } catch (_0x32136a) {
    _0x467220("*ERROR !!*");
    _0x314ded(_0x32136a);
  }
});
cmd({
  'pattern': "main",
  'react': '📓',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x16fc52, _0x22f676, _0x5721e9, {
  from: _0x80de64,
  prefix: _0x3f40e3,
  l: _0x5a86a4,
  quoted: _0xb6ecdf,
  body: _0x813104,
  isCmd: _0x3c0ffb,
  command: _0x5cadfe,
  args: _0x9a51,
  q: _0xfe450f,
  isGroup: _0x437989,
  sender: _0x2ef28e,
  senderNumber: _0x22688f,
  botNumber2: _0x2f5e6c,
  botNumber: _0x8b61cc,
  pushname: _0x32123f,
  isMe: _0xa12b2d,
  isOwner: _0x273b64,
  groupMetadata: _0x5ee563,
  groupName: _0x38892b,
  participants: _0x766249,
  groupAdmins: _0xe18621,
  isBotAdmins: _0x1c258e,
  isAdmins: _0x307943,
  reply: _0x94a1dc
}) => {
  try {
    let _0x263052 = "*╭─「zɪᴍʙᴀʙᴡᴇ-ᴍᴅ」*\n*│╭───────────────╮*\n*│ ♘      ᴍᴀɪɴ     ᴍᴇɴᴜ   📓  ▎*\n*├────────────────╯*\n\n";
    for (let _0x1d9fdf = 0x0; _0x1d9fdf < commands.length; _0x1d9fdf++) {
      if (commands[_0x1d9fdf].category === "main") {
        if (!commands[_0x1d9fdf].dontAddCommandList) {
          _0x263052 += "╭──────────────────●●➣\n│ • *Command:* " + commands[_0x1d9fdf].pattern + "\n│ • *Use:* " + commands[_0x1d9fdf].use + "\n╰──────────────────●●➣\n\n";
        }
      }
    }
    ;
    let _0x563ec1 = [{
      'buttonId': _0x3f40e3 + 'sc',
      'buttonText': {
        'displayText': "GET BOT'S SCRIPT"
      },
      'type': 0x1
    }, {
      'buttonId': _0x3f40e3 + 'ping',
      'buttonText': {
        'displayText': "GET BOT'S PING"
      },
      'type': 0x1
    }];
    let _0x3939f1 = {
      'image': {
        'url': config.LOGO
      },
      'caption': _0x263052,
      'footer': config.FOOTER,
      'headerType': 0x4,
      'buttons': _0x563ec1
    };
    return await _0x16fc52.buttonMessage(_0x80de64, _0x3939f1, _0x22f676);
  } catch (_0x3a1444) {
    _0x94a1dc("*ERROR !!*");
    _0x5a86a4(_0x3a1444);
  }
});
cmd({
  'pattern': "searchmenu",
  'react': "🕵🏻",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x3fb26c, _0x194a50, _0x281ed9, {
  from: _0xdaa7b1,
  prefix: _0x30cf42,
  l: _0x467384,
  quoted: _0x52cd8d,
  body: _0xec94df,
  isCmd: _0xd0738,
  command: _0x1a631c,
  args: _0x3b89e3,
  q: _0x7ea95a,
  isGroup: _0x440411,
  sender: _0x2ad1fb,
  senderNumber: _0x4a2c40,
  botNumber2: _0xe116cd,
  botNumber: _0xc7c802,
  pushname: _0x4ec662,
  isMe: _0x111d46,
  isOwner: _0x58b83b,
  groupMetadata: _0x490a96,
  groupName: _0x2f7df7,
  participants: _0x3abf8c,
  groupAdmins: _0xf07ed0,
  isBotAdmins: _0xb00934,
  isAdmins: _0x1e5788,
  reply: _0x48dbcc
}) => {
  try {
    let _0x4da258 = "*╭─「ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ」*\n*│╭───────────────╮*\n*│  ♘   𝚂𝙴𝙰𝚁𝙲𝙷   𝙼𝙴𝙽𝚄  🔎  ▎*\n*├────────────────╯*\n\n";
    for (let _0x265849 = 0x0; _0x265849 < commands.length; _0x265849++) {
      if (commands[_0x265849].category === 'search') {
        if (!commands[_0x265849].dontAddCommandList) {
          _0x4da258 += "╭──────────────────●●➣\n│ • *Command:* " + commands[_0x265849].pattern + "\n│ • *Use:* " + commands[_0x265849].use + "\n╰──────────────────●●➣\n\n";
        }
      }
    }
    ;
    let _0x3c524f = [{
      'buttonId': _0x30cf42 + 'sc',
      'buttonText': {
        'displayText': "GET BOT'S SCRIPT"
      },
      'type': 0x1
    }, {
      'buttonId': _0x30cf42 + "ping",
      'buttonText': {
        'displayText': "GET BOT'S PING"
      },
      'type': 0x1
    }];
    let _0x2748b8 = {
      'image': {
        'url': "https://files.catbox.moe/ot0etg.jpg"
      },
      'caption': _0x4da258,
      'footer': config.FOOTER,
      'headerType': 0x4,
      'buttons': _0x3c524f
    };
    return await _0x3fb26c.buttonMessage(_0xdaa7b1, _0x2748b8, _0x194a50);
  } catch (_0x2c6411) {
    _0x48dbcc("*ERROR !!*");
    _0x467384(_0x2c6411);
  }
});
cmd({
  'pattern': 'convertmenu',
  'react': '🔄',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x415548, _0x3a6a5c, _0xb522ae, {
  from: _0x1a8eac,
  prefix: _0x4afb08,
  l: _0x45f904,
  quoted: _0x2973ac,
  body: _0x448c25,
  isCmd: _0x3286cf,
  command: _0x4acc1e,
  args: _0x137fdd,
  q: _0x52420c,
  isGroup: _0x3bcf1f,
  sender: _0x17bd83,
  senderNumber: _0x441aa0,
  botNumber2: _0x1b989b,
  botNumber: _0x27c4f8,
  pushname: _0x1f9c42,
  isMe: _0x1a21d1,
  isOwner: _0x17344b,
  groupMetadata: _0x3c91d6,
  groupName: _0x2f8a10,
  participants: _0x3a80ce,
  groupAdmins: _0x32a6ea,
  isBotAdmins: _0x49d40b,
  isAdmins: _0x1040ba,
  reply: _0x114c20
}) => {
  try {
    let _0x5166eb = "*╭─「zɪᴍʙᴀʙᴡᴇ-ᴍᴅ」*\n*│╭───────────────╮*\n*│    𝙲𝙾𝙽𝚅𝙴𝚁𝚃 𝙼𝙴𝙽𝚄🔄    ▎*\n*├────────────────╯*\n\n";
    for (let _0x10ef61 = 0x0; _0x10ef61 < commands.length; _0x10ef61++) {
      if (commands[_0x10ef61].category === 'convert') {
        if (!commands[_0x10ef61].dontAddCommandList) {
          _0x5166eb += "╭──────────────────●●➣\n│ • *Command:* " + commands[_0x10ef61].pattern + "\n│ • *Use:* " + commands[_0x10ef61].use + "\n╰──────────────────●●➣\n\n";
        }
      }
    }
    ;
    let _0x28eee0 = [{
      'buttonId': _0x4afb08 + 'sc',
      'buttonText': {
        'displayText': "GET BOT'S SCRIPT"
      },
      'type': 0x1
    }, {
      'buttonId': _0x4afb08 + "ping",
      'buttonText': {
        'displayText': "GET BOT'S PING"
      },
      'type': 0x1
    }];
    let _0xfa6f21 = {
      'image': {
        'url': "https://files.catbox.moe/s955ux.jpg"
      },
      'caption': _0x5166eb,
      'footer': config.FOOTER,
      'headerType': 0x4,
      'buttons': _0x28eee0
    };
    return await _0x415548.buttonMessage(_0x1a8eac, _0xfa6f21, _0x3a6a5c);
  } catch (_0xf9adde) {
    _0x114c20("*ERROR !!*");
    _0x45f904(_0xf9adde);
  }
});
cmd({
  'pattern': "othermenu",
  'react': '👾',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x5ed90d, _0x464051, _0x51e7d0, {
  from: _0x441498,
  prefix: _0x2047d3,
  l: _0x162aeb,
  quoted: _0x18066e,
  body: _0x334bd1,
  isCmd: _0x60bee1,
  command: _0x5a3676,
  args: _0x4adb38,
  q: _0x36b744,
  isGroup: _0x3187fc,
  sender: _0xd6f833,
  senderNumber: _0x40dfd0,
  botNumber2: _0xa56bf4,
  botNumber: _0x523d50,
  pushname: _0xa84e7c,
  isMe: _0x377cbe,
  isOwner: _0x5f64d,
  groupMetadata: _0x648064,
  groupName: _0xab37c7,
  participants: _0x519700,
  groupAdmins: _0x5be1a6,
  isBotAdmins: _0x35625c,
  isAdmins: _0x393d51,
  reply: _0x2ace2e
}) => {
  try {
    let _0xea5450 = "*╭─「ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ」*\n*│╭───────────────╮*\n*│   ♘   𝙾𝚃𝙷𝙴𝚁  𝙼𝙴𝙽𝚄   📚   ▎*\n*├────────────────╯*\n\n";
    for (let _0x307351 = 0x0; _0x307351 < commands.length; _0x307351++) {
      if (commands[_0x307351].category === 'misc') {
        if (!commands[_0x307351].dontAddCommandList) {
          _0xea5450 += "╭──────────────────●●➣\n│ • *Command:* " + commands[_0x307351].pattern + "\n│ • *Use:* " + commands[_0x307351].use + "\n╰──────────────────●●➣\n\n";
        }
      }
    }
    ;
    let _0x4791e5 = [{
      'buttonId': _0x2047d3 + 'sc',
      'buttonText': {
        'displayText': "GET BOT'S SCRIPT"
      },
      'type': 0x1
    }, {
      'buttonId': _0x2047d3 + "ping",
      'buttonText': {
        'displayText': "GET BOT'S PING"
      },
      'type': 0x1
    }];
    let _0x173504 = {
      'image': {
        'url': 'https://files.catbox.moe/9vuqa7.jpg'
      },
      'caption': _0xea5450,
      'footer': config.FOOTER,
      'headerType': 0x4,
      'buttons': _0x4791e5
    };
    return await _0x5ed90d.buttonMessage(_0x441498, _0x173504, _0x464051);
  } catch (_0x314f62) {
    _0x2ace2e("*ERROR !!*");
    _0x162aeb(_0x314f62);
  }
});
cmd({
  'pattern': "ownermenu",
  'react': '💼',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x689a47, _0x560553, _0x1054ed, {
  from: _0x4cd003,
  prefix: _0x2e59d6,
  l: _0x1e8717,
  quoted: _0x57fc37,
  body: _0x503a0b,
  isCmd: _0x43ab70,
  command: _0x41c30e,
  args: _0x4d31bb,
  q: _0x1732b1,
  isGroup: _0x4fd3f3,
  sender: _0xa5aaa5,
  senderNumber: _0x52dd08,
  botNumber2: _0x26d783,
  botNumber: _0x2441ed,
  pushname: _0x488ff9,
  isMe: _0x1112d2,
  isOwner: _0x1501b,
  groupMetadata: _0x5a64ed,
  groupName: _0xa5c07d,
  participants: _0x322873,
  groupAdmins: _0x36f39d,
  isBotAdmins: _0x25b934,
  isAdmins: _0xfaa9de,
  reply: _0x1075b4
}) => {
  try {
    let _0x1f80b3 = "*╭─「ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ」*\n*│╭───────────────╮*\n*│   ♘   𝙾𝚆𝙽𝙴𝚁  𝙼𝙴𝙽𝚄   👦   ▎*\n*├────────────────╯*\n\n";
    for (let _0x3b46e0 = 0x0; _0x3b46e0 < commands.length; _0x3b46e0++) {
      if (commands[_0x3b46e0].category === "owner") {
        if (!commands[_0x3b46e0].dontAddCommandList) {
          _0x1f80b3 += "╭──────────────────●●➣\n│ • *Command:* " + commands[_0x3b46e0].pattern + "\n│ • *Use:* " + commands[_0x3b46e0].use + "\n╰──────────────────●●➣\n\n";
        }
      }
    }
    ;
    let _0x5c5bd1 = [{
      'buttonId': _0x2e59d6 + 'sc',
      'buttonText': {
        'displayText': "GET BOT'S SCRIPT"
      },
      'type': 0x1
    }, {
      'buttonId': _0x2e59d6 + "ping",
      'buttonText': {
        'displayText': "GET BOT'S PING"
      },
      'type': 0x1
    }];
    let _0x28b7ad = {
      'image': {
        'url': 'https://files.catbox.moe/u14bzz.jpg'
      },
      'caption': _0x1f80b3,
      'footer': config.FOOTER,
      'headerType': 0x4,
      'buttons': _0x5c5bd1
    };
    return await _0x689a47.buttonMessage(_0x4cd003, _0x28b7ad, _0x560553);
  } catch (_0x49d0e9) {
    _0x1075b4("*ERROR !!*");
    _0x1e8717(_0x49d0e9);
  }
});
cmd({
  'pattern': "aimn",
  'react': '〽️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x48f029, _0x543700, _0x2b5e96, {
  from: _0x4bf6ed,
  prefix: _0x305b06,
  l: _0x38e58c,
  quoted: _0x1f9458,
  body: _0x21758c,
  isCmd: _0x5a6a8e,
  command: _0x4c0232,
  args: _0x1c5479,
  q: _0x111d44,
  isGroup: _0xa62e30,
  sender: _0x3e26f7,
  senderNumber: _0x1b3c3a,
  botNumber2: _0x21c932,
  botNumber: _0x46b00a,
  pushname: _0x403e22,
  isMe: _0x480f1a,
  isOwner: _0x26be47,
  groupMetadata: _0x265387,
  groupName: _0x4a38d7,
  participants: _0x434a3b,
  groupAdmins: _0x52d7ba,
  isBotAdmins: _0x36d82d,
  isAdmins: _0x3626fb,
  reply: _0x2b4d2f
}) => {
  try {
    let _0x347b0e = "*╭─「zɪᴍʙᴀʙᴡᴇ-ᴍᴅ」*\n*│╭───────────────╮*\n*│           ᴀɪ     ᴍᴇɴᴜ   ☘   ▎*\n*├────────────────╯*\n\n";
    for (let _0x1d723d = 0x0; _0x1d723d < commands.length; _0x1d723d++) {
      if (commands[_0x1d723d].category === 'ai') {
        if (!commands[_0x1d723d].dontAddCommandList) {
          _0x347b0e += "╭──────────────────●●➣\n│ • *Command:* " + commands[_0x1d723d].pattern + "\n│ • *Use:* " + commands[_0x1d723d].use + "\n╰──────────────────●●➣\n\n";
        }
      }
    }
    ;
    let _0xade7ee = [{
      'buttonId': _0x305b06 + 'sc',
      'buttonText': {
        'displayText': "GET BOT'S SCRIPT"
      },
      'type': 0x1
    }, {
      'buttonId': _0x305b06 + "ping",
      'buttonText': {
        'displayText': "GET BOT'S PING"
      },
      'type': 0x1
    }];
    let _0x47a6f7 = {
      'image': {
        'url': "https://files.catbox.moe/c9nag4.jpg"
      },
      'caption': _0x347b0e,
      'footer': config.FOOTER,
      'headerType': 0x4,
      'buttons': _0xade7ee
    };
    return await _0x48f029.buttonMessage(_0x4bf6ed, _0x47a6f7, _0x543700);
  } catch (_0x41c837) {
    _0x2b4d2f("*ERROR !!*");
    _0x38e58c(_0x41c837);
  }
});
cmd({
  'pattern': "logomenu",
  'react': '🎡',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x296d17, _0x545235, _0x57969c, {
  from: _0x150718,
  prefix: _0x88714,
  l: _0x18c48e,
  quoted: _0x4a94f9,
  body: _0x2c5137,
  isCmd: _0x299e5c,
  command: _0x567e14,
  args: _0x1454d1,
  q: _0xb44160,
  isGroup: _0x339d5c,
  sender: _0x4742e5,
  senderNumber: _0xdcba1e,
  botNumber2: _0x1554d5,
  botNumber: _0xae6aac,
  pushname: _0x5b6f5c,
  isMe: _0x2161fb,
  isOwner: _0x5a2852,
  groupMetadata: _0x29e7dc,
  groupName: _0x15ee22,
  participants: _0x22216d,
  groupAdmins: _0x426aa4,
  isBotAdmins: _0x110d9a,
  isAdmins: _0x591944,
  reply: _0x3a7b9d
}) => {
  try {
    let _0x2850f1 = "*╭─「ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ」*\n*│╭───────────────╮*\n*│      𝙻𝙾𝙶𝙾  𝙼𝙴𝙽𝚄   🎨     ▎*\n*├────────────────╯*\n\n";
    for (let _0x57331b = 0x0; _0x57331b < commands.length; _0x57331b++) {
      if (commands[_0x57331b].category === "logo") {
        if (!commands[_0x57331b].dontAddCommandList) {
          _0x2850f1 += "╭──────────────────●●➣\n│ • *Command:* " + commands[_0x57331b].pattern + "\n│ • *Use:* " + commands[_0x57331b].use + "\n╰──────────────────●●➣\n\n";
        }
      }
    }
    ;
    let _0x12b48a = [{
      'buttonId': _0x88714 + 'sc',
      'buttonText': {
        'displayText': "GET BOT'S SCRIPT"
      },
      'type': 0x1
    }, {
      'buttonId': _0x88714 + "ping",
      'buttonText': {
        'displayText': "GET BOT'S PING"
      },
      'type': 0x1
    }];
    let _0x2065c9 = {
      'image': {
        'url': "https://files.catbox.moe/bcde3x.jpg"
      },
      'caption': _0x2850f1,
      'footer': config.FOOTER,
      'headerType': 0x4,
      'buttons': _0x12b48a
    };
    return await _0x296d17.buttonMessage(_0x150718, _0x2065c9, _0x545235);
  } catch (_0x13f189) {
    _0x3a7b9d("*ERROR !!*");
    _0x18c48e(_0x13f189);
  }
});
cmd({
  'pattern': "menu2",
  'react': "👨‍💻",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x245fc3, _0x388bf0, _0x368889, {
  from: _0x281712,
  prefix: _0x2f7c23,
  l: _0x5bba57,
  quoted: _0x5cfb98,
  body: _0x50364e,
  isCmd: _0x22a0c6,
  command: _0x226b05,
  args: _0x3f312a,
  q: _0x524a3d,
  isGroup: _0x539db1,
  sender: _0xbaf1bb,
  senderNumber: _0x50594c,
  botNumber2: _0x4074b7,
  botNumber: _0x20927d,
  pushname: _0xc5d104,
  isMe: _0x397c2a,
  isOwner: _0x4ef01e,
  groupMetadata: _0x500e85,
  groupName: _0x5a0774,
  participants: _0x349670,
  groupAdmins: _0x1ca7df,
  isBotAdmins: _0x5bd841,
  isAdmins: _0x49cc1e,
  reply: _0x4599fe
}) => {
  try {
    let _0x1eab6f = "*╭─「ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ」*\n*│╭───────────────╮*\n*│  ♘  𝙽𝙴𝚆 𝙲𝙼𝙳  𝙼𝙴𝙽𝚄  ⏳   ▎*\n*├────────────────╯*\n\n";
    for (let _0x5813fc = 0x0; _0x5813fc < commands.length; _0x5813fc++) {
      if (commands[_0x5813fc].category === "menu") {
        if (!commands[_0x5813fc].dontAddCommandList) {
          _0x1eab6f += "╭──────────────────●●➣\n│ • *Command:* " + commands[_0x5813fc].pattern + "\n│ • *Use:* " + commands[_0x5813fc].use + "\n╰──────────────────●●➣\n\n";
        }
      }
    }
    ;
    let _0x1e084b = [{
      'buttonId': _0x2f7c23 + 'sc',
      'buttonText': {
        'displayText': "GET BOT'S SCRIPT"
      },
      'type': 0x1
    }, {
      'buttonId': _0x2f7c23 + 'ping',
      'buttonText': {
        'displayText': "GET BOT'S PING"
      },
      'type': 0x1
    }];
    let _0x3a7201 = {
      'image': {
        'url': 'https://files.catbox.moe/bcde3x.jpg'
      },
      'caption': _0x1eab6f,
      'footer': config.FOOTER,
      'headerType': 0x4,
      'buttons': _0x1e084b
    };
    return await _0x245fc3.buttonMessage(_0x281712, _0x3a7201, _0x388bf0);
  } catch (_0x14c4e7) {
    _0x4599fe("*ERROR !!*");
    _0x5bba57(_0x14c4e7);
  }
});
cmd({
  'pattern': "newsmenu",
  'react': '🌐',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x2c3b99, _0x5df242, _0x43f459, {
  from: _0x505bd0,
  prefix: _0x55f7f7,
  l: _0x225395,
  quoted: _0x551e48,
  body: _0x5cf1b8,
  isCmd: _0x2998cc,
  command: _0x38d0d5,
  args: _0x1f5c69,
  q: _0x71f92c,
  isGroup: _0x95bc55,
  sender: _0x1f2a34,
  senderNumber: _0x49beb8,
  botNumber2: _0x1b6237,
  botNumber: _0x3322c5,
  pushname: _0x22a7be,
  isMe: _0x5387f9,
  isOwner: _0x27d034,
  groupMetadata: _0x836308,
  groupName: _0x40bead,
  participants: _0x3bf0dc,
  groupAdmins: _0x91839e,
  isBotAdmins: _0x456ce7,
  isAdmins: _0x8c6fd1,
  reply: _0x1009eb
}) => {
  try {
    let _0x58b745 = "*╭─「ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ」*\n*│╭───────────────╮*\n*│      𝙽𝙴𝚆𝚂   𝙼𝙴𝙽𝚄   🌏    ▎*\n*├────────────────╯*\n\n";
    for (let _0x304a8b = 0x0; _0x304a8b < commands.length; _0x304a8b++) {
      if (commands[_0x304a8b].category === "news") {
        if (!commands[_0x304a8b].dontAddCommandList) {
          _0x58b745 += "╭──────────────────●●➣\n│ • *Command:* " + commands[_0x304a8b].pattern + "\n│ • *Use:* " + commands[_0x304a8b].use + "\n╰──────────────────●●➣\n\n";
        }
      }
    }
    ;
    let _0xeb64b6 = [{
      'buttonId': _0x55f7f7 + 'sc',
      'buttonText': {
        'displayText': "GET BOT'S SCRIPT"
      },
      'type': 0x1
    }, {
      'buttonId': _0x55f7f7 + "ping",
      'buttonText': {
        'displayText': "GET BOT'S PING"
      },
      'type': 0x1
    }];
    let _0x232af4 = {
      'image': {
        'url': "https://files.catbox.moe/bcde3x.jpg"
      },
      'caption': _0x58b745,
      'footer': config.FOOTER,
      'headerType': 0x4,
      'buttons': _0xeb64b6
    };
    return await _0x2c3b99.buttonMessage(_0x505bd0, _0x232af4, _0x5df242);
  } catch (_0x204592) {
    _0x1009eb("*ERROR !!*");
    _0x225395(_0x204592);
  }
});
async function dlPanda(_0x441ee3) {
  try {
    const _0x21d796 = await fetch("https://dlpanda.com/id?url=" + _0x441ee3 + "&token=G7eRpMaa");
    const _0xdc57dd = await _0x21d796.text();
    const _0x426d03 = cheerio.load(_0xdc57dd);
    const _0x3b07c6 = {
      'image': [],
      'video': []
    };
    _0x426d03("div.hero.col-md-12.col-lg-12.pl-0.pr-0 img, div.hero.col-md-12.col-lg-12.pl-0.pr-0 video").each(function () {
      const _0x2e2a87 = _0x426d03(this);
      const _0xff3011 = _0x2e2a87.is('video');
      const _0x179421 = _0xff3011 ? _0x2e2a87.find("source").attr("src") : _0x2e2a87.attr("src");
      const _0x1f3fe3 = _0x179421.startsWith('//') ? "https:" + _0x179421 : _0x179421;
      _0x3b07c6[_0xff3011 ? "video" : "image"].push({
        'src': _0x1f3fe3,
        'width': _0x2e2a87.attr("width"),
        ...(_0xff3011 ? {
          'type': _0x2e2a87.find('source').attr('type'),
          'controls': _0x2e2a87.attr("controls"),
          'style': _0x2e2a87.attr("style")
        } : {})
      });
    });
    return _0x3b07c6;
  } catch (_0x30740e) {
    console.error("Error fetching data:", _0x30740e);
  }
}
cmd({
  'pattern': "tiktok",
  'alias': ['tt', "ttdl", "tiktokdl"],
  'desc': "Download tiktok videos",
  'category': "download",
  'use': ".tiktok *<Tiktok Url>*",
  'filename': __filename
}, async (_0x2cb95a, _0x29f246, _0x42f1a1, {
  from: _0x5ed02b,
  l: _0x170c56,
  prefix: _0x2418d0,
  quoted: _0x1b30c2,
  body: _0x353bac,
  isCmd: _0x4f3e60,
  command: _0x120815,
  args: _0x6bdb85,
  q: _0x2ad8f2,
  isGroup: _0x1ed8b3,
  sender: _0xdd670e,
  senderNumber: _0x43ff99,
  botNumber2: _0x414f28,
  botNumber: _0x2e924d,
  pushname: _0x3944cf,
  isMe: _0xbf1268,
  isOwner: _0x18d2eb,
  groupMetadata: _0x281809,
  groupName: _0x44e366,
  participants: _0x1586fd,
  groupAdmins: _0xcb60e1,
  isBotAdmins: _0x300e29,
  isAdmins: _0x4c2692,
  reply: _0x173900
}) => {
  try {
    await _0x2cb95a.sendMessage(_0x5ed02b, {
      'react': {
        'text': '💫',
        'key': _0x29f246.key
      }
    });
    if (!_0x2ad8f2) {
      return await _0x173900(needtt);
    }
    if (!_0x2ad8f2.includes('tiktok')) {
      return await _0x173900("invalid_url");
    }
    const _0x2f1cfc = await fetchJson("https://api-pink-venom.vercel.app/api/tiktok?url=" + _0x2ad8f2);
    let _0x24f5c5 = "🌏 *T I K T O K - D O W N L O A D E R*\n\n    *◦ Title:* " + _0x2f1cfc.result.title + "\n    *◦ Region:* " + _0x2f1cfc.result.region + "\n    *◦ Duration:* " + _0x2f1cfc.result.duration + "\n";
    const _0x2bf86e = [{
      'buttonId': _0x2418d0 + ("ttvid " + _0x2f1cfc.result.no_wm),
      'buttonText': {
        'displayText': "DOWNLOAD VIDEO WITHOUT WATERMARK"
      },
      'type': 0x1
    }, {
      'buttonId': _0x2418d0 + ("ttvid " + _0x2f1cfc.result.with_wm),
      'buttonText': {
        'displayText': "DOWNLOAD VIDEO WATERMARK"
      },
      'type': 0x1
    }, {
      'buttonId': _0x2418d0 + ("tikmp3 " + _0x2f1cfc.result.music),
      'buttonText': {
        'displayText': "DOWNLOAD VIDEO AUDIO"
      },
      'type': 0x1
    }];
    const _0x322db5 = {
      'image': {
        'url': config.LOGO
      },
      'caption': _0x24f5c5,
      'footer': config.FOOTER,
      'buttons': _0x2bf86e,
      'headerType': 0x4
    };
    await _0x2cb95a.buttonMessage(_0x5ed02b, _0x322db5, _0x29f246);
  } catch (_0x14ff2a) {
    if (!_0x2ad8f2) {
      return _0x173900("🚩 *Please give me words to search*");
    }
    const _0x25a229 = await dlPanda(_0x2ad8f2);
    if (0x0 === _0x25a229.video.length) {
      for (let _0x5b4921 = 0x0; _0x5b4921 < _0x25a229.image.length; _0x5b4921++) {
        await _0x2cb95a.sendMessage(_0x5ed02b, {
          'image': {
            'url': _0x25a229.image[_0x5b4921].src
          },
          'caption': config.FOOTER
        }, {
          'quoted': _0x29f246
        });
      }
    } else {
      for (let _0x2b3158 = 0x0; _0x2b3158 < _0x25a229.video.length; _0x2b3158++) {
        await _0x2cb95a.sendMessage(_0x5ed02b, {
          'video': {
            'url': _0x25a229.video[_0x2b3158].src
          },
          'caption': config.FOOTER
        }, {
          'quoted': _0x29f246
        });
      }
    }
    console.log(_0x14ff2a);
    _0x173900('' + _0x14ff2a);
  }
});
cmd({
  'pattern': "ttvid",
  'dontAddCommandList': true,
  'use': ".tt1 <tiktok link>",
  'filename': __filename
}, async (_0x183942, _0x2d92fd, _0x5395cf, {
  from: _0x4d6bbc,
  l: _0x2e9a3d,
  quoted: _0xbd10dc,
  body: _0x3deeeb,
  isCmd: _0x9cd753,
  command: _0x5b4ebe,
  args: _0x765daf,
  q: _0x231757,
  isGroup: _0x3a3456,
  sender: _0x9c2ad0,
  senderNumber: _0x16a1f1,
  botNumber2: _0x87c948,
  botNumber: _0x18d49e,
  pushname: _0xa4f3b7,
  isMe: _0x1d02d9,
  isOwner: _0x1eba39,
  groupMetadata: _0x3c720c,
  groupName: _0x553571,
  participants: _0x2250a1,
  groupAdmins: _0x216e28,
  isBotAdmins: _0x2dc5e2,
  isAdmins: _0x1d9066,
  reply: _0x2595b8
}) => {
  try {
    if (!_0x231757) {
      return await _0x2595b8(needus);
    }
    await _0x183942.sendMessage(_0x4d6bbc, {
      'react': {
        'text': '💫',
        'key': _0x2d92fd.key
      }
    });
    await _0x183942.sendMessage(_0x4d6bbc, {
      'video': {
        'url': _0x231757
      },
      'caption': config.FOOTER
    }, {
      'quoted': _0x2d92fd
    });
    await _0x183942.sendMessage(_0x4d6bbc, {
      'react': {
        'text': '✅',
        'key': _0x2d92fd.key
      }
    });
  } catch (_0x33251c) {
    _0x2595b8("*Error !!*");
    console.log(_0x33251c);
  }
});
cmd({
  'pattern': "tikmp3",
  'alias': ["tiktokmp3"],
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x56c46b, _0x234f23, _0x1cd229, {
  from: _0x18d85c,
  l: _0x14c987,
  quoted: _0x5ec1ee,
  body: _0x29a3cd,
  isCmd: _0x5dc8fd,
  command: _0x4726ee,
  args: _0x13520c,
  q: _0x5a50c1,
  isGroup: _0x4273f1,
  sender: _0x271a1c,
  senderNumber: _0x444767,
  botNumber2: _0x2d5bd3,
  botNumber: _0x480a94,
  pushname: _0x28b7f5,
  isMe: _0x96e98d,
  isOwner: _0x2bd08d,
  groupMetadata: _0x585ac7,
  groupName: _0x4b6e19,
  participants: _0x246917,
  groupAdmins: _0x13f427,
  isBotAdmins: _0x49f199,
  isAdmins: _0x775449,
  reply: _0x227ed7
}) => {
  try {
    if (!_0x5a50c1) {
      return await _0x227ed7(needus);
    }
    await _0x56c46b.sendMessage(_0x18d85c, {
      'react': {
        'text': '💫',
        'key': _0x234f23.key
      }
    });
    _0x56c46b.sendMessage(_0x18d85c, {
      'audio': {
        'url': _0x5a50c1
      },
      'mimetype': "audio/mpeg"
    }, {
      'quoted': _0x234f23
    });
    await _0x56c46b.sendMessage(_0x18d85c, {
      'react': {
        'text': '✅',
        'key': _0x234f23.key
      }
    });
  } catch (_0x295d77) {
    _0x227ed7("*Error !!*");
    console.log(_0x295d77);
  }
});
cmd({
  'pattern': "tiktok2",
  'alias': ["tt2"],
  'use': ".tiktok2 *<Tiktok Url>*",
  'desc': "Download videos and images from tiktok.",
  'category': "download",
  'filename': __filename
}, async (_0x161f5f, _0x84871e, _0xa43d6e, {
  from: _0x24d095,
  l: _0x13074b,
  quoted: _0x22a975,
  body: _0x5cb4e1,
  isCmd: _0x15da6e,
  command: _0x561eb0,
  args: _0x5f3f85,
  q: _0x1397e5,
  isGroup: _0x1b2d89,
  sender: _0x49ab51,
  senderNumber: _0x18afea,
  botNumber2: _0x2e488c,
  botNumber: _0x16781a,
  pushname: _0x9f727e,
  isMe: _0x266443,
  isOwner: _0x3bda6c,
  groupMetadata: _0x360421,
  groupName: _0x397d7b,
  participants: _0x5d51c3,
  groupAdmins: _0x51c236,
  isBotAdmins: _0x12bdbc,
  isAdmins: _0x233047,
  reply: _0x329bf6
}) => {
  try {
    await _0x161f5f.sendMessage(_0x24d095, {
      'react': {
        'text': '💫',
        'key': _0x84871e.key
      }
    });
    if (!_0x1397e5) {
      return _0x329bf6("🚩 *Please give me words to search*");
    }
    const _0x2231f5 = await dlPanda(_0x1397e5);
    let _0x516b0b = config.FOOTER;
    if (0x0 === _0x2231f5.video.length) {
      for (let _0x333da6 = 0x0; _0x333da6 < _0x2231f5.image.length; _0x333da6++) {
        await _0x161f5f.sendMessage(_0x24d095, {
          'image': {
            'url': _0x2231f5.image[_0x333da6].src
          },
          'caption': _0x516b0b
        }, {
          'quoted': _0x84871e
        });
      }
    } else {
      for (let _0x10d2c7 = 0x0; _0x10d2c7 < _0x2231f5.video.length; _0x10d2c7++) {
        await _0x161f5f.sendMessage(_0x24d095, {
          'video': {
            'url': _0x2231f5.video[_0x10d2c7].src
          },
          'caption': _0x516b0b
        }, {
          'quoted': _0x84871e
        });
      }
    }
  } catch (_0x53c94b) {
    console.log(_0x53c94b);
    await _0x161f5f.sendMessage(_0x24d095, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x84871e
    });
  }
});
cmd({
  'pattern': 'fb',
  'alias': ['facebook'],
  'category': 'download',
  'use': ".fb *<Facebook Url>*",
  'filename': __filename
}, async (_0x5352ac, _0x3e26af, _0x4315f0, {
  from: _0x1516bf,
  l: _0x4b2092,
  quoted: _0x213395,
  body: _0x5f16e8,
  isCmd: _0x444027,
  command: _0x9b893,
  args: _0x6cd660,
  q: _0x3adafd,
  isGroup: _0x3ed96e,
  sender: _0x59aae3,
  senderNumber: _0x158c24,
  botNumber2: _0x2ea9a6,
  botNumber: _0x3fdf43,
  pushname: _0x5423d1,
  isMe: _0x3efaeb,
  isOwner: _0x146985,
  groupMetadata: _0x22bd9e,
  groupName: _0x483db4,
  participants: _0x572636,
  groupAdmins: _0x13b279,
  isBotAdmins: _0x4a595d,
  isAdmins: _0x55967a,
  reply: _0x9b0d33
}) => {
  try {
    if (!_0x3adafd) {
      return await _0x9b0d33(needus);
    }
    await _0x5352ac.sendMessage(_0x1516bf, {
      'react': {
        'text': '💫',
        'key': _0x3e26af.key
      }
    });
    let _0x2f6f87 = config.FOOTER;
    let _0x46c32c;
    let _0x2cb64a;
    ({
      status: _0x46c32c,
      result: _0x2cb64a
    } = await fbdown.V2(_0x3adafd));
    if (!_0x46c32c) {
      ({
        status: _0x46c32c,
        result: _0x2cb64a
      } = await fbdown.V3(_0x3adafd));
    }
    if (!_0x46c32c) {
      ({
        status: _0x46c32c,
        result: _0x2cb64a
      } = await fbdown.V1(_0x3adafd));
    }
    if (!_0x46c32c) {
      return await _0x9b0d33("*Please check the url and try again*");
    }
    const _0x4cc0ba = _0x2cb64a.media.filter(_0x5a13c7 => (_0x5a13c7?.["quality"] || '').includes('HD'));
    for (const _0x5b5867 of _0x4cc0ba) {
      if ((_0x5b5867?.['quality'] || '').includes('HD')) {
        await _0x5352ac.sendMessage(_0x1516bf, {
          'video': {
            'url': _0x5b5867.url
          },
          'caption': _0x2f6f87
        }, {
          'quoted': _0x3e26af
        });
      }
    }
  } catch (_0x28229d) {
    _0x9b0d33('' + _0x28229d);
    console.log(_0x28229d);
  }
});
cmd({
  'pattern': "system",
  'alias': ["info", "botinfo"],
  'desc': "check up time",
  'use': '.system',
  'category': "main",
  'react': "🕹️",
  'filename': __filename
}, async (_0x22ec52, _0x1303c4, _0x4fd131, {
  from: _0x2f918d,
  quoted: _0x5d5963,
  body: _0x3fbadc,
  isCmd: _0x3b1fd3,
  command: _0x108209,
  args: _0x337065,
  q: _0x43d7d4,
  isGroup: _0x75f2e6,
  sender: _0x525710,
  senderNumber: _0x53332a,
  botNumber2: _0x5dc7a5,
  botNumber: _0x2d68d7,
  pushname: _0x131698,
  isMe: _0x55b4cb,
  isOwner: _0x58d70b,
  groupMetadata: _0x2dd25a,
  groupName: _0x393ec5,
  participants: _0x5e7750,
  groupAdmins: _0x5c3fbf,
  isBotAdmins: _0x554518,
  isAdmins: _0x46997f,
  reply: _0x1cbba3
}) => {
  try {
    let _0x425e71 = " \n\n *⏳ ᴜᴘᴛɪᴍᴇ*:  " + runtime(process.uptime()) + "    \n *📟ʀᴀᴍ ᴜsᴀɢᴇ*: " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB\n *⚙️ʜᴏsᴛɴᴀᴍᴇ*: " + os.hostname() + "\n *👨‍💻ᴏᴡɴᴇʀ*: ᴍᴀʟᴠɪɴ ᴋɪɴɢ\n *🧬ᴠᴇʀsɪᴏɴ*: 1.0.0\n    \n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ xᴅ ᴠ2\n";
    await _0x22ec52.sendMessage(_0x2f918d, {
      'image': {
        'url': config.LOGO
      },
      'caption': _0x425e71
    }, {
      'quoted': _0x1303c4 || null
    });
  } catch (_0x1b9c59) {
    console.log(_0x1b9c59);
    _0x1cbba3("Error: " + _0x1b9c59);
  }
});
cmd({
  'pattern': "runtime",
  'desc': "check up time",
  'use': ".runtime",
  'category': "main",
  'react': '⏰',
  'filename': __filename
}, async (_0x3d7386, _0x1bac3e, _0x39ee97, {
  from: _0x209345,
  quoted: _0x596572,
  body: _0x392eab,
  isCmd: _0x345c1e,
  command: _0x5cef1c,
  args: _0x473d80,
  q: _0x21f72b,
  isGroup: _0x58361d,
  sender: _0x29f361,
  senderNumber: _0x1cbf10,
  botNumber2: _0x144ba6,
  botNumber: _0x53b98a,
  pushname: _0x5bfcf,
  isMe: _0x53b23c,
  isOwner: _0x249cb7,
  groupMetadata: _0x4c50a4,
  groupName: _0x3cc5a0,
  participants: _0x5bc9be,
  groupAdmins: _0x488edc,
  isBotAdmins: _0x313361,
  isAdmins: _0x3d71b0,
  reply: _0x2caba
}) => {
  try {
    let _0x2b1d55 = " *🚀 Runtime:-  " + runtime(process.uptime()) + "* ";
    return _0x2caba('' + _0x2b1d55);
  } catch (_0x1dc688) {
    console.log(_0x1dc688);
    _0x2caba('' + _0x1dc688);
  }
});
cmd({
  'pattern': "support",
  'desc': "To get the bot informations.",
  'react': '⛓',
  'category': "main",
  'use': '.support',
  'filename': __filename
}, async (_0x5ce8bf, _0x36b23b, _0x248a79, {
  from: _0xcacb25,
  quoted: _0x1db58f,
  body: _0xdf9a83,
  isCmd: _0x5a273a,
  command: _0x5a83cc,
  args: _0x33cc6a,
  q: _0xb2868d,
  isGroup: _0x8d60b,
  sender: _0x4c6b6d,
  senderNumber: _0x5b9f18,
  botNumber2: _0x57d9f4,
  botNumber: _0x196c05,
  pushname: _0x6197a,
  isMe: _0xb2f09a,
  isOwner: _0x151cf5,
  groupMetadata: _0xaf34b4,
  groupName: _0x1a59d3,
  participants: _0x52de9a,
  groupAdmins: _0xa24834,
  isBotAdmins: _0x17e6fe,
  isAdmins: _0x3b7eca,
  reply: _0x110dd4
}) => {
  try {
    let _0x2744f0 = " *👋 Hello " + _0x6197a + "*\n\n*❖ ZIMBABWE-MD Support Channels ❖*\n\n*Youtube Channel Link:* https://www.youtube.com/@malvintech2\n\n*Whatsapp Channel Link:* hhttps://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z\n\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ ᴛᴇᴄʜ 🇿🇼";
    return await _0x5ce8bf.sendMessage(_0xcacb25, {
      'image': {
        'url': config.LOGO
      },
      'caption': _0x2744f0
    }, {
      'quoted': _0x36b23b
    });
  } catch (_0x4c4903) {
    console.log(_0x4c4903);
    _0x110dd4('' + _0x4c4903);
  }
});