import { useSelector } from 'react-redux'
import EditTodo from './editTodo'
import Todo from './todo'
export default function TodoList() {

const todos= useSelector(state=>state.todos )


    return (
        <div className="todoList-container">
        {todos.map((task) => (
          <Todo key={task.id} task={task} />
        ))}
    
      </div>
    )
}