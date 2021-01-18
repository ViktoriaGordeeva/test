import { NoteVideo } from "../notesApp/NoteVideo.jsx"
import { NoteAudio } from "../notesApp/NoteAudio.jsx"
import { NoteImg } from "../notesApp/NoteImg.jsx"
import { NoteTodos } from "../notesApp/NoteTodos.jsx"
import { NoteTxt } from "../notesApp/NoteTxt.jsx"

export function DynamicCmp({ keep }) {
    switch (keep.type) {
        case 'NoteTxt': {
            return <NoteTxt keep={keep} info={keep.info} style={keep.style} />
        }
        case 'NoteVideo': {
            return <NoteVideo keep={keep} info={keep.info} style={keep.style} />

        }
        case 'NoteImg': {
            return <NoteImg keep={keep} info={keep.info} style={keep.style} />

        }
        case 'NoteTodos': {
            return <NoteTodos keep={keep} info={keep.info} style={keep.style} />

        }
        case 'NoteAudio': {
            return <NoteAudio info={keep.info} style={keep.style} />

        }
    }
}

