'use client'
import * as React from 'react'

export type InputProps = React.ComponentProps<'input'>

function Input(props: InputProps, ref: React.Ref<HTMLInputElement>) {
    return (
        <input
            ref={ref}
            type='text'
            className='block w-full p-4 text-gray-900 border-none rounded-md bg-white text-base focus:border-red-300 outline-none drop-shadow-md'
            {...props}
        />
    )
}

export default React.forwardRef(Input)