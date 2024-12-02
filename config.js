const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© ZiDiTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923247116683,19892144224";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_51_12_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDcxLFxuICAgICAgICA0NixcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDY3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMixcbiAgICAgICAgNzMsXG4gICAgICAgIDUwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNixcbiAgICAgICAgODksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNixcbiAgICAgICAgMjUyLFxuICAgICAgICA4MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY1LFxuICAgICAgICA0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDYxLFxuICAgICAgICA5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDkzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDc5LFxuICAgICAgICAzNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTczLFxuICAgICAgICA4NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgODcsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidVRqSU9JYThRazJBL2xvZGU1WE5XVml3YzVMSUcyK0pnME96NUNoNnlxbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSTFwTDRWaElSMnE1SUJscjNXRVlOZ1wiLFxuICBcInBob25lSWRcIjogXCIwYjRmZTI4OC00ZWMzLTRkYTQtYjA1My1mNDlkNGZiMjAwYzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU3LFxuICAgICAgMTAyLFxuICAgICAgMixcbiAgICAgIDM4LFxuICAgICAgMjI5LFxuICAgICAgMTU2LFxuICAgICAgMTE2LFxuICAgICAgNjksXG4gICAgICAxNzgsXG4gICAgICAxNzcsXG4gICAgICA5NCxcbiAgICAgIDc4LFxuICAgICAgNzUsXG4gICAgICA1MyxcbiAgICAgIDE4NSxcbiAgICAgIDExOSxcbiAgICAgIDIzMyxcbiAgICAgIDQ1LFxuICAgICAgMjksXG4gICAgICAyMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ1LFxuICAgICAgMTg4LFxuICAgICAgNzAsXG4gICAgICAzOSxcbiAgICAgIDEzNixcbiAgICAgIDE5MSxcbiAgICAgIDE0MSxcbiAgICAgIDExMSxcbiAgICAgIDExMixcbiAgICAgIDYwLFxuICAgICAgMjE1LFxuICAgICAgMTk2LFxuICAgICAgMTcxLFxuICAgICAgNzcsXG4gICAgICAyNTEsXG4gICAgICAyMSxcbiAgICAgIDExNixcbiAgICAgIDEwNSxcbiAgICAgIDE4MSxcbiAgICAgIDEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjM5NzdFNFdCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxOTg5MjE0NDIyNDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4MDEwODE4NzAzMzYwOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTURxdC9jRkVNRzd1TG9HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5WTlpUFJUNTM4aGVpaFdSdU1VbjdPNnpUQzRUbFhtc20wZTIxdHJBSXo0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInRHcFdwTnlQRVpqMzhwM2oxbXVmMGd1emZhN2FrcE9KbWtVU2pHeVNxUThOUi9aTldZNHZzQU04ek80TUJNNUZsb0NKM3JOTkxSY0Z2MW5qMVYvQUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlltVnlFQTBJUTJkS2tsaFRzOTltaVU1ZDRaL091M2Q5RTU0Y3FlaUxqNTMrRkZ5VFJhOXE3M1NBREF5MWRwV0JWQVNJY0xnRTlNNXVkM29HNHBjbWlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjE5ODkyMTQ0MjI0OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMxNzI2NzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFESEJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURIQi5qc29uIjogIntcImtleURhdGFcIjpcIklzeTNTZ0JWSVpBR2VXdlhFN1NqbHVtQ01MMTEzd3JDK1k1UmkvbTJoek09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU5MjY1MzEyMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzMTE5ODIzMzQ1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ZiDiTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
