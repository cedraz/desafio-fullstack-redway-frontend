'use client'
import * as React from 'react'

// API
import { registerEmail } from '@/api/register-email'

// Toastify
import { toast } from 'react-toastify'

// Components
import Button from '@/components/Button'
import Input from '@/components/Input'

// React-hook-form
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
    email: string
}

export default function Home() {
    const [message, setMessage] = React.useState('')
    const [email, setEmail] = React.useState('')

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
        try {
            const response = await registerEmail(data.email)
            const email = await response.json()

            if (email.message && email.message === 'Email registered') {
                setMessage(email.message)
                setEmail(email.email)
                toast.success('E-mail registrado.')
                return 
            }

            if (email.message && email.message === 'Validation error.') {
                setMessage('Digite um e-mail válido.')
                setEmail('')
                toast.error('Digite um e-mail válido.')
                return
            }

            if (email.message && email.message === 'Email already exists.') {
                setMessage('E-mail já registrado.')
                setEmail('')
                toast.warning('E-mail já registrado.')
                return
            }

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <main className='h-screen bg-slate-800 text-white flex justify-center items-center'>
            <div className='flex flex-col items-center  w-full max-w-96 p-5 border-2 rounded-lg border-rose-700'>
                <form className=' flex flex-col items-center mb-6' onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder='Digite seu e-mail' {...register('email', { required: true })}></Input>

                    <span className={errors.email ? 'mt-2 mb-2 text-sm text-red-700' : 'mt-2 mb-2 text-sm text-white'}>
                        {errors.email ? 'Esse campo é obrigatório' : 'Digite seu e-mail'}
                    </span>

                    <Button type='submit'>
                        Registrar e-mail
                    </Button>
                </form>
                <p>
                    {message}
                </p>
                <div>
                    {email}
                </div>
            </div>
        </main>
    )
}
