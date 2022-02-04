import React from 'react';
import { ITask } from '../interfaces';

interface Props {
  task: ITask;
  doneTask(taskNameToDelete: string): void;
}

const TodoTask = ({task, doneTask}: Props) => {
  return <div className='task'>
    <div className='content'>
      <span>{task.taskName}</span>
      <span>D-{task.deadline}</span>
    </div>
    <button onClick={() => {
      doneTask(task.taskName);
    }}>X</button>
  </div>;
}

export default TodoTask