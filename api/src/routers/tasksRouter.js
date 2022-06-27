const express = require('express');
const router = express.Router();

const {
  get,
  create,
  remove, patch, changeStatus,
} = require('../controlers/tasks')

router.get('/api', (req, res) => {
  const tasks = get();

  res
    .status(200)
    .json(tasks)
})

router.post('/api', (req, res) => {
  const body = req.body;
  const { status, data } = create(body);

  res
    .status(status)
    .json({ ...data })
})

router.delete('/api/:id', (req, res) => {
  const { id } = req.params;

  const { status, data } = remove(id);

  res
    .status(status)
    .json({ ...data })
})

router.patch('/api/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const { status, data } = patch(id, body);

  res
    .status(status)
    .json({ ...data })
})

router.patch('/api/:id/change-status', (req, res) => {
  const { id } = req.params;

  const { status, data } = changeStatus(id);

  res
    .status(status)
    .json({ ...data })
})

module.exports = router;
