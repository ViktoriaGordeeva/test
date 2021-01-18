const { Link } = ReactRouterDOM

import { Color } from '../Color.jsx'

export class KeepEdit extends React.Component {
    state = {
        colorsIsShown: false,
    }

    componentDidMount() {
        console.log("Keep Edit Params are", this.props)
        this.closeColor();
        this.setState({ colorsIsShown: false })
    }

    openColor = (ev) => {
        ev.stopPropagation();
        this.setState({ colorsIsShown: !this.state.colorsIsShown })
    }

    closeColor = () => {
        this.setState({ colorsIsShown: false })
    }

    openEdit(ev) {
        ev.stopPropagation();
    }

    onStyleChange = (keepId, color) => {
        this.props.onStyleChange(keepId, color);
        if (this.props.changeStyleDetails) this.props.changeStyleDetails(keepId, color)
    }

    onRemove = (keepId, ev) => {
        ev.stopPropagation();
        this.props.onRemove(keepId);
        if (this.props.removeOnDetails) this.props.removeOnDetails();
    }

    typeButton = (keep) => {
        switch (keep.type) {
            case 'NoteTxt': {
                return (<button className="btn-type">TXT</button>)
            }
            case 'NoteVideo': {
                return (<button>VIDEO</button>)
            }
            case 'NoteImg': {
                return (<button>IMAGE</button>)
            }
            case 'NoteTodos': {
                return (<button>TODO</button>)
            }
        }
    }

    render() {
        const { keep } = this.props;
        const { isDetailsOn } = this.props
        return (
            <div className={`${isDetailsOn ? "keep-edit-details" : "keep-edit"}`}>
                <button onClick={this.openColor}>C</button>
                {/* {this.state.colorsIsShown && <Color keep={keep} closeColors={this.closeColor} onStyleChange={this.onStyleChange} />} */}
                {/* <button onClick={(ev) => this.props.onPin(keep.id, ev)}>P</button>
                <button href="#modal" onClick={(ev) => this.props.onEdit(keep)}>E</button>
                <button onClick={(ev) => this.props.onCopy(keep, ev)}>C</button>
                <button onClick={(ev) => this.onRemove(keep.id, ev)}>R</button> */}
                {/* <Link to={`/mail?&keep=${keep.info[this.props.getTypeNote(keep.type)]}`}><i className="fas fa-envelope-open-text"></i></Link> */}
            </div>
        )
    }
}
