let handler = m => m 
 handler.before = async function (m) { 
 this.suit = this.suit ? this.suit : {} 
 if (db.data.users[m.sender].suit < 0) db.data.users[m.sender].suit = 0 
 let room = Object.values(this.suit).find(room => room.id && room.status && [room.p, room.p2].includes(m.sender)) 
 if (room) { 
 let win = '' 
 let tie = false 
 if (m.sender == room.p2 && /^(acc(ept)?|terima|aceptar|gas|aceptare?|nao|gamau|rechazar|ga(k.)?bisa)/i.test(m.text) && m.isGroup && room.status == 'wait') { 
 if (/^(tolak|gamau|rechazar|ga(k.)?bisa)/i.test(m.text)) { 
 let textno = `*[❗] @${room.p2.split`@`[0]} 𝗦𝗲 𝗰𝗮𝗴𝗼́ 𝘆 𝗿𝗲𝗰𝗵𝗮𝘇𝗼́ 𝗲𝗹 𝗽𝘃𝗽, 𝗲𝗹 𝗷𝘂𝗲𝗴𝗼 𝘀𝗲 𝗰𝗮𝗻𝗰𝗲𝗹𝗮*` 
 m.reply(textno, null, {mentions: this.parseMention(textno)}) 
 delete this.suit[room.id] 
 return !0 } 
 room.status = 'play' 
 room.asal = m.chat 
 clearTimeout(room.waktu) 
 let textplay = `*🎮 𝙂𝙖𝙢𝙚𝙨 - 𝙋𝙫𝙋 - 𝙂𝙖𝙢𝙚𝙨 🎮*\n\n—◉ 𝗘𝗹 𝗷𝘂𝗲𝗴𝗼 𝗰𝗼𝗺𝗶𝗲𝗻𝘇𝗮, 𝗹𝗮𝘀 𝗼𝗽𝗰𝗶𝗼𝗻𝗲𝘀 𝗵𝗮𝗻 𝗦𝗶𝗱𝗼 𝗲𝗻𝘃𝗶𝗮𝗱𝗮𝘀 𝗮 𝗹𝗼𝘀 𝗰𝗵𝗮𝘁𝘀 𝗽𝗿𝗶𝘃𝗮𝗱𝗼𝘀 𝗱𝗲 @${room.p.split`@`[0]} 𝘆 @${room.p2.split`@`[0]}\n\n◉ 𝗦𝗲𝗹𝗲𝗰𝗰𝗶𝗼𝗻𝗲𝗻 𝘂𝗻𝗮 𝗼𝗽𝗰𝗶𝗼́𝗻 𝗲𝗻 𝘀𝘂𝘀 𝗰𝗵𝗮𝘁𝘀 𝗽𝗿𝗶𝘃𝗮𝗱𝗼𝘀, 𝗿𝗲𝘀𝗽𝗲𝗰𝘁𝗶𝘃𝗮𝗺𝗲𝗻𝘁𝗲\n*◉ 𝗗𝗲𝗯𝗲𝗻 𝗱𝗲 𝗲𝗹𝗲𝗴𝗶𝗿 𝘀𝘂 𝗼𝗽𝗰𝗶𝗼́𝗻 𝗲𝗻: wa.me/${conn.user.jid.split`@`[0]}*` 
 m.reply(textplay, m.chat, {mentions: this.parseMention(textplay)}) 
 let comienzop = `𝙎𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙚 𝙪𝙣𝙖𝙖 𝙙𝙚 𝙡𝙖𝙨 𝙨𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚𝙨 𝙤𝙥𝙘𝙞𝙤𝙣𝙚𝙨:
 ✮ *Piedra* 🪨
 ✮ *Papel* 📄
 ✮ *Tijera* ✂️\n🏅𝐆𝐚𝐧𝐚𝐝𝐨𝐫 +${room.poin}𝚇𝙿\n💩𝐏𝐞𝐫𝐝𝐞𝐝𝐨𝐫 ${room.poin_lose}𝚇𝙿\n*responda al mensaje con la opción que desea* 
*ejemplo: papel*` 
 let comienzop2 = `𝙎𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙚 𝙪𝙣𝙖𝙖 𝙙𝙚 𝙡𝙖𝙨 𝙨𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚𝙨 𝙤𝙥𝙘𝙞𝙤𝙣𝙚𝙨:
 ✮ *Piedra* 🪨
 ✮ *Papel* 📄
 ✮ *Tijera* ✂️\n🏅𝐆𝐚𝐧𝐚𝐝𝐨𝐫 +${room.poin}𝚇𝙿\n💩𝐏𝐞𝐫𝐝𝐞𝐝𝐨𝐫 ${room.poin_lose}𝚇𝙿\n*responda al mensaje con la opción que desea* 
 *ejemplo: papel*` 
  
 if (!room.pilih) this.sendMessage(room.p, { text: comienzop }, { quoted: m })   
 if (!room.pilih2) this.sendMessage(room.p2, { text: comienzop2 }, { quoted: m }) 
 room.waktu_milih = setTimeout(() => { 
 let iniciativa = `[❗] 𝗡𝗶𝗻𝗴𝘂́𝗻 𝗷𝘂𝗴𝗮𝗱𝗼𝗿 𝘁𝗼𝗺𝗼 𝗹𝗮 𝗶𝗻𝗶𝗰𝗶𝗮𝘁𝗶𝘃𝗮 𝗱𝗲 𝗲𝗺𝗽𝗲𝘇𝗮𝗿 𝗲𝗹 𝗷𝘂𝗲𝗴𝗼, 𝗲𝗹 𝗽𝘃𝗽 𝘀𝗲 𝗵𝗮 𝗰𝗮𝗻𝗰𝗲𝗹𝗮𝗱𝗼`                               
 if (!room.pilih && !room.pilih2) this.sendMessage(m.chat, { text: iniciativa }, { quoted: m }) 
 else if (!room.pilih || !room.pilih2) { 
 win = !room.pilih ? room.p2 : room.p  
 let textnull = `*[❗] @${(room.pilih ? room.p2 : room.p).split`@`[0]} 𝗡𝗼 𝗲𝗹𝗲𝗴𝗶𝘀𝘁𝗲 𝗻𝗶𝗻𝗴𝘂𝗻𝗮 𝗼𝗽𝗰𝗶𝗼́𝗻, 𝗳𝗶𝗻 𝗱𝗲𝗹 𝗽𝘃𝗽` 
 this.sendMessage(m.chat, { text: textnull }, { quoted: m }, { mentions: this.parseMention(textnull) }) 
 db.data.users[win == room.p ? room.p : room.p2].exp += room.poin 
 db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot 
 db.data.users[win == room.p ? room.p2 : room.p].exp -= room.poin_lose 
 } 
 delete this.suit[room.id] 
 return !0 
 }, room.timeout)} 
 let jwb = m.sender == room.p 
 let jwb2 = m.sender == room.p2 
 let g = /tijera/i 
 let b = /piedra/i 
 let k = /papel/i 
 let reg = /^(tijera|piedra|papel)/i 
 if (jwb && reg.test(m.text) && !room.pilih && !m.isGroup) { 
 room.pilih = reg.exec(m.text.toLowerCase())[0] 
 room.text = m.text 
 m.reply(`*[ ✔ ] 𝙷𝙰𝚂 𝙴𝙻𝙴𝙶𝙸𝙳𝙾 ${m.text}, 𝚁𝙴𝙶𝚁𝙴𝚂𝙰 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾 𝚈 ${room.pilih2 ? `𝚁𝙴𝚅𝙸𝚂𝙰 𝙻𝙾𝚂 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂*` : '𝙴𝚂𝙿𝙴𝚁𝙰 𝙻𝙾𝚂 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂*'}`) 
 if (!room.pilih2) this.reply(room.p2, '*[❗] 𝙴𝙻 𝙾𝙿𝙾𝙽𝙴𝙽𝚃𝙴 𝙰𝙷 𝙴𝙻𝙴𝙶𝙸𝙳𝙾, 𝙴𝚂 𝚃𝚄 𝚃𝚄𝚁𝙽𝙾 𝙳𝙴 𝙴𝙻𝙴𝙶𝙸𝚁!!*', 0)} 
 if (jwb2 && reg.test(m.text) && !room.pilih2 && !m.isGroup) { 
 room.pilih2 = reg.exec(m.text.toLowerCase())[0] 
 room.text2 = m.text 
 m.reply(`*[ ✔ ] 𝙷𝙰𝚂 𝙴𝙻𝙴𝙶𝙸𝙳𝙾 ${m.text}, 𝚁𝙴𝙶𝚁𝙴𝚂𝙰 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾 𝚈 ${room.pilih ? `𝚁𝙴𝚅𝙸𝚂𝙰 𝙻𝙾𝚂 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂*` : '𝙴𝚂𝙿𝙴𝚁𝙰 𝙻𝙾𝚂 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂*'}`) 
 if (!room.pilih) this.reply(room.p, '*[❗] 𝙴𝙻 𝙾𝙿𝙾𝙽𝙴𝙽𝚃𝙴 𝙰𝙷 𝙴𝙻𝙴𝙶𝙸𝙳𝙾, 𝙴𝚂 𝚃𝚄 𝚃𝚄𝚁𝙽𝙾 𝙳𝙴 𝙴𝙻𝙴𝙶𝙸𝚁!!*', 0)} 
 let stage = room.pilih 
 let stage2 = room.pilih2 
 if (room.pilih && room.pilih2) { 
 clearTimeout(room.waktu_milih) 
 if (b.test(stage) && g.test(stage2)) win = room.p 
 else if (b.test(stage) && k.test(stage2)) win = room.p2 
 else if (g.test(stage) && k.test(stage2)) win = room.p 
 else if (g.test(stage) && b.test(stage2)) win = room.p2 
 else if (k.test(stage) && b.test(stage2)) win = room.p 
 else if (k.test(stage) && g.test(stage2)) win = room.p2 
 else if (stage == stage2) tie = true  
 this.reply(room.asal, ` 
 *👑 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 𝙳𝙴𝙻 𝙿𝚅𝙿 👑*${tie ? '\n*—◉ 𝙴𝙼𝙿𝙰𝚃𝙴!!*' : ''} 
 *@${room.p.split`@`[0]} (${room.text})* ${tie ? '' : room.p == win ? ` *𝙶𝙰𝙽𝙾 🥳 +${room.poin}XP*` : ` *𝙿𝙴𝚁𝙳𝙸𝙾 🤡 ${room.poin_lose}XP*`} 
 *@${room.p2.split`@`[0]} (${room.text2})* ${tie ? '' : room.p2 == win ? ` *𝙶𝙰𝙽𝙾 🥳 +${room.poin}XP*` : ` *𝙿𝙴𝚁𝙳𝙸𝙾 🤡 ${room.poin_lose}XP*`} 
 `.trim(), m, { mentions: [room.p, room.p2] } ) 
 if (!tie) { 
 db.data.users[win == room.p ? room.p : room.p2].exp += room.poin 
 db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot 
 db.data.users[win == room.p ? room.p2 : room.p].exp += room.poin_lose 
 } 
 delete this.suit[room.id]}} 
 return !0 
 } 
 handler.exp = 0 
 export default handler 
 function random(arr) { 
 return arr[Math.floor(Math.random() * arr.length)]}
