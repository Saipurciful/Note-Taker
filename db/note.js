const util = require("util");
const fs = require("fs");
const {v4:uuidv4}= require("uuid");

const readfileAsync = util.promisify (fs.readFile)
const writefileAsync = util.promisify (fs.writeFile)

class Note {
    read(){
        return readfileAsync ("db/db.json", "utf8")
    }
    
    write(note){
        return writefileAsync ("db/db.json", JSON.stringify (note))
    }

    getNotes(){
        return this.read().then((notes)=> {
            let parseNotes;
            try {
                parseNotes =[].concat(JSON.parse(notes))
                console.log(parseNotes);
            } catch (error) {
                parseNotes = []  

            }
            return parseNotes
        })
    }
    addNote(note){
        const {title, text } = note
        const newNote = {title, text, id: uuidv4()}
        return this.getNotes()
            .then( notes => [...notes, newNote])
            .then( updateNotes => this.write(updateNotes) )
            .then (() => newNote)
    }

    deleteNote (id) {
        return this.getNotes()
            .then( notes => notes.filter ( note => note.id !== id ))
            .then( filterNote => this.write( filterNote) )
    }
}

module.exports = new Note();