import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Logout() {
    const { logout, user } = useContext(AuthContext)

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-6 text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    Login Complete!
                </h1>
                <p className="text-gray-500 mb-6">{`Hello there, ${user?.email} !`}</p>
                <button
                    onClick={logout}
                    className="w-full px-5 py-2.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                >
                    Logout{' '}
                    <span className="text-xs">
                        (and clear LocalStorage too!)
                    </span>
                </button>
            </div>
        </div>
    )
}
