const fs = require('fs');
const { v4: uuid } = require('uuid');

const getTasks = () => {
  const rawData = fs.readFileSync('./src/db/tasks.json');
  return JSON.parse(rawData);
}

const getSingleTask = id => {
  const tasks = getTasks();
  return tasks.find(task => task.id === id);
}

const writeTasks = tasks => {
  const data = JSON.stringify(tasks);
  fs.writeFileSync('./src/db/tasks.json', data);
}

const get = () => {
  const tasks = getTasks();
  return {data: tasks};
}

const create = body => {
  const { todo, done } = body;
  const id = uuid();

    if (!todo) return {
        status: 400,
        data: {
          message: '`todo` field required',
        }
    }
    const tasks = getTasks();

    const dateTime = new Date();

    const newTask = {
      id,
      created: dateTime,
      updated: dateTime,
      todo: todo,
      done: false
    }

    const newTasks = [ newTask, ...tasks ];

    writeTasks(newTasks);

    return { status: 201, data: newTask }
}

const remove = id => {
  const tasks = getTasks();

  const taskToRemove = getSingleTask(id);

  if (!taskToRemove) return { status: 204 }

  const filtered = tasks.filter(task => task.id !== id);
  writeTasks(filtered);

  return { status: 200, data: { id } }
}

const patch = (id, body) => {
  const { todo, done } = body;
  const tasks = getTasks();
  const taskToUpdate = getSingleTask(id);

  if (!taskToUpdate) return {
    status: 404,
    data: {
      message: 'task doesn\'t exist'
    },
  }

  const updatedTask = {
    ...taskToUpdate,
    ...(!!todo && { todo }),
    ...(done === true || done === false && { done }),
    updated: new Date(),
  }

  const updatedTasks = tasks
    .map(task => task.id === id ? { ...task, ...updatedTask } : task)

  writeTasks(updatedTasks);

  return { status: 200, data: updatedTask }
}

const changeStatus = id => {
  const tasks = getTasks();
  const taskToChangeStatusTo = getSingleTask(id);

  if (!taskToChangeStatusTo) return {
    status: 404,
    data: {
      message: 'task doesn\'t exist'
    },
  }

  const changedStatus = !taskToChangeStatusTo.done

  const updatedTask = {
    ...taskToChangeStatusTo,
    updated: new Date(),
    done: changedStatus,
  }

  const updatedTasks = tasks
    .map(task => task.id === id ? { ...task, ...updatedTask } : task)

  writeTasks(updatedTasks);

  return { status: 200, data: updatedTask }
}

module.exports = { get, create, remove, patch, changeStatus }
