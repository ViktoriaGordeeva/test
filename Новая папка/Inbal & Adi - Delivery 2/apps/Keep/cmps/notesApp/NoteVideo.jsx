import { NoteBar } from '../notesApp/NoteBar.jsx'

export function NoteVideo({ keep, info, style }) {
    return (
        <section className="video-note note">
            <h1>Video</h1>
            <iframe height="150" width="250"
                src={info.url}  >
                <h3 className="type-keep">{info.label}<i className="fas fa-font btn-type"></i></h3>
            </iframe>
            <NoteBar keep={keep} />
        </section>

    )
}
