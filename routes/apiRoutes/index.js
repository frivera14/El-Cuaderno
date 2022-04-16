const router = require('express').Router();
const { renderNoteList, getNotes, saveNote } =  require('../../public/assets/js/index')
const { notes } = require('./db/notes')

router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = getNotes(req.query, results)
    }
    res.json(results)
});

router.get('/notes', (req, res) => {
    const result = renderNoteList(req, result)
    if (result) {
        res.json(result)
    } else {
        res.send(404)
    }
});

router.post('/notes', (req, res) => {
    req.body = notes.length.toString();

    const newNote = saveNote(req.body, notes);
    res.json(newNote)
})

module.exports = router