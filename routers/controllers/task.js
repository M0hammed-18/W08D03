//This File Create To Put CRUD Oprations Depand on taskSchema
const taskModel = require("./../../db/models/task");

const gettask = (req, res) => {
  taskModel
    .find({userId:req.token.id , isDelete:false })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const createtask = (req, res) => {
  const { name, userId, isDelete } = req.body;
  const newtask = new taskModel({
    name,
    userId: req.token.id,
  });

  newtask
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const DelTask = (req, res) => {
  taskModel
    .find({})
    .then((result) => {
      console.log(result);
      result.filter((item) => {
        if (item.isDelete == true) res.status(200).json(item);
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const TaskbyId = (req, res) => {
  const { id } = req.params;
  console.log(id);
  taskModel
    .findById(id)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  console.log(id);

  taskModel
    .findByIdAndRemove(id)
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id);

  taskModel
    .findByIdAndUpdate(id, { name })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
module.exports = {
  createtask,
  gettask,
  DelTask,
  TaskbyId,
  deleteTask,
  updateTask,
};
