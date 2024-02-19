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
import { AxiosError } from 'axios'

type Inputs = {
    email: string
}

export default function Home() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
        try {
            const response = await registerEmail(data.email)

            const { email } = response.data

            toast.success('E-mail registrado com sucesso!')

        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                if (error.message === 'Network Error') {
                    toast.error('Erro ao conectar com o servidor.')
                    return
                }

                if (error.response) {
                    if (error.response.status === 400) {
                        toast.error('Digite um e-mail válido.')
                        return
                    }

                    if (error.response.status === 409) {
                        toast.error('Esse e-mail já foi cadastrado.')
                        return
                    }

                    if (error.response.status === 500) {
                        toast.error('Erro interno do servidor.')
                        return
                    }
                }
            }

            console.error(error)
        }
    }

    return (
        <main className='h-screen bg-[#edf2f7] text-white flex justify-center items-center'>
            <div className='flex flex-col items-center justify-center w-full h-96 max-w-md rounded-lg bg-white drop-shadow-xl'>
                <form className=' flex flex-col mb-6' onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="email-input" className='text-black mb-3'>Digite seu e-mail*:</label>
                    <Input id='email-input' placeholder='E-mail' {...register('email', { required: true })}></Input>

                    <span className={errors.email ? 'mt-2 mb-4 text-sm text-red-700' : 'mt-2 mb-4 text-sm text-black'}>
                        {errors.email ? 'Esse campo é obrigatório' : ''}
                    </span>

                    <div className='self-center'>
                        <Button type='submit'>
                        Registrar e-mail
                        </Button>
                    </div>
                </form>
            </div>
        </main>
    )
}
