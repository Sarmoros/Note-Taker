const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

router.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, 'db', 'db.json'), 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      const notes = JSON.parse(data);
      res.json(notes);
    });
});

router.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();

    fs.readFile(path.join(__dirname, 'db', 'db.json'), 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }

        const notes = JSON.parse(data);
        notes.push(newNote);

        fs.writeFile(path.join(__dirname, 'db', 'db.json'), JSON.stringify(notes), 'utf8', (err) => {
            if (err) {
              console.error(err);
              return res.status(500).json({ error: 'Internal Server Error' });
            }
        
            res.json(newNote);
        });
    });
});


module.exports = router;
