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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918848063606";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_25_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAxLFxuICAgICAgICA5NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NixcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICAxODksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI3LFxuICAgICAgICA1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDY0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMxLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTksXG4gICAgICAgIDMwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOSxcbiAgICAgICAgODksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDYzLFxuICAgICAgICA3NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NixcbiAgICAgICAgMTIyLFxuICAgICAgICAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDM0LFxuICAgICAgICA1NixcbiAgICAgICAgMjA5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICA2NixcbiAgICAgICAgMTIwLFxuICAgICAgICAzMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQzLFxuICAgICAgICA2MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5NixcbiAgICAgICAgNzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDUxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA5LFxuICAgICAgICA0OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDU1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMixcbiAgICAgICAgMTY0LFxuICAgICAgICA5NCxcbiAgICAgICAgODUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNWmk4QnJHN0FOaHZ2U3BJWXFWMGh3bCtwNzdGTlFOQ0oxdWdLY1pSd3JjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuZndQZlVjeFRaR2MtRzNkc3NraDR3XCIsXG4gIFwicGhvbmVJZFwiOiBcImY4OGNlNTAwLWYzY2YtNDkyMi1hYTU1LWZkN2Q3MTNiNGE5ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NyxcbiAgICAgIDE2MSxcbiAgICAgIDQyLFxuICAgICAgMTU5LFxuICAgICAgMTMyLFxuICAgICAgMTQzLFxuICAgICAgMzQsXG4gICAgICA1MixcbiAgICAgIDE1LFxuICAgICAgNjMsXG4gICAgICAxOTEsXG4gICAgICAxMzEsXG4gICAgICAxNTksXG4gICAgICAxOTksXG4gICAgICA4NCxcbiAgICAgIDE0NyxcbiAgICAgIDE1NixcbiAgICAgIDEyOCxcbiAgICAgIDQyLFxuICAgICAgMTkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NSxcbiAgICAgIDExLFxuICAgICAgMjM3LFxuICAgICAgMTQ4LFxuICAgICAgNzAsXG4gICAgICAxNzQsXG4gICAgICA5NCxcbiAgICAgIDQyLFxuICAgICAgMTk1LFxuICAgICAgMTg2LFxuICAgICAgMTc5LFxuICAgICAgNTAsXG4gICAgICAyMjUsXG4gICAgICAxNDYsXG4gICAgICAxNTgsXG4gICAgICAyMTksXG4gICAgICAxNjAsXG4gICAgICAyOCxcbiAgICAgIDEzNixcbiAgICAgIDE5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMOTJFWDdCTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4ODQ4MDYzNjA2Ojc3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTU3NjkwMjE3NjM3NDY6NzdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHJUdk1rSEVKS3Z0TE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2YTU0QkxWa2UrbjI4VlhQODZMelFQWE13Nmhtd0xjRGFhZFNHbUYvS1UwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjh4MFVSRnhPZDBRSzRzdjUvc09LWkVtSHhLY3dFeDhxRXBtRkZjMlFpWWFrK01hZ2tNOXdMMXBtaCt1dzYzcU16SzBPM1NMWHZFU25veFV2cGZZaEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIndnREZpejZLa291R1RaWXJSTDEzNFRyOHBOZE1xS0tsQzhsMzZrT1BOaWdxbzZPcUVOMGUweWM3SUlOcWhpdG1MSVNXNUs3bS9pNmRmZWtvbDRlMWpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODg0ODA2MzYwNjo3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg0MjU0OTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIMzlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUgzOS5qc29uIjogIntcImtleURhdGFcIjpcIktzMnJFSHNZaGV3MDNkVHJMVVJGK0pSTnFZNUJaaDdtUVdYYXhHM253VUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAzMzEzNDAwOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
