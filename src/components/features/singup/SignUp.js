'use client'
import { useState } from "react"
import { Button, Input } from "antd"
import CustomModal from "@/components/ui/modal"

export default function SignUp() {
    
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleAuth = () => {
        fetch('https://bilal312.pythonanywhere.com/api/register/', {
            method: 'POST',}
        )
    }
    return(
        <>
            <Button onClick={() => handleOpen()}>SignUp</Button>
            <CustomModal title={'Sign Up'} isOpen={isOpen} onCancel={handleClose} onOk={handleAuth}>
                <div className="flex flex-col gap-[12px] mt-[36px]">
                    <Input placeholder="Username" />
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                </div>
            </CustomModal>
        </>
    )
}