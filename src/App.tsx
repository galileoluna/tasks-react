import React, { Fragment, useState } from 'react';
import { type } from 'os';


type FormElement = React.FormEvent<HTMLFormElement>;
interface ITasks{
  name: string;
  done: boolean;
}

function App():JSX.Element {
  
  
  const [newTask,setnewTask]= useState<string>('');
  const [tasks,setTasks]= useState<ITasks[]>([]);

  const handleSubmit = (e: FormElement) =>{
    e.preventDefault();
    addTask(newTask);
    setnewTask('');
  }
  const addTask= (name: string) =>{
    const newTasks: ITasks[]= [...tasks,{name, done:false}];
    setTasks(newTasks);
  }
  return (
  <Fragment>
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setnewTask(e.target.value)} value={newTask}/>
          <button>
          Guardar
          </button>
    </form>
  </Fragment>
  );
}

export default App;
