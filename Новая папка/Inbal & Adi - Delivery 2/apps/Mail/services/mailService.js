import { utilService } from '../../../services/utilService.js';
import { storageService } from '../../../services/storageService.js';

const KEY = 'mailsDB';
export const mailService = {
    query,
    remove,
    save,
    getById,
    convertToDate,
    getNextPrevmail,
};
var mails;
_createmails();

function convertToDate(timestamp) {
    const date = Date(timestamp);
    const day = date.substring(8, 10);
    const month = date.substring(4, 7);
    const year = date.substring(11, 15);
    const hour = date.substring(16, 18);
    const minutes = date.substring(19, 21);
    return (`${day}-${month}-${year} ${hour}:${minutes}`)
}

function query() {
    return Promise.resolve(mails);
}

function _createmails() {
    mails = storageService.load(KEY);
    if (!mails || !mails.length) {
        mails = _demomails()
        _saveMailsToStorage();
    }
}

function getNextPrevmail(mailId) {
    return {
        prevmailId: null,
        nextmailId: null
    }
}

function save(mail) {
    if (mail.id) {
        return _update(mail);
    } else {
        return _add(mail);
    }
}

function _add(mail) {
    console.log('mailToAdd is:', mail);
    const mailToAdd = {
        id: utilService.makeId(),
        time: Date.now(),
        from: 'Hacker4u',
        emailFrom: 'hacker4u@spam.com',
        ...mail
    };
    mails = [mailToAdd, ...mails];
    _saveMailsToStorage();
    return Promise.resolve(mailToAdd);
}

function _update(mail) {
    const mailToUpdate = {
        ...mail
    };
    const mailsCopy = [...mails];
    const mailIdx = mailsCopy.findIndex(mail => mail.id === mailToUpdate.id);
    mailsCopy[mailIdx] = mailToUpdate;
    mails = mailsCopy;
    _saveMailsToStorage();
    return Promise.resolve(mailToUpdate);
}

function remove(mailId) {
    console.log('remove called', mailId)
    mails = mails.filter(mail => mail.id !== mailId);
    _saveMailsToStorage();
    return Promise.resolve();
}

function getById(mailId) {
    const mail = mails.find(mail => mail.id === mailId);
    return Promise.resolve(mail);
}

function _saveMailsToStorage() {
    storageService.save(KEY, mails)
}

function _demomails() {
    const mails = [
        { id: 'a101', from: 'Travelpayouts team', emailFrom: 'travels@travelpayout.com', subject: 'Come Back And Grow Your Instagram account', body: 'Hi There\, Thanks for your recent visit to Mr. Insta. We are the Internets leading provider of quality Instagram marketing services\, and our results will start appearing in', isRead: true, time: Date.now() },
        { id: 'a102', from: 'KAYMA Labs', emailFrom: 'kaymalabs@gmail.com', subject: 'Hey Shmuel', body: 'Thanks for taking the time to check out Discord\! The best relationships in our lives were built around playing games. Memories of staying up late playing Warcraft 3 with friends or sharing creations in The Sims mean so much to us. Discords free voice and text chat is about making it easier for you to spend time with the people you care about\, create these memories\, and land a headshot or two..', isRead: false, time: Date.now() },
        { id: 'a103', from: 'Dropbox', emailFrom: 'sales@dropbox.com', subject: 'Bitdefender Antivirus Plus 2020', body: 'Thank you for choosing Bitdefender\! Lets take a moment to set up Bitdefender Antivirus Plus 2020 on your devices. First\, click on the Activate Subscription button below to link it to your Bitdefender Central account. In case you dont have an account\, please create one here. Protect your devices with one account Bitdefender Central lets you remotely manage\, secure\, and optimize your Bitdefender-protected devices. You can use a single account to manage your subscription for one or more devices. You can manage your security from your mobile device. Anytime. Anywhere. Bitdefender Central is a companion app that empowers you to remotely manage security on your Bitdefender-protected devices directly from your smartphone. If you have any questions\, you will most likely find your answers here\, or you can contact our support team 24/7. Its great having you on board\!The Bitdefender Team', isRead: true, time: Date.now() },
        { id: 'a104', from: 'Amazon', emailFrom: 'amazom@ebay.com', subject: 'This is Spam!', body: 'This isnt a Cyber Monday email Normally\, I would send you an email today with a deal you ‘cannot miss’. You see\, I plan my email campaigns on monday.com. I map all the steps needed on my board\, and follow the plan until you receive this Cyber Monday email. The thing is\, monday.com is really good for organizing projects\, so you end up delivering what you need on time. My Cyber Monday campaign was ready two weeks ago. I mentioned @Roy (my boss) in an update on my board\, to share the plan with him. He replied “Pauline\, let’s not do Cyber Monday. Instead of a time-limited discount\, let’s offer time. We can’t expect anyone to buy business software within 24 hours.” I think he’s right. Let’s use Cyber Monday for what it was traditionally – a time for shopping for that great pair of jeans you’ve been eyeing up or a present for your bae. Well talk business tomorrow Today\, I’m buying the boots of my dreams.Pauline', isRead: false, time: Date.now() },
        { id: 'a105', from: 'WeWork', emailFrom: 'wework@wework.com', subject: 'Hello from here', body: 'Thundercats are on the move, Thundercats are loose. Feel the magic, hear the roar, Thundercats are loose.   I never spend much time in school but I taught ladies plenty. It’s true I hire my body out for pay, hey hey. I’ve gotten burned over Cheryl Tiegs, blown up for Raquel Welch. But when I end up in the hay it’s only hey hey. I might jump an open drawbridge, or Tarzan from a vine. ’Cause I’m the unknown stuntman that makes Eastwood look so fine.', isRead: true, time: Date.now() },
        { id: 'a106', from: 'Rami B.', emailFrom: 'rami@wework.com', subject: 'get up stand up', body: 'Only once in your life\, I truly believe\, you find someone who can completely turn your world around. You tell them things that you’ve never shared with another soul and they absorb everything you say and actually want to hear more. You share hopes for the future\, dreams that will never come true\, goals that were never achieved and the many disappointments life has thrown at you. When something wonderful happens\, you can’t wait to tell them about it\, knowing they will share in your excitement. They are not embarrassed to cry with you when you are hurting or laugh with you when you make a fool of yourself. Never do they hurt your feelings or make you feel like you are not good enough\, but rather they build you up and show you the things about yourself that make you special and even beautiful. There is never any pressure\, jealousy or competition but only a quiet calmness when they are around. You can be yourself and not worry about what they will think of you because they love you for who you are. The things that seem insignificant to most people such as a note\, song or walk become invaluable treasures kept safe in your heart to cherish forever. Memories of your childhood come back and are so clear and vivid it’s like being young again. Colours seem brighter and more brilliant. Laughter seems part of daily life where before it was infrequent or didn’t exist at all. A phone call or two during the day helps to get you through a long day’s work and always brings a smile to your face. In their presence\, there’s no need for continuous conversation\, but you find you’re quite content in just having them nearby. Things that never interested you before become fascinating because you know they are important to this person who is so special to you. You find strength in knowing you have a true friend and possibly a soul mate who will remain loyal to the end. Life seems completely different\, exciting and worthwhile. Your only hope and security is in knowing that they are a part of your life.', isRead: false, time: Date.now() },
        { id: 'a107', from: 'Aldo', emailFrom: 'myaldo@gmail.com', subject: 'Where are you?', body: 'I am looking forward to hear your stories. I hope you will have a nice trip. Once I pick you up in Courmayeur I will probably have to come back at work for one hour(you will come here with me)  and then I am all yours!', isRead: true, time: Date.now() },
        { id: 'a108', from: 'SHEIN.com', emailFrom: 'support@shein.com', subject: 'Self-Picking up Notification', body: 'Dear customer,We noticed that your order GSHMAN00U000343 tracking number XLT982099851 is awaiting for pick up now. Please kindly contact your local carrier to get the parcel. We are always at your service if you need any help.Note:Please follow the local carrier notice if you have received it in advance. Please ignore this message if you have got the parcel already.SHEIN Customer Service', isRead: true, time: Date.now() }

    ];
    return mails;
}