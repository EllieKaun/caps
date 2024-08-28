'use client'
import SignUp from "../singup/SignUp"
import SignIn from "../signin/SignIn"
import { useStore } from "zustand"
import { profileStore } from "@/stores/ProfileStore"
import { useEffect } from "react"
import Link from "next/link"

export default function Header(){

    const access = localStorage.getItem('access') ? JSON.parse(localStorage.getItem('access')) : false


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
            <Link href="/kinopisk">Kinopisk</Link>
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
