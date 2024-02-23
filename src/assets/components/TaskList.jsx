
import TaskCard from './TaskCard';
import {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';
export default function TaskList() {

const {tasks}=useContext(TaskContext)

    if (tasks.length === 0) {
        return <div className="h1">No hay Tareas</div>
    }


    return (
        <div className='grid grid-cols-4 gap-2'>
            {
                tasks.map((task) => (
                  <TaskCard key={task.id} task={task}/>  
                ))
            }
        </div>
    )
}
