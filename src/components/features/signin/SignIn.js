'use client'
import {  useState } from "react"
import { Button, Input } from "antd"
import CustomModal from "@/components/ui/modal"

export default function SignIn() {
    
    const [isOpen, setIsOpen] = useState(false)


    const [authData, setAuthData] = useState({
        username: {
            value: '',
            error: false,
        },
        phone_number: {
            value: '',
            error: false,
            pattern: /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/
        },
        password: {
            value: '',
            error: false, 
            pattern: /\w{4,}/
        }
    })

    const postData = {
        username: '',
        phone_number: '',
        password: ''
    }

    const handleChange = (type, newValue) => {

        setAuthData((prev) => ({
                ...prev, 
                [type]:{ ...prev[type], value: newValue, error: false }
        }))
    }

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    const hadnleCheckAuthData = () => {
        const authKeys = Object.keys(authData)
        const authValues = Object.values(authData)

        const errorArr = []
        authKeys.forEach((item) => {            
            if(authData[item].value){ // проверка на значние
                if(authData[item].pattern){ // проверка на RegExp
                    if(authData[item].pattern.test(authData[item].value)){ // проверка на совпадение с RegExp
                        postData[item] = authData[item].value // подставляем значение
                    }else{
                        errorArr.push(true)
                        setAuthData((prev) => ({
                            ...prev,
                            [item]:{...prev[item], error: true}
                        }))// добавление ошибки
                    }
                }else{
                    postData[item] = authData[item].value // подставляем значение
                }
            }else{
                errorArr.push(true)
                setAuthData((prev) => ({
                    ...prev,
                    [item]:{...prev[item], error: true}
                }))// добавление ошибки
            }
        })

        return !errorArr.some((item) => item)
    }

const handleAuth = async () => {
        if(hadnleCheckAuthData()){
            const result = await fetch('https://bilal312.pythonanywhere.com/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData),
                }
            )
            const data = await result.json()
            localStorage.setItem('access', JSON.stringify(data.access))
        }
    }

    return(
        <>
            <Button onClick={() => handleOpen()}>SignIn</Button>
            <CustomModal title={'Sign Up'} isOpen={isOpen} onCancel={handleClose} onOk={handleAuth}>
                <div className="flex flex-col gap-[12px] mt-[36px]">
                    <Input status={authData.username.error ? 'error' : ''} placeholder="Username" onChange={(e) => {handleChange('username', e.target.value)}}/>
                    <Input status={authData.phone_number.error ? 'error' : ''} placeholder="Phone number" onChange={(e) => {handleChange('phone_number', e.target.value)}}/>
                    <Input status={authData.password.error ? 'error' : ''} placeholder="Password" onChange={(e) => {handleChange('password', e.target.value)}}/>
                </div>
            </CustomModal>
        </>
    )
}