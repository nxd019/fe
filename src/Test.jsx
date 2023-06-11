import { useState } from 'react'

export const Test = (props) => {
  const [notes, setNotes] = useState([])
  const [currentNote, setCurrentNote] = useState('')

  const addNote = () => {
    let listCurrentNotes = notes
    listCurrentNotes.push(currentNote)
    setNotes(listCurrentNotes)
    setCurrentNote('')
  }

  return (
    <div>
      <div>
        <input
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
        />
        <button onClick={addNote}>Click me!</button>
      </div>
      
      <div>
        {notes.map((note) => {
          return <div>{note}</div>
        })}
      </div>
    </div>
  )
}
