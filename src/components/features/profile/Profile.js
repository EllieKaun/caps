

'use client'

import { useEffect } from "react"


export default function Profile(){

    const access = JSON.parse(localStorage.getItem("access"))

    const hadnleGetProfile = async () => {
        if(access){
            const profileData = await fetch('https://bilal312.pythonanywhere.com/api/profile/', {
                headers: {
                    "Authorization": `Bearer ${access}`
                }
            })
            const profile = await profileData.json()
            console.log(profile)
            localStorage.setItem("username", profile.username)
        }
    }

    useEffect(() => {
        hadnleGetProfile()
    }, [])

    return(
        <></>
    )
}