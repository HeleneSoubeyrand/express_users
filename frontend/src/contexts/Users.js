import { createContext } from "react"

const UsersContext = createContext({})

const UsersContextProvider = ({ children }) => {
  
  const getUsers = () => {
    return fetch(`http://localhost:5000/users`)
      .then(response => response.json())
      .then(data => data )
  }

  const getUser = slug => {
    return fetch(`http://localhost:5000/users/${slug}`)
      .then(response => response.json())
      .then(data => data )
  }

  const createUser = body => {
    return fetch(`http://localhost:5000/users/`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(data => data)
  }

  const value = {
    getUsers,
    getUser,
    createUser,
  }

  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>
  )
}

export {
  UsersContext,
  UsersContextProvider
}