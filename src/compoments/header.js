import { useState, useEffect } from "react"

export function Header() {
  const [task, setTask] = useState("")

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      // TODO: Submit new task
      console.log(task)
    }
  }

  useEffect(() => {
    console.log(task)
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
