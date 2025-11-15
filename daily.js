db.transactions.aggregate([
  { $match: {
      userId: ObjectId("..."),
      date: { $gte: new Date(Date.now() - 30*24*3600*1000) },
      type: "expense"
  }},
  { $group: {
      _id: null,
      avgDaily: { $avg: "$amount" },
      total: { $sum: "$amount" }
  }}
]);
