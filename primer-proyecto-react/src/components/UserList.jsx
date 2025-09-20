import { useState, useEffect } from 'react'

export const UserList = ({endpoint}) => {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetchUsers()
    } ,[])

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            setUsers(data)
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
    )
}