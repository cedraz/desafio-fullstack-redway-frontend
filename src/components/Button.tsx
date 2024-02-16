'use client'
import * as React from 'react'

export type ButtonProps = React.ComponentProps<'button'>

export default function Button(props: ButtonProps) {
    return (
        <button className='bg-rose-500 px-5 text-white py-[6px] rounded-lg hover:bg-rose-800 transition-all' {...props}/>
    )
}