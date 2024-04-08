const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user
  token: { type: String, required: true }, // Session token
  lastAccessedAt: { type: Date, default: Date.now }, // Date and time when the session was last accessed
  userAgent: { type: String }, // User agent of the device/browser used to login
  ipAddress: { type: String }, // IP address of the device used to login
  // Add more fields as needed, such as device type, location, etc.
}, {
  timestamps: true,

});

const Session = mongoose.model('Session', sessionSchema);

module.exports = {
  Session
};
