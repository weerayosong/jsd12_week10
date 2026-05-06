import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

// ---------------------------------------------
// ฟังก์ชัน Validation
// ---------------------------------------------
function validateEmail(value) {
    if (value === '') {
        return 'Email is required'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
        return 'Invalid email address'
    }
    return '' // ไม่ Error
}

function validatePassword(value) {
    if (value === '') {
        return 'Password is required'
    }
    if (value.length < 6) {
        return 'Password must be at least 6 characters'
    }
    return ''
}
// ---------------------------------------------

export default function Login() {
    const { login } = useContext(AuthContext)

    // State เก็บที่พิมพ์
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // State เก็บข้อความ error (เริ่มต้นให้เป็นstringว่าง ไม่ error)
    const [errors, setErrors] = useState({ email: '', password: '' })

    const handleSubmit = (e) => {
        e.preventDefault() //กัน browser refresh ตอนกด submit

        // ที่ user กรอกนะ ได้ '' or error message
        const emailErrorMsg = validateEmail(email)
        const passwordErrorMsg = validatePassword(password)

        // อัพเดต state ด้วยถ้ากลายเป็น error message
        setErrors({
            email: emailErrorMsg,
            password: passwordErrorMsg,
        })

        // ถ้าไม่มี error ('') ทั้งคู่ให้ทำการล็อกอิน
        if (emailErrorMsg === '' && passwordErrorMsg === '') {
            login({ email })
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                    Login
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {/* ส่วนของ Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-gray-900 ${
                                errors.email
                                    ? 'border-red-500'
                                    : 'border-gray-200'
                            }`}
                            placeholder="a@a.com"
                        />
                        {/* ถ้า errors.email ไม่ใช่ string ว่าง ให้โชว์ข้อความ */}
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* ส่วนของ Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-gray-900 ${
                                errors.password
                                    ? 'border-red-500'
                                    : 'border-gray-200'
                            }`}
                            placeholder="••••••"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.password}
                            </p>
                        )}
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
