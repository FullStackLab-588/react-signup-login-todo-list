
const todokey = "reactTodo";

export const getLocalStorageTodoData = () => {
  const rawTodos = localStorage.getItem(todokey);
  try {
    return rawTodos ? JSON.parse(rawTodos) : [];
  } catch (error) {
    console.error("Invalid localStorage data", error);
    return [];
  }
};

export const setLocalStorageTodoData = (task) => {
  return localStorage.setItem(todokey, JSON.stringify(task));
};