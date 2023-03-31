import axios from "axios";
//usar POO
const baseUrl: string = "http://localhost:3333/"

export const mountUrl = (path: string): string => {
    return `${baseUrl}${path}`
}

export async function signupRequest(
  name: string,
  email: string,
  password: string
) {
  try {
    const res = await axios.post(mountUrl('signup'), {
      name: name,
      email: email,
      password: password,
    });
  } catch (error) {
  }
}

export async function loginRequest(email: string, password: string) {
  try {
    const res = await axios.post(mountUrl('login'), {
      email: email,
      password: password,
    });
    const token = res.data.token
    return token
  } catch (error) {
    console.log(error);
  }
}

export async function getAllBooks() {
    try {
        const res = await axios.get(mountUrl('book/all_books'), {
            headers: {Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzUsImlhdCI6MTY4MDE0MjY2OCwiZXhwIjoxNjgwMTQ5ODY4fQ.5-Te7feBTd36AFNFNaYdm6CiRwk9qdJMeSF6ICfY7I8'}
        })
        console.log(res.data.books);
        return res.data.books
    } catch (error) {
        console.log(error);
    }
}
