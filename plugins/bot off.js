let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply(' *Yaudah kalo gitu, Fazz mau tidur dulu kak🥱😴* ')
    // } else m.reply('Ada nomor Ownerku disini...')
}
handler.help = ['Fazz(on/off)']
handler.tags = ['main']
handler.command = /^(kannaoff)$/i

handler.admin = true

export default handler