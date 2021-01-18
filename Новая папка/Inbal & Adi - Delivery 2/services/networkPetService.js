

export const networkmailService = {
    getNetworkmails
}


// FOR DEBUG
window.serv = networkmailService;

const url = 'http://www.filltext.com/?rows=10&name={firstName}&power={number}&pretty=true'

function getNetworkmails() {
    return axios.get(url)
    // .then(res => res.data)
}