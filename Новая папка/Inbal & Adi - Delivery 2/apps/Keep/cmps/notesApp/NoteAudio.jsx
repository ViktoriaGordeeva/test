import { KeepEdit } from '../keepApp/KeepEdit'

export function NoteAudio({ keep, info, style }) {
    return (
        <section className="audio-note note">
            <h1>Audio</h1>
            <iframe height="60" width="200" title="Best Scene"
                src={info.url}  >
                {/* <h3 className="type-keep">{info.label}<i className="fas fa-font btn-type"></i></h3> */}
            </iframe>
        </section>

    )
}

