require("dotenv").config();

let gg = process.env.MODS;
if (!gg) {
  gg = "22794905627";   // You can replace this number with yours //
}


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://boubacarsoumaila790_db_user:D3xGdlggTV9sNbG4@cluster0.emuipmm.mongodb.net/";
global.sessionId = process.env.SESSION_ID || "09androx09";
global.prefa = process.env.PREFIX || ".";
global.tenorApiKey = process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `Atlas Bot`;
global.author = process.env.AUTHOR || "by: Team Atlas";
global.port = process.env.PORT || "10000";
global.openAiAPI = process.env.OPENAI_API || "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";
global.owner = gg.split(",");

module.exports = {
  mongodb: global.mongodb,
};
