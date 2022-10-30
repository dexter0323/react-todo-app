import { useDispatch } from "react-redux"
import { add } from "../store/todos"

export default function AddTodo(todo) {
  useDispatch()(add(todo))
}
