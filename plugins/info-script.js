import { promises } from 'fs'
import { join } from 'path'
import fs from 'fs'

let handler = async function (m, { conn, __dirname, usedPrefix, command }) {
try{
let frep = { contextInfo: { externalAdReply: {title: wm, body: lenguajeGB.smsCreApoyo(), sourceUrl: redesMenu.getRandom(), thumbnail: await(await fetch(gataMenu.getRandom())).buffer() }}}
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}  
await conn.sendButton(m.chat, `*_${_package.homepage}_*`, lenguajeGB.smsPrivadoDonar(), img5, [[lenguajeGB.smsCreInfoBot(), usedPrefix  + `${lenguajeGB.lenguaje() == 'es' ? 'creadora' : 'owner'}`]], m, frep)  
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = ['codigo', 'código', 'sc', 'git', 'script'] 
export default handler
