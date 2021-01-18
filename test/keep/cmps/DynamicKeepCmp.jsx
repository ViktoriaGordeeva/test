import { NoteText } from './NoteText.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'


export function DynamicKeepCmp({ note }) {
    console.log('in DynamicKeepCmp', note)
    switch (note.type) {
        case 'NoteText':
            console.log('inside NoteText')
            return <NoteText note={note}  />
        case 'NoteImg':
            return <NoteImg note={note}  />
        case 'NoteTodos':
            console.log('inside NoteText2')
            return <NoteTodos note={note} />
    }
    return <p>UNKNWON</p>
}