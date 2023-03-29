import axios from 'axios';

export async function signupRequest() {
    try {
        const res = await axios.post('http://localhost:3333/signup', {
            name: 'Teste api',
            email: 'tassio.santos7@simbioseventures.com',
            password: 'abc1234dd',
        })
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}