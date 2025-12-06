const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const dbFile = path.join(__dirname, '../db.json'); // pastikan path benar
  fs.readFile(dbFile, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read database' });
      return;
    }
    const db = JSON.parse(data);
    res.status(200).json(db);
  });
};
