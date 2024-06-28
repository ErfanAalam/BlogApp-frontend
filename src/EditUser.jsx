import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {

    const { idToEdit } = useParams()
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    function handleSubmit(e) {

        const obj = { name, email, message, id: idToEdit }

        e.preventDefault()
        fetch("https://blogapp-backend-4605.onrender.com/updateData", {
            method: "PUT",
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify(obj)
        }).then((response)=>{
            return response.json()
        }).then((result)=>{
            if(result === "Data Updated") {
                navigate('/show')
            }
        })
    }


    useEffect(() => {
        fetch("https://blogapp-backend-4605.onrender.com/edit/" + idToEdit)
            .then((response) => {
                return response.json()
            }).then((result) => {
                setName(result.name)
                setEmail(result.email)
                setMessage(result.message)
            })
    }, [idToEdit])

    return (
        <div>
            <h1 className='text-center text-3xl p-6'>Update the User</h1>

            <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col justify-center items-center'>
                <div>
                    <label htmlFor="name">Name:</label> <br /> <br />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="age">Email:</label> <br /> <br />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <br />

                <div>
                    <label htmlFor="age">Message:</label> <br /> <br />
                    <textarea
                        name=""
                        id=""
                        value={message}
                        required
                        onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditUser
