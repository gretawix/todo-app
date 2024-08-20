import { useState } from "react";

function App({ todo, onDelete, onToggle, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleTextChange = (e) => setNewText(e.target.value);

    const handleSave = (e, id) => {
        e.preventDefault();
        setIsEditing(false);
        onEdit(id, newText);
    };

    const hadleEditClick = () => setIsEditing(true);

    const handleCancel = () => setIsEditing(false);

    return (
        <li style={{ textAlign: "left", listStyle: "none" }}>
            {isEditing ? (
                <>
                    <form onSubmit={(e) => handleSave(e, todo.id)}>
                        <label htmlFor={todo.id}></label>
                        <input type="text" id={todo.id} name={todo.text} value={newText} onChange={handleTextChange} />
                        <button type="submit">save</button>
                    </form>
                    <button type="button" onClick={handleCancel}>
                        cancel
                    </button>
                </>
            ) : (
                <>
                    <input
                        type="checkbox"
                        id={todo.id}
                        name={todo.text}
                        checked={todo.isDone}
                        onChange={() => onToggle(todo.id)}
                    />
                    <label htmlFor={todo.id}>{todo.text}</label>

                    <button type="button" onClick={hadleEditClick}>
                        edit
                    </button>
                    <button type="button" onClick={() => onDelete(todo.id)}>
                        delete
                    </button>
                </>
            )}
        </li>
    );
}

export default App;
