import { mailService } from '../services/mailService.js'

export class MailPreview extends React.Component {

    state = {
        mail: { id: '', isRead: false },
        isExpended: false,
    }

    componentDidMount() {
        const { id } = this.props.mail;
        mailService.getById(id).then(mail => { this.setState({ mail }) });
    }

    toggleLine = () => {
        const isExpended = !this.state.isExpended;
        this.setState({ isExpended });
        if (isExpended) {
            const mail = { ...this.state.mail };
            mail.isRead = false;
            this.setState({ mail });
            mailService.save(mail).then(this.render());
        }
    }

    render() {
        const { mail } = this.props;
        const className = mail.isRead ? 'preview-line flex unread' : 'preview-line flex'
        const time = mailService.convertToDate(mail.time);

        return (
            <React.Fragment>
                <tr >
                    <div className={className} onClick={this.toggleLine}>
                        <td className="preview-from">{mail.from}</td>
                        <td className="preview-subject">{mail.subject}</td>
                        <td className="preview-body">{mail.body}</td>
                        <td className="preview-time" > {time}</td>
                    </div>
                    <td className="preview-line preview-delete" onClick={() => { this.props.onRemove(mail.id) }}><img src="apps/Mail/assets/icons/delete.svg" /></td>
                </tr >
                <tr hidden={!this.state.isExpended}>
                    <div className="expedned-mail">
                        <div className="expended-mail-header flex column">
                            <header className="expended-mail-title flex">
                                <h3>{mail.subject}</h3>
                                <span className="mail-title-icons flex">
                                    <img src="apps/Mail/assets/icons/delete.svg" onClick={() => { this.props.onRemove(mail.id) }} />
                                    <img src="apps/Mail/assets/icons/launch.svg" />
                                </span>
                            </header>
                            <span className="expended-mail-subtitle flex">
                                <p className="mail-body-from"><strong>{mail.from}</strong><span>&lt;{mail.emailFrom}&gt;</span></p>
                                <p>{time}</p>
                            </span>
                        </div>
                        <div>
                            <pre className="expended-mail-body">{mail.body}</pre>
                        </div>
                    </div>
                </tr>
            </React.Fragment>
        )

    }

}
