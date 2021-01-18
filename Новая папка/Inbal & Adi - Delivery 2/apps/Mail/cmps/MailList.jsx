import { mailService } from '../services/mailService.js';
import { MailPreview } from '../cmps/MailPreview.jsx';

export function MailList({ mails, onRemove }) {

    return (

        <table className="mail-list">
            <thead className="mail-list-header">
                <tr>
                    <th className="header-from">From</th>
                    <th className="header-subject">Subject</th>
                    <th className="header-body">Body</th>
                    <th className="header-recieved">Recieved</th>
                </tr>
            </thead>
            <tbody>
                {mails.map(mail => {
                    return <MailPreview key={mail.id} mail={mail} onRemove={onRemove} />
                })}
            </tbody>
        </table>
    )
}


