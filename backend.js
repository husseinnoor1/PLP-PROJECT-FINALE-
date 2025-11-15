// models/User.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true, index: true },
  phone: String,
  passwordHash: String,
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], default: [0,0] } // [lon, lat]
  },
  householdSize: Number,
  incomeFrequency: String,
  settings: Object,
  createdAt: { type: Date, default: Date.now }
});
userSchema.index({ location: "2dsphere" });

module.exports = mongoose.model('User', userSchema);
