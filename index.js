const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  getDevice,
  fetchLatestBaileysVersion,
  jidNormalizedUser,
  getContentType
} = require("@whiskeysockets/baileys");
const fs = require('fs');
const P = require("pino");
const config = require("./config");
const NodeCache = require("node-cache");
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
  fetchBuffer,
  getFile
} = require('./lib/functions');
const {
  sms,
  downloadMediaMessage
} = require("./lib/msg");
const axios = require("axios");
const {
  File
} = require('megajs');
const path = require("path");
const msgRetryCounterCache = new NodeCache();
const ownerNumber = config.OWNER_NUMBER;
var {
  updateCMDStore,
  isbtnID,
  getCMDStore,
  getCmdForCmdId,
  connectdb,
  input,
  get,
  updb,
  updfb,
  upresbtn
} = require("./lib/database");
if (!fs.existsSync(__dirname + "/auth_info_baileys/creds.json")) {
  if (config.SESSION_ID) {
    const sessdata = config.SESSION_ID.replace("MALVIN-XD~", '');
    const filer = File.fromURL("https://mega.nz/file/" + sessdata);
    filer.download((_0x57600d, _0x2c3fc3) => {
      if (_0x57600d) {
        throw _0x57600d;
      }
      fs.writeFile(__dirname + "/auth_info_baileys/creds.json", _0x2c3fc3, () => {
        console.log("Session download completed !!");
      });
    });
  }
}
const express = require("express");
const app = express();
const port = process.env.PORT || 0x1f40;
async function connectToWA() {
  const {
    version: _0x1018df,
    isLatest: _0x114bf9
  } = await fetchLatestBaileysVersion();
  console.log("using WA v" + _0x1018df.join('.') + ", isLatest: " + _0x114bf9);
  const {
    state: _0x59c5fd,
    saveCreds: _0x59c8ff
  } = await useMultiFileAuthState(__dirname + "/auth_info_baileys/");
  const _0x3a2c1d = makeWASocket({
    'logger': P({
      'level': "fatal"
    }).child({
      'level': "fatal"
    }),
    'printQRInTerminal': false,
    'generateHighQualityLinkPreview': true,
    'auth': _0x59c5fd,
    'defaultQueryTimeoutMs': undefined,
    'msgRetryCounterCache': msgRetryCounterCache
  });
  _0x3a2c1d.ev.on("connection.update", async _0x48abd3 => {
    const {
      connection: _0x339311,
      lastDisconnect: _0x11d50a
    } = _0x48abd3;
    if (_0x339311 === 'close') {
      if (_0x11d50a.error.output.statusCode !== DisconnectReason.loggedOut) {
        connectToWA();
      }
    } else if (_0x339311 === "open") {
      await connectdb();
      await updb();
      console.log("zim connected ✅");
      fs.readdirSync("./plugins/").map(_0x8aac56 => {
        if (path.extname(_0x8aac56).toLowerCase() == ".js") {
          require("./plugins/" + _0x8aac56);
        }
      });
      console.log("Installing plugins 🔌... ");
      console.log("Plugins installed ✅");
      await _0x3a2c1d.sendMessage(ownerNumber + "@s.whatsapp.net", {
        'image': {
          'url': "https://cdn.dribbble.com/users/15468/screenshots/2450252/logo.jpg"
        },
        'caption': "Successfully Bot connected\n\n> Enjoy ZIMBABWE-MD 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙾 𝙱𝙾𝚃.\n> Dont use wrong things\n\n\nJoin Our Whatsapp Channel :- https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z"
      });
    }
  });
  _0x3a2c1d.ev.on("messages.upsert", async _0x23d01e => {
    try {
      _0x23d01e = _0x23d01e.messages[0x0];
      if (_0x23d01e.key && _0x23d01e.key.remoteJid === "status@broadcast" && config.STATUS_VIEW === "true") {
        await _0x3a2c1d.readMessages([_0x23d01e.key]);
      }
      if (_0x23d01e.key && _0x23d01e.key.remoteJid === "status@broadcast" && config.STATUS_VIEW === 'true') {
        const _0x421e1a = ['😘', '🧩', '🍉', '💜', '🌸', '🪴', '💊', '💫', '🍂', '🌟', '🎋', '😶‍🌫️', '🥺', '🫀', '🧿', '👀', '🤖', '🚩', '🥰', '🗿', '💜', '💙', '🌝', '🖤', '💚'];
        const _0x4f2638 = _0x421e1a[Math.floor(Math.random() * _0x421e1a.length)];
        await _0x3a2c1d.sendMessage(_0x23d01e.key.remoteJid, {
          'react': {
            'text': _0x4f2638,
            'key': _0x23d01e.key
          }
        }, {
          'statusJidList': [_0x23d01e.key.participant]
        });
      }
      const _0x480352 = sms(_0x3a2c1d, _0x23d01e);
      const _0x3dc0db = getContentType(_0x23d01e.message);
      const _0x584a11 = _0x23d01e.key.remoteJid;
      const _0x26d1d9 = _0x3dc0db == "extendedTextMessage" && _0x23d01e.message.extendedTextMessage.contextInfo != null ? _0x23d01e.message.extendedTextMessage.contextInfo.quotedMessage || [] : [];
      const _0x51cbfa = _0x3dc0db === "conversation" ? _0x23d01e.message.conversation : _0x23d01e.message?.["extendedTextMessage"]?.["contextInfo"]?.['hasOwnProperty']("quotedMessage") && (await isbtnID(_0x23d01e.message?.['extendedTextMessage']?.["contextInfo"]?.["stanzaId"])) && getCmdForCmdId(await getCMDStore(_0x23d01e.message?.["extendedTextMessage"]?.["contextInfo"]?.["stanzaId"]), _0x23d01e?.["message"]?.['extendedTextMessage']?.["text"]) ? getCmdForCmdId(await getCMDStore(_0x23d01e.message?.['extendedTextMessage']?.["contextInfo"]?.["stanzaId"]), _0x23d01e?.["message"]?.["extendedTextMessage"]?.["text"]) : _0x3dc0db === "extendedTextMessage" ? _0x23d01e.message.extendedTextMessage.text : _0x3dc0db == "imageMessage" && _0x23d01e.message.imageMessage.caption ? _0x23d01e.message.imageMessage.caption : _0x3dc0db == 'videoMessage' && _0x23d01e.message.videoMessage.caption ? _0x23d01e.message.videoMessage.caption : '';
      const _0x5b03e5 = _0x51cbfa.startsWith('.');
      const _0x5ec1c9 = _0x5b03e5 ? _0x51cbfa.slice('.'.length).trim().split(" ").shift().toLowerCase() : '';
      const _0x1f2031 = _0x51cbfa.trim().split(/ +/).slice(0x1);
      const _0x24543a = _0x1f2031.join(" ");
      const _0x299c15 = _0x584a11.endsWith('@g.us');
      const _0x424d56 = _0x23d01e.key.fromMe ? _0x3a2c1d.user.id.split(':')[0x0] + "@s.whatsapp.net" || _0x3a2c1d.user.id : _0x23d01e.key.participant || _0x23d01e.key.remoteJid;
      const _0x42579b = _0x424d56.split('@')[0x0];
      const _0x208206 = _0x3a2c1d.user.id.split(':')[0x0];
      const _0x1f7162 = _0x23d01e.pushName || "ᴍᴀʟᴠɪɴ ᴋɪɴɢ";
      const _0x5457b2 = _0x208206.includes(_0x42579b);
      const _0x54e48f = "263714757857".includes(_0x42579b);
      const _0x3a55c5 = _0x5457b2 ? _0x5457b2 : _0x54e48f;
      const _0x1bd5b6 = ownerNumber.includes(_0x42579b) || _0x3a55c5;
      const _0x4f9e93 = await jidNormalizedUser(_0x3a2c1d.user.id);
      const _0x198328 = _0x299c15 ? await _0x3a2c1d.groupMetadata(_0x584a11)['catch'](_0x38f750 => {}) : '';
      const _0x36000d = _0x299c15 ? _0x198328.subject : '';
      const _0x78564a = _0x299c15 ? await _0x198328.participants : '';
      const _0x2f4003 = _0x299c15 ? await getGroupAdmins(_0x78564a) : '';
      const _0x1bba2e = _0x299c15 ? _0x2f4003.includes(_0x4f9e93) : false;
      const _0xf89526 = !!_0x480352.message.reactionMessage;
      const _0x2fa4e4 = _0x299c15 ? _0x2f4003.includes(_0x424d56) : false;
      const _0x2e02bc = _0x3c94df => {
        for (let _0x599bbb = 0x0; _0x599bbb < _0x3c94df.length; _0x599bbb++) {
          if (_0x3c94df[_0x599bbb] === _0x584a11) {
            return true;
          }
        }
        return false;
      };
      const _0xaf4c44 = async _0x2b32a7 => {
        return await _0x3a2c1d.sendMessage(_0x584a11, {
          'text': _0x2b32a7
        }, {
          'quoted': _0x23d01e
        });
      };
      _0x3a2c1d.buttonMessage = async (_0x5cad3c, _0x271cb3, _0x1d9b1e) => {
        let _0xc7fa82 = '';
        const _0x4b5412 = [];
        _0x271cb3.buttons.forEach((_0x43e15f, _0x4212e0) => {
          const _0x18339d = '' + (_0x4212e0 + 0x1);
          _0xc7fa82 += "\n*" + _0x18339d + " | " + _0x43e15f.buttonText.displayText + "*\n";
          _0x4b5412.push({
            'cmdId': _0x18339d,
            'cmd': _0x43e15f.buttonId
          });
        });
        if (_0x271cb3.headerType === 0x1) {
          const _0x273691 = (_0x271cb3.text || _0x271cb3.caption) + "\n\n❉🔢 ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ɴᴜᴍʙᴇʀ" + _0xc7fa82 + "\n\n" + _0x271cb3.footer;
          const _0x625ff7 = await _0x3a2c1d.sendMessage(_0x584a11, {
            'text': _0x273691,
            'contextInfo': {
              'mentionedJid': [_0x480352.sender],
              'forwardingScore': 0x3e7,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363306168354073@newsletter",
                'newsletterName': "❄𝙕𝙄𝙈𝘽𝘼𝘽𝙒𝙀-𝙈𝘿🇿🇼",
                'serverMessageId': 0x3e7
              }
            }
          }, {
            'quoted': _0x1d9b1e || _0x23d01e
          });
          await updateCMDStore(_0x625ff7.key.id, _0x4b5412);
        } else {
          if (_0x271cb3.headerType === 0x4) {
            const _0x2f501a = _0x271cb3.caption + "\n\n❉🔢 ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ɴᴜᴍʙᴇʀ\n\n" + _0xc7fa82 + "\n\n" + _0x271cb3.footer;
            const _0x114143 = await _0x3a2c1d.sendMessage(_0x5cad3c, {
              'image': _0x271cb3.image,
              'caption': _0x2f501a,
              'contextInfo': {
                'mentionedJid': [_0x480352.sender],
                'forwardingScore': 0x3e7,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': '120363306168354073@newsletter',
                  'newsletterName': "❄𝙕𝙄𝙈𝘽𝘼𝘽𝙒𝙀-𝙈𝘿🇿🇼",
                  'serverMessageId': 0x3e7
                }
              }
            }, {
              'quoted': _0x1d9b1e || _0x23d01e
            });
            await updateCMDStore(_0x114143.key.id, _0x4b5412);
          }
        }
      };
      _0x3a2c1d.listMessage = async (_0x267ab1, _0x564b6d, _0x28069d) => {
        let _0x4b529a = '';
        const _0x52c541 = [];
        _0x564b6d.sections.forEach((_0x24cbff, _0x3fd2dd) => {
          const _0x645c45 = '' + (_0x3fd2dd + 0x1);
          _0x4b529a += "\n*[" + _0x645c45 + "] " + _0x24cbff.title + "*\n";
          _0x24cbff.rows.forEach((_0x33ef0e, _0xd14b98) => {
            const _0x31e031 = _0x645c45 + '.' + (_0xd14b98 + 0x1);
            const _0x26b3dd = _0x31e031 + " • " + _0x33ef0e.title;
            _0x4b529a += _0x26b3dd + "\n";
            if (_0x33ef0e.description) {
              _0x4b529a += _0x33ef0e.description + "\n\n";
            }
            _0x52c541.push({
              'cmdId': _0x31e031,
              'cmd': _0x33ef0e.rowId
            });
          });
        });
        const _0x58ee3e = _0x564b6d.image ? _0x564b6d.image : config.LOGO;
        const _0x50cba = _0x564b6d.text + "\n\n" + _0x564b6d.buttonText + ',' + _0x4b529a + "\n\n╰────────────◉◉►\n\n" + _0x564b6d.footer;
        const _0x518bf2 = await _0x3a2c1d.sendMessage(_0x267ab1, {
          'image': _0x58ee3e,
          'caption': _0x50cba,
          'contextInfo': {
            'mentionedJid': [_0x480352.sender],
            'forwardingScore': 0x3e7,
            'isForwarded': true,
            'forwardedNewsletterMessageInfo': {
              'newsletterJid': "120363306168354073@newsletter",
              'newsletterName': "❄𝙕𝙄𝙈𝘽𝘼𝘽𝙒𝙀-𝙈𝘿🇿🇼",
              'serverMessageId': 0x3e7
            }
          }
        }, {
          'quoted': _0x28069d || _0x23d01e
        });
        await updateCMDStore(_0x518bf2.key.id, _0x52c541);
      };
      _0x3a2c1d.edit = async (_0x2b7bb1, _0x267a6f) => {
        await _0x3a2c1d.relayMessage(_0x584a11, {
          'protocolMessage': {
            'key': _0x2b7bb1.key,
            'type': 0xe,
            'editedMessage': {
              'conversation': _0x267a6f
            }
          }
        }, {});
      };
      _0x3a2c1d.sendFileUrl = async (_0x2e0468, _0x241099, _0xa8c9d7, _0x4d3cc6, _0x37e5ab = {}) => {
        let _0x2c056d = '';
        let _0x4864e9 = await axios.head(_0x241099);
        _0x2c056d = _0x4864e9.headers["content-type"];
        if (_0x2c056d.split('/')[0x1] === 'gif') {
          return _0x3a2c1d.sendMessage(_0x2e0468, {
            'video': await getBuffer(_0x241099),
            'caption': _0xa8c9d7,
            'gifPlayback': true,
            ..._0x37e5ab
          }, {
            'quoted': _0x4d3cc6,
            ..._0x37e5ab
          });
        }
        if (_0x2c056d === "application/pdf") {
          return _0x3a2c1d.sendMessage(_0x2e0468, {
            'document': await getBuffer(_0x241099),
            'mimetype': "application/pdf",
            'caption': _0xa8c9d7,
            ..._0x37e5ab
          }, {
            'quoted': _0x4d3cc6,
            ..._0x37e5ab
          });
        }
        if (_0x2c056d.split('/')[0x0] === "image") {
          return _0x3a2c1d.sendMessage(_0x2e0468, {
            'image': await getBuffer(_0x241099),
            'caption': _0xa8c9d7,
            ..._0x37e5ab
          }, {
            'quoted': _0x4d3cc6,
            ..._0x37e5ab
          });
        }
        if (_0x2c056d.split('/')[0x0] === "video") {
          return _0x3a2c1d.sendMessage(_0x2e0468, {
            'video': await getBuffer(_0x241099),
            'caption': _0xa8c9d7,
            'mimetype': 'video/mp4',
            ..._0x37e5ab
          }, {
            'quoted': _0x4d3cc6,
            ..._0x37e5ab
          });
        }
        if (_0x2c056d.split('/')[0x0] === "audio") {
          return _0x3a2c1d.sendMessage(_0x2e0468, {
            'audio': await getBuffer(_0x241099),
            'caption': _0xa8c9d7,
            'mimetype': "audio/mpeg",
            ..._0x37e5ab
          }, {
            'quoted': _0x4d3cc6,
            ..._0x37e5ab
          });
        }
      };
      const _0x45efa7 = config.PRESENCE;
      if (_0x45efa7 && _0x45efa7 !== 'available') {
        if (_0x45efa7 === "composing") {
          await _0x3a2c1d.sendPresenceUpdate('composing', _0x584a11);
        } else {
          if (_0x45efa7 === "recording") {
            await _0x3a2c1d.sendPresenceUpdate('recording', _0x584a11);
          } else if (_0x45efa7 === "unavailable") {
            await _0x3a2c1d.sendPresenceUpdate("unavailable", _0x584a11);
          } else {
            await _0x3a2c1d.sendPresenceUpdate("available", _0x584a11);
          }
        }
      } else {
        await _0x3a2c1d.sendPresenceUpdate("available", _0x584a11);
      }
      if (config.AUTO_REACT === "true") {
        if (_0xf89526) {
          return;
        }
        const _0x57fe34 = ['🎨', '🔥', '✨', '🔮', '♠️', '🪄', '🔗', '🫧', '🪷', '🦠', '🌺', '🐬', '🦋', '🍁', '🌿', '🍦', '🌏', '✈️', '❄️', '🖤', '⚡', "🧚‍♀️", '💚', '💗', '❤️', '🩷', '😁', '🫣', '😂', '📃', '💝', '💖', '💓', '😈', '👻', '🤡', '😻', "❤️‍🩹", '🧡', '❣️', "❤️‍🔥", '🌌', '🥰', '💀', '😍', '👋', '💙', '🪄', "🏜️", '🏞️', '🎧', '🐈', '✨', '🌞', '☕', '🔱', '🌙', '💻', '💿', '🔋', '🔊', '💸', '🐶', '📔', '🫂', '😏', '🪀', '😼', '🧛', '🇱🇰', '🌹', '💥', '🥳', '🔔', '🌼', '🔮', '♥', '🛵', '😔', '🌻', '⏳', "🤷‍♂", '🫶', '👀', '🎂', '🥶', '☀', '🤦', '🙂', '🐱', '🤝', '📸', '🔑', '😊', "👨‍🔧"];
        _0x57fe34.forEach(_0x31fcd9 => {
          _0x480352.react(_0x31fcd9);
        });
      }
      if (config.AUTO_BIO === "true") {
        await _0x3a2c1d.updateProfileStatus("📅 𝐃𝐚𝐭𝐞 𝐓𝐨𝐝𝐚𝐲 : " + new Date().toLocaleDateString() + " ⌚ 𝐓𝐢𝐦𝐞 𝐍𝐨𝐰 : " + new Date().toLocaleTimeString() + " ᴢɪᴍʙᴀʙᴡᴇ-𝙼𝙳 𝙼ᴀᴅᴇ 𝙱ʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ")["catch"](_0x3d045f => _0x3d045f);
      }
      if (config.AUTO_MSG_READ == 'true') {
        await _0x3a2c1d.readMessages([_0x23d01e.key]);
      }
      if (_0x424d56 == '263714757857@s.whatsapp.net') {
        if (_0xf89526) {
          return;
        }
        _0x480352.react('👻');
      }
      if (_0x424d56 == "263780166288@s.whatsapp.net") {
        if (_0xf89526) {
          return;
        }
        _0x480352.react('😎');
      }
      if (config.WORK_TYPE == "only_group") {
        if (!_0x299c15 && _0x5b03e5 && !isDev && !_0x3a55c5 && !_0x1bd5b6) {
          return;
        }
      }
      if (config.WORK_TYPE == "private") {
        if (_0x5b03e5 && !isDev && !_0x3a55c5 && !_0x1bd5b6) {
          return;
        }
      }
      if (config.WORK_TYPE == 'inbox') {
        if (_0x299c15 && !isDev && !_0x3a55c5 && !_0x1bd5b6) {
          return;
        }
      }
      _0x3a2c1d.ev.on("call", async _0x2e581e => {
        if (config.ANTI_CALL) {
          for (const _0x1118d6 of _0x2e581e) {
            if (_0x1118d6.status == "offer") {
              if (_0x1118d6.isGroup == false) {
                await _0x3a2c1d.sendMessage(_0x1118d6.from, {
                  'text': "🚩 ☛ Sorry at this time, I cannot accept calls..⛔",
                  'mentions': [_0x1118d6.from]
                });
                await _0x3a2c1d.rejectCall(_0x1118d6.id, _0x1118d6.from);
              } else {
                await _0x3a2c1d.rejectCall(_0x1118d6.id, _0x1118d6.from);
              }
            }
          }
        }
      });
      const _0x240240 = require('./command');
      const _0x4ad24c = _0x5b03e5 ? _0x51cbfa.slice(0x1).trim().split(" ")[0x0].toLowerCase() : false;
      if (_0x5b03e5) {
        const _0x2527ae = _0x240240.commands.find(_0xd661ea => _0xd661ea.pattern === _0x4ad24c) || _0x240240.commands.find(_0x26f3bf => _0x26f3bf.alias && _0x26f3bf.alias.includes(_0x4ad24c));
        if (_0x2527ae) {
          if (_0x2527ae.react) {
            _0x3a2c1d.sendMessage(_0x584a11, {
              'react': {
                'text': _0x2527ae.react,
                'key': _0x23d01e.key
              }
            });
          }
          try {
            _0x2527ae["function"](_0x3a2c1d, _0x23d01e, _0x480352, {
              'from': _0x584a11,
              'prefix': '.',
              'quoted': _0x26d1d9,
              'body': _0x51cbfa,
              'isCmd': _0x5b03e5,
              'command': _0x5ec1c9,
              'args': _0x1f2031,
              'q': _0x24543a,
              'isGroup': _0x299c15,
              'sender': _0x424d56,
              'senderNumber': _0x42579b,
              'botNumber2': _0x4f9e93,
              'botNumber': _0x208206,
              'pushname': _0x1f7162,
              'isMe': _0x3a55c5,
              'isOwner': _0x1bd5b6,
              'groupMetadata': _0x198328,
              'groupName': _0x36000d,
              'participants': _0x78564a,
              'groupAdmins': _0x2f4003,
              'isBotAdmins': _0x1bba2e,
              'isAdmins': _0x2fa4e4,
              'reply': _0xaf4c44
            });
          } catch (_0x49660f) {
            console.error("[PLUGIN ERROR] ", _0x49660f);
          }
        }
      }
      _0x240240.commands.map(async _0x54b22e => {
        if (_0x51cbfa && _0x54b22e.on === "body") {
          _0x54b22e["function"](_0x3a2c1d, _0x23d01e, _0x480352, {
            'from': _0x584a11,
            'prefix': '.',
            'quoted': _0x26d1d9,
            'body': _0x51cbfa,
            'isCmd': _0x5b03e5,
            'command': _0x54b22e,
            'args': _0x1f2031,
            'q': _0x24543a,
            'isGroup': _0x299c15,
            'sender': _0x424d56,
            'senderNumber': _0x42579b,
            'botNumber2': _0x4f9e93,
            'botNumber': _0x208206,
            'pushname': _0x1f7162,
            'isMe': _0x3a55c5,
            'isOwner': _0x1bd5b6,
            'groupMetadata': _0x198328,
            'groupName': _0x36000d,
            'participants': _0x78564a,
            'groupAdmins': _0x2f4003,
            'isBotAdmins': _0x1bba2e,
            'isAdmins': _0x2fa4e4,
            'reply': _0xaf4c44
          });
        } else {
          if (_0x23d01e.q && _0x54b22e.on === "text") {
            _0x54b22e["function"](_0x3a2c1d, _0x23d01e, _0x480352, {
              'from': _0x584a11,
              'quoted': _0x26d1d9,
              'body': _0x51cbfa,
              'isCmd': _0x5b03e5,
              'command': _0x54b22e,
              'args': _0x1f2031,
              'q': _0x24543a,
              'isGroup': _0x299c15,
              'sender': _0x424d56,
              'senderNumber': _0x42579b,
              'botNumber2': _0x4f9e93,
              'botNumber': _0x208206,
              'pushname': _0x1f7162,
              'isMe': _0x3a55c5,
              'isOwner': _0x1bd5b6,
              'groupMetadata': _0x198328,
              'groupName': _0x36000d,
              'participants': _0x78564a,
              'groupAdmins': _0x2f4003,
              'isBotAdmins': _0x1bba2e,
              'isAdmins': _0x2fa4e4,
              'reply': _0xaf4c44
            });
          } else {
            if ((_0x54b22e.on === "image" || _0x54b22e.on === 'photo') && _0x23d01e.type === 'imageMessage') {
              _0x54b22e["function"](_0x3a2c1d, _0x23d01e, _0x480352, {
                'from': _0x584a11,
                'prefix': '.',
                'quoted': _0x26d1d9,
                'body': _0x51cbfa,
                'isCmd': _0x5b03e5,
                'command': _0x54b22e,
                'args': _0x1f2031,
                'q': _0x24543a,
                'isGroup': _0x299c15,
                'sender': _0x424d56,
                'senderNumber': _0x42579b,
                'botNumber2': _0x4f9e93,
                'botNumber': _0x208206,
                'pushname': _0x1f7162,
                'isMe': _0x3a55c5,
                'isOwner': _0x1bd5b6,
                'groupMetadata': _0x198328,
                'groupName': _0x36000d,
                'participants': _0x78564a,
                'groupAdmins': _0x2f4003,
                'isBotAdmins': _0x1bba2e,
                'isAdmins': _0x2fa4e4,
                'reply': _0xaf4c44
              });
            } else if (_0x54b22e.on === "sticker" && _0x23d01e.type === "stickerMessage") {
              _0x54b22e["function"](_0x3a2c1d, _0x23d01e, _0x480352, {
                'from': _0x584a11,
                'prefix': '.',
                'quoted': _0x26d1d9,
                'body': _0x51cbfa,
                'isCmd': _0x5b03e5,
                'command': _0x54b22e,
                'args': _0x1f2031,
                'q': _0x24543a,
                'isGroup': _0x299c15,
                'sender': _0x424d56,
                'senderNumber': _0x42579b,
                'botNumber2': _0x4f9e93,
                'botNumber': _0x208206,
                'pushname': _0x1f7162,
                'isMe': _0x3a55c5,
                'isOwner': _0x1bd5b6,
                'groupMetadata': _0x198328,
                'groupName': _0x36000d,
                'participants': _0x78564a,
                'groupAdmins': _0x2f4003,
                'isBotAdmins': _0x1bba2e,
                'isAdmins': _0x2fa4e4,
                'reply': _0xaf4c44
              });
            }
          }
        }
      });
      const _0x91e454 = ['send', "dapan", "dapn", "ewhahn", "ewanna", "danna", 'evano', "evpn", "ewano"];
      for (let _0xa0e506 of _0x91e454) {
        if (_0x51cbfa.toLowerCase().includes(_0xa0e506)) {
          if (!_0x51cbfa.includes("tent") && !_0x51cbfa.includes("docu") && !_0x51cbfa.includes("https")) {
            let _0x469554 = await _0x26d1d9.download();
            if (_0x26d1d9.imageMessage) {
              await _0x3a2c1d.sendMessage(_0x584a11, {
                'image': _0x469554
              }, {
                'quoted': _0x23d01e
              });
            } else if (_0x26d1d9.videoMessage) {
              await _0x3a2c1d.sendMessage(_0x584a11, {
                'video': _0x469554
              }, {
                'quoted': _0x23d01e
              });
            } else {
              console.log("Unsupported media type:", _0x469554.mimetype);
            }
            break;
          }
        }
      }
      var _0x4b4f3f = await fetchJson("https://raw.githubusercontent.com/naughtybinu2004/lpl_menia/main/badwords.json");
      if (_0x2e02bc(config.ANTI_BAD) && _0x1bba2e) {
        if (!_0x2fa4e4) {
          for (any in _0x4b4f3f) {
            if (_0x51cbfa.toLowerCase().includes(_0x4b4f3f[any])) {
              if (!_0x51cbfa.includes("tent")) {
                if (!_0x51cbfa.includes('docu')) {
                  if (!_0x51cbfa.includes("http")) {
                    if (_0x2f4003.includes(_0x424d56)) {
                      return;
                    }
                    if (_0x23d01e.key.fromMe) {
                      return;
                    }
                    await _0x3a2c1d.sendMessage(_0x584a11, {
                      'delete': _0x23d01e.key
                    });
                    await _0x3a2c1d.sendMessage(_0x584a11, {
                      'text': "*Bad word detected !*"
                    });
                    await _0x3a2c1d.groupParticipantsUpdate(_0x584a11, [_0x424d56], "remove");
                  }
                }
              }
            }
          }
        }
      }
      var _0x497a69 = _0x1c9a2a => {
        var _0x5d8cae = {
          'is_bot': false,
          'device': _0x1c9a2a.length > 0x15 ? "android" : _0x1c9a2a.substring(0x0, 0x2) === '3A' ? "ios" : 'web'
        };
        if (_0x1c9a2a.startsWith('BAE5')) {
          _0x5d8cae.is_bot = true;
          _0x5d8cae.bot_name = "bailyes";
        }
        if (/amdi|queen|black|amda|achiya|achintha/gi.test(_0x1c9a2a)) {
          _0x5d8cae.is_bot = true;
          _0x5d8cae.bot_name = "amdi";
        }
        return _0x5d8cae;
      };
      async function _0x126867(_0x2e3c4d, _0x30413d) {
        if (_0x2e02bc(config.ANTI_BOT)) {
          return;
        }
        if (_0x2fa4e4) {
          return;
        }
        if (!_0x1bba2e) {
          return;
        }
        if (_0x1bd5b6) {
          return;
        }
        if (_0x299c15) {
          var _0x36db3a = _0x497a69(_0x23d01e.key.id);
          if (_0x36db3a.is_bot) {
            try {
              await _0x3a2c1d.sendMessage(_0x584a11, {
                'text': "*Other bots are not allowed here !!*"
              });
              return await _0x3a2c1d.groupParticipantsUpdate(_0x584a11, [_0x424d56], "remove");
            } catch {}
          }
        }
      }
      try {
        await _0x126867(_0x3a2c1d, _0x23d01e);
      } catch {}
      switch (_0x5ec1c9) {
        case "jid":
          _0xaf4c44(_0x584a11);
          break;
        case "device":
          {
            let _0x301a4d = getDevice(_0x23d01e.message.extendedTextMessage.contextInfo.stanzaId);
            _0xaf4c44("*He Is Using* _*Whatsapp " + _0x301a4d + " version*_");
          }
          break;
        default:
      }
    } catch (_0x2eaf02) {
      const _0x421b45 = String(_0x2eaf02);
      console.log(_0x421b45);
    }
  });
}
app.get('/', (_0x3f06ba, _0x497fff) => {
  _0x497fff.send("📟 ZIMBABWE Working successfully!");
});
app.listen(port, () => console.log("IMALKA ZIMBABWE BOT PROT http://localhost:" + port));
setTimeout(async () => {
  await connectToWA();
}, 0xbb8);