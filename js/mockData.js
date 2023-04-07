import {getRandomInteger} from './utils.js';
import { NAMES, MESSAGES, DESCRIPTIONS, CountLike, AvatarNumber, CountComment, MAX_COUNT_PHOTOS } from './consts.js';

const mockData = [];

const createUser = (id) => ({
    id: id,
    url: `photos/${id}.jpg`,
    description: `photo id: ${id}`,
    likes: getRandomInteger(15, 200),
    comment: getRandomInteger(0, 200)
});

export function getMockData() {
    for (let i = 1; i <= 25; i++) {
        mockData.push(createUser(i));
    }
    return mockData;
}

const createComment = (id) => ({
    id,
    avatar: `img/avatar-${getRandomPositiveInteger(AvatarNumber.MIN, AvatarNumber.MAX)}.svg`,
    message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)],
    name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)],
  });
  
  const createComments = () => Array.from({length: getRandomPositiveInteger(CountComment.MIN, CountComment.MAX)}, (_, index) => createComment(index + 1));
  
  const createPhoto = (id) => ({
    id,
    url: `photos/${id}.jpg`,
    desription: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length - 1)],
    likes: getRandomPositiveInteger(CountLike.MIN, CountLike.MAX),
    comments: createComments(),
  });
  
  const createPhotos = () => Array.from({length: MAX_COUNT_PHOTOS}, (_, index) => createPhoto(index + 1));
  
  export {createPhotos};