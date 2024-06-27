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

    fetch("http://localhost:3005/getdata", {
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
      <div className="App">
        {
          response ? <h1>Thank you for your informaton</h1> : ""
        }
        <h1 className='text-4xl p-8 text-center'>Simple Form</h1>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
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

      <div className='flex justify-center'><button onClick={() => { navigate("/show") }}>Show Users</button></div>
    </>
  )
}

export default AddUser
