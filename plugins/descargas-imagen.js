import { googleImage } from '@bochilteam/scraper' 
 let handler = async (m, { conn, text, usedPrefix, command }) => { 
 if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝙐𝙎𝙀 𝘿𝙀 𝙇𝘼 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙈𝘼𝙉𝙀𝙍𝘼\n*${usedPrefix + command} Messi*\n\n𝙐𝙎𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝙇𝙄𝙆𝙀 𝙏𝙃𝙄𝙎\n*${usedPrefix + command} Messi*` 
 if (m.text.includes('gore') || m.text.includes('cp')|| m.text.includes('porno')|| m.text.includes('Gore')|| m.text.includes('rule')|| m.text.includes('CP')|| m.text.includes('Rule34') || m.text.includes('xxx')) return m.reply('🙄') 
 const res = await googleImage(text) 
 let image = res.getRandom() 
 let link = image 
 conn.sendFile(m.chat, link, 'error.jpg', `*💞 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 | 𝙍𝙚𝙨𝙪𝙡𝙩: ${text}*`, m) 
 } 
 handler.help = ['gimage <query>', 'imagen <query>'] 
 handler.tags = ['internet', 'tools'] 
 handler.command = /^(gimage|image|imagen)$/i 
 handler.exp = 20 
 handler.money = 50 
 export default handler
