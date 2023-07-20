const express = require("express");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const router = express.Router();

const url =
  "mongodb+srv://Hazem-Hussein:Fkn6jrZhu95yETjZ@cluster0.8bedofn.mongodb.net/locations=true&w=majority";

const client = new MongoClient(url);

const locationStorage = {
  locations: [],
};

router.post("/add-location", (req, res, next) => {
  // const id = Math.random();
  client.connect(function (err, client) {
    const db = client.db("locations");

    // Insert a single document
    db.collection("user-locations").insertOne(
      {
        address: req.body.address,
        coords: { lat: req.body.lat, lng: req.body.lng },
      },
      function (err, r) {
        // if (err) {}
        console.log(r);
        res.json({ message: "Stored location!", locId: r.insertedId });
      }
    );
  });

  // locationStorage.locations.push({
  //   id: id,
  //   address: req.body.address,
  //   coords: { lat: req.body.lat, lng: req.body.lng }
  // });
});

router.get("/location/:lid", (req, res, next) => {
  const locationId = req.params.lid;

  client.connect(function (err, client) {
    const db = client.db("locations");

    let locationId;
    try {
      locationId = new mongodb.ObjectId(locationId);
    } catch (error) {
      return res.status(500).json({ message: "Invalid id!" });
    }
    // END OF ADDED CODE

    // Insert a single document
    db.collection("user-locations").findOne(
      {
        _id: locationId,
      },
      function (err, doc) {
        if (!doc) {
          return res.status(404).json({ message: "Not found!" });
        }
        res.json({ address: doc.address, coordinates: doc.coords });
      }
    );
  });
});

module.exports = router;
