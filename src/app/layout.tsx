import * as React from 'react'
import './globals.css'

// Toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <ToastContainer 
                    position="top-right"
                    autoClose={3000}
                    limit={1}/>
                {children}
            </body>
        </html>
    )
}
