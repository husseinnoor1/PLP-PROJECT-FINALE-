// models/Transaction.js
const txSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', index: true },
  type: { type: String, enum: ['expense','income'], required: true },
  amount: { type: Number, required: true },
  category: String,
  date: { type: Date, default: Date.now },
  note: String,
  merchant: String,
  createdAt: { type: Date, default: Date.now }
});
txSchema.index({ userId: 1, date: -1 });

module.exports = mongoose.model('Transaction', txSchema);
