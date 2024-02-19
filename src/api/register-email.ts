import axios from 'axios'

const url = 'http://localhost:3333'

export async function registerEmail(email: string) {
    const response = await axios.post(`${url}/emails`, { email })
    return response
}