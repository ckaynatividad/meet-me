import fetchUser from '../../services/user'

const { createContext, useState, useEffect, useContext } = require('react')

const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState({})

  useEffect(() => {
    fetchUser()
      .then((fetchedUser) => {
        setUser(fetchedUser)
      })
      .catch((error) => {
        throw new Error(`Error: ${error}`)
      })
  }, [])

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('please use with userprovider')
  }
  return context
}
