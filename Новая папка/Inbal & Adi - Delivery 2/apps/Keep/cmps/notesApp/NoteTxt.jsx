import { NoteBar } from '../notesApp/NoteBar.jsx'

export function NoteTxt({ keep, info, style }) {
    return (
        <section className="txt-note note" >
            <h1>{info.txt}</h1>
            {/* // <blockquote contentEditable="true" suppressContentEditableWarning={true}>
                //     <h3 className="type-keep">{info.label}<i className="fas fa-font btn-type"></i></h3>
        //     <p >{props['keep'].info.txt}</p>
        // </blockquote> */}
            <NoteBar keep={keep} />
        </section>
    )
}