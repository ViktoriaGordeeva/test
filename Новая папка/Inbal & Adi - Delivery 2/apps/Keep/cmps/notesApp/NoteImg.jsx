import { NoteBar } from '../notesApp/NoteBar.jsx'
export function NoteImg({ keep, info, style }) {
    return (
        <section className="img-note note">
            <h1>{info.title}</h1>
            <img src={info.url} />
            <h3 className="type-keep">{info.label}<i className="fas fa-font btn-type"></i></h3>
            <NoteBar keep={keep} />
        </section>
    )
}