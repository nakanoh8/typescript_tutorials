import UUID from 'uuid';

import {User} from './User';

console.log(UUID);
const user = new User('ebihara', 'kenji', 44);
const contentsEle = document.getElementById('contents');
if(!!contentsEle){
    contentsEle.innerText = `${user.familyName} ${user.givenName}`;
}

const saibanButton = document.getElementById('saiban') as HTMLButtonElement;
const uuidSpan = document.getElementById('uuid') as HTMLSpanElement;
saibanButton.onclick = (e) => {
    uuidSpan.innerText = UUID.v4();
}