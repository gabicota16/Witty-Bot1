import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen14
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
╭●▬▬▬๑ *Menu Stickers* ๑▬▬▬●   
╿
╿➪🔖${usedPrefix}sticker ❘ ${usedPrefix}s *(Responde a una*
*╿imagen o video)*
╿➪🔖${usedPrefix}smeme texto1|texto1 *(Responde a una*
*╿imagen o video)*
╿➪🔖${usedPrefix}scircle *(responde a una imagen)*
╿➪🔖${usedPrefix}semoji 'tipo' 'emoji' *(ej: .semoji pi 😉)*
╿➪🔖${usedPrefix}emojimix emoji1+emoji2
*╿(ej: ${usedPrefix}emojimix 😂+😈)*
╿➪🔖${usedPrefix}attp *texto*
╿➪🔖${usedPrefix}attp2 *texto*
╿➪🔖${usedPrefix}ttp *texto*
╿➪🔖${usedPrefix}ttp2 *texto*
╿➪🔖${usedPrefix}ttp3 *texto*
╿➪🔖${usedPrefix}ttp4 *texto*
╿➪🔖${usedPrefix}ttp5 *texto*
╿➪🔖${usedPrefix}qc *texto*
╿➪🔖${usedPrefix}stickertelegram *enlace de sticker*
╿➪🔖${usedPrefix}stickerfilter efecto *(responde*
*╿a una imagen)*
╿➪🔖${usedPrefix}stickermaker efecto *(responde*
*╿a una imagen)*
╿➪🔖${usedPrefix}wm *paquete* *nombre*
╿➪🔖${usedPrefix}besar *@user*
╿➪🔖${usedPrefix}alimentar *@user*
╿➪🔖${usedPrefix}bofetada *@user*
╰●▬▬▬๑۩۩๑▬▬▬๑۩۩๑▬▬▬●
`.trim()
if (m.isGroup) {
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: m })    
} else {    
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu2|menusticker|menustickers|menú2|menústicker|menústickers)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
