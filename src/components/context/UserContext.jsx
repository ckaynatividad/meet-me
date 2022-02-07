const { createContext, useState, useEffect, useContext } = require('react')

const UserContext = createContext()

export default function UserProvider({ children }) {
  const [user, setUser] = useState({})

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('please use with userprovider')
  }
  return context
}
