import { mailService } from "../services/mailService";

export class MailCompose extends React.Component {

    state = {
        mail: {
            to: '',
            cc: '',
            bcc: '',
            subject: '',
            body: '',
        }
    }

    refInput = React.createRef();
    componentDidMount() {
        this.refInput.current.focus();
    }


    onSubmitMail = (ev) => { //TODO: still need to fix sending on invalid input,in cwun?
        var { mail } = this.state;
        // if (mail.cc) this.ValidateEmail('cc');
        // if (mail.bcc) this.ValidateEmail('bcc');
        if (this.ValidateEmail('to'))
            mailService.save(mail);

        // .them(sentMail => {
        //     console.log('Sent Succesfully', sentMail);
        //     this.props.history.push('/mail');
        // })
    }

    ValidateEmail(field) {
        var { mail } = this.state;
        if (mail[field]) {
            console.log('validate mail of:', mail[field]);
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const res = re.test(String(this.state.mail[field]).toLowerCase());
            if (!res) {
                alert(`Please enter a valid email address in ${field} field`);
                return false
            }
            return true;
        }
        return false;
    }

    onInputChange = (ev) => {
        const value = ev.target.value;
        const mail = { ...this.state.mail };
        mail[ev.target.name] = value;
        this.setState({ mail });
    };

    render() {
        return (
            <section className="main-compose">
                <form className="modal" onClick={this.onSubmitMail}>
                    <div className="flex column">
                        <div className="new-mail-header flex">
                            <h3>New Message</h3>
                            <div class="image-upload">
                                <label for="file-input">
                                    <img className="filter-att" src="apps/Mail/assets/icons/att.svg" />
                                </label>
                                <input id="file-input" type="file" />
                            </div>
                        </div>
                        <div className="new-mail-body">
                            <input className="new-mail-input" value={this.state.mail.to} name="to" placeholder="To:" type="email" ref={this.refInput} onChange={this.onInputChange} />
                            <input className="new-mail-input" value={this.state.mail.cc} name="cc" placeholder="Cc:" type="email" onChange={this.onInputChange} />
                            <input className="new-mail-input" value={this.state.mail.bcc} name="bcc" placeholder="Bcc:" type="email" onChange={this.onInputChange} />
                            <input className="new-mail-input" value={this.state.mail.subject} name="subject" placeholder="Subject:" type="text" onChange={this.onInputChange} />
                            <textarea className="new-mail-textarea" value={this.state.mail.body} name="body" rows="12" cols="52" onChange={this.onInputChange}></textarea>
                        </div>
                    </div>
                    <div className="new-mail-footer flex">
                        <button className="submit-btn" type="submit" >Send</button>
                        <button className="close-btn" onClick={this.props.onCloseModal}><img src="apps/Mail/assets/icons/delete.svg" /></button>
                    </div>
                </form>
            </section>
        )
    }
}
