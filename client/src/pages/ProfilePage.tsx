import React from 'react'
import { useAuthStore } from '../store/auth'
import {useNavigate} from 'react-router-dom'

export default function ProfilePage() {

        const logout = useAuthStore(state => state.logout)
        const profile = useAuthStore(state => state.profile)

        const navigate = useNavigate()

  return (
    <div>ProfilePage
        <div>
                {JSON.stringify(profile)}
        </div>

        <button onClick={() => {
                logout()
                navigate('/login')
        }}>
                Logout
        </button>
    </div>
  )
}
