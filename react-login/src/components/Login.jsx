import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Login() {
    const { login } = useContext(AuthContext)

    const handleSubmit = () => {
        login()
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                    Login
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-900"
                            placeholder="a@a.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-900"
                            placeholder="••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gray-900 text-white font-medium py-3 rounded-xl hover:bg-gray-800 transition-colors"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
