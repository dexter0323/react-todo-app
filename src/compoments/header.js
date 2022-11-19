import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { add } from "../reducers/todos"
import { createTodo } from "../actions/todos"

export function Header() {
  const [task, setTask] = useState("")
  const dispatch = useDispatch()

  const onKeyDown = async (e) => {
    if (e.key === "Enter") {
      const newTask = await createTodo(task)
      dispatch(add(newTask))
      setTask("")
    }
  }

  useEffect(() => {
    // console.log(task)
  }, [task])

  return (
    <header>
      <input
        value={task}
        type="search"
        placeholder="What's need to be done?"
        onChange={(e) => setTask(e.currentTarget.value)}
        onKeyDown={onKeyDown}
      />
      <hgroup>
        <h3>PENDING</h3>
        <h3>COMPLETED</h3>
      </hgroup>
    </header>
  )
}
