const router = require('express').Router();
const { notes } = require('../../db/notes.json')


router.get('/api/notes', (req, res) => {

    res.json(notes)
});

router.post('/api/notes', (req, res) => {
    const note = JSON.parse(req.body)
    notes.push(note)
    res.json(note)

})

module.exports = router