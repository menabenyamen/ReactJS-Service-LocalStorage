const whiteboardPostIts = require('../../../repository/postIts');

const get = (req, res) => {
  const id = req.params.id;
  const postIt = whiteboardPostIts.get(id);
  if (postIt) {
    res.json(whiteboardPostIts.get(id));
  } else {
    res.status(404).json({
      type: 'error',
      message: `PostIt ${id} not found` });
  }
};

const getAll = (req, res) => {
  res.json(whiteboardPostIts.getAll());
};

const remove = (req, res) => {
  const id = req.params.id;
  whiteboardPostIts.remove(id);
  res.status(204).send();
};

const add = (req, res) => {
  const title = req.body.title;
  const infoList = req.body.infoList;
  const authorName = req.body.authorName;
  const color = req.body.color;
  const id = whiteboardPostIts.add(title, infoList, authorName, color);
  res.status(201).json({ id });
};

// Added update rest
const update = (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const infoList = req.body.infoList;
  const authorName = req.body.authorName;
  const color = req.body.color;
  whiteboardPostIts.update({ id, title, infoList, authorName, color });
  res.status(204).send();
};

module.exports = {
  get,
  getAll,
  remove,
  add,
  update,
};
