import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
function TaskCard({ task }) {
    const { deleteTask } = useContext(TaskContext)
    return (
        <div className='bg-gray-800 text-white p-4 rounded-md'>
            <h1 className='text-xl font-bold capitalize'>
                {task.title}
            </h1>
            <h2 className='text-gray-500 text-sm'>
                {task.description}
            </h2>
            <button onClick={() => deleteTask(task.id)} className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400'>Elimnar Tarea</button>
        </div>
    )
}

export default TaskCard