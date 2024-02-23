import TaskList from './assets/components/TaskList';
import TaskForm from './assets/components/TaskForm';
export default function App() {


  return (
    <main className='bg-zinc-900 h-screen'>
      <div className="container mx-auto">
        <TaskForm />
        <TaskList />
      </div>

    </main>

  )
}

