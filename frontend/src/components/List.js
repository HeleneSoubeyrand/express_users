import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../contexts/Users"
import UserCard from "../components/Card"


const List = () => {
    const { getUsers } = useContext(UsersContext)
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
        .then(response => setUsers(response))
    }, [])

    return (
        <div  
            style={{  
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
            }}
        >
            {users.map((user, index) => (
                <UserCard 
                    key={index} 
                    user={user}
                    slug={user.slug}
                />
            ))}
        </div>
    )
}

export default List