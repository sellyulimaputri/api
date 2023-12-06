const express = require('express');
const app = express();
const port = 3000;
const places = require('./places.json');
app.get('/', (req, res) => {
  res.send('Welcome to Wisata API!');
});
app.get('/api/places', (req, res) => {
    const id = req.query.id;
  if (id) {
    const filteredPlace = places.find(place => place.id == id);
    if (filteredPlace) {
      res.json(filteredPlace);
    } else {
      res.status(404).json({ error: 'Place not found' });
    }
  } else {
    res.json(places);
  }
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});