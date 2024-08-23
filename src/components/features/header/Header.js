'use client'
import SignIn from "../singup/SignUp"
import SignUp from "../singup/SignUp"

export default function Header(){

    const access = JSON.parse(localStorage.getItem('access'))
    const username = (localStorage.getItem('username'))

    return(
        <div>
            {!access ? 
            <div>
                <SignIn />
                <SignUp />
            </div> :
            <p>{username}</p>
            }
        </div>
    )


}