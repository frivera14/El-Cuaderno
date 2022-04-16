const router = require('express').Router();
const { renderNoteList, getNotes, saveNote } =  require('../../public/assets/js/index')
const { notes } = require('../../db/db.json');

