const { mongoose } = require("mongoose")
const LinkSchema = new mongoose.Schema({
  shortened_url: { type: String, required: true },
  original_url: { type: String, required: true },
  author_id: { type: String, nullable: true},
  stats_link : {type: String, required: true, unique : true},

  total_visits: { type: Number, required: true, default: 0 },
  total_unique_visits: { type: Number, required: true },
  mobile_visits: { type: Number, required: true },
  laptop_visits: { type: Number, required: true },

  is_ads_active: { type: Boolean, required: true },
  total_revenue: { type: Number, required: true },

}, {
  timestamps: true
})

module.exports = {
  LinkSchema
}