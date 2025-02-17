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
var {
  updateCMDStore,
  isbtnID,
  getCMDStore,
  getCmdForCmdId,
  connectdb,
  input,
  get,
  updb,
  updfb
} = require('../lib/database');
var tesadtag = '';
if (config.LANG === 'SI') {
  tesadtag = "*මට settings update කිරීමට text එකක් දෙන්න. !*";
} else {
  tesadtag = "*Give me text to update settings !*";
}
var desc1 = '';
if (config.LANG === 'SI') {
  desc1 = "එය groups settings fetures යාවත්කාලීන කරයි.";
} else {
  desc1 = "It updates groups setting fetures.";
}
var desc2 = '';
if (config.LANG === 'SI') {
  desc2 = "එය bot's settings යාවත්කාලීන කරයි.";
} else {
  desc2 = "It updates එය bot's  setting.";
}
var desc3 = '';
if (config.LANG === 'SI') {
  desc3 = "එය bot's configs යාවත්කාලීන කරයි.";
} else {
  desc3 = "It updates එය bot's  configs.";
}
var ONLGROUP = '';
if (config.LANG === 'SI') {
  ONLGROUP = "*මෙය group එකක් නොවේ !*";
} else {
  ONLGROUP = "*This is not a group !*";
}
var ADMIN = '';
if (config.LANG === 'SI') {
  ADMIN = "*ඔබ admin නොවේ !*";
} else {
  ADMIN = "*You are not an admin !*";
}
var ADMINim = '';
if (config.LANG === 'SI') {
  ADMINim = "*මම admin නොවේ !*";
} else {
  ADMINim = "*Im not an admin !*";
}
var BOTOW = '';
if (config.LANG === 'SI') {
  BOTOW = "*ඔබ Bot's හිමිකරු හෝ  උපපරිපාලක නොවේ !*";
} else {
  BOTOW = "*You are not bot's owner or moderator !*";
}
var alredy = '';
if (config.LANG === 'SI') {
  alredy = "*මෙම සැකසුම දැනටමත් යාවත්කාලීන කර ඇත !*";
} else {
  alredy = "*This setting alredy updated !*";
}
var needus = '';
if (config.LANG === 'SI') {
  needus = "එය දත්ත සමුදාය නැවත සකසයි.";
} else {
  needus = "It resets database.";
}
cmd({
  'pattern': "settings",
  'alias': ['setting', "botsetting"],
  'desc': desc2,
  'category': "owner",
  'use': ".settings",
  'filename': __filename
}, async (_0x40a7c7, _0x5bf499, _0x4430bc, {
  from: _0x442e28,
  l: _0x1c5102,
  quoted: _0x575b52,
  body: _0x9c833a,
  isCmd: _0x506c89,
  command: _0x2de895,
  args: _0x14ab23,
  q: _0x252001,
  isGroup: _0x408d5c,
  sender: _0x1e6d17,
  senderNumber: _0x24ea5e,
  botNumber2: _0x323a12,
  botNumber: _0x45dc29,
  pushname: _0x5baf73,
  isMe: _0x4869cd,
  isOwner: _0x3ddd75,
  groupMetadata: _0x35e1fc,
  groupName: _0x151756,
  participants: _0x4dfe70,
  groupAdmins: _0x5b6318,
  isBotAdmins: _0x29d659,
  isAdmins: _0x4ab439,
  reply: _0x2eb75d
}) => {
  try {
    if (!_0x4869cd) {
      return await _0x2eb75d(BOTOW);
    }
    const _0x2969b3 = [{
      'title': "➠ AUTO STATUS VIEW",
      'rows': [{
        'title': "❍ Trun On Status view",
        'rowId': ".statusview true"
      }, {
        'title': "❍ Trun Off status view",
        'rowId': ".statusview false"
      }]
    }, {
      'title': "➠ BOT PRESENCE",
      'rows': [{
        'title': "❍ Always Online",
        'rowId': ".pvc available"
      }, {
        'title': "❍ Always offline",
        'rowId': ".pvc unavailable"
      }, {
        'title': "❍ Auto Typing",
        'rowId': ".pvc composing"
      }, {
        'title': "❍ Auto Recroding",
        'rowId': ".pvc recording"
      }]
    }, {
      'title': "➠ AUTO REACTION",
      'rows': [{
        'title': "❍ Turn On Auto React",
        'rowId': ".react true"
      }, {
        'title': "❍ Turn Off Auto React",
        'rowId': ".react false"
      }]
    }, {
      'title': "➠ AUTO BIO UPDATE",
      'rows': [{
        'title': "❍ Trun On Bio Update",
        'rowId': ".bio true"
      }, {
        'title': "❍ Trun Off Bio Update",
        'rowId': ".bio false"
      }]
    }, {
      'title': "➠ AUTO MSG VIEW",
      'rows': [{
        'title': "❍ Turn On Auto Msg View",
        'rowId': ".read true"
      }, {
        'title': "❍ Turn Off Auto Msg View",
        'rowId': ".read false"
      }]
    }, {
      'title': "➠ ANTI CALL",
      'rows': [{
        'title': "❍ Allow Calls",
        'rowId': ".call true"
      }, {
        'title': "❍ Auto Reject Calls",
        'rowId': ".call false"
      }]
    }];
    const _0xf28514 = {
      'text': "*╭─「ᴢɪᴍʙᴀʙᴡᴇ-ᴍᴅ」*\n\n     *⚙️🇧 🇴 🇹  sᴇᴛᴛɪɴɢs⚙️*\n\n_Select setting what you want to On or Off.._",
      'image': {
        'url': 'https://files.catbox.moe/6owcob.jpg'
      },
      'footer': config.FOOTER,
      'title': '',
      'buttonText': "⦁ ❉🔢 ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ɴᴜᴍʙᴇʀ ❉",
      'sections': _0x2969b3
    };
    await _0x40a7c7.listMessage(_0x442e28, _0xf28514, _0x5bf499);
  } catch (_0x54c54c) {
    _0x2eb75d("*Error !!*");
    _0x1c5102(_0x54c54c);
  }
});
cmd({
  'pattern': "antilink",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x1bf12d, _0x1a28bb, _0x418685, {
  from: _0x2a4b9d,
  l: _0xbf2c45,
  quoted: _0x38ee9b,
  body: _0x4a69fe,
  isCmd: _0x246912,
  command: _0x5dd4c8,
  args: _0x7eb4f9,
  q: _0x200d85,
  isGroup: _0x261101,
  sender: _0x2ac886,
  senderNumber: _0x567596,
  botNumber2: _0x46163d,
  botNumber: _0x2b20c3,
  pushname: _0x330d0c,
  isMe: _0x2f2c5a,
  isOwner: _0x34483b,
  groupMetadata: _0x3127f7,
  groupName: _0x25bddc,
  participants: _0x2865db,
  groupAdmins: _0xab89a,
  isBotAdmins: _0x34bd1,
  isAdmins: _0x3b6730,
  reply: _0x4492a4
}) => {
  try {
    if (!_0x261101) {
      return await _0x4492a4(ONLGROUP);
    }
    if (!_0x3b6730) {
      return await _0x4492a4(ADMIN);
    }
    if (!_0x34bd1) {
      return await _0x4492a4(ADMINim);
    }
    const _0x1c6362 = async _0x461c3e => {
      let _0x228db5 = await get(_0x461c3e);
      for (let _0x5ab872 = 0x0; _0x5ab872 < _0x228db5.length; _0x5ab872++) {
        if (_0x228db5[_0x5ab872] === _0x2a4b9d) {
          return true;
        }
      }
      return false;
    };
    if (_0x200d85 === 'on') {
      if (await _0x1c6362("ANTI_LINK")) {
        return await _0x4492a4(alredy);
      }
      let _0x54893d = await get("ANTI_LINK");
      _0x54893d.push(_0x2a4b9d);
      await input("ANTI_LINK", _0x54893d);
      await _0x4492a4("*Anti link updated: " + _0x200d85 + '*');
    } else {
      if (!(await _0x1c6362("ANTI_LINK"))) {
        return await _0x4492a4(alredy);
      }
      const _0x130c8c = await get('ANTI_LINK');
      const _0x1f25ab = _0x130c8c.indexOf(_0x2a4b9d);
      if (_0x1f25ab !== -0x1) {
        _0x130c8c.splice(_0x1f25ab, 0x1);
      }
      await input("ANTI_LINK", _0x130c8c);
      await _0x4492a4("*Anti link updated: " + _0x200d85 + '*');
    }
  } catch (_0x8cec32) {
    _0x4492a4("*Error !!*");
    _0xbf2c45(_0x8cec32);
  }
});
cmd({
  'pattern': "antibot",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x3e91dd, _0x35e3f9, _0x3adb59, {
  from: _0x39bb50,
  l: _0x54efe5,
  quoted: _0x24a26b,
  body: _0x297fbf,
  isCmd: _0x58e0ac,
  command: _0x189916,
  args: _0x5dc4e0,
  q: _0xcc0d6b,
  isGroup: _0x16a068,
  sender: _0x49e7f5,
  senderNumber: _0x267d77,
  botNumber2: _0x4bb9e2,
  botNumber: _0x220e63,
  pushname: _0x20d6e7,
  isMe: _0x553be1,
  isOwner: _0x497fe6,
  groupMetadata: _0x59a650,
  groupName: _0x50e203,
  participants: _0x4c6aed,
  groupAdmins: _0x4a3c47,
  isBotAdmins: _0x4dfcfc,
  isAdmins: _0x612333,
  reply: _0x12868e
}) => {
  try {
    if (!_0x16a068) {
      return await _0x12868e(ONLGROUP);
    }
    if (!_0x612333) {
      return await _0x12868e(ADMIN);
    }
    if (!_0x4dfcfc) {
      return await _0x12868e(ADMINim);
    }
    const _0x1e192c = async _0x5908e1 => {
      let _0x485771 = await get(_0x5908e1);
      for (let _0x203252 = 0x0; _0x203252 < _0x485771.length; _0x203252++) {
        if (_0x485771[_0x203252] === _0x39bb50) {
          return true;
        }
      }
      return false;
    };
    if (_0xcc0d6b === 'on') {
      if (await _0x1e192c("ANTI_BOT")) {
        return await _0x12868e(alredy);
      }
      let _0x4f5faa = await get("ANTI_BOT");
      _0x4f5faa.push(_0x39bb50);
      await input("ANTI_BOT", _0x4f5faa);
      await _0x12868e("*Anti bots updated: " + _0xcc0d6b + '*');
    } else {
      if (!(await _0x1e192c("ANTI_BOT"))) {
        return await _0x12868e(alredy);
      }
      const _0x59447d = await get("ANTI_BOT");
      const _0x57508a = _0x59447d.indexOf(_0x39bb50);
      if (_0x57508a !== -0x1) {
        _0x59447d.splice(_0x57508a, 0x1);
      }
      await input("ANTI_BOT", _0x59447d);
      await _0x12868e("*Anti bots updated: " + _0xcc0d6b + '*');
    }
  } catch (_0x5cc74d) {
    _0x12868e("*Error !!*");
    _0x54efe5(_0x5cc74d);
  }
});
cmd({
  'pattern': "antibad",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x187d52, _0x321628, _0x5f31fc, {
  from: _0x411176,
  l: _0x2ede3c,
  quoted: _0x3f552b,
  body: _0x4bca32,
  isCmd: _0x268e7d,
  command: _0x1e852f,
  args: _0x5e26b3,
  q: _0x29aa1b,
  isGroup: _0x3635e6,
  sender: _0xa606ca,
  senderNumber: _0x20dea4,
  botNumber2: _0x583689,
  botNumber: _0x2ead69,
  pushname: _0x191921,
  isMe: _0x69b9fa,
  isOwner: _0xc5a5a4,
  groupMetadata: _0x201d50,
  groupName: _0x25861b,
  participants: _0x1b4bee,
  groupAdmins: _0x189e5d,
  isBotAdmins: _0xae1f0b,
  isAdmins: _0x2faa18,
  reply: _0x4bfebd
}) => {
  try {
    if (!_0x3635e6) {
      return await _0x4bfebd(ONLGROUP);
    }
    if (!_0x2faa18) {
      return await _0x4bfebd(ADMIN);
    }
    if (!_0xae1f0b) {
      return await _0x4bfebd(ADMINim);
    }
    const _0x109aca = async _0x92f941 => {
      let _0x1a8e14 = await get(_0x92f941);
      for (let _0x26c931 = 0x0; _0x26c931 < _0x1a8e14.length; _0x26c931++) {
        if (_0x1a8e14[_0x26c931] === _0x411176) {
          return true;
        }
      }
      return false;
    };
    if (_0x29aa1b === 'on') {
      if (await _0x109aca("ANTI_BAD")) {
        return await _0x4bfebd(alredy);
      }
      let _0x4a0798 = await get("ANTI_BAD");
      _0x4a0798.push(_0x411176);
      await input('ANTI_BAD', _0x4a0798);
      await _0x4bfebd("*Anti bad words updated: " + _0x29aa1b + '*');
    } else {
      if (!(await _0x109aca('ANTI_BAD'))) {
        return await _0x4bfebd(alredy);
      }
      const _0x32a069 = await get('ANTI_BAD');
      const _0x1e73e7 = _0x32a069.indexOf(_0x411176);
      if (_0x1e73e7 !== -0x1) {
        _0x32a069.splice(_0x1e73e7, 0x1);
      }
      await input("ANTI_BAD", _0x32a069);
      await _0x4bfebd("*Anti bad words updated: " + _0x29aa1b + '*');
    }
  } catch (_0x391c10) {
    _0x4bfebd("*Error !!*");
    _0x2ede3c(_0x391c10);
  }
});
cmd({
  'pattern': "work",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0xa3a2d9, _0x52ed54, _0x5affcd, {
  from: _0x3dce59,
  l: _0x4b9694,
  quoted: _0xc588c4,
  body: _0x562743,
  isCmd: _0x5b76fe,
  command: _0x467d9a,
  args: _0x96a961,
  q: _0x446b85,
  isGroup: _0x78f167,
  sender: _0x24c0c5,
  senderNumber: _0x31e636,
  botNumber2: _0x32aee1,
  botNumber: _0x492828,
  pushname: _0x2bb39a,
  isMe: _0x452f33,
  isOwner: _0x4e9cc4,
  groupMetadata: _0x3388c8,
  groupName: _0x2d0e39,
  participants: _0x9c2387,
  groupAdmins: _0x17ac7f,
  isBotAdmins: _0x270a6a,
  isAdmins: _0x4e690f,
  reply: _0x283c50
}) => {
  try {
    if (!_0x452f33) {
      return await _0x283c50(BOTOW);
    }
    let _0x3692ff = await get("WORK_TYPE");
    if (_0x3692ff === _0x446b85) {
      return await _0x283c50(alredy);
    }
    await input("WORK_TYPE", _0x446b85);
    await _0x283c50("*WORK updated: " + _0x446b85 + '*');
  } catch (_0x5bc7e0) {
    _0x283c50("*Error !!*");
    _0x4b9694(_0x5bc7e0);
  }
});
cmd({
  'pattern': "alivemg",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x2f3c5c, _0x2c227e, _0x562b8b, {
  from: _0x1bf785,
  l: _0x347847,
  quoted: _0x3f3a4a,
  body: _0x41f55a,
  isCmd: _0x40d8f4,
  command: _0x32d1db,
  args: _0x3d651c,
  q: _0x5da19e,
  isGroup: _0x47ac8b,
  sender: _0x130315,
  senderNumber: _0x21f1c4,
  botNumber2: _0x15c13b,
  botNumber: _0x21f5ef,
  pushname: _0x2a4374,
  isMe: _0x2bb278,
  isOwner: _0x3f078a,
  groupMetadata: _0x2ab29b,
  groupName: _0x2a85ed,
  participants: _0x478e9d,
  groupAdmins: _0x1dea42,
  isBotAdmins: _0x515c5a,
  isAdmins: _0xdfd31e,
  reply: _0x597177
}) => {
  try {
    if (!_0x2bb278) {
      return await _0x597177(BOTOW);
    }
    let _0x516b0a = await get("ALIVE");
    if (_0x516b0a === _0x5da19e) {
      return await _0x597177(alredy);
    }
    await input("ALIVE", _0x5da19e);
    await _0x597177("*Alive massage updated:* " + _0x5da19e);
  } catch (_0x2e883d) {
    _0x597177("*Error !!*");
    _0x347847(_0x2e883d);
  }
});
cmd({
  'pattern': "footertxt",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x2cc76f, _0x6329c3, _0x33cfbc, {
  from: _0x2e0a2e,
  l: _0x49c33a,
  quoted: _0x58d5dc,
  body: _0x52adbf,
  isCmd: _0x5340e8,
  command: _0x21f24c,
  args: _0x28c437,
  q: _0x104c08,
  isGroup: _0x52b288,
  sender: _0x1bd432,
  senderNumber: _0x2fcc73,
  botNumber2: _0x3b7043,
  botNumber: _0x3fcfca,
  pushname: _0x52078e,
  isMe: _0x1c598b,
  isOwner: _0x2268a5,
  groupMetadata: _0x2a417b,
  groupName: _0x3aa1de,
  participants: _0x4a3a19,
  groupAdmins: _0x867ffd,
  isBotAdmins: _0xe929b7,
  isAdmins: _0x3028f4,
  reply: _0x43ec19
}) => {
  try {
    if (!_0x1c598b) {
      return await _0x43ec19(BOTOW);
    }
    let _0x515236 = await get("FOOTER");
    if (_0x515236 === _0x104c08) {
      return await _0x43ec19(alredy);
    }
    await input("FOOTER", _0x104c08);
    await _0x43ec19("*Footer updated:* " + _0x104c08);
  } catch (_0x5db929) {
    _0x43ec19("*Error !!*");
    _0x49c33a(_0x5db929);
  }
});
cmd({
  'pattern': 'statusview',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x1270e1, _0x46dc3c, _0x156820, {
  from: _0x511662,
  l: _0x1faba2,
  quoted: _0x479f66,
  body: _0x5f1e21,
  isCmd: _0x156913,
  command: _0x2d28e0,
  args: _0x23d15a,
  q: _0x552643,
  isGroup: _0x1d075e,
  sender: _0xe9c762,
  senderNumber: _0x5b56e1,
  botNumber2: _0x4bc5c1,
  botNumber: _0x4b68e7,
  pushname: _0x45556b,
  isMe: _0x1603d2,
  isOwner: _0x47ffad,
  groupMetadata: _0x1959e6,
  groupName: _0x553474,
  participants: _0xb9008f,
  groupAdmins: _0x7ebe92,
  isBotAdmins: _0x423f96,
  isAdmins: _0x1cc64d,
  reply: _0x5d6375
}) => {
  try {
    if (!_0x1603d2) {
      return await _0x5d6375(BOTOW);
    }
    let _0x557787 = await get("STATUS_VIEW");
    if (_0x557787 === _0x552643) {
      return await _0x5d6375(alredy);
    }
    await input("STATUS_VIEW", _0x552643);
    await _0x5d6375("*STATUS_VIEW updated: " + _0x552643 + '*');
  } catch (_0x3d676c) {
    _0x5d6375("*Error !!*");
    _0x1faba2(_0x3d676c);
  }
});
cmd({
  'pattern': 'pvc',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x23239c, _0xf40925, _0x5a0b47, {
  from: _0x2707e7,
  l: _0x561d01,
  quoted: _0x3267af,
  body: _0x1909f9,
  isCmd: _0x2e480f,
  command: _0x17f713,
  args: _0x3e2464,
  q: _0x531448,
  isGroup: _0x117f84,
  sender: _0x540594,
  senderNumber: _0x3c16cf,
  botNumber2: _0x5c434e,
  botNumber: _0x2c56ff,
  pushname: _0x1e7b24,
  isMe: _0x10b370,
  isOwner: _0x27c5a0,
  groupMetadata: _0x514ca8,
  groupName: _0x5b9e10,
  participants: _0x33d06a,
  groupAdmins: _0x1dd666,
  isBotAdmins: _0x3bf687,
  isAdmins: _0x2d73a6,
  reply: _0x3d5d6e
}) => {
  try {
    if (!_0x10b370) {
      return await _0x3d5d6e(BOTOW);
    }
    let _0x52207f = await get("PRESENCE");
    if (_0x52207f === _0x531448) {
      return await _0x3d5d6e(alredy);
    }
    await input('PRESENCE', _0x531448);
    await _0x3d5d6e("*PRESENCE updated: " + _0x531448 + '*');
  } catch (_0x28cbf5) {
    _0x3d5d6e("*Error !!*");
    _0x561d01(_0x28cbf5);
  }
});
cmd({
  'pattern': "call",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x45dd62, _0x49a9b7, _0x5459be, {
  from: _0x7cf176,
  l: _0x4a507a,
  quoted: _0xda6ebe,
  body: _0x561b60,
  isCmd: _0x2ca628,
  command: _0x2d0b3a,
  args: _0x4bc3c9,
  q: _0x2009b1,
  isGroup: _0x3514ca,
  sender: _0x34c8ee,
  senderNumber: _0x1d1c7f,
  botNumber2: _0x515521,
  botNumber: _0x42fc60,
  pushname: _0x53a98a,
  isMe: _0xc31a29,
  isOwner: _0x516317,
  groupMetadata: _0x175913,
  groupName: _0x3f9245,
  participants: _0x116174,
  groupAdmins: _0x42921f,
  isBotAdmins: _0x1e4539,
  isAdmins: _0x464db3,
  reply: _0x243d69
}) => {
  try {
    if (!_0xc31a29) {
      return await _0x243d69(BOTOW);
    }
    let _0x1013e7 = await get('ANTI_CALL');
    if (_0x1013e7 === _0x2009b1) {
      return await _0x243d69(alredy);
    }
    await input("ANTI_CALL", _0x2009b1);
    await _0x243d69("*ANTI_CALL updated: " + _0x2009b1 + '*');
  } catch (_0x1c9356) {
    _0x243d69("*Error !!*");
    _0x4a507a(_0x1c9356);
  }
});
cmd({
  'pattern': "react",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x172cbf, _0x286ff6, _0x63f078, {
  from: _0x3e9b04,
  l: _0x4799de,
  quoted: _0x15e546,
  body: _0x50644f,
  isCmd: _0x18eaae,
  command: _0x3b33c6,
  args: _0x410915,
  q: _0x393fe2,
  isGroup: _0x4dac2e,
  sender: _0x3c0158,
  senderNumber: _0x4c4dd8,
  botNumber2: _0x5b16ea,
  botNumber: _0x560c9d,
  pushname: _0xe28730,
  isMe: _0x41340c,
  isOwner: _0x42b5e7,
  groupMetadata: _0x55d9bb,
  groupName: _0x249916,
  participants: _0x2f2c62,
  groupAdmins: _0xeeae58,
  isBotAdmins: _0x4eced1,
  isAdmins: _0x225318,
  reply: _0x228bec
}) => {
  try {
    if (!_0x41340c) {
      return await _0x228bec(BOTOW);
    }
    let _0x1d7e87 = await get("AUTO_REACT");
    if (_0x1d7e87 === _0x393fe2) {
      return await _0x228bec(alredy);
    }
    await input("AUTO_REACT", _0x393fe2);
    await _0x228bec("*AUTO_REACT updated: " + _0x393fe2 + '*');
  } catch (_0x3875d8) {
    _0x228bec("*Error !!*");
    _0x4799de(_0x3875d8);
  }
});
cmd({
  'pattern': "bio",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x16efe3, _0x5531a3, _0x17d56e, {
  from: _0x15a563,
  l: _0x15c307,
  quoted: _0x3f1833,
  body: _0x4a6023,
  isCmd: _0x1dce1b,
  command: _0x378a31,
  args: _0x219c85,
  q: _0x9a8702,
  isGroup: _0x1b126e,
  sender: _0x1f5a74,
  senderNumber: _0x290ff5,
  botNumber2: _0x45acf6,
  botNumber: _0xfd9cf0,
  pushname: _0x303638,
  isMe: _0x3f8ae8,
  isOwner: _0x239257,
  groupMetadata: _0x3b668d,
  groupName: _0x29ccaf,
  participants: _0x4aba71,
  groupAdmins: _0x1ea21b,
  isBotAdmins: _0x5091dd,
  isAdmins: _0x11b2d8,
  reply: _0xee5e0e
}) => {
  try {
    if (!_0x3f8ae8) {
      return await _0xee5e0e(BOTOW);
    }
    let _0x39456b = await get('AUTO_BIO');
    if (_0x39456b === _0x9a8702) {
      return await _0xee5e0e(alredy);
    }
    await input("AUTO_BIO", _0x9a8702);
    await _0xee5e0e("*AUTO_BIO updated: " + _0x9a8702 + '*');
  } catch (_0x25b3e2) {
    _0xee5e0e("*Error !!*");
    _0x15c307(_0x25b3e2);
  }
});
cmd({
  'pattern': "setlogo",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x3ebe28, _0x407411, _0xe4274f, {
  from: _0x384ee0,
  l: _0x347a07,
  quoted: _0x52e7eb,
  body: _0x195466,
  isCmd: _0x3c1fa9,
  command: _0x2487ea,
  args: _0xa5532c,
  q: _0x3654cc,
  isGroup: _0x4f4a4f,
  sender: _0x43dd98,
  senderNumber: _0x1b1d32,
  botNumber2: _0x454315,
  botNumber: _0xb6eb64,
  pushname: _0x1dbc31,
  isMe: _0x5cebaa,
  isOwner: _0x5be5eb,
  groupMetadata: _0x386766,
  groupName: _0x1d10aa,
  participants: _0x23f7cb,
  groupAdmins: _0x2a9e3c,
  isBotAdmins: _0x27ba14,
  isAdmins: _0x2f15ef,
  reply: _0x5457d9
}) => {
  try {
    if (!_0x5cebaa) {
      return await _0x5457d9(BOTOW);
    }
    let _0x3a7b67 = await get("LOGO");
    if (_0x3a7b67 === _0x3654cc) {
      return await _0x5457d9(alredy);
    }
    await input("LOGO", _0x3654cc);
    await _0x5457d9("*Logo updated: " + _0x3654cc + '*');
  } catch (_0x2dc858) {
    _0x5457d9("*Error !!*");
    _0x347a07(_0x2dc858);
  }
});
cmd({
  'pattern': 'resetdb',
  'desc': "needus",
  'category': "owner",
  'use': ".resetdb",
  'filename': __filename
}, async (_0x20ff40, _0x3fe2a4, _0x4fb5c7, {
  from: _0x239dab,
  l: _0x6d3281,
  quoted: _0x317859,
  body: _0x57d86a,
  isCmd: _0x5b6866,
  command: _0x4db839,
  args: _0x5b0928,
  q: _0x58a11e,
  isGroup: _0x227fa3,
  sender: _0x3710d6,
  senderNumber: _0x3148ed,
  botNumber2: _0x4b1fd7,
  botNumber: _0x1259e2,
  pushname: _0x228fcb,
  isMe: _0x4334b3,
  isOwner: _0x33dff7,
  groupMetadata: _0x322878,
  groupName: _0x389c2d,
  participants: _0x3b7685,
  groupAdmins: _0x356122,
  isBotAdmins: _0x17ac9d,
  isAdmins: _0x3797d9,
  reply: _0x498447
}) => {
  try {
    if (!_0x4334b3) {
      return await _0x498447(BOTOW);
    }
    await updfb();
    return _0x498447("📶 🇲 🇦 🇱 🇻 🇮 🇳  〽️D Database reseted...♻️");
  } catch (_0x3d21f9) {
    _0x498447(cantf);
    _0x6d3281(_0x3d21f9);
  }
});
cmd({
  'pattern': 'read',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x179f1c, _0x5dedaf, _0x509d6e, {
  from: _0x390419,
  l: _0x10bac3,
  quoted: _0x36ee7d,
  body: _0x55e45c,
  isCmd: _0xf3a2d9,
  command: _0x431693,
  args: _0x53c822,
  q: _0x1d6fdc,
  isGroup: _0x15d084,
  sender: _0x1c1c0c,
  senderNumber: _0x553480,
  botNumber2: _0xb268d,
  botNumber: _0x529192,
  pushname: _0x18fbd5,
  isMe: _0x37b1c6,
  isOwner: _0x510d8c,
  groupMetadata: _0x96b307,
  groupName: _0x5244ea,
  participants: _0x46077a,
  groupAdmins: _0x12f4a4,
  isBotAdmins: _0x2b7628,
  isAdmins: _0x282f0f,
  reply: _0x18d6d6
}) => {
  try {
    if (!_0x37b1c6) {
      return await _0x18d6d6(BOTOW);
    }
    let _0x5677cd = await get('AUTO_MSG_READ');
    if (_0x5677cd === _0x1d6fdc) {
      return await _0x18d6d6(alredy);
    }
    await input('AUTO_MSG_READ', _0x1d6fdc);
    await _0x18d6d6("*AUTO_MSG_READ updated: " + _0x1d6fdc + '*');
  } catch (_0x547dfd) {
    _0x18d6d6("*Error !!*");
    _0x10bac3(_0x547dfd);
  }
});