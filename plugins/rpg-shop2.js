/*const xpperlimit = 330 
 let handler = async (m, { conn, command, args, usedPrefix }) => { 
   let count = command.replace(/^buy2/i, '') 
   count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1 
   count = Math.max(1, count) 
   if (global.db.data.users[m.sender].money >= xpperlimit * count) { 
     global.db.data.users[m.sender].money -= xpperlimit * count 
     global.db.data.users[m.sender].limit += count 
     //conn.reply(m.chat, ` 
     let witty = ` 
 ╭━━〔 *DATOS DE COMPRA* 〕━━⬣ 
 ┃ *Compra Efectuada* : +${count} 💎  
 ┃ *Ha Gastado* :  -${xpperlimit * count} 𝗪𝗜𝗧𝗧𝗬𝘾𝙊𝙄𝙉𝙎 
 ╰━━━━━〔 *${vs}* 〕━━━━⬣`.trim() 
      
 await conn.sendHydrated(m.chat, witty, wm, null, md, '𝗪𝗶𝘁𝘁𝘆-𝗕𝗼𝘁', null, null, [ 
 ['💵 𝘾𝙤𝙢𝙥𝙧𝙖𝙧 𝙓10', '.buy2 10'], 
 ['💸 𝘾𝙤𝙢𝙥𝙧𝙖𝙧 𝙓20', '.buy2 20'], 
 ['⚡ 𝘾𝙤𝙢𝙥𝙧𝙖𝙧 𝙘𝙤𝙣 𝙀𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖', '/buy'] 
 ], m,) 
      
   } else //conn.reply(m.chat, `❎ Lo siento, no tienes suficientes *XP* para comprar *${count}* Diamantes💎`, m) 
     await conn.sendHydrated(m.chat, `*No tiene sufuciente 𝗪𝗜𝗧𝗧𝗬𝗖𝗢𝗜𝗡𝗦 para comprar ${count} Diamantes* 💎\n\n*Le recomiendo que interactúe con Witty-Bot para Obtener WittyCoins, puede ver sus WittyCoins con el comando ${usedPrefix}Wittycoins o ${usedPrefix}experiencia. También puede comprar con su Experiencia con el Comando ${usedPrefix}buy*`, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [ 
 ['𝘾𝙤𝙢𝙥𝙧𝙖𝙧 𝙘𝙤𝙣 𝙀𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖', '/buy'], 
 ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu'] 
 ], m,) 
 } 
 handler.help = ['Buy', 'Buyall'] 
 handler.tags = ['xp'] 
 handler.command = ['buy2', 'buyall2']  
  
 handler.disabled = false 
  
 export default handler*/
