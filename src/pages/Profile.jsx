import { useEffect } from "react"
import {  useNavigate } from "react-router-dom"

export default function Profile(){
    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem("user")){
            navigate("/login")
        }
    })
    const username = JSON.parse(localStorage.getItem("user")).username
    return (
        <div>
            <h1>Profile</h1>
            <div>
                {username} marhbe bik fi profilek
            </div>
        </div>
    )

}   