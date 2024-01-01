import TodoForm from "./_components/todo/TodoForm";
import Todos from "./_components/todo/Todos";

export default function Home() {
  return (
    <main className='flex items-center justify-center flex-col max-w-lg mx-auto mt-32'>

      <TodoForm />
      <Todos />
    </main>
  )
}
