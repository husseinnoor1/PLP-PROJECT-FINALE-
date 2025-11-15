db.transactions.aggregate([
  { $match: {
      userId: ObjectId("..."),
      date: { $gte: ISODate("2025-11-01"), $lt: ISODate("2025-12-01") },
      type: "expense"
  }},
  { $group: {
      _id: "$category",
      total: { $sum: "$amount" }
  }},
  { $sort: { total: -1 } }
]);
