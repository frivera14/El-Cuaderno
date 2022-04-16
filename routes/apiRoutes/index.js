const router = require('express').Router();
const notes = require('../../db/notes.json')
const fs = require('fs')

router.get('/notes', (req, res) => {

    res.json(notes)
});

router.post('/notes', (req, res) => {
    const note = {...req.body, id:notes.length + 1}
    notes.push(note)
    fs.writeFile('../../db/notes.json', JSON.stringify(notes))
    res.json(note)

})

module.exports = router