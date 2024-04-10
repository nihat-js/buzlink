const { mongoose } = require("mongoose")
const URLSchema = new mongoose.Schema({
  userId: { type: String, nullable: true },
  destinationURL: { type: String, required: true },
  shortenedURL: { type: String, required: true },
  statsURL: { type: String, required: true, unique: true },

  expirationDate : {type : Date,},
  expirationClickLimit : {type : Number,},
  passwordProtection : {type : String, },


  totalVisits: { type: Number, required: true, default: 0 },
  totalUniqueVisit: { type: Number, required: true, default: 0 },
  // mobile_visits: { type: Number, required: true },
  // laptop_visits: { type: Number, required: true },

  // is_ads_active: { type: Boolean, required: true },
  // total_revenue: { type: Number, required: true },

}, {
  timestamps: true
})

const URL = mongoose.model("Url", URLSchema)
module.exports = URL

