{
  _id: ObjectId,
  userId: ObjectId,
  period: { year: 2025, month: 11 },
  categoryBudgets: [
    { category: "food", amount: 5000 },
    { category: "transport", amount: 2000 }
  ],
  createdAt: ISODate,
  updatedAt: ISODate
}
