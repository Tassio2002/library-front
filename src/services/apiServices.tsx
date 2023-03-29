import axios from 'axios';

export async function signupRequest(name: string, email: string, password: string) {
    try {
        const res = await axios.post('http://localhost:3333/signup', {
            name: name,
            email: email,
            password: password,
        })
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}