const router = require("express").Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


router.get('/notes', (req, res) => { console.log('get notes');
    fs.readFile('./db/db.json',  'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      const notes = JSON.parse(data);
      res.json(notes);
    });
});

router.post('/notes', (req, res) => {
  let notesData = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    };
    notesData.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notesData));
  
    res.json(notesData);
});

router.delete("/notes/:id", (req, res) => {
  let notesData = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  notesData = notesData.filter((note) => note.id !== req.params.id);
  fs.writeFileSync('./db/db.json', JSON.stringify(notesData));
  res.json(notesData);
});
module.exports = router;
