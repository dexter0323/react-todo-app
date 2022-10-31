import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { add } from "../store/todos"

export function Header() {
  const [task, setTask] = useState("")
  const dispatch = useDispatch()

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(add(task))
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
    </header>
  )
}
