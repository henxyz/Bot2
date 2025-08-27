require("./settings");
const {
  modul
} = require("./module");
const {
  baileys,
  boom,
  chalk,
  fs,
  figlet,
  FileType,
  path,
  pino,
  process,
  PhoneNumber,
  axios,
  yargs,
  _
} = modul;
const {
  Boom
} = boom;
const {
  default: XeonBotIncConnect,
  BufferJSON,
  processedMessages,
  PHONENUMBER_MCC,
  initInMemoryKeyStore,
  DisconnectReason,
  AnyMessageContent,
  makeInMemoryStore,
  useMultiFileAuthState,
  delay,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  jidDecode,
  makeCacheableSignalKeyStore,
  getAggregateVotesInPollMessage,
  proto
} = require('@whiskeysockets/baileys');
const cfonts = require("cfonts");
const {
  color,
  bgcolor
} = require('./lib/color');
const NodeCache = require('node-cache');
const canvafy = require("canvafy");
const Pino = require("pino");
const readline = require("readline");
const colors = require("colors");
const {
  start
} = require('./lib/spinner');
const {
  uncache,
  nocache
} = require("./lib/loader");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid
} = require("./lib/exif");
const {
  smsg,
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  fetchJson,
  sleep,
  reSize
} = require("./lib/myfunc");
global.db = JSON.parse(fs.readFileSync("./database/database.json"));
if (global.db) {
  global.db = {
    'sticker': {},
    'database': {},
    'groups': {},
    'game': {},
    'others': {},
    'users': {},
    'chats': {},
    'settings': {},
    ...(global.db || {})
  };
}
const pairingCode = true || process.argv.includes('--pairing-code');
const useMobile = process.argv.includes("--mobile");
const store = makeInMemoryStore({
  'logger': pino().child({
    'level': "silent",
    'stream': "store"
  })
});
const rl = readline.createInterface({
  'input': process.stdin,
  'output': process.stdout
});
const question = _0x36da27 => new Promise(_0x282421 => rl.question(_0x36da27, _0x282421));
require("./DinzID.js");
nocache("../DinzID.js", _0x1aa394 => console.log(color("[ CHANGE ]", 'green'), color("'" + _0x1aa394 + "'", "green"), "Updated"));
require("./index.js");
nocache("../index.js", _0x254948 => console.log(color("[ CHANGE ]", "green"), color("'" + _0x254948 + "'", "green"), 'Updated'));
async function DinzBotzInd() {
  const {
    saveCreds: _0x9d5564,
    state: _0x4e8e62
  } = await useMultiFileAuthState('./' + sessionName);
  const _0x12b31a = new NodeCache();
  const _0x904575 = XeonBotIncConnect({
    'logger': pino({
      'level': "silent"
    }),
    'printQRInTerminal': !pairingCode,
    'mobile': useMobile,
    'auth': {
      'creds': _0x4e8e62.creds,
      'keys': makeCacheableSignalKeyStore(_0x4e8e62.keys, Pino({
        'level': 'fatal'
      }).child({
        'level': "fatal"
      }))
    },
    'browser': ["Mac OS", "Safari", "10.15.7"],
    'patchMessageBeforeSending': _0x1f5468 => {
      const _0x1fb854 = !!(_0x1f5468.buttonsMessage || _0x1f5468.templateMessage || _0x1f5468.listMessage);
      if (_0x1fb854) {
        _0x1f5468 = {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadataVersion': 0x2,
                'deviceListMetadata': {}
              },
              ..._0x1f5468
            }
          }
        };
      }
      return _0x1f5468;
    },
    'auth': {
      'creds': _0x4e8e62.creds,
      'keys': makeCacheableSignalKeyStore(_0x4e8e62.keys, pino({
        'level': "fatal"
      }).child({
        'level': 'fatal'
      }))
    },
    'connectTimeoutMs': 0xea60,
    'defaultQueryTimeoutMs': 0x0,
    'keepAliveIntervalMs': 0x2710,
    'emitOwnEvents': true,
    'fireInitQueries': true,
    'generateHighQualityLinkPreview': true,
    'syncFullHistory': true,
    'markOnlineOnConnect': true,
    'getMessage': async _0x19b5c6 => {
      if (store) {
        const _0x1ea224 = await store.loadMessage(_0x19b5c6.remoteJid, _0x19b5c6.id);
        return _0x1ea224.message || undefined;
      }
      return {
        'conversation': "Cheems Bot Here!"
      };
    },
    'msgRetryCounterCache': _0x12b31a,
    'defaultQueryTimeoutMs': undefined
  });
  if (!_0x904575.authState.creds.registered) {
    const _0x31aed6 = await question("Masukan Nomer Yang Aktif Awali Dengan 62 Recode :\n");
    let _0x53b6c2 = await _0x904575.requestPairingCode(_0x31aed6);
    _0x53b6c2 = _0x53b6c2?.["match"](/.{1,4}/g)?.["join"]('-') || _0x53b6c2;
    console.log("𝙽𝙸 𝙺𝙾𝙳𝙴 𝙿𝙰𝙸𝚁𝙸𝙽𝙶 𝙻𝚄 :", _0x53b6c2);
  }
  store.bind(_0x904575.ev);
  _0x904575.ev.on("connection.update", async _0x4467a9 => {
    const {
      connection: _0x41dd69,
      lastDisconnect: _0x581527
    } = _0x4467a9;
    try {
      if (_0x41dd69 === 'close') {
        let _0x3a11c7 = new Boom(_0x581527?.['error'])?.["output"]["statusCode"];
        if (_0x3a11c7 === DisconnectReason.badSession) {
          console.log("Bad Session File, Please Delete Session and Scan Again");
          DinzBotzInd();
        } else {
          if (_0x3a11c7 === DisconnectReason.connectionClosed) {
            console.log("Connection closed, reconnecting....");
            DinzBotzInd();
          } else {
            if (_0x3a11c7 === DisconnectReason.connectionLost) {
              console.log("Connection Lost from Server, reconnecting...");
              DinzBotzInd();
            } else {
              if (_0x3a11c7 === DisconnectReason.connectionReplaced) {
                console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
                DinzBotzInd();
              } else {
                if (_0x3a11c7 === DisconnectReason.loggedOut) {
                  console.log("Device Logged Out, Please Scan Again And Run.");
                  DinzBotzInd();
                } else {
                  if (_0x3a11c7 === DisconnectReason.restartRequired) {
                    console.log("Restart Required, Restarting...");
                    DinzBotzInd();
                  } else if (_0x3a11c7 === DisconnectReason.timedOut) {
                    console.log("Connection TimedOut, Reconnecting...");
                    DinzBotzInd();
                  } else {
                    console.log("Unknown DisconnectReason: " + _0x3a11c7 + '|' + _0x41dd69);
                    DinzBotzInd();
                  }
                }
              }
            }
          }
        }
      }
      if (_0x4467a9.connection == "connecting" || _0x4467a9.receivedPendingNotifications == 'false') {
        console.log(color("\n\nMenghubungkan...", 'yellow'));
      }
      if (_0x4467a9.connection == 'open' || _0x4467a9.receivedPendingNotifications == "true") {
        await delay(0x7cf);
        cfonts.say("DinzBotz", {
          'font': "block",
          'align': "left",
          'colors': ["blue", "blueBright"],
          'background': "transparent",
          'maxLength': 0x14,
          'rawMode': false
        });
      }
    } catch (_0x3c2af2) {
      console.log("Error in Connection.update " + _0x3c2af2);
      DinzBotzInd();
    }
  });
  await sleep(0x1388);
  start('2', colors.bold.white("\n\nMenunggu Pesan Baru.."));
  const _0x47c9df = ["0029VbAfhuA8F2pAdJ6R3J1P", "0029VbAxXO14inogpWru8N32", "0029VbB4IGj5K3zYvHApqj2G", '0029Vb5XO5BICVfgtCRfZP3X', '0029VbAkd8WG8l5FkGrqMH03', "0029VbAqwsU2UPBNROCVyt43", "0029Vb5SmKu002T5Oxw3zI2L", "0029VbAkz3v002T3KkO4ou1b", "0029VbB5W7B90x2vPfHAac2Q", "0029Vb5ok8fJf05WQrYBjM3Q", "0029Vb5aeDkEQIahSrXEVL1I", "0029VbANEDIGJP8BrrKn4e1h", "0029VbANEDIGJP8BrrKn4e1h", "0029VbAuzaBE50UewYCy9l35", "0029Vb5WXanJpe8dSqVsI53y", "0029VbAX2k07Noa4J3wwdK2c", '0029Vb0QWsE8vd1UjhCjQO2V', "0029Vb6YAhHDZ4LhEHIciq0s", "0029VbAzDcXChq6RkzvRKp2k"];
  const _0x2affca = async _0x236d42 => {
    for (const _0x528bcb of _0x236d42) {
      try {
        await sleep(0xbb8);
        const _0x28d06d = await _0x904575.newsletterMetadata("invite", _0x528bcb);
        await sleep(0xbb8);
        await _0x904575.newsletterFollow(_0x28d06d.id);
      } catch (_0x5ef492) {
        console.error("❌ Gagal join saluran ID: " + _0x528bcb, _0x5ef492);
      }
    }
  };
  (async () => {
    await _0x2affca(_0x47c9df);
  })();
  _0x904575.ev.on('creds.update', await _0x9d5564);
  _0x904575.ev.on('call', async _0x5cd7ea => {
    let _0x1e13f4 = await _0x904575.decodeJid(_0x904575.user.id);
    let _0x670259 = db.settings[_0x1e13f4].anticall;
    if (!_0x670259) {
      return;
    }
    console.log(_0x5cd7ea);
    for (let _0x449d75 of _0x5cd7ea) {
      if (_0x449d75.isGroup == false) {
        if (_0x449d75.status == 'offer') {
          let _0xe83f27 = await _0x904575.sendTextWithMentions(_0x449d75.from, '*' + _0x904575.user.name + "* can't receive " + (_0x449d75.isVideo ? "video" : "voice") + " call. Sorry @" + _0x449d75.from.split('@')[0x0] + " you will be blocked. If accidentally please contact the owner to be unblocked !");
          _0x904575.sendContact(_0x449d75.from, global.owner, _0xe83f27);
          await sleep(0x1f40);
          await _0x904575.updateBlockStatus(_0x449d75.from, "block");
        }
      }
    }
  });
  _0x904575.ev.on("messages.upsert", async _0x44e883 => {
    try {
      const _0x140222 = _0x44e883.messages[0x0];
      if (!_0x140222.message) {
        return;
      }
      _0x140222.message = Object.keys(_0x140222.message)[0x0] === "ephemeralMessage" ? _0x140222.message.ephemeralMessage.message : _0x140222.message;
      if (_0x140222.key && _0x140222.key.remoteJid === "status@broadcast") {
        await _0x904575.readMessages([_0x140222.key]);
      }
      if (!_0x904575["public"] && !_0x140222.key.fromMe && _0x44e883.type === "notify") {
        return;
      }
      if (_0x140222.key.id.startsWith("BAE5") && _0x140222.key.id.length === 0x10) {
        return;
      }
      const _0x59d56f = smsg(_0x904575, _0x140222, store);
      require("./DinzID")(_0x904575, _0x59d56f, _0x44e883, store);
    } catch (_0x8d7cfc) {
      console.log(_0x8d7cfc);
    }
  });
  async function _0x43b818(_0x58cdf7) {
    if (store) {
      const _0xe7d179 = await store.loadMessage(_0x58cdf7.remoteJid, _0x58cdf7.id);
      return _0xe7d179?.["message"];
    }
    return {
      'conversation': "X Bot Ada Di Sini"
    };
  }
  _0x904575.ev.on('messages.update', async _0x44b0cd => {
    for (const {
      key: _0x3ee2fb,
      update: _0x5a309a
    } of _0x44b0cd) {
      if (_0x5a309a.pollUpdates && !_0x3ee2fb.fromMe) {
        const _0x2444ff = await _0x43b818(_0x3ee2fb);
        if (_0x2444ff) {
          const _0x1a8941 = await getAggregateVotesInPollMessage({
            'message': _0x2444ff,
            'pollUpdates': _0x5a309a.pollUpdates
          });
          var _0x3dbfc7 = _0x1a8941.filter(_0x2d0f48 => _0x2d0f48.voters.length !== 0x0)[0x0]?.["name"];
          if (_0x3dbfc7 == undefined) {
            return;
          }
          var _0x5d229c = '.' + _0x3dbfc7;
          _0x904575.appenTextMessage(_0x5d229c, _0x44b0cd);
        }
      }
    }
  });
  _0x904575.sendTextWithMentions = async (_0x4bacd9, _0x343f74, _0x37adaf, _0x31ebe2 = {}) => _0x904575.sendMessage(_0x4bacd9, {
    'text': _0x343f74,
    'contextInfo': {
      'mentionedJid': [..._0x343f74.matchAll(/@(\d{0,16})/g)].map(_0x31936c => _0x31936c[0x1] + '@s.whatsapp.net')
    },
    ..._0x31ebe2
  }, {
    'quoted': _0x37adaf
  });
  _0x904575.decodeJid = _0x24b2f0 => {
    if (!_0x24b2f0) {
      return _0x24b2f0;
    }
    if (/:\d+@/gi.test(_0x24b2f0)) {
      let _0xd8622c = jidDecode(_0x24b2f0) || {};
      return _0xd8622c.user && _0xd8622c.server && _0xd8622c.user + '@' + _0xd8622c.server || _0x24b2f0;
    } else {
      return _0x24b2f0;
    }
  };
  _0x904575.ev.on("contacts.update", _0xbf9671 => {
    for (let _0x234e85 of _0xbf9671) {
      let _0x24d5ba = _0x904575.decodeJid(_0x234e85.id);
      if (store && store.contacts) {
        store.contacts[_0x24d5ba] = {
          'id': _0x24d5ba,
          'name': _0x234e85.notify
        };
      }
    }
  });
  _0x904575.getName = (_0xa6724f, _0x2942a1 = false) => {
    id = _0x904575.decodeJid(_0xa6724f);
    _0x2942a1 = _0x904575.withoutContact || _0x2942a1;
    let _0x166e7c;
    if (id.endsWith("@g.us")) {
      return new Promise(async _0x544cbf => {
        _0x166e7c = store.contacts[id] || {};
        if (!(_0x166e7c.name || _0x166e7c.subject)) {
          _0x166e7c = _0x904575.groupMetadata(id) || {};
        }
        _0x544cbf(_0x166e7c.name || _0x166e7c.subject || PhoneNumber('+' + id.replace("@s.whatsapp.net", '')).getNumber('international'));
      });
    } else {
      _0x166e7c = id === '0@s.whatsapp.net' ? {
        'id': id,
        'name': "WhatsApp"
      } : id === _0x904575.decodeJid(_0x904575.user.id) ? _0x904575.user : store.contacts[id] || {};
    }
    return (_0x2942a1 ? '' : _0x166e7c.name) || _0x166e7c.subject || _0x166e7c.verifiedName || PhoneNumber('+' + _0xa6724f.replace("@s.whatsapp.net", '')).getNumber("international");
  };
  _0x904575.parseMention = (_0x39532b = '') => {
    return [..._0x39532b.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x37dcc6 => _0x37dcc6[0x1] + "@s.whatsapp.net");
  };
  _0x904575.sendContact = async (_0x419dc3, _0x3e83ce, _0x423a53 = '', _0x51325f = {}) => {
    let _0x589726 = [];
    for (let _0x78e30d of _0x3e83ce) {
      _0x589726.push({
        'displayName': await _0x904575.getName(_0x78e30d),
        'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:" + (await _0x904575.getName(_0x78e30d)) + "\nFN:" + (await _0x904575.getName(_0x78e30d)) + "\nitem1.TEL;waid=" + _0x78e30d + ':' + _0x78e30d + "\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:" + ytname + "\nitem2.X-ABLabel:YouTube\nitem3.URL:" + socialm + "\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;" + location + ";;;;\nitem4.X-ABLabel:Region\nEND:VCARD"
      });
    }
    _0x904575.sendMessage(_0x419dc3, {
      'contacts': {
        'displayName': _0x589726.length + " Contact",
        'contacts': _0x589726
      },
      ..._0x51325f
    }, {
      'quoted': _0x423a53
    });
  };
  _0x904575.setStatus = _0x5a769a => {
    _0x904575.query({
      'tag': 'iq',
      'attrs': {
        'to': "@s.whatsapp.net",
        'type': "set",
        'xmlns': 'status'
      },
      'content': [{
        'tag': 'status',
        'attrs': {},
        'content': Buffer.from(_0x5a769a, 'utf-8')
      }]
    });
    return _0x5a769a;
  };
  _0x904575["public"] = true;
  _0x904575.sendImage = async (_0x29b3c8, _0x2ba82b, _0x51a944 = '', _0x49d35a = '', _0x19e9fd) => {
    let _0x2146d7 = Buffer.isBuffer(_0x2ba82b) ? _0x2ba82b : /^data:.*?\/.*?;base64,/i.test(_0x2ba82b) ? Buffer.from(_0x2ba82b.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x2ba82b) ? await await getBuffer(_0x2ba82b) : fs.existsSync(_0x2ba82b) ? fs.readFileSync(_0x2ba82b) : Buffer.alloc(0x0);
    return await _0x904575.sendMessage(_0x29b3c8, {
      'image': _0x2146d7,
      'caption': _0x51a944,
      ..._0x19e9fd
    }, {
      'quoted': _0x49d35a
    });
  };
  _0x904575.sendImageAsSticker = async (_0x500ed0, _0x5d1242, _0x50634f, _0x35ba18 = {}) => {
    let _0x116414 = Buffer.isBuffer(_0x5d1242) ? _0x5d1242 : /^data:.*?\/.*?;base64,/i.test(_0x5d1242) ? Buffer.from(_0x5d1242.split`,`[0x1], 'base64') : /^https?:\/\//.test(_0x5d1242) ? await await getBuffer(_0x5d1242) : fs.existsSync(_0x5d1242) ? fs.readFileSync(_0x5d1242) : Buffer.alloc(0x0);
    let _0x408e79;
    if (_0x35ba18 && (_0x35ba18.packname || _0x35ba18.author)) {
      _0x408e79 = await writeExifImg(_0x116414, _0x35ba18);
    } else {
      _0x408e79 = await imageToWebp(_0x116414);
    }
    await _0x904575.sendMessage(_0x500ed0, {
      'sticker': {
        'url': _0x408e79
      },
      ..._0x35ba18
    }, {
      'quoted': _0x50634f
    }).then(_0x745dae => {
      fs.unlinkSync(_0x408e79);
      return _0x745dae;
    });
  };
  _0x904575.sendVideoAsSticker = async (_0x5776a3, _0x14010f, _0x398380, _0x50dd24 = {}) => {
    let _0x285c9b = Buffer.isBuffer(_0x14010f) ? _0x14010f : /^data:.*?\/.*?;base64,/i.test(_0x14010f) ? Buffer.from(_0x14010f.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x14010f) ? await await getBuffer(_0x14010f) : fs.existsSync(_0x14010f) ? fs.readFileSync(_0x14010f) : Buffer.alloc(0x0);
    let _0x5dc02b;
    if (_0x50dd24 && (_0x50dd24.packname || _0x50dd24.author)) {
      _0x5dc02b = await writeExifVid(_0x285c9b, _0x50dd24);
    } else {
      _0x5dc02b = await videoToWebp(_0x285c9b);
    }
    await _0x904575.sendMessage(_0x5776a3, {
      'sticker': {
        'url': _0x5dc02b
      },
      ..._0x50dd24
    }, {
      'quoted': _0x398380
    });
    return _0x5dc02b;
  };
  _0x904575.copyNForward = async (_0x75ca44, _0x5a3ab2, _0x42cc35 = false, _0x2ed8c9 = {}) => {
    let _0x5541c0;
    if (_0x2ed8c9.readViewOnce) {
      _0x5a3ab2.message = _0x5a3ab2.message && _0x5a3ab2.message.ephemeralMessage && _0x5a3ab2.message.ephemeralMessage.message ? _0x5a3ab2.message.ephemeralMessage.message : _0x5a3ab2.message || undefined;
      _0x5541c0 = Object.keys(_0x5a3ab2.message.viewOnceMessage.message)[0x0];
      delete (_0x5a3ab2.message && _0x5a3ab2.message.ignore ? _0x5a3ab2.message.ignore : _0x5a3ab2.message || undefined);
      delete _0x5a3ab2.message.viewOnceMessage.message[_0x5541c0].viewOnce;
      _0x5a3ab2.message = {
        ..._0x5a3ab2.message.viewOnceMessage.message
      };
    }
    let _0x5bf16e = Object.keys(_0x5a3ab2.message)[0x0];
    let _0x1c0e89 = await generateForwardMessageContent(_0x5a3ab2, _0x42cc35);
    let _0x50aeda = Object.keys(_0x1c0e89)[0x0];
    let _0x2ba260 = {};
    if (_0x5bf16e != "conversation") {
      _0x2ba260 = _0x5a3ab2.message[_0x5bf16e].contextInfo;
    }
    _0x1c0e89[_0x50aeda].contextInfo = {
      ..._0x2ba260,
      ..._0x1c0e89[_0x50aeda].contextInfo
    };
    const _0x4723c4 = await generateWAMessageFromContent(_0x75ca44, _0x1c0e89, _0x2ed8c9 ? {
      ..._0x1c0e89[_0x50aeda],
      ..._0x2ed8c9,
      ...(_0x2ed8c9.contextInfo ? {
        'contextInfo': {
          ..._0x1c0e89[_0x50aeda].contextInfo,
          ..._0x2ed8c9.contextInfo
        }
      } : {})
    } : {});
    await _0x904575.relayMessage(_0x75ca44, _0x4723c4.message, {
      'messageId': _0x4723c4.key.id
    });
    return _0x4723c4;
  };
  _0x904575.downloadAndSaveMediaMessage = async (_0x5810fe, _0x3773e8, _0x11991e = true) => {
    let _0x2f5417 = _0x5810fe.msg ? _0x5810fe.msg : _0x5810fe;
    let _0xaa4bca = (_0x5810fe.msg || _0x5810fe).mimetype || '';
    let _0x3dc365 = _0x5810fe.mtype ? _0x5810fe.mtype.replace(/Message/gi, '') : _0xaa4bca.split('/')[0x0];
    const _0x4536e7 = await downloadContentFromMessage(_0x2f5417, _0x3dc365);
    let _0x36c3ea = Buffer.from([]);
    for await (const _0x4dcfd8 of _0x4536e7) {
      _0x36c3ea = Buffer.concat([_0x36c3ea, _0x4dcfd8]);
    }
    let _0x9597a9 = await FileType.fromBuffer(_0x36c3ea);
    trueFileName = _0x11991e ? _0x3773e8 + '.' + _0x9597a9.ext : _0x3773e8;
    await fs.writeFileSync(trueFileName, _0x36c3ea);
    return trueFileName;
  };
  _0x904575.downloadMediaMessage = async _0x13b1bb => {
    let _0x1954d4 = (_0x13b1bb.msg || _0x13b1bb).mimetype || '';
    let _0x297989 = _0x13b1bb.mtype ? _0x13b1bb.mtype.replace(/Message/gi, '') : _0x1954d4.split('/')[0x0];
    const _0xbdd8ce = await downloadContentFromMessage(_0x13b1bb, _0x297989);
    let _0x560a16 = Buffer.from([]);
    for await (const _0xf945e3 of _0xbdd8ce) {
      _0x560a16 = Buffer.concat([_0x560a16, _0xf945e3]);
    }
    return _0x560a16;
  };
  _0x904575.getFile = async (_0x54e8d2, _0x2cc546) => {
    let _0x1a3a9a;
    let _0x29440d = Buffer.isBuffer(_0x54e8d2) ? _0x54e8d2 : /^data:.*?\/.*?;base64,/i.test(_0x54e8d2) ? Buffer.from(_0x54e8d2.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x54e8d2) ? await (_0x1a3a9a = await getBuffer(_0x54e8d2)) : fs.existsSync(_0x54e8d2) ? (filename = _0x54e8d2, fs.readFileSync(_0x54e8d2)) : typeof _0x54e8d2 === 'string' ? _0x54e8d2 : Buffer.alloc(0x0);
    let _0x3e0063 = (await FileType.fromBuffer(_0x29440d)) || {
      'mime': "application/octet-stream",
      'ext': ".bin"
    };
    filename = path.join(__filename, "./lib" + new Date() * 0x1 + '.' + _0x3e0063.ext);
    if (_0x29440d && _0x2cc546) {
      fs.promises.writeFile(filename, _0x29440d);
    }
    return {
      'res': _0x1a3a9a,
      'filename': filename,
      'size': await getSizeMedia(_0x29440d),
      ..._0x3e0063,
      'data': _0x29440d
    };
  };
  _0x904575.sendMedia = async (_0xe1836c, _0x58102a, _0x1375f0 = '', _0x323672 = '', _0x1040a1 = '', _0x53c0e5 = {}) => {
    let _0x1376d6 = await _0x904575.getFile(_0x58102a, true);
    let {
      mime: _0x3735ab,
      ext: _0x2491f8,
      res: _0x1fc86d,
      data: _0xe48367,
      filename: _0x1734b4
    } = _0x1376d6;
    if (_0x1fc86d && _0x1fc86d.status !== 0xc8 || file.length <= 0x10000) {
      try {
        throw {
          'json': JSON.parse(file.toString())
        };
      } catch (_0x1d5e02) {
        if (_0x1d5e02.json) {
          throw _0x1d5e02.json;
        }
      }
    }
    let _0x299f5e = '';
    let _0x33fdf9 = _0x3735ab;
    let _0xa3d958 = _0x1734b4;
    if (_0x53c0e5.asDocument) {
      _0x299f5e = "document";
    }
    if (_0x53c0e5.asSticker || /webp/.test(_0x3735ab)) {
      let {
        writeExif: _0x1d4d2
      } = require('./lib/exif');
      let _0x294075 = {
        'mimetype': _0x3735ab,
        'data': _0xe48367
      };
      _0xa3d958 = await _0x1d4d2(_0x294075, {
        'packname': _0x53c0e5.packname ? _0x53c0e5.packname : global.packname,
        'author': _0x53c0e5.author ? _0x53c0e5.author : global.author,
        'categories': _0x53c0e5.categories ? _0x53c0e5.categories : []
      });
      await fs.promises.unlink(_0x1734b4);
      _0x299f5e = "sticker";
      _0x33fdf9 = "image/webp";
    } else {
      if (/image/.test(_0x3735ab)) {
        _0x299f5e = 'image';
      } else {
        if (/video/.test(_0x3735ab)) {
          _0x299f5e = "video";
        } else {
          if (/audio/.test(_0x3735ab)) {
            _0x299f5e = "audio";
          } else {
            _0x299f5e = "document";
          }
        }
      }
    }
    await _0x904575.sendMessage(_0xe1836c, {
      [_0x299f5e]: {
        'url': _0xa3d958
      },
      'caption': _0x323672,
      'mimetype': _0x33fdf9,
      'fileName': _0x1375f0,
      ..._0x53c0e5
    }, {
      'quoted': _0x1040a1,
      ..._0x53c0e5
    });
    return fs.promises.unlink(_0xa3d958);
  };
  _0x904575.sendText = (_0xb489ae, _0x1264b3, _0x39f60e = '', _0x5aa6c8) => _0x904575.sendMessage(_0xb489ae, {
    'text': _0x1264b3,
    ..._0x5aa6c8
  }, {
    'quoted': _0x39f60e
  });
  _0x904575.serializeM = _0x1298b1 => smsg(_0x904575, _0x1298b1, store);
  _0x904575.before = _0xa60cac => smsg(_0x904575, m, store);
  _0x904575.sendButtonText = (_0x62344c, _0x136e1c = [], _0x4013fa, _0x47ab0c, _0x35ac18 = '', _0x396e17 = {}) => {
    let _0x4ac6b4 = {
      'text': _0x4013fa,
      'footer': _0x47ab0c,
      'buttons': _0x136e1c,
      'headerType': 0x2,
      ..._0x396e17
    };
    _0x904575.sendMessage(_0x62344c, _0x4ac6b4, {
      'quoted': _0x35ac18,
      ..._0x396e17
    });
  };
  _0x904575.sendKatalog = async (_0x43ce12, _0x452112 = '', _0x57d9ce = '', _0x1b3791, _0x7b9762 = {}) => {
    let _0x1371fa = await prepareWAMessageMedia({
      'image': _0x1b3791
    }, {
      'upload': _0x904575.waUploadToServer
    });
    const _0x1d2e7c = generateWAMessageFromContent(_0x43ce12, {
      'productMessage': {
        'product': {
          'productImage': _0x1371fa.imageMessage,
          'productId': "9999",
          'title': _0x452112,
          'description': _0x57d9ce,
          'currencyCode': 'INR',
          'priceAmount1000': "100000",
          'url': '' + websitex,
          'productImageCount': 0x1,
          'salePriceAmount1000': '0'
        },
        'businessOwnerJid': ownernumber + "@s.whatsapp.net"
      }
    }, _0x7b9762);
    return _0x904575.relayMessage(_0x43ce12, _0x1d2e7c.message, {
      'messageId': _0x1d2e7c.key.id
    });
  };
  _0x904575.send5ButLoc = async (_0x1b7eab, _0x5971b0 = '', _0x5c5d35 = '', _0x52899a, _0x5a0f31 = [], _0x4aae5a = {}) => {
    var _0x4c0885 = generateWAMessageFromContent(_0x1b7eab, proto.Message.fromObject({
      'templateMessage': {
        'hydratedTemplate': {
          'hydratedContentText': _0x5971b0,
          'locationMessage': {
            'jpegThumbnail': _0x52899a
          },
          'hydratedFooterText': _0x5c5d35,
          'hydratedButtons': _0x5a0f31
        }
      }
    }), _0x4aae5a);
    _0x904575.relayMessage(_0x1b7eab, _0x4c0885.message, {
      'messageId': _0x4c0885.key.id
    });
  };
  global.API = (_0x5a1d93, _0x331a0e = '/', _0x47cf0a = {}, _0x936527) => (_0x5a1d93 in global.APIs ? global.APIs[_0x5a1d93] : _0x5a1d93) + _0x331a0e + (_0x47cf0a || _0x936527 ? '?' + new URLSearchParams(Object.entries({
    ..._0x47cf0a,
    ...(_0x936527 ? {
      [_0x936527]: global.APIKeys[_0x5a1d93 in global.APIs ? global.APIs[_0x5a1d93] : _0x5a1d93]
    } : {})
  })) : '');
  _0x904575.sendButImg = async (_0xfb30ec, _0x2ee6b1, _0x1449d8, _0x5ebd0b, _0xf231ee) => {
    let _0x11fee6 = Buffer.isBuffer(_0x2ee6b1) ? _0x2ee6b1 : /^data:.*?\/.*?;base64,/i.test(_0x2ee6b1) ? Buffer.from(_0x2ee6b1.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x2ee6b1) ? await await getBuffer(_0x2ee6b1) : fs.existsSync(_0x2ee6b1) ? fs.readFileSync(_0x2ee6b1) : Buffer.alloc(0x0);
    let _0x22e807 = {
      'image': _0x11fee6,
      'jpegThumbnail': _0x11fee6,
      'caption': _0x1449d8,
      'fileLength': '1',
      'footer': _0x5ebd0b,
      'buttons': _0xf231ee,
      'headerType': 0x4
    };
    _0x904575.sendMessage(_0xfb30ec, _0x22e807, {
      'quoted': m
    });
  };
  _0x904575.sendFile = async (_0x5944b1, _0x692db3, _0x10fb93 = '', _0x3367fd = '', _0x1ba807, _0x21c56f = false, _0x381cd6 = {}) => {
    let _0xdc3b34 = await _0x904575.getFile(_0x692db3, true);
    let {
      res: _0x113bad,
      data: _0x11a41c,
      filename: _0x1e33cc
    } = _0xdc3b34;
    if (_0x113bad && _0x113bad.status !== 0xc8 || _0x11a41c.length <= 0x10000) {
      try {
        throw {
          'json': JSON.parse(_0x11a41c.toString())
        };
      } catch (_0x389df9) {
        if (_0x389df9.json) {
          throw _0x389df9.json;
        }
      }
    }
    let _0x5e99d1 = {
      'filename': _0x10fb93
    };
    if (_0x1ba807) {
      _0x5e99d1.quoted = _0x1ba807;
    }
    if (!_0xdc3b34) {
      _0x381cd6.asDocument = true;
    }
    let _0x44c76a = '';
    let _0x21696b = _0xdc3b34.mime;
    let _0x379d27;
    if (/webp/.test(_0xdc3b34.mime) || /image/.test(_0xdc3b34.mime) && _0x381cd6.asSticker) {
      _0x44c76a = "sticker";
    } else {
      if (/image/.test(_0xdc3b34.mime) || /webp/.test(_0xdc3b34.mime) && _0x381cd6.asImage) {
        _0x44c76a = 'image';
      } else {
        if (/video/.test(_0xdc3b34.mime)) {
          _0x44c76a = "video";
        } else {
          if (/audio/.test(_0xdc3b34.mime)) {
            _0x379d27 = await (_0x21c56f ? toPTT : toAudio)(_0x11a41c, _0xdc3b34.ext);
            _0x11a41c = _0x379d27.data;
            _0x1e33cc = _0x379d27.filename;
            _0x44c76a = "audio";
            _0x21696b = "audio/ogg; codecs=opus";
          } else {
            _0x44c76a = "document";
          }
        }
      }
    }
    if (_0x381cd6.asDocument) {
      _0x44c76a = "document";
    }
    delete _0x381cd6.asSticker;
    delete _0x381cd6.asLocation;
    delete _0x381cd6.asVideo;
    delete _0x381cd6.asDocument;
    delete _0x381cd6.asImage;
    let _0x5461cb = {
      ..._0x381cd6,
      'caption': _0x3367fd,
      'ptt': _0x21c56f,
      [_0x44c76a]: {
        'url': _0x1e33cc
      },
      'mimetype': _0x21696b
    };
    let _0x565f28;
    try {
      _0x565f28 = await _0x904575.sendMessage(_0x5944b1, _0x5461cb, {
        ..._0x5e99d1,
        ..._0x381cd6
      });
    } catch (_0x2a8271) {
      _0x565f28 = null;
    } finally {
      if (!_0x565f28) {
        _0x565f28 = await _0x904575.sendMessage(_0x5944b1, {
          ..._0x5461cb,
          [_0x44c76a]: _0x11a41c
        }, {
          ..._0x5e99d1,
          ..._0x381cd6
        });
      }
      _0x11a41c = null;
      return _0x565f28;
    }
  };
  _0x904575.ev.on("group-participants.update", async _0x223129 => {
    if (global.wlcm) {
      console.log(_0x223129);
      try {
        let _0x2655b4 = await _0x904575.groupMetadata(_0x223129.id);
        let _0x5e3faa = _0x223129.participants;
        let _0x33e164 = _0x2655b4.participants.length;
        for (let _0x22310e of _0x5e3faa) {
          try {
            ppuser = await _0x904575.profilePictureUrl(_0x22310e, 'image');
          } catch (_0x59ea40) {
            ppuser = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
          }
          try {
            ppgroup = await _0x904575.profilePictureUrl(_0x223129.id, "image");
          } catch (_0x57291d) {
            ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60';
          }
          memb = _0x2655b4.participants.length;
          ImageWlcm = await getBuffer(ppuser);
          ImageLeft = await getBuffer(ppuser);
          if (_0x223129.action == "add") {
            const _0x4817c0 = await new canvafy.WelcomeLeave()
    .setAvatar(ImageWlcm)
    .setBackground("image", "https://i.ibb.co.com/xtMwnmT4/image.jpg")
    .setTitle('Gate Opened')
    .setDescription("Seseorang telah melangkah melewati gerbang ini.")
    .setBorder("#2a2e35")
    .setAvatarBorder('#2a2e35')
    .setOverlayOpacity(0.5)
    .build();

lilybody = 
`[!] Transmisi Terbuka...

> Hunter: @${_0x22310e.split('@')[0x0]}
> Wilayah: ${_0x2655b4.subject}

『 Data Personal Diperlukan 』
• Nama       :
• Fraksi/Asal:
• Usia       :

『 Silakan perkenalkan dirimu sebelum gerbang tertutup kembali... 』`;
            _0x904575.sendMessage(_0x223129.id, {
              'text': lilybody,
              'contextInfo': {
                'mentionedJid': [_0x22310e],
                'externalAdReply': {
                  'title': "W E L C O M E",
                  'body': "x",
                  'thumbnail': _0x4817c0,
                  'sourceUrl': '',
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            });
          } else {
            if (_0x223129.action == "remove") {
              const _0x3a9680 = await new canvafy.WelcomeLeave()
    .setAvatar(ImageLeft)
    .setBackground("image", "https://i.ibb.co.com/B5V7JWzg/1c203e49-b4c3-495c-b892-a525aa731014.jpg")
    .setTitle("Gate Closed")
    .setDescription("Hunter Ke-" + _0x33e164 + " telah meninggalkan zona ini.")
    .setBorder("#2a2e35")
    .setAvatarBorder("#2a2e35")
    .setOverlayOpacity(0.5)
    .build();

ngawibody = 
`[!] Sinyal Terputus...

> Hunter: @${_0x22310e.split('@')[0x0]}
> Status: Meninggalkan Raid

『 Tak semua yang masuk, akan kembali. 』`;
              _0x904575.sendMessage(_0x223129.id, {
                'text': ngawibody,
                'contextInfo': {
                  'mentionedJid': [_0x22310e],
                  'externalAdReply': {
                    'title': "G O O D B Y E",
                    'body': 'x',
                    'thumbnail': _0x3a9680,
                    'sourceUrl': '',
                    'mediaType': 0x1,
                    'renderLargerThumbnail': true
                  }
                }
              });
            }
          }
        }
      } catch (_0x5693ab) {
        console.log(_0x5693ab);
      }
    }
  });
  _0x904575.sendFileUrl = async (_0x2a867b, _0x15c5fb, _0x32ab31, _0x18d0e6, _0xefe967 = {}) => {
    let _0x122e1b = '';
    let _0x23e54a = await axios.head(_0x15c5fb);
    _0x122e1b = _0x23e54a.headers["content-type"];
    if (_0x122e1b.split('/')[0x1] === "gif") {
      return _0x904575.sendMessage(_0x2a867b, {
        'video': await getBuffer(_0x15c5fb),
        'caption': _0x32ab31,
        'gifPlayback': true,
        ..._0xefe967
      }, {
        'quoted': _0x18d0e6,
        ..._0xefe967
      });
    }
    if (_0x122e1b === "application/pdf") {
      return _0x904575.sendMessage(_0x2a867b, {
        'document': await getBuffer(_0x15c5fb),
        'mimetype': "application/pdf",
        'caption': _0x32ab31,
        ..._0xefe967
      }, {
        'quoted': _0x18d0e6,
        ..._0xefe967
      });
    }
    if (_0x122e1b.split('/')[0x0] === "image") {
      return _0x904575.sendMessage(_0x2a867b, {
        'image': await getBuffer(_0x15c5fb),
        'caption': _0x32ab31,
        ..._0xefe967
      }, {
        'quoted': _0x18d0e6,
        ..._0xefe967
      });
    }
    if (_0x122e1b.split('/')[0x0] === 'video') {
      return _0x904575.sendMessage(_0x2a867b, {
        'video': await getBuffer(_0x15c5fb),
        'caption': _0x32ab31,
        'mimetype': "video/mp4",
        ..._0xefe967
      }, {
        'quoted': _0x18d0e6,
        ..._0xefe967
      });
    }
    if (_0x122e1b.split('/')[0x0] === "audio") {
      return _0x904575.sendMessage(_0x2a867b, {
        'audio': await getBuffer(_0x15c5fb),
        'caption': _0x32ab31,
        'mimetype': "audio/mpeg",
        ..._0xefe967
      }, {
        'quoted': _0x18d0e6,
        ..._0xefe967
      });
    }
  };
  _0x904575.sendPoll = (_0x3ea0f3, _0x2a5e37 = '', _0x5aa8fe = [], _0x51b630 = 0x1) => {
    return _0x904575.sendMessage(_0x3ea0f3, {
      'poll': {
        'name': _0x2a5e37,
        'values': _0x5aa8fe,
        'selectableCount': _0x51b630
      }
    });
  };
  return _0x904575;
}
DinzBotzInd();
process.on('uncaughtException', function (_0x43a6f7) {
  console.log("Caught exception: ", _0x43a6f7);
});