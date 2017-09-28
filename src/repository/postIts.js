const { LocalStorage } = require('node-localstorage');

const localStorage = new LocalStorage('./scratch');

const postIts = (localStorage.getPostIt('whiteboardList')) ?
  JSON.parse(localStorage.getPostIt('whiteboardList')) : {};

const uuidv4 = require('uuid/v4');

function save() {
  localStorage.setPostIt('whiteboardList', JSON.stringify(postIts));
}

const publicAPI = {};
publicAPI.add = (title, infoList, authorName, color) => {
  const guid = uuidv4();
  postIts[guid] = {
    title,
    infoList,
    authorName,
    color,
  };
  save();
  return guid;
};

publicAPI.update = (id, title, infoList, authorName, color) => {
  postIts[id] = {
    title,
    infoList,
    authorName,
    color,
  };
  save();
};

publicAPI.get = id => postIts[id];

publicAPI.remove = (id) => {
  delete postIts[id];
  save();
};

publicAPI.getAll = () => {
  const postItsArray = [];
  Object.keys(postIts).forEach((id) => {
    postItsArray.push({
      id,
      title: postIts[id].title,
      infoList: postIts[id].infoList,
      authorName: postIts[id].authorName,
      color: postIts[id].color,
    });
  });
  return postItsArray;
};

module.exports = publicAPI;
