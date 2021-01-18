import { NoteBar } from '../notesApp/NoteBar.jsx'

export function NoteTodos({ keep, info, style }) {

    function getTime(time) {
        return (<label>{new Date(time).toLocaleString()}</label>)
    }

    return (
        <section className="todo-note note">
            <h1>Todo: {info.label}</h1>
            {info.todos.map((todo, idx) => {
                return (
                    <li key={idx} className={`${todo.doneAt ? "done-note" : " "} `
                    }>{todo.txt} {todo.doneAt && getTime(todo.doneAt)}
                    </li>)
            })
            }
            <NoteBar keep={keep} />
        </section>


    )
}