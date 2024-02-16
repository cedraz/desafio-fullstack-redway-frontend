'use client'
import * as React from 'react'

export type InputProps = React.ComponentProps<'input'>

function Input(props: InputProps, ref: React.Ref<HTMLInputElement>) {
    return (
        <input
            ref={ref}
            className='border-2 border-rose-700 rounded-lg px-2 py-1 text-black'
            {...props}
        />
    )
}

export default React.forwardRef(Input)