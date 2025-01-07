import axios from "axios";

export const getTodos = async () => {
  const data = await axios.get("https://jsonplaceholder.org/posts");
  try {
    return data.data;
  } catch (error) {
    return error;
  }
};

export const postTodo = () => {};
