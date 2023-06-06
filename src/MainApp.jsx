import { useEffect, useState } from "react";
import "./mainApp.css"

export const MainApp = (props) => {
    const {data, onAddNew, onDelete, index, onChangeContent} = props;
    const [notes, setNotes] = useState([])

    useEffect(() => {
        logJSONData();
    }, [])

    async function logJSONData() {
        const response = await fetch("http://localhost:8080/api/notes");
        const jsonData = await response.json();
        console.log(jsonData);
        setNotes(jsonData)
    }
    return (
        <>
            {notes.map((note) => (
                <div className="note" key={note.id}>
                    
                    <div className="header">
                        <button onClick={() => onAddNew()}>+</button>
                        <button>X</button>
                    </div>   
                    <div className="text">
                     {note.notes}
                    </div>
                </div>
            ))}
        </>
    )
    
}