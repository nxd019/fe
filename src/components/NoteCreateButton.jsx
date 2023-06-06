import { useEffect, useState } from 'react'

export const NoteCreateButton = (props) => {
  const { onSave, onCancel, onCreate, isCreating } = props

  const [noteContent, setNoteContent] = useState('')

  if (isCreating) {
    return (
      <div>
        <div>
          <button
            onClick={() => {
              onSave(noteContent)
              setNoteContent('')
            }}
          >
            Save
          </button>
          <button onClick={onCancel}>Cancel</button>
        </div>
        <textarea
          value={noteContent}
          onChange={(e) => {
            setNoteContent(e.target.value)
          }}
        />
      </div>
    )
  }

  return (
    <div className="create-box">
      <button className="btn-create" onClick={onCreate}>
        Create Note
      </button>
    </div>
  )
}
