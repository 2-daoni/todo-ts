import React, { ChangeEvent, useState } from 'react';
import { ITask } from './interfaces';
import './App.css';
import TodoTask from './Components/TodoTask';

const App: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
    setTask(event.target.value)
    } else {
    setDeadline(Number(event.target.value))
    }
  }

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodo([...todo, newTask])
    setTask('')
    setDeadline(0)
    console.log(todo)
  }

  const doneTask = (taskNameToDelete: string): void => {
    setTodo(todo.filter((task) => {
      return task.taskName !== taskNameToDelete
    }))
  }

  return (
    <div className='App'>
      <div className='header'>
        <div className='inputContainer'>
        <input type='text' placeholder='해야할 일을 작성해주세요' name='task' value={task} onChange={handleChange}></input>
          <input type='number' placeholder='디데이를 작성해주세요' name='deadline' value={deadline} onChange={handleChange}></input>
        </div>
        <button onClick={addTask}>추가</button>
      </div>
      <div className='todoList'>
        {todo.map((task: ITask, key: number) => {
          return <TodoTask task={task} key={key} doneTask={doneTask}/>
        })}
      </div>
    </div>
    );
}


export default App;