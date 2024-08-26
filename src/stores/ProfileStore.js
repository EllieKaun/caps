import { createStore } from "zustand";

export const profileStore = createStore((set) => ({
    profile: null,
    fetchProfile: async (access) => {
         if(access){
            const profileData = await fetch('https://bilal312.pythonanywhere.com/api/profile/', {
                headers: {
                    "Authorization": `Bearer ${access}`
                }
            })
            const profile = await profileData.json()
            set({profile: profile})
        }
    }
}))