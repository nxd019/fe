import axios from 'axios'
import { useEffect, useState } from 'react'
import { NoteCreateButton } from './components/NoteCreateButton'
import './mainApp.css'

export const MainApp = (props) => {
  const { onAddNew } = props
  const [notes, setNotes] = useState([])
  const [isCreating, setIsCreating] = useState(false)

  useEffect(() => {
    logJSONData()
  }, [])

  async function logJSONData() {
    const response = await axios.get('http://localhost:8080/api/notes')
    const data = response.data
    setNotes(data)
  }

  const handleOnSaveNote = async (data) => {
    await axios.post('http://localhost:8080/api/notes', data)
    logJSONData()
  }

  const handleOnCancelNote = () => {
    setIsCreating(false)
  }

  const handleCreateNewNote = () => {
    setIsCreating(true)
  }

  return (
    <div className="note-wrapper">
      {notes.map((note) => (
        <div className="note" key={note.id}>
          <div className="header">
            <button onClick={() => onAddNew()}>+</button>
            <button>X</button>
          </div>
          <div className="text">{note.notes}</div>
        </div>
      ))}

      <NoteCreateButton
        isCreating={isCreating}
        onSave={handleOnSaveNote}
        onCancel={handleOnCancelNote}
        onCreate={handleCreateNewNote}
      />
    </div>
  )
}
