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
import { useForm, SubmitHandler, Controller } from 'react-hook-form'

type Inputs = {
    email: string
}

export default function Home() {
    // const [message, setMessage] = React.useState('')
    // const [email, setEmail] = React.useState('')

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
        console.log(data)
       
        // try {
        //     const response = await registerEmail(data.email)
        //     const email = await response.json()

        //     if (email.message && email.message === 'Email registered') {
        //         setMessage(email.message)
        //         setEmail(email.email)
        //         toast.success('Email registered')
        //     } else {
        //         setEmail(email.message)
        //         setEmail('')
        //         toast.error('Email not registered')
        //     }
        // } catch (error) {
        //     console.error(error)
        // }
    }

    return (
        <main className='h-screen bg-slate-900 text-white flex justify-center items-center'>
            <div className=''>
                <form className='flex flex-col p-5 w-96 border-2 rounded-lg border-rose-700' onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder='teste' {...register('email', { required: true })}></Input>

                    <span className={errors.email ? 'mt-2 text-sm text-red-700' : 'mt-2 text-sm text-white'}>
                        {errors.email ? 'This field is required' : 'Digite seu email'}
                    </span>

                    <Button type='submit'>
                        Registrar e-mail
                    </Button>
                </form>
                {/* <p>
                    {message}
                </p>
                <div>
                    {email}
                </div> */}
            </div>  
        </main>
    )
}
