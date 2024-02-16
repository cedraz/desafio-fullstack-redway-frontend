const url = 'http://localhost:3333'

export async function registerEmail(email: string) {
    const response = await fetch(`${url}/register-email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    })

    return response
}