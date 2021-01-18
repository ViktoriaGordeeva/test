// import { utilService } from './utilService.js';
// import { storageService } from './storageService.js';

// const KEY = 'mailsDB';
// export const mailService = {
//     query,
//     remove,
//     save,
//     getById,
//     getNextPrevmail
// };
// var gmails;
// _createmails();

// function _createmails() {
//     // Try loading from localStorage
//     gmails = storageService.load(KEY);
//     if (!gmails || !gmails.length) {
//         // Nothing in localStorage, use demo data
//         gmails = _getDemomails()
//         _savemailsToStorage();
//     }
// }


// function getNextPrevmail(mailId) {
//     return {
//         prevmailId: null,
//         nextmailId: null
//     }
// }

// function query() {
//     return Promise.resolve(gmails);
// }

// function save(mail) {
//     if (mail.id) {
//         return _update(mail);
//     } else {
//         return _add(mail);
//     }
// }

// function _add(mail) {
//     const mailToAdd = {
//         id: utilService.makeId(),
//         ...mail
//     };
//     gmails = [mailToAdd, ...gmails];
//     _savemailsToStorage();
//     return Promise.resolve(mailToAdd);
// }

// function _update(mail) {
//     const mailToUpdate = {
//         ...mail
//     };
//     const mailsCopy = [...gmails];
//     const mailIdx = mailsCopy.findIndex(mail => mail.id === mail.id);
//     mailsCopy[mailIdx] = mailToUpdate;
//     gmails = mailsCopy;
//     _savemailsToStorage();
//     return Promise.resolve(mailToUpdate);
// }

// function remove(mailId) {
//     gmails = gmails.filter(mail => mail.id !== mailId);
//     _savemailsToStorage();
//     return Promise.resolve();
// }

// function getById(mailId) {
//     const mail = gmails.find(mail => mail.id === mailId);
//     return Promise.resolve(mail);
// }

// function _savemailsToStorage() {
//     storageService.save(KEY, gmails)
// }

// function _getDemomails() {
//     const mails = [
//         { id: 'i101', name: 'Puki', power: 98 },
//         { id: 'i102', name: 'Muki', power: 101 },
//         { id: 'i103', name: 'Shuki', power: 8 }
//     ];
//     return mails;
// }