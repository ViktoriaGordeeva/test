import { mailService } from './services/mailService.js';
import { MailCompose } from './cmps/MailCompose.jsx'
import { MailList } from './cmps/MailList.jsx';
import { SideNav } from './cmps/SideNav.jsx';

export class Mail extends React.Component {
    state = {
        mails: [],
        selectedMail: null,
        isModal: false,
        filterBy: '',
    }
    componentDidMount() {
        this.loadMails();
    }

    loadMails = () => {
        mailService.query().then(mails => { this.setState({ mails }) });
    }

    onShowComposeMailModal = () => {
        const isModal = true;
        this.setState({ isModal });
    }

    onCloseModal = () => {
        const isModal = false;
        this.setState({ isModal });
    }

    onRemoveMail = (mailId) => {
        mailService.remove(mailId).then(() => {
            this.loadMails()
        })
    }

    get mailsForDisplay() {
        const { filterBy } = this.state;
        const filterRegex = new RegExp(filterBy.name, 'i');
        return this.state.pets.filter(pet => filterRegex.test(pet.name));
    }

    render() {
        return (
            <section className="mail">
                <header>
                    <button onClick={this.onShowComposeMailModal}>Compose</button>
                    <input type="text" placeholder="Search mail"></input>
                    <a> prev </a>
                    <a> next </a>
                </header>
                <main className="flex">
                    <SideNav />
                    <section className="main-container flex column">
                        <MailList mails={this.state.mails} onRemove={this.onRemoveMail} />
                    </section>
                </main>
                {this.state.isModal && <MailCompose onCloseModal={this.onCloseModal} />}
            </section>
        )
    }
}