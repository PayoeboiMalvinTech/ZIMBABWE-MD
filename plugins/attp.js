const config = require('../config');
const {
  cmd,
  commands
} = require("../command");
const fs = require('fs');
const fileType = require("file-type");
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
const path = require("path");
let {
  img2url
} = require("@blackamda/telegram-image-url");
const {
  tmpdir
} = require('os');
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
const Crypto = require("crypto");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);
async function videoToWebp(_0x19169e) {
  const _0x386ebe = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + '.webp');
  const _0x48e544 = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + '.mp4');
  fs.writeFileSync(_0x48e544, _0x19169e);
  await new Promise((_0x620697, _0x1c19b9) => {
    ffmpeg(_0x48e544).on("error", _0x1c19b9).on("end", () => _0x620697(true)).addOutputOptions(["-vcodec", 'libwebp', "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse", "-loop", '0', "-ss", "00:00:00", '-t', "00:00:05", "-preset", "default", "-an", "-vsync", '0']).toFormat('webp').save(_0x386ebe);
  });
  const _0x17cfb6 = fs.readFileSync(_0x386ebe);
  fs.unlinkSync(_0x386ebe);
  fs.unlinkSync(_0x48e544);
  return _0x17cfb6;
}
var imgmsg = '';
if (config.LANG === 'SI') {
  imgmsg = "*කරුණාකර මට text එකක් දෙන්න !*";
} else {
  imgmsg = "*Please give me a text !*";
}
var descg = '';
if (config.LANG === 'SI') {
  descg = "එය text එකක් gif ස්ටිකරයක් බවට පරිවර්තනය කරයි";
} else {
  descg = "it converts a text to gif sticker.";
}
var descdg = '';
if (config.LANG === 'SI') {
  descdg = "එය text එකක් ස්ටිකරයක් බවට පරිවර්තනය කරයි";
} else {
  descdg = "it converts a text to sticker.";
}
cmd({
  'pattern': "attp",
  'react': '✨',
  'alias': ["texttogif"],
  'desc': descg,
  'category': 'convert',
  'use': ".attp HI",
  'filename': __filename
}, async (_0x17c0b3, _0x2a7ab8, _0x36a1cb, {
  from: _0x36b6f0,
  l: _0x5a572f,
  quoted: _0x394991,
  body: _0x3889d6,
  isCmd: _0x115f73,
  command: _0x4506cc,
  args: _0x31a9b9,
  q: _0x1f2ca0,
  isGroup: _0x313906,
  sender: _0x512c0f,
  senderNumber: _0xf7b856,
  botNumber2: _0x38a003,
  botNumber: _0x2d916e,
  pushname: _0x4765b1,
  isMe: _0xa7d7d,
  isOwner: _0x4dfae1,
  groupMetadata: _0x57ad24,
  groupName: _0x5e804b,
  participants: _0x476c12,
  groupAdmins: _0x16162f,
  isBotAdmins: _0x2d2338,
  isAdmins: _0x311636,
  reply: _0x52753a
}) => {
  try {
    if (!_0x1f2ca0) {
      return await _0x52753a(imgmsg);
    }
    let _0xc62c49 = await getBuffer("https://vihangayt.me/maker/text2gif?q=" + _0x1f2ca0);
    await _0x17c0b3.sendMessage(_0x36b6f0, {
      'sticker': await videoToWebp(_0xc62c49)
    }, {
      'quoted': _0x2a7ab8
    });
  } catch (_0x4a4b05) {
    _0x52753a("*Error !!*");
    _0x5a572f(_0x4a4b05);
  }
});
cmd({
  'pattern': "ttp",
  'react': '✨',
  'alias': ["ttp", 'texttoimg'],
  'desc': descdg,
  'category': "convert",
  'use': ".ttp HI",
  'filename': __filename
}, async (_0x50a7ad, _0x16d847, _0x4fa334, {
  from: _0x7b440a,
  l: _0x31d89d,
  quoted: _0x4f0377,
  body: _0x4a9857,
  isCmd: _0x75ce42,
  command: _0x4c8fe3,
  args: _0x349dae,
  q: _0x490310,
  isGroup: _0x3abf33,
  sender: _0x3a0ef2,
  senderNumber: _0x113355,
  botNumber2: _0xa7785b,
  botNumber: _0x20a8db,
  pushname: _0x4c0ff1,
  isMe: _0x510ae1,
  isOwner: _0x4615d3,
  groupMetadata: _0x34be5d,
  groupName: _0x17671b,
  participants: _0x27a485,
  groupAdmins: _0x5be6b8,
  isBotAdmins: _0x33fab7,
  isAdmins: _0x251d6d,
  reply: _0x4fbe8c
}) => {
  try {
    if (!_0x490310) {
      return await _0x4fbe8c(imgmsg);
    }
    let _0x40d869 = await getBuffer('https://vihangayt.me/maker/text2img?q=' + _0x490310);
    let _0x5536cb = new Sticker(_0x40d869, {
      'pack': _0x4c0ff1,
      'author': '',
      'type': _0x490310.includes('--crop' || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
      'categories': ['🤩', '🎉'],
      'id': "12345",
      'quality': 0x4b,
      'background': "transparent"
    });
    const _0x1d4d96 = await _0x5536cb.toBuffer();
    return _0x50a7ad.sendMessage(_0x7b440a, {
      'sticker': _0x1d4d96
    }, {
      'quoted': _0x16d847
    });
  } catch (_0x3a604f) {
    _0x4fbe8c("*Error !!*");
    _0x31d89d(_0x3a604f);
  }
});
cmd({
  'pattern': "toimg",
  'react': '🔮',
  'alias': ['s', "stic"],
  'desc': 'descg',
  'category': 'convert',
  'use': ".sticker <Reply to image>",
  'filename': __filename
}, async (_0x3aee45, _0x50c582, _0x51f446, {
  from: _0x2e18a0,
  l: _0x516c4f,
  quoted: _0x5a4bae,
  body: _0x3f4a8a,
  isCmd: _0x499f2b,
  command: _0x2177be,
  args: _0x596108,
  q: _0x3b48a3,
  isGroup: _0x19a1bb,
  sender: _0x24fc96,
  senderNumber: _0x2d9548,
  botNumber2: _0xd3f068,
  botNumber: _0x1be522,
  pushname: _0x7d9a10,
  isMe: _0x593794,
  isOwner: _0x3435c9,
  groupMetadata: _0x293486,
  groupName: _0x1a612f,
  participants: _0x10c678,
  groupAdmins: _0x44fc98,
  isBotAdmins: _0x48e412,
  isAdmins: _0x517808,
  reply: _0x99f50d
}) => {
  try {
    const _0x120565 = _0x51f446.quoted ? _0x51f446.quoted.type === 'stickerMessage' : false;
    if (_0x120565) {
      var _0xefb3dc = getRandom('');
      let _0x5698d0 = _0x120565 ? await _0x51f446.quoted.download(_0xefb3dc) : await _0x51f446.download(_0xefb3dc);
      let _0x37ea62 = await fileType.fromBuffer(_0x5698d0);
      await fs.promises.writeFile('./' + _0x37ea62.ext, _0x5698d0);
      await _0x3aee45.sendMessage(_0x2e18a0, {
        'image': fs.readFileSync('./' + _0x37ea62.ext),
        'caption': config.FOOTER
      }, {
        'quoted': _0x50c582
      });
    } else {
      return await _0x99f50d(imgmsg);
    }
  } catch (_0x5ae979) {
    _0x99f50d("*Error !!*");
    _0x516c4f(_0x5ae979);
  }
});
cmd({
  'pattern': "sticker",
  'react': '🔮',
  'alias': ['s', "stic"],
  'desc': "descg",
  'category': "convert",
  'use': ".sticker <Reply to image>",
  'filename': __filename
}, async (_0x57de90, _0x434bff, _0x27f9e9, {
  from: _0x15d515,
  l: _0x35a40b,
  quoted: _0x2e778d,
  body: _0x510afc,
  isCmd: _0x48e28f,
  command: _0x101e9f,
  args: _0x300f11,
  q: _0x81c380,
  isGroup: _0x3803cc,
  sender: _0x2894ae,
  senderNumber: _0x88d782,
  botNumber2: _0x4188b1,
  botNumber: _0x34b80a,
  pushname: _0x3ab53d,
  isMe: _0x56c041,
  isOwner: _0x2bdd45,
  groupMetadata: _0x359326,
  groupName: _0x3bc5ab,
  participants: _0x496dbb,
  groupAdmins: _0x31fd66,
  isBotAdmins: _0x553afc,
  isAdmins: _0x58321c,
  reply: _0x4e2e50
}) => {
  try {
    const _0x1c84c6 = _0x27f9e9.quoted ? _0x27f9e9.quoted.type === 'viewOnceMessage' : false;
    const _0x480065 = _0x27f9e9.quoted ? _0x27f9e9.quoted.type === "imageMessage" || (_0x1c84c6 ? _0x27f9e9.quoted.msg.type === 'imageMessage' : false) : false;
    const _0x4a055e = _0x27f9e9.quoted ? _0x27f9e9.quoted.type === 'stickerMessage' : false;
    if (_0x27f9e9.type === "imageMessage" || _0x480065) {
      var _0x3e4205 = getRandom('');
      if (_0x480065) {
        await _0x27f9e9.quoted.download(_0x3e4205);
      } else {
        await _0x27f9e9.download(_0x3e4205);
      }
      let _0x459944 = new Sticker(_0x3e4205 + '.jpg', {
        'pack': _0x3ab53d,
        'author': '',
        'type': _0x81c380.includes('--crop' || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
        'categories': ['🤩', '🎉'],
        'id': "12345",
        'quality': 0x4b,
        'background': "transparent"
      });
      const _0x56cda4 = await _0x459944.toBuffer();
      return _0x57de90.sendMessage(_0x15d515, {
        'sticker': _0x56cda4
      }, {
        'quoted': _0x434bff
      });
    } else {
      if (_0x4a055e) {
        var _0x2059d5 = getRandom('');
        await _0x27f9e9.quoted.download(_0x2059d5);
        let _0x590b18 = new Sticker(_0x2059d5 + ".webp", {
          'pack': _0x3ab53d,
          'author': '',
          'type': _0x81c380.includes('--crop' || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
          'categories': ['🤩', '🎉'],
          'id': "12345",
          'quality': 0x4b,
          'background': 'transparent'
        });
        const _0x4a2043 = await _0x590b18.toBuffer();
        return _0x57de90.sendMessage(_0x15d515, {
          'sticker': _0x4a2043
        }, {
          'quoted': _0x434bff
        });
      } else {
        return await _0x4e2e50(imgmsg);
      }
    }
  } catch (_0x15c9a2) {
    _0x4e2e50("*Error !!*");
    _0x35a40b(_0x15c9a2);
  }
});
cmd({
  'pattern': "toanime",
  'react': '🏮',
  'alias': ['imgtoanime', 'animeimg'],
  'desc': "desct",
  'category': "convert",
  'use': ".toanime <reply image>",
  'filename': __filename
}, async (_0x280e30, _0x13f478, _0x3f7d36, {
  from: _0x2ee3bb,
  l: _0x3da6a3,
  prefix: _0x589e4e,
  quoted: _0x144743,
  body: _0x1bc537,
  isCmd: _0x488aea,
  command: _0x1cda21,
  args: _0x256e7e,
  q: _0x43ecb9,
  isGroup: _0x4eb971,
  sender: _0x1c6017,
  senderNumber: _0x5d39ee,
  botNumber2: _0xdaa05c,
  botNumber: _0x1bd8a6,
  pushname: _0xe43190,
  isMe: _0x1cc7d1,
  isOwner: _0x18ff5b,
  groupMetadata: _0x58c2f8,
  groupName: _0x21ff66,
  participants: _0x1bfcc9,
  groupAdmins: _0x4a15d2,
  isBotAdmins: _0x3564bf,
  isAdmins: _0x17118e,
  reply: _0x48b0e4
}) => {
  try {
    const _0x2759f8 = _0x3f7d36.quoted ? _0x3f7d36.quoted.type === 'viewOnceMessage' : false;
    const _0x5e14bc = _0x3f7d36.quoted ? _0x3f7d36.quoted.type === 'imageMessage' || (_0x2759f8 ? _0x3f7d36.quoted.msg.type === "imageMessage" : false) : false;
    if (_0x3f7d36.type === "imageMessage" || _0x5e14bc) {
      const _0x5ac18c = require("file-type");
      var _0x57ec3e = getRandom('');
      let _0x42ca38 = _0x5e14bc ? await _0x3f7d36.quoted.download(_0x57ec3e) : await _0x3f7d36.download(_0x57ec3e);
      let _0x34a946 = await _0x5ac18c.fromBuffer(_0x42ca38);
      await fs.promises.writeFile('./' + _0x34a946.ext, _0x42ca38);
      img2url('./' + _0x34a946.ext).then(async _0x4c44b6 => {
        try {
          await _0x280e30.sendMessage(_0x2ee3bb, {
            'image': await getBuffer("https://vihangayt.me/tools/toanime?url=" + _0x4c44b6),
            'caption': config.FOOTER
          }, {
            'quoted': _0x13f478
          });
        } catch (_0x1b96d2) {
          let _0x153477 = await fetchJson("https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json");
          let _0x304f5c = _0x153477.users;
          let _0x5b61d1 = _0x304f5c[Math.floor(Math.random() * _0x304f5c.length)];
          await _0x280e30.sendMessage(_0x2ee3bb, {
            'image': {
              'url': _0x153477.xz + 'api/toanime?url=' + _0x4c44b6 + '&apikey=' + _0x5b61d1
            },
            'caption': config.FOOTER
          }, {
            'quoted': _0x13f478
          });
        }
      });
    } else {
      return _0x48b0e4(imgmsg);
    }
  } catch (_0x22dff2) {
    _0x48b0e4(cantf);
    _0x3da6a3(_0x22dff2);
  }
});
function toAudio(_0x25edcc, _0x1c8a4b) {
  return ffmpeg(_0x25edcc, ["-vn", '-ac', '2', "-b:a", "128k", "-ar", '44100', '-f', "mp3"], _0x1c8a4b, 'mp3');
}
function toPTT(_0x478bed, _0xf8f647) {
  return ffmpeg(_0x478bed, ['-vn', "-c:a", "libopus", "-b:a", "128k", "-vbr", 'on', "-compression_level", '10'], _0xf8f647, "opus");
}
function toVideo(_0x54b3a1, _0x381bff) {
  return ffmpeg(_0x54b3a1, ['-c:v', "libx264", "-c:a", "aac", "-ab", '128k', "-ar", "44100", "-crf", '32', "-preset", "slow"], _0x381bff, "mp4");
}
cmd({
  'pattern': "toptt",
  'react': '🔊',
  'alias': ["toaudio", "audio"],
  'desc': "descg",
  'category': "convert",
  'use': ".toptt <Reply to video>",
  'filename': __filename
}, async (_0x554e2c, _0x33eb7a, _0x57c01b, {
  from: _0xd82c3a,
  l: _0x52c6ef,
  quoted: _0x112374,
  body: _0x16478d,
  isCmd: _0x417385,
  command: _0x171d40,
  args: _0x59806b,
  q: _0x1ab78d,
  isGroup: _0x51d39d,
  sender: _0x25ab98,
  senderNumber: _0x340955,
  botNumber2: _0x24f86a,
  botNumber: _0x5bebb1,
  pushname: _0x440589,
  isMe: _0x22a412,
  isOwner: _0x1d9157,
  groupMetadata: _0xe08d6,
  groupName: _0xd9ad19,
  participants: _0x3e1b36,
  groupAdmins: _0x539b48,
  isBotAdmins: _0xf751d5,
  isAdmins: _0x25485f,
  reply: _0x2973fd
}) => {
  try {
    let _0x3f8eaf = _0x57c01b.quoted ? _0x57c01b.quoted.type === "videoMessage" : _0x57c01b ? _0x57c01b.type === 'videoMessage' : false;
    if (!_0x3f8eaf) {
      return await _0x2973fd(imgmsg);
    }
    let _0x2df4c8 = _0x57c01b.quoted ? await _0x57c01b.quoted.download() : await _0x57c01b.download();
    let _0x431ab2 = await ffmpeg(_0x2df4c8, ['-vn', "-c:a", "libopus", "-b:a", "128k", "-vbr", 'on', "-compression_level", '10'], "mp4", "opus");
    let _0x352ef9 = await _0x554e2c.sendMessage(_0x57c01b.chat, {
      'audio': _0x431ab2.options,
      'mimetype': "audio/mpeg"
    }, {
      'quoted': _0x57c01b
    });
    await _0x554e2c.sendMessage(_0xd82c3a, {
      'react': {
        'text': '🎼',
        'key': _0x352ef9.key
      }
    });
  } catch (_0x31e5ee) {
    _0x2973fd("*Error !!*");
    _0x52c6ef(_0x31e5ee);
  }
});