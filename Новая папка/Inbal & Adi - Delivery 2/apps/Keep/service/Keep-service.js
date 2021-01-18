import { storageService } from '../../../services/storageService.js'
import { utilService } from '../../../services/utilService.js'

const KEEP_KEY = 'keeps';

export const keepService = {
    query,
    _add,
    removeKeep,
    save,
    getKeepById,
    getNextPrev,
    getEmptyKeep,
    updateColor,
    copyKeep,
    keepPin,
    doneNote
}

var gKeeps = [{
    id: utilService.makeId(),
    type: "NoteTxt",
    isPinned: true,
    info: {
        txt: "#when i will find work? "
    },
    style: {
        backgroundColor: '#ffd5e5'
    }
},
{
    id: utilService.makeId(),
    type: "NoteImg",
    isPinned: false,
    info: {
        url: "https://getsocialmediatips.com/wp-content/uploads/2019/01/2019-valentines-day-gif-guide.gif",
        title: "Me playing Mi"
    },
    style: {
        backgroundColor: "#fcf7bb"
    }
},
{
    id: utilService.makeId(),
    type: "NoteAudio",
    isPinned: false,
    info: {
        url: "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
        title: "Best Scene"
    },
    style: {
        backgroundColor: '#ffd5e5'
    }
},
{
    id: utilService.makeId(),
    type: "NoteTodos",
    isPinned: false,
    info: {
        label: "Home tasks:",
        todos: [{
            txt: "Clean The House",
            doneAt: null
        },
        {
            txt: "Remove the Bugs",
            doneAt: null
        }
        ]
    },
    style: {
        backgroundColor: '#d6e5fa'
    }
},
{
    id: utilService.makeId(),
    type: "NoteVideo",
    isPinned: false,
    info: {
        url: "https://www.youtube.com/embed/Eq-eQKoEycM",
        // title: "Me playing Mi"
    },
    style: {
        backgroundColor: '#e1ccec'
    }
},
{
    id: utilService.makeId(),
    type: "NoteImg",
    isPinned: true,
    info: {
        url: "https://besttv232-ynet-images1-prod.cdn.it.best-tv.com/PicServer5/2019/02/14/9065019/906501001001599640360no.jpg",
        title: "Me playing Mi"
    },
    style: {
        backgroundColor: '#d3f6f3'
    }
},
{
    id: utilService.makeId(),
    type: "NoteVideo",
    isPinned: false,
    info: {
        url: "https://www.youtube.com/embed/tsFeIVJfKsA",

        title: "Nirvana song"
    },
    style: {
        backgroundColor: '#ececec'
    }
},
{
    id: utilService.makeId(),
    type: "NoteTxt",
    isPinned: false,
    info: {
        txt: `Inbal Azmon & Adi Magori`
    },
    style: {
        backgroundColor: '#d4ebd0'
    }
},

{
    id: utilService.makeId(),
    type: "NoteTodos",
    isPinned: false,
    info: {
        label: "Today missions:",
        todos: [{
            txt: "Add Audio to the keeps",
            doneAt: null
        },
        {
            txt: "Add canvas to the keeps",
            doneAt: null
        },
        {
            txt: "Fix the bugs",
            doneAt: null
        }
        ]
    },
    style: {
        backgroundColor: 'white'
    }
}
];

function getEmptyKeep() {
    return {
        type: 'NoteTxt',
        isPinned: false,
        info: {},
        style: {
            backgroundColor: 'white'
        }
    };
}

function query() {
    let keeps = storageService.load(KEEP_KEY);
    if (!keeps) {
        keeps = gKeeps;
        storageService.save(KEEP_KEY, keeps);
    }
    return Promise.resolve(keeps);
}

function getKeepById(keepId) {
    return query()
        .then(keeps => {
            const keep = keeps.find(keep => keep.id === keepId);
            return Promise.resolve(keep);
        })
}

function save(keepToSave) {
    return (
        keepToSave.id ? _updateKeep(keepToSave) : _add(keepToSave)
            .then(() => {
                return Promise.resolve();
            })
    )
}

function _add(newKeep) {
    const keepToAdd = {
        ...newKeep,
        id: utilService.makeId()
    }
    return query()
        .then(keeps => {
            keeps.unshift(keepToAdd);
            storageService.save(KEEP_KEY, keeps);
            return Promise.resolve();
        })
}

function removeKeep(keepId) {
    return query()
        .then(keeps => {
            const keepIdx = keeps.findIndex(keep => keep.id === keepId);
            keeps.splice(keepIdx, 1);
            storageService.save(KEEP_KEY.keeps);
            return Promise.resolve();
        })
}


function _updateKeep(keepToSave) {
    return query()
        .then(keeps => {
            keeps = keeps.map(keep => keep.id === keepToSave.id ? keepToSave : keep)
            storageService.save(KEEP_KEY, keeps);
            return Promise.resolve();
        })
}


function updateColor(keepId, color) {
    return query()
        .then(keeps => {
            const _keep = keeps.find(keep => keep.id === keepId);
            _keep.style.backgroundColor = color
            storageService.save(KEEP_KEY, keeps);
            return Promise.resolve();
        })
}

function getNextPrev(keepId) {
    return query()
        .then(keeps => {
            const keepIdx = keeps.findIndex(keep => keep.id === keepId)
            const nextKeep = keeps[KeepIdx + 1] || keeps[0]
            const prevKeep = keeps[KeepIdx - 1] || keeps[keeps.length - 1]
            return {
                prevKeepId: prevKeep.id,
                nextKeepId: nextKeep.id
            }
        })
}

function copyKeep(copyKeep) {
    return (
        _add(copyKeep)
            .then(() => {
                return Promise.resolve()
            }))
}


function keepPin(keepId) {
    return query()
        .then(keeps => {
            const _keep = keeps.find(keep => keep.id === keepId);
            _keep.isPinned = !_keep.isPinned;
            storageService.save(KEEP_KEY, keeps);
            return Promise.resolve();
        })
}

function doneNote(keepId, keepTodoIdx) {
    return query()
        .then(keeps => {
            const keepIdx = keeps.findIndex(keep => keep.id === keepId)
            if (keeps[keepIdx].info.todos[keepTodoIdx].doneAt === null) keeps[keepIdx].info.todos[keepTodoIdx].doneAt = Date.now();
            else keeps[keepIdx].info.todos[keepTodoIdx].doneAt = null;
            storageService.save(KEEP_KEY, keeps);
            return Promise.resolve();
        })
}
