db.users.find({
  location: {
    $nearSphere: {
      $geometry: { type: "Point", coordinates: [lon, lat] },
      $maxDistance: 10000
    }
  }
});
