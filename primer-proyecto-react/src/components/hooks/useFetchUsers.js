export const useFetchUsers = ({endPoint}) => {
    const [data, setUsers] = useState([])

    useEffect(() => {
        fetchUsers()
    }, [endPoint])

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

    return {
        data,
        isLoading
    }
}