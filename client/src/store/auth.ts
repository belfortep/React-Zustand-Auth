import create from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
        token: string
        profile: any
        isAuth: boolean
}

type Actions = {
        setToken: (token: string) => void
        setProfile: (profile: any) => void
}


export const useAuthStore = create(persist<State & Actions>((set) => ({
        token: "",
        profile: null,
        isAuth: false,
        setToken: (token: string) => set((state) => ({
                token,
                isAuth: true
        })),
        setProfile: (profile: any) => set((state) => ({
                profile
        }))
}), {
        name: 'auth'
}))