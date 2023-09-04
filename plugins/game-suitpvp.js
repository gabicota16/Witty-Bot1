let timeout = 60000 
 let poin = 500 
 let poin_lose = -100 
 let poin_bot = 200 
 let handler = async (m, { conn, usedPrefix, text }) => { 
 conn.suit = conn.suit ? conn.suit : {} 
 if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw '*[❗] 𝗧𝗲𝗿𝗺𝗶𝗻𝗮 𝘁𝘂 𝗽𝗮𝗿𝘁𝗶𝗱𝗮 𝗮𝗻𝘁𝗲𝘀 𝗱𝗲 𝗶𝗻𝗶𝗰𝗶𝗮𝗿 𝗼𝘁𝗿𝗮*' 
 let textquien = `*𝗔 𝗾𝘂𝗶𝗲𝗻 𝗾𝘂𝗶𝗲𝗿𝗲𝘀 𝗱𝗲𝘀𝗮𝗳𝗶𝗮𝗿? 𝗘𝘁𝗶𝗾𝘂𝗲𝘁𝗮 𝗮 𝘂𝗻𝗮 𝗽𝗲𝗿𝘀𝗼𝗻𝗮 *\n\n*—◉ 𝗘𝗷𝗲𝗺𝗽𝗹𝗼:*\n${usedPrefix}suit @${global.suittag}` 
 if (!m.mentionedJid[0]) return m.reply(textquien, m.chat, { mentions: conn.parseMention(textquien)}) 
 if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `*[❗] 𝗟𝗮 𝗽𝗲𝗿𝘀𝗼𝗻𝗮 𝗾𝘂𝗲 𝗾𝘂𝗶𝗲𝗿𝗲𝘀 𝗱𝗲𝘀𝗮𝗳𝗶𝗮𝗿 𝗮𝘂́𝗻 𝗲𝘀𝘁𝗮́ 𝗷𝘂𝗴𝗮𝗻𝗱𝗼 𝗼𝘁𝗿𝗮 𝗽𝗮𝗿𝘁𝗶𝗱𝗮, 𝗲𝘀𝗽𝗲𝗿𝗮 𝗮 𝗾𝘂𝗲 𝘁𝗲𝗿𝗺𝗶𝗻𝗲 𝗱𝗲 𝗷𝘂𝗴𝗮𝗿𝗹𝗮` 
 let id = 'suit_' + new Date() * 1 
 let caption = `*🎮 𝙂𝙖𝙢𝙚𝙨 - 𝙋𝙫𝙋 - 𝙂𝙖𝙢𝙚𝙨 🎮*\n\n @${m.sender.split`@`[0]} 𝗗𝗲𝘀𝗮𝗳𝗶𝗮 𝗮 @${m.mentionedJid[0].split`@`[0]} 𝗔 𝘂𝗻 𝗣𝗩𝗣 𝗱𝗲 𝗽𝗶𝗲𝗱𝗿𝗮 🪨, 𝗽𝗮𝗽𝗲𝗹 📄 𝘆 𝘁𝗶𝗷𝗲𝗿𝗮 ✂️. \n◉ 𝗘𝘀𝗰𝗿𝗶𝗯𝗲 "𝗮𝗰𝗲𝗽𝘁𝗮𝗿" 𝗽𝗮𝗿𝗮 𝗮𝗰𝗲𝗽𝘁𝗮𝗿\n◉ 𝗘𝘀𝗰𝗿𝗶𝗯𝗲 "𝗿𝗲𝗰𝗵𝗮𝘇𝗮𝗿" 𝗽𝗮𝗿𝗮 𝗿𝗲𝗰𝗵𝗮𝘇𝗮𝗿\n𝗥𝗲𝘀𝗽𝗼𝗻𝗱𝗶𝗲𝗻𝗱𝗼 𝗮 𝗲𝘀𝘁𝗲 𝗺𝗲𝗻𝘀𝗮𝗷𝗲.` 
 let imgplaygame = `https://www.merca2.es/wp-content/uploads/2020/05/Piedra-papel-o-tijera-0003318_1584-825x259.jpeg` 
 conn.suit[id] = { 
 chat: await conn.sendMessage(m.chat, { text: caption }, { mentions: await conn.parseMention(caption) }), 
 id: id, 
 p: m.sender, 
 p2: m.mentionedJid[0], 
 status: 'wait', 
 waktu: setTimeout(() => { 
 if (conn.suit[id]) conn.reply(m.chat, `[ ⏳ ] 𝗧𝗶𝗲𝗺𝗽𝗼 𝗱𝗲 𝗲𝘀𝗽𝗲𝗿𝗮 𝗳𝗶𝗻𝗮𝗹𝗶𝘇𝗮𝗱𝗼, 𝗲𝗹 𝗽𝘃𝗽 𝘀𝗲 𝗰𝗮𝗻𝗰𝗲𝗹𝗼́ 𝗽𝗼𝗿 𝗳𝗮𝗹𝘁𝗮 𝗱𝗲 𝗿𝗲𝘀𝗽𝘂𝗲𝘀𝘁𝗮.`, m) 
  
 delete conn.suit[id] 
 }, timeout), poin, poin_lose, poin_bot, timeout 
 }} 
 handler.command = /^pvp|suit(pvp)?$/i 
 handler.group = true 
 handler.game = true 
 export default handler