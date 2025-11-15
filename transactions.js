{
  _id: ObjectId,
  userId: ObjectId,         // reference
  type: "expense" | "income",
  amount: Number,
  category: "food" | "transport" | "rent" | "health" | "education" | "other",
  date: ISODate,
  note: String,
  merchant: String,
  createdAt: ISODate
}
