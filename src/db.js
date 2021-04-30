import db from './firebase'

export const getPrice = (name) => db.ref(`people/${name}/price`).once('value');

// export const getAllList = () => db.ref('all-ideas').once('value');

// export const getRecent = () => db.ref('all-ideas').limitToLast(3).once('value')

// export const deleteIdea = (key) => db.ref(`ideas/${key}`).remove();

// export const setIdeas = (list) => db.ref('ideas').set(list);

// export const addIdea = (idea) => db.ref("ideas").push(idea);
