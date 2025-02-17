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
const fetch = require("node-fetch");
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const config = require("../config");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  getsize,
  h2k,
  isUrl,
  Json,
  minimize,
  runtime,
  sleep,
  fetchJson
} = require('../lib/functions');
const userName = '' + config.GITHUB_USER_NAME;
const token = '' + config.GITHUB_AUTH_TOKEN;
async function githubApiRequest(_0x4eb26f, _0x221aa1 = "GET", _0x59f191 = {}) {
  try {
    const _0x30196f = {
      'method': _0x221aa1,
      'headers': {
        'Authorization': "Basic " + Buffer.from(userName + ':' + token).toString("base64"),
        'Content-Type': "application/json"
      }
    };
    if (_0x221aa1 === "GET" || _0x221aa1 === 'HEAD') {
      delete _0x30196f.body;
    } else {
      _0x30196f.body = JSON.stringify(_0x59f191);
    }
    const _0x14462e = await fetch(_0x4eb26f, _0x30196f);
    return await _0x14462e.json();
  } catch (_0x37a12c) {
    throw new Error("GitHub API request failed: " + _0x37a12c.message);
  }
}
async function checkRepoAvailability() {
  try {
    const _0x583682 = "https://api.github.com/repos/" + userName + '/' + "kingmalvn";
    const _0x19fce3 = {
      'Authorization': "Bearer " + token
    };
    const _0x33976b = await axios.get(_0x583682, {
      'headers': _0x19fce3
    });
    return !!(_0x33976b.status === 0xc8);
  } catch (_0x41bad4) {
    if (_0x41bad4.response && _0x41bad4.response.status === 0x194) {
      return false;
    } else {
      console.error("Error:", _0x41bad4.message);
    }
  }
}
async function githubSearchFile(_0x1a2d89, _0x13eb35) {
  const _0x429cda = 'https://api.github.com/repos/' + userName + '/' + "MALVINOFFICL" + "/contents/" + _0x1a2d89 + "?ref=main";
  const _0x293c45 = await githubApiRequest(_0x429cda);
  return _0x293c45.find(_0x40e98a => _0x40e98a.name === _0x13eb35);
}
async function githubCreateNewFile(_0x598c90, _0x301e5b, _0x3e96e2) {
  const _0xcccdb7 = "https://api.github.com/repos/" + userName + '/' + "MALVINOFFICL" + '/contents/' + _0x598c90 + '/' + _0x301e5b;
  const _0x223468 = {
    'message': "Create new file: " + _0x301e5b,
    'content': Buffer.from(_0x3e96e2).toString("base64")
  };
  return await githubApiRequest(_0xcccdb7, "PUT", _0x223468);
}
async function githubDeleteFile(_0x301233, _0x55e3ae) {
  const _0xed17a9 = await githubSearchFile(_0x301233, _0x55e3ae);
  if (!_0xed17a9) {
    throw new Error("File not found on GitHub.");
  }
  const _0x351c2d = "https://api.github.com/repos/" + userName + '/' + "MALVINOFFICL" + "/contents/" + _0x301233 + '/' + _0x55e3ae;
  const _0x2b234e = {
    'message': "Delete file: " + _0x55e3ae,
    'sha': _0xed17a9.sha
  };
  await githubApiRequest(_0x351c2d, "DELETE", _0x2b234e);
}
const jsonFilePath = path.join(__dirname, "temp_data.json");
function isFileOutOfDate() {
  if (!fs.existsSync(jsonFilePath)) {
    return true;
  }
  const _0x51597f = fs.statSync(jsonFilePath);
  const _0x5a59ba = Date.now();
  const _0x4ea6a2 = (_0x5a59ba - _0x51597f.mtimeMs) / 60000;
  return _0x4ea6a2 >= 0x2;
}
async function githubGetsetting(_0xae4283, _0x534296) {
  if (isFileOutOfDate()) {
    console.log("Fetching new data from GitHub...");
    try {
      const _0x4e39f7 = await githubSearchFile(_0xae4283, _0x534296);
      if (!_0x4e39f7) {
        throw new Error("File not found on GitHub.");
      }
      const _0x42a27f = _0x4e39f7.download_url;
      const _0x58d9b4 = await fetch(_0x42a27f);
      if (!_0x58d9b4.ok) {
        throw new Error("Failed to fetch data: " + _0x58d9b4.statusText);
      }
      const _0x4c75a5 = await _0x58d9b4.text();
      try {
        JSON.parse(_0x4c75a5);
        fs.writeFileSync(jsonFilePath, _0x4c75a5);
        console.log("Data saved to " + jsonFilePath);
      } catch (_0x15d7dc) {
        console.error("Error: Fetched content is not valid JSON.", _0x15d7dc);
        throw new Error("Fetched content is not valid JSON.");
      }
    } catch (_0x4be343) {
      console.error("Error fetching data from GitHub:", _0x4be343);
      throw _0x4be343;
    }
  } else {}
  try {
    const _0x587235 = fs.readFileSync(jsonFilePath);
    return _0x587235;
  } catch (_0x11209d) {
    console.error("Error reading or parsing cached data:", _0x11209d);
    throw new Error("Failed to read or parse cached data.");
  }
}
async function githubGetFileContent(_0x1cce03, _0x23737b) {
  const _0x4d477c = await githubSearchFile(_0x1cce03, _0x23737b);
  if (!_0x4d477c) {
    throw new Error("File not found on GitHub.");
  }
  const _0x56524a = _0x4d477c.download_url;
  const _0x4c3773 = await fetch(_0x56524a);
  return await _0x4c3773.text();
}
async function githubClearAndWriteFile(_0x3c1569, _0x594236, _0x5cfdd9) {
  const _0x32971c = await githubSearchFile(_0x3c1569, _0x594236);
  if (!_0x32971c) {
    await githubCreateNewFile(_0x594236, _0x5cfdd9);
  } else {
    const _0x20d411 = "https://api.github.com/repos/" + userName + '/' + "MALVINOFFICL" + "/contents/" + _0x3c1569 + '/' + _0x594236;
    const _0x398f74 = {
      'message': "Modify file: " + _0x594236,
      'content': Buffer.from(_0x5cfdd9).toString('base64'),
      'sha': _0x32971c.sha
    };
    return await githubApiRequest(_0x20d411, "PUT", _0x398f74);
  }
}
async function githubDeleteAndUploadFile(_0x5d4334, _0x27d72a) {
  await githubDeleteFile(_0x5d4334);
  await githubCreateNewFile(_0x5d4334, _0x27d72a);
}
async function updateCMDStore(_0x27ad43, _0x5c828f) {
  try {
    let _0x541409 = JSON.parse(await githubGetFileContent("Non-Btn", 'data.json'));
    _0x541409.push({
      [_0x27ad43]: _0x5c828f
    });
    return true;
  } catch (_0x21a064) {
    console.log(_0x21a064);
    return false;
  }
}
async function isbtnID(_0x529bab) {
  try {
    let _0xc6860b = JSON.parse(await githubGetFileContent("Non-Btn", 'data.json'));
    let _0x452d1d = null;
    for (const _0x190591 of _0xc6860b) {
      if (_0x190591[_0x529bab]) {
        _0x452d1d = _0x190591[_0x529bab];
        break;
      }
    }
    if (_0x452d1d) {
      return true;
    } else {
      return false;
    }
  } catch (_0x55aa83) {
    return false;
  }
}
async function getCMDStore(_0x479447) {
  try {
    let _0x3927c2 = JSON.parse(await githubGetFileContent('Non-Btn', 'data.json'));
    let _0x104f58 = null;
    for (const _0x4afe51 of _0x3927c2) {
      if (_0x4afe51[_0x479447]) {
        _0x104f58 = _0x4afe51[_0x479447];
        break;
      }
    }
    return _0x104f58;
  } catch (_0x750e93) {
    console.log(_0x750e93);
    return false;
  }
}
function getCmdForCmdId(_0x512fcd, _0x148273) {
  const _0x2f3920 = _0x512fcd.find(_0x4f130a => _0x4f130a.cmdId === _0x148273);
  return _0x2f3920 ? _0x2f3920.cmd : null;
}
const connectdb = async () => {
  let _0x3525b4 = await checkRepoAvailability();
  if (!_0x3525b4) {
    let _0x1d9527 = {
      'OWNER': [],
      'BAN': [],
      'BAN_GC': [],
      'ANTI_BAD': [],
      'MAX_SIZE': 0x96,
      'ANTI_CALL': '',
      'STATUS_VIEW': "true",
      'AUTO_BLOCK': '',
      'WORK_TYPE': '',
      'PRESENCE': "false",
      'READ_MESSAGE': '',
      'AUTO_WELCOME_LEAVE': [],
      'ANTI_LINK': [],
      'ANTI_BOT': [],
      'ALIVE': "default",
      'PREFIX': '.',
      'AI_CHAT': '',
      'LOGO': 'https://files.catbox.moe/375czc.jpg',
      'ANTI_DELETE': '',
      'FOOTER': "© _ᴢɪᴍʙᴀʙᴡᴇ - ᴍᴅ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ *ᴍᴀʟᴠɪɴ ᴋɪɴɢ*_ ❄",
      'WELCOME_MSG': '',
      'LEAVE_MSG': ''
    };
    await githubCreateNewFile("settings", 'settings.json', JSON.stringify(_0x1d9527));
    let _0x26845c = [];
    await githubCreateNewFile('Non-Btn', "data.json", JSON.stringify(_0x26845c));
    console.log("Database \"MALVINOFFICL\" created successfully 🛢️");
  } else {
    console.log("Database connected 🛢️");
  }
};
async function input(_0x12362e, _0xc2e180) {
  let _0x14be1f = JSON.parse(await githubGetFileContent('settings', "settings.json"));
  const _0x4a6b70 = _0x46c352 => {
    _0x14be1f[_0x46c352] = _0xc2e180;
    config[_0x46c352] = _0xc2e180;
  };
  switch (_0x12362e) {
    case 'OWNER':
      _0x4a6b70("OWNER");
      break;
    case "ANTI_BAD":
      _0x4a6b70("ANTI_BAD");
      break;
    case 'MAX_SIZE':
      _0x4a6b70("MAX_SIZE");
      break;
    case "READ_MESSAGE":
      _0x4a6b70("READ_MESSAGE");
      break;
    case "AI_CHAT":
      _0x4a6b70('AI_CHAT');
      break;
    case 'AUTO_WELCOME_LEAVE':
      _0x4a6b70("AUTO_WELCOME_LEAVE");
      break;
    case 'WELCOME_MSG':
      _0x4a6b70("WELCOME_MSG");
      break;
    case 'LEAVE_MSG':
      _0x4a6b70("LEAVE_MSG");
      break;
    case "STATUS_VIEW":
      _0x4a6b70("STATUS_VIEW");
      break;
    case "WORK_TYPE":
      _0x4a6b70('WORK_TYPE');
      break;
    case "PRESENCE":
      _0x4a6b70('PRESENCE');
      break;
    case "FOOTER":
      _0x4a6b70('FOOTER');
      break;
    case "ANTI_CALL":
      _0x4a6b70("ANTI_CALL");
      break;
    case 'AUTO_BLOCK':
      _0x4a6b70('AUTO_BLOCK');
      break;
    case "ANTI_LINK":
      _0x4a6b70('ANTI_LINK');
      break;
    case 'BAN_GC':
      _0x4a6b70("BAN_GC");
      break;
    case 'ANTI_BOT':
      _0x4a6b70('ANTI_BOT');
      break;
    case "PREFIX":
      _0x4a6b70("PREFIX");
      break;
    case 'ANTI_DELETE':
      _0x4a6b70('ANTI_DELETE');
      break;
    case "BAN":
      _0x4a6b70("BAN");
      break;
    case "ALIVE":
      _0x4a6b70("ALIVE");
      break;
    case "LOGO":
      _0x4a6b70("LOGO");
      break;
    default:
      console.warn("Setting \"" + _0x12362e + "\" is not recognized.");
      return false;
  }
  return await githubClearAndWriteFile("settings", "settings.json", JSON.stringify(_0x14be1f, null, 0x2));
}
async function get(_0xf9569) {
  let _0x5d8415 = JSON.parse(await githubGetsetting('settings', "settings.json"));
  switch (_0xf9569) {
    case "OWNER":
      return _0x5d8415.OWNER;
    case "WELCOME_MSG":
      return _0x5d8415.WELCOME_MSG;
    case "LEAVE_MSG":
      return _0x5d8415.LEAVE_MSG;
    case 'ANTI_BAD':
      return _0x5d8415.ANTI_BAD;
    case "AI_CHAT":
      return _0x5d8415.AI_CHAT;
    case "FOOTER":
      return _0x5d8415.FOOTER;
    case "MAX_SIZE":
      return _0x5d8415.MAX_SIZE;
    case "BAN_GC":
      return _0x5d8415.BAN_GC;
    case 'PREFIX':
      return _0x5d8415.PREFIX;
    case 'WORK_TYPE':
      return _0x5d8415.WORK_TYPE;
    case "PRESENCE":
      return _0x5d8415.PRESENCE;
    case "READ_MESSAGE":
      return _0x5d8415.READ_MESSAGE;
    case "ANTI_LINK":
      return _0x5d8415.ANTI_LINK;
    case "ANTI_BOT":
      return _0x5d8415.ANTI_BOT;
    case "ANTI_DELETE":
      return _0x5d8415.ANTI_DELETE;
    case "AUTO_WELCOME_LEAVE":
      return _0x5d8415.AUTO_WELCOME_LEAVE;
    case "ALIVE":
      return _0x5d8415.ALIVE;
    case "AUTO_READ_STATUS":
      return _0x5d8415.AUTO_READ_STATUS;
    case "ANTI_CALL":
      return _0x5d8415.ANTI_CALL;
    case 'AUTO_BLOCK':
      return _0x5d8415.AUTO_BLOCK;
    case "BAN":
      return _0x5d8415.BAN;
    case 'LOGO':
      return _0x5d8415.LOGO;
    default:
      console.warn("Setting \"" + _0xf9569 + "\" is not recognized.");
      return null;
  }
}
async function updb() {
  let _0x225f57 = JSON.parse(await githubGetsetting("settings", "settings.json"));
  config.MAX_SIZE = Number(_0x225f57.MAX_SIZE);
  config.ALIVE = _0x225f57.ALIVE;
  config.LOGO = _0x225f57.LOGO;
  config.FOOTER = _0x225f57.FOOTER;
  config.BAN = _0x225f57.BAN;
  config.BAN_GC = _0x225f57.BAN_GC;
  config.AUTO_WELCOME_LEAVE = _0x225f57.AUTO_WELCOME_LEAVE;
  config.AI_CHAT = _0x225f57.AI_CHAT;
  config.AUTO_READ_STATUS = _0x225f57.AUTO_READ_STATUS;
  config.ANTI_BAD = _0x225f57.ANTI_BAD;
  config.ANTI_LINK = _0x225f57.ANTI_LINK;
  config.ANTI_BOT = _0x225f57.ANTI_BOT;
  config.ANTI_DELETE = _0x225f57.ANTI_DELETE;
  config.WORK_TYPE = _0x225f57.WORK_TYPE;
  config.PRESENCE = _0x225f57.PRESENCE;
  config.PREFIX = _0x225f57.PREFIX;
  config.READ_MESSAGE = _0x225f57.READ_MESSAGE;
  config.ANTI_CALL = _0x225f57.ANTI_CALL;
  config.AUTO_BLOCK = _0x225f57.AUTO_BLOCK;
  config.OWNER = _0x225f57.OWNER;
  config.WELCOME_MSG = _0x225f57.WELCOME_MSG;
  config.LEAVE_MSG = _0x225f57.LEAVE_MSG;
  console.log("Database updated ✅");
}
async function updfb() {
  let _0x151929 = {
    'OWNER': [],
    'BAN': [],
    'BAN_GC': [],
    'ANTI_BAD': [],
    'MAX_SIZE': 0x96,
    'ANTI_CALL': '',
    'STATUS_VIEW': 'true',
    'AUTO_BLOCK': '',
    'WORK_TYPE': '',
    'PRESENCE': '',
    'READ_MESSAGE': '',
    'AUTO_WELCOME_LEAVE': [],
    'ANTI_LINK': [],
    'ANTI_BOT': [],
    'ALIVE': "default",
    'PREFIX': '.',
    'AI_CHAT': '',
    'LOGO': "https://files.catbox.moe/375czc.jpg",
    'FOOTER': "© _ᴢɪᴍʙᴀʙᴡᴇ - ᴍᴅ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ *ᴛᴇᴄʜ ʟᴏʀᴅ*_ ❄",
    'ANTI_DELETE': '',
    'WELCOME_MSG': '',
    'LEAVE_MSG': ''
  };
  await githubClearAndWriteFile("settings", 'settings.json', JSON.stringify(_0x151929, null, 0x2));
  config.MAX_SIZE = 0xaf;
  config.ALIVE = "default";
  config.LOGO = 'https://files.catbox.moe/375czc.jpg';
  config.FOOTER = "© _ᴢɪᴍʙᴀʙᴡᴇ - ᴍᴅ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ *ᴍᴀʟᴠɪɴ ᴋɪɴɢ*_ ❄";
  config.ANTI_BAD = [];
  config.ANTI_LINK = [];
  config.AI_CHAT = '';
  config.ANTI_BOT = [];
  config.ANTI_DELETE = '';
  config.STATUS_VIEW = "true";
  config.AUTO_WELCOME_LEAVE = [];
  config.WORK_TYPE = '';
  config.PRIFIX = '.';
  config.PRESENCE = '';
  config.READ_MESSAGE = '';
  config.ANTI_CALL = '';
  config.AUTO_BLOCK = '';
  config.ONLINE_STATUS = '';
  config.OWNER = [];
  config.BAN = [];
  config.BAN_GC = [];
  config.WELCOME_MSG = '';
  config.LEAVE_MSG = '';
  console.log("Database updated ✅");
}
async function upresbtn() {
  let _0x555872 = [];
  await githubClearAndWriteFile('Non-Btn', 'data.json', JSON.stringify(_0x555872));
}
module.exports = {
  'updateCMDStore': updateCMDStore,
  'isbtnID': isbtnID,
  'getCMDStore': getCMDStore,
  'getCmdForCmdId': getCmdForCmdId,
  'connectdb': connectdb,
  'input': input,
  'get': get,
  'updb': updb,
  'updfb': updfb,
  'upresbtn': upresbtn
};
