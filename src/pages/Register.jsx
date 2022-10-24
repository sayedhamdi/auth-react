import {useRef} from "react"
import { Navigate, useNavigate } from "react-router-dom"

export default function Register(){
    const emailRef = useRef()
    const usernameRef = useRef()

    const passwordRef = useRef()
    const navigate = useNavigate()

    const handleRegistre = async (e)=>{
        e.preventDefault()
        const username = usernameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value

        const response = await fetch("http://localhost:3000/api/resigter",
        {
            method :"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password,username}),
        })
        const data = await response.json()
        console.log(data)
        if(!data.msg){
            localStorage.setItem("user",JSON.stringify(data.data))
            navigate("/profile")
        }else{
            alert(data.msg)
        }
    }   
    

    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
                <label htmlFor="username">
                 Username:
                </label>
                <input type="text" id="username" ref={usernameRef}/>

            </div>
            
            <div style={{display:"flex",flexDirection:"column"}}>
                <label htmlFor="email">
                email:
            </label>
            
            <input type="text" id="email" ref={emailRef}/>
            </div>
            <div style={{display:"flex",flexDirection:"column"}}>
            <label htmlFor="password">
                password:
            </label>
            
            <input type="password" id="password" ref={passwordRef}/>
            </div>
            <div>
                <button onClick={handleRegistre}>Register</button>
            </div>
        </div>
    )
}