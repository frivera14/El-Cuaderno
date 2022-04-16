const router = require('express').Router();
const { renderNoteList, saveNote } =  require('../../public/assets/js/index')
const { notes } = require('../../db/notes.json')


router.get('/api/notes', (req, res) => {
    let results = notes
    if (req.query) {
        results = renderNoteList(req.query, results)
    } 
    res.json(results)
});

router.post('/api/notes', (req, res) => {
    req.body = notes.length.toString();

    const newNote = saveNote(req.body, notes);
    res.json(newNote)
})

module.exports = router