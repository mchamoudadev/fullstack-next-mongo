import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Todo from './Todo';
import { API_URL } from '@/lib/config';


export interface TodoItemProps {
    _id: string;
    title: string;
    isDone: boolean
}


const Todos = async () => {

    const res = await fetch(`${API_URL}/api/todo`, { cache: 'no-cache' });
    const todoList: TodoItemProps[] = await res.json();

    return (
        <div className='w-full my-10'>
            <Card>
                <CardHeader>
                    <CardTitle>Todo's</CardTitle>
                    <CardDescription>Become Productive</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul role="list" className="divide-y divide-gray-100">
                        {
                            todoList.map((todo) => (
                                <Todo todo={todo} />
                            ))
                        }
                    </ul>
                </CardContent>

            </Card>

        </div>
    )
}

export default Todos