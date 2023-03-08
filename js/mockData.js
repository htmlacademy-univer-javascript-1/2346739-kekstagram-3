import {getRandomInteger} from './util.js';

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