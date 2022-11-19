import "./App.css"
import { useSelector, useDispatch } from "react-redux"
import { listTodos } from "./actions/todos"
import { setTodos } from "./reducers/todos"
import { Header } from "./compoments/header"
import { Task } from "./compoments/task"
import { useEffect } from "react"

function App() {
  const dispatch = useDispatch()

  const todos = useSelector((state) => state.todos.data)

  useEffect(() => {
    listTodos().then((data) => dispatch(setTodos(data)))
  }, [dispatch])

  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <div className="content">
            {todos
              .filter((t) => !t.completed)
              .map((task, i) => (
                <Task key={i} {...task} />
              ))}
          </div>
        </section>
        <section>
          <div className="content">
            {todos
              .filter((t) => t.completed)
              .map((task, i) => (
                <Task key={i} {...task} />
              ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
