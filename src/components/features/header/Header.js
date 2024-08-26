'use client'
import SignUp from "../singup/SignUp"
import SignIn from "../signin/SignIn"
import { useStore } from "zustand"
import { profileStore } from "@/stores/ProfileStore"
import { useEffect } from "react"

export default function Header(){

    const access = JSON.parse(localStorage.getItem('access'))


    const {profile, fetchProfile} = useStore(profileStore)

    const data = { 
        name: "John",
        age: 21,
        parents: {
            name: "Tony",
            age: 55
        }
    }

    useEffect(() => {
        fetchProfile(access)
    }, [])

    const data2 = JSON.parse(JSON.stringify(data)) // deep copy

    data2.isBithday = false
    data2.parents.isBithday = true

    return(
        <div>
            {!access ? 
            <div>
                <SignIn />
                <SignUp />
            </div> :
            <p>{profile?.username}</p>
            }
        </div>
    )


}
