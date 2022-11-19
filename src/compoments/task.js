import { remove, toggle } from '../reducers/todos'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../actions/todos'

export function Task(task) {
  const dispatch = useDispatch()

  const onDeleteTask = async () => {
    await removeTodo(task.id)
    dispatch(remove(task))
  }

  return (
    <div className="task">
      <div className="info">
        <div className="name">{task.name}</div>
        <div>
          {task.created_at && new Date(task.created_at).toLocaleString()}
        </div>
      </div>
      <div className="actions">
        <button className="complete" onClick={() => dispatch(toggle(task))}>
          {task.completed ? 'MARK PENDING' : 'DONE'}
        </button>
        <button className="delete" onClick={() => onDeleteTask()}>
          REMOVE
        </button>
      </div>
    </div>
  )
}
