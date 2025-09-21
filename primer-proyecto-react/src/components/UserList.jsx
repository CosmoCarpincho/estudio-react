import { useState, useEffect } from 'react'

export const UserList = ({endPoint}) => {
    const [data, setUsers] = useState([])
    
    useEffect(() => {
        fetchUsers()
    } ,[endPoint])

    const fetchUsers = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
            const data = await response.json()
            setUsers(data)
            console.log(data)
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <ul>
                {endPoint == 'users' ? data.map(item => <li key={item.id}>{item.name}</li>)
                                    : data.map(item => <li key={item.id}>{item.body}</li>)}
            </ul>
        </>
    )
}