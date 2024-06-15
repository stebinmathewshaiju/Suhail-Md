const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919074818752";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_00_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTExLFxuICAgICAgICAzNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDM4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDU3LFxuICAgICAgICA3NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDMyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMxLFxuICAgICAgICA2MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDUxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNixcbiAgICAgICAgMTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzksXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDksXG4gICAgICAgIDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQyLFxuICAgICAgICA3NCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDksXG4gICAgICAgIDkwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg5LFxuICAgICAgICA2OSxcbiAgICAgICAgOTksXG4gICAgICAgIDQxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODcsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImRnZEROeHc2Q0ZYT1hPWTBla2JxQmRQRmovZFU4bFZzQTBmOEdENjA4em89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImJ2MllRVzRBU0Z5RGNYX2FQSWtsb1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiODFmZDAxMTUtZjk0NC00Nzg3LWI4YmYtODZhYTFmMzI4M2Q5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MixcbiAgICAgIDI5LFxuICAgICAgOTMsXG4gICAgICAyMTYsXG4gICAgICA3NyxcbiAgICAgIDE2NSxcbiAgICAgIDE4NCxcbiAgICAgIDk0LFxuICAgICAgMTE4LFxuICAgICAgNjYsXG4gICAgICAxODgsXG4gICAgICA0NSxcbiAgICAgIDE2MixcbiAgICAgIDE2NixcbiAgICAgIDg2LFxuICAgICAgOTEsXG4gICAgICAxOTEsXG4gICAgICAyMyxcbiAgICAgIDE2MixcbiAgICAgIDcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMyxcbiAgICAgIDIyOCxcbiAgICAgIDE4OCxcbiAgICAgIDk2LFxuICAgICAgMjA4LFxuICAgICAgMTA0LFxuICAgICAgMTExLFxuICAgICAgMTEzLFxuICAgICAgNDksXG4gICAgICA0MyxcbiAgICAgIDE4NixcbiAgICAgIDk0LFxuICAgICAgMTE3LFxuICAgICAgMTA5LFxuICAgICAgNjMsXG4gICAgICAxMDcsXG4gICAgICA0NixcbiAgICAgIDQzLFxuICAgICAgMjUwLFxuICAgICAgMjQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJUNzY3NThXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTkwNzQ4MTg3NTI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1FTlRBTElTVCBBU0hJU0hcIixcbiAgICBcImxpZFwiOiBcIjE1ODg0NTMwNTM2MDQ3ODoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05pMHEvMERFT3EvdExNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOUNFYUlzUzl2S1ZpRFArWGtWZmZDbkdobktYQmV5RDkxaXdxSGdvQm1TYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwNEZpK1J6R3NjUktNVXk3UktqdWtBemsrKytGZ1FIV0RlRkZMRnU0aTRxNlNWajdYMGNjODRqNnB5bHptVlBkUTlqdHRmaWpMY2lVWmZNU2NtQWlCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2ZHlCTXlyVzVkemVhZVJIbldmMmRMcmNwNGRkMnFXdE1rSXNsamJaTWRrYklBU0FBbjRzbTl2Y01YUTVKRWNuakZ0UW5ybHc5dDJFVnZVSE9GQkJpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTkwNzQ4MTg3NTI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODQyNzYyOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxmcFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGZwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVjEwa1ZsU2hub0R4Y1JBU0J3MHlPaVVEenRJak5naXFKWm1uK2Q4aWJWcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDY4MTYxNjI0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg0Mjc2MzYyMjVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
