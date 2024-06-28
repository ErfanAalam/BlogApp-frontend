import { useEffect, useState } from "react"

function App() {
  const [blogs, setBlogs] = useState([])
  const [search, setSearch] = useState("")
  const [foundedBlog, setFounedBlog] = useState([])

  useEffect(() => {
    fetch("https://blogapp-backend-4605.onrender.com/showblog").then((response) => {
      return response.json()
    }).then((result) => {
      setBlogs(result)
      console.log(result);
    })
  }, [])


  function handleSearch(e) {
    e.preventDefault()

    fetch("https://blogapp-backend-4605.onrender.com/search?q=" + search)
      .then((response) => {
        return response.json()
      }).then((result) => {
        setFounedBlog(result);
      })
  }

  return (
    <>
      <h1 className="text-6xl p-8 text-center text-white font-bold">All Blogs</h1>

      <div className="flex justify-center items-center gap-4 mb-8">
        <label htmlFor="search" className="text-3xl text-white">Search Blog</label>
        <input type="text" className="p-2 rounded-lg" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button className="bg-gray-600 text-white border-4" onClick={(e) => handleSearch(e)}>Search</button>
      </div>

      <div className="flex gap-10 flex-wrap p-10">
        {
          search == "" ?

            blogs.map((blog, index) => {
              return <div className="border-2 p-4 w-[700px] flex gap-8" key={index}>
               
                {blog.file && (
                  <img src={`https://blogapp-backend-4605.onrender.com/${blog.file}`} alt={blog.title} className=" w-[300px] " />
                )}
               <div className="text-white flex flex-col gap-4">
               <h1 className="text-2xl font-bold">{blog.title}</h1>
                <h3 className="text-[20px]"> - {blog.author}</h3>
                <p className="text-xl text-wrap">{blog.desc}</p>
               </div>

              </div>
            })
            :
            foundedBlog.map((blog, index) => {
              return <div className="border-2 p-4 w-[700px] flex gap-8" key={index}>
               
                {blog.file && (
                  <img src={`https://blogapp-backend-4605.onrender.com/${blog.file}`} alt={blog.title} className=" w-[300px] " />
                )}
               <div className="text-white flex flex-col gap-4">
               <h1 className="text-2xl font-bold">{blog.title}</h1>
                <h3 className="text-[20px]"> - {blog.author}</h3>
                <p className="text-xl text-wrap">{blog.desc}</p>
               </div>

              </div>
            })
        }
      </div>
    </>
  )
}

export default App
