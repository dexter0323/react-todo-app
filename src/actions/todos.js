import axios from "axios"

const API_URL = "http://127.0.0.1:8000/api/v1/"

export async function createTodo(name) {
  try {
    const result = await axios.post(API_URL + "task", { name })
    return Promise.resolve(result.data)
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function removeTodo(id) {
  try {
    const result = await axios.delete(API_URL + `task/${id}`)
    return Promise.resolve(result.data)
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function toggleTodo(name) {
  try {
    const result = await axios.post(API_URL + "task", { name })
    return Promise.resolve(result.data)
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function listTodos() {
  try {
    const result = await axios.get(API_URL + "tasks")
    return Promise.resolve(result.data)
  } catch (error) {
    return Promise.reject(error)
  }
}
