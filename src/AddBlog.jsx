import React from 'react'
import { useState } from "react"

const AddBlog = () => {

  const [author, setAuthor] = useState("")
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState({})

  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData();
    formData.append('author', author);
    formData.append('title', title);
    formData.append('desc', desc)
    formData.append('file', file);

    fetch("http://localhost:3003/addBlog", {
      method: "POST",
      body: formData

    }).then((response) => {
      response.json()
    }).then((result) => {
      console.log(result);
    })
  }

  function handleFile(e) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  }


  return (
    <>
      <h1 className="text-center text-6xl p-12">Add Blog </h1>
      <form className="flex flex-col gap-10 items-center border-2 py-10" encType={'multipart/form-data'} onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col">
          <label htmlFor="name">Author Name : </label>
          <input className="p-2" type="text" placeholder="Enter Author Name" id="name" value={author} onChange={(e) => setAuthor(e.target.value)}></input>
        </div>

        <div className="flex flex-col">
          <label htmlFor="name">Insert author image : </label>
          <input className="p-2" type="file" placeholder="Enter Author Name" id="name" name='file' onChange={(e) => handleFile(e)}></input>
        </div>

        <div className="flex flex-col">
          <label htmlFor="name">Title name : </label>
          <input className="p-2" placeholder="Enter your Title" id="name" value={title} onChange={(e) => setTitle(e.target.value)} ></input>
        </div>

        <div className="flex flex-col">
          <label htmlFor="name">Blog Desccription : </label>
          <textarea className="p-2" placeholder="Enter Blog description" id="name" value={desc} onChange={(e) => setDesc(e.target.value)} />
        </div>

        <div><button className="p-4 px-20 text-2xl border-2 border-black"> submit </button></div>
      </form>
    </>
  )
}

export default AddBlog
