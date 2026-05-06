import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import { AuthProvider } from './context/AuthProvider'
import Login from './components/Login'
import Logout from './components/Logout'

function AppContent() {
    const { isAuthenticated } = useContext(AuthContext)

    return <main>{isAuthenticated ? <Logout /> : <Login />}</main>
}

function App() {
    return (
        <AuthProvider>
            <AppContent />
        </AuthProvider>
    )
}

export default App
