'use strict';
const fetch = require('node-fetch');

const domain = 'http://localhost:3000/scooters';

function register(){
  return _post('');
};

function rent(scooterId, userId){
    const body = {userId}
    return _post(`${scooterId}/rent`, body);
};

function position(scooterId, lat, long, battery){
    const body = {lat, long, battery};
    return _post(`${scooterId}/position`, body);
}

function release(scooterId, userId){
    const body = {userId}
    return _post(`${scooterId}/release`, body);
}

function _post(url, body){
    return fetch(`${domain}/${url}`, {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    }).then(async (res) => {
        if(res.status === 204){
            return res;
        }
        if(res.ok){
            return res;
        }else{
            throw await res.text();
        }
    })
    .then(res => res.json());
};

module.exports = {
    register, 
    rent,
    position,
    release
};