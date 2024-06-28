import React from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import { useState } from 'react'

const AddUser = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = { name, email, message }

    fetch("https://blogapp-backend-4605.onrender.com/getdata", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(obj)
    })
      .then((response) => {
        // console.log(response)
        return response.json()
      }).then((result) => {
        console.log(result);
        if (result === "submited Data") {
          setResponse(true)
          setName("")
          setEmail("")
          setMessage("")
        }
      })
      .catch((error) => {
        console.log(error);
      })

    console.log('Form Data Submitted:');
  };
  return (
    <>
      <div className="App text-white">
        {
          response ? <h1>Thank you for your informaton</h1> : ""
        }
        <h1 className='text-4xl p-8 text-center'>Add User</h1>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
          <div>
            <label htmlFor="name">Name:</label> <br /> <br />
            <input
            className="p-2 rounded-lg bg-[#162f33]"
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
            className="p-2 rounded-lg bg-[#162f33]"
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
            className="p-2 rounded-lg bg-[#162f33]"
              name=""
              id=""
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>

          <button type="submit" className='text-2xl'>Submit</button>
        </form>
      </div>

      <div className='flex justify-center text-white text-2xl'><button onClick={() => { navigate("/show") }}>Show Users</button></div>
    </>
  )
}

export default AddUser
