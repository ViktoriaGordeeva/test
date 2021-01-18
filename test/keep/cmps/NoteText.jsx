
// export function NoteText(props) {
    // state = {
    //     note: null
    // }

    // componentDidMount() {
    //     console.log('from props', this.props)
    //     this.setState({ note: this.props.note })
    // }

    // handleChange = (ev) => {
    //     var value = ev.target.value
    //     const noteCopy = { ...this.state };
    //     noteCopy.note.info.txt = value
    //     this.setState(noteCopy)

    // };

    // return (
    //     <div>{props.note.info.txt}</div>
    // )
    // render() {
    //     if (!this.state.note) return <div></div>
    //     console.log('PPPPPPPP', this.state.note.info.txt)
    //     return <div className="note">
    //         <h3>{this.state.note.info.txt}</h3>
    //         {/* <textarea className="text-text" id="" rows="10" value={this.state.note.info.txt}></textarea> */}
    //         <div className="text-settings">
    //             {/* <button className="fas done" onClick={() => { this.props.onUpdateNote(this.state.note) }}></button> */}
    //             {/* <button className="fas delete" onClick={this.props.onDeleteNote}></button> */}
    //         </div>
    //     </div>
    //     {/* className="add-note-text" */ }
    // }
// }



export class NoteText extends React.Component {
    state = null

    componentDidMount() {
        console.log('MOUNT')
        var p = this.props.note
        this.setState(p)
    }
    componentWillMount() {
        console.log('UNMOUNT')
        this.setState(null)
    }
    render() {
        if(this.state === null) {console.log('NOT'); return <div></div>}
        console.log('RENDER',this.state )
        return (
            <div>{this.state.info.txt}</div>
        )
    }
}