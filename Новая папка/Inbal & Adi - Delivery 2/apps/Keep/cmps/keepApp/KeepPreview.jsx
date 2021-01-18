
import { KeepEdit } from "./KeepEdit.jsx"
import { DynamicCmp } from './DynamicCmp.jsx'

export class KeepPreview extends React.Component {
    state = {
        isEdit: false
    }
    componentDidMount() {
    }

    cmpMap = {
        NoteVideo: NoteVideo,
        NoteImg: NoteImg,
        NoteTodos: NoteTodos,
        NoteTxt: NoteTxt
    }

    onEditKeep = (keep) => {
        this.setState({ isEdit: true })
        this.props.onEditKeep(keep);
    }

    onUnEditKeep = () => {
        this.setState({ isEdit: false })
    }


    render() {
        const { keep } = this.props
        return (
            // <article onMouseOut={this.onUnEditKeep} style={keep.style} className={`keep-preview ${(keep.type === 'NoteImg' || keep.type === 'NoteVideo') ? "img" : ""}`}>
            //     {this.typeButton(keep)}
            <section>
                <DynamicCmp keep={keep} />
                {/* <KeepEdit keep={keep} onRemove={this.props.onRemove} onStyleChange={this.props.onStyleChange}
                    onCopy={this.props.onCopy} onPin={this.props.onPin} isEditOn={this.state.isEdit}
                    isDetailsOn={false} onEdit={this.onEditKeep} getTypeNote={this.props.getTypeNote} /> */}
                {/* </article> */}
            </section>
        )
    }
}


