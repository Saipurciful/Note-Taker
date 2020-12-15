const Note = require("../db/note")

module.exports = function(app){

     app.get("/api/notes", function(req, res) {
          Note.getNotes()
               .then ( notes => res.json(notes) )
               .catch ( error => res.status(500).json (error))
     });

     app.post("/api/notes", function(req, res){
          Note.addNote(req.body)
          .then ( note => res.json(note) )
          .catch ( error => res.status(500).json (error))
     });

     app.delete('/api/notes/:id', (req, res) => {
          Note.deleteNote(req.params.id)
          .then ( () => res.json({ ok: true}) )
          .catch ( error => res.status(500).json (error))
      });
  };