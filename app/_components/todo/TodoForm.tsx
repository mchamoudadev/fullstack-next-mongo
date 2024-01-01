"use client"
import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import { API_URL } from '@/lib/config'


const TodoForm = () => {

    const router = useRouter();


    const handleSubmit = async (event: React.FormEvent) => {

        event.preventDefault();

        const form = event.target as HTMLFormElement;

        const formData = new FormData(form)

        const data = {
            title: formData.get('title'),
        }

        try {
            const res = await fetch(`${API_URL}/api/todo`, {
                method: 'POST',
                body: JSON.stringify(data)
            });
            await res.json();

            router.refresh();
            form.reset();

        } catch (error) {
            console.error(error)
        }
    }

    return (

        <form
            className='w-full'
            onSubmit={handleSubmit}
        >
            <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" name='title' placeholder="Title of your todo" />
                </div>
            </div>
        </form>

    )
}

export default TodoForm