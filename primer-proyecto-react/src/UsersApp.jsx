import { useState, useEffect } from 'react'
import { UserList } from './components/UserList'
export const UsersApp = () => {
    const [endPoint, setEndPoint] = useState('users')
    const handleFetch = () => {
        setEndPoint('comments')
        console.log(endPoint)
    }

    return (
        <>
            <h1>Lista de usuarios:</h1>
            <UserList endPoint={endPoint}/>
            <button onClick={handleFetch}>Ir a comentarios</button>
        </>
    )
}