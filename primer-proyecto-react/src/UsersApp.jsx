import { useState, useEffect } from 'react'
import { UserList } from './components/UserList'
export const UsersApp = () => {
    // const [users, setUsers] = useState([])

    // const fetchUsers = async () => {
    //     try {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //         const data = await response.json()
    //         console.log(data)
    //         setUsers(data)
    //     }
    //     catch (error) {
    //         console.error(error)

    //     }
    // }

    const [endPoint, setEndPoint] = useState('users')

    // useEffect(() => {
    //     fetchUsers()
    // }, [])

    const handleFetch = () => {
        setEndPoint('comments')
        console.log(endPoint)
    }

    return (
        <>
            <h1>Lista de usuarios:</h1>
            <UserList endPoint={endPoint}/>
            <button onClick={handleFetch}>Ir a comentarios</button>

            {/* <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul> */}
        </>
    )
}