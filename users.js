{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  passwordHash: String,
  location: { type: "Point", coordinates: [lon, lat] }, // optional for geospatial
  householdSize: Number,
  incomeFrequency: "monthly" | "weekly" | "daily",
  createdAt: ISODate,
  settings: { currency: "KES", language: "en", notification: true }
}
