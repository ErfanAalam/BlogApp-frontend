import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const UsersDetail = () => {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:3003/").then((response) => {
            return response.json()
        }).then((result) => {
            setUsers(result)
            console.log(result);
        })
    }, [])

    const handleDelete = (id) => {
        console.log(id);

        fetch("http://localhost:3003/delete", {
            method: "DELETE",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                id: id
            })
        }).then((response) => {
            return response.json()
        }).then((result) => {
            if (result.id == id) console.log("delted user is done");
            // console.log("user deleted");
        })
        window.location.reload();
    }




    return (
        <div>

            <h1 className='text-5xl text-center p-10'>Users list</h1>
            <div className='flex flex-col items-center w-[100vw] '>
                {
                    users.map((user) => {
                        return <>
                            <div className='border-4 flex w-full justify-between gap-4 p-6 mt-6 '>
                                <h3 className='text-[20px] p-2'>{user.email}</h3>
                                <h1 className='text-[20px] p-2'>{user.name}</h1>
                                <p className=' text-[20px] p-2'>{user.message}</p>
                                <button className='border-4 py-2' onClick={() => handleDelete(user._id)}>
                                    Remove User
                                </button>
                                <Link to={`/edit/${user._id}`}>
                                    <button className='border-4 py-2' onClick={() => handleUpdate(user._id)}>
                                        Update User
                                    </button>
                                </Link>
                            </div>
                        </>
                    })
                }
            </div>
            {/* <br /> <br /> */}
            {/* <div className='flex justify-center'> <button className='border-4 py-2' onClick={() => { navigate("/addUser") }}>Add Users</button></div> */}
        </div>
    )
}

export default UsersDetail
