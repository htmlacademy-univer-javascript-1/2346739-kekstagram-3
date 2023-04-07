import {getMockData} from './mockData.js';

let mockData = getMockData();

const userTemp = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const patternUserFragment = document.createDocumentFragment();

export const draw = () => {
    for (let i = 0; i < mockData.length; i++ ) {
        let user = mockData[i];

        const temp = userTemp.cloneNode(true);
        temp.querySelector('.picture__img').setAttribute('src', user.url);
        temp.querySelector('.picture__info').querySelector('.picture__comments').textContent = user.comment;
        temp.querySelector('.picture__info').querySelector('.picture__likes').textContent = user.likes;
        patternUserFragment.append(temp);
    }
    pictures.append(patternUserFragment);
}