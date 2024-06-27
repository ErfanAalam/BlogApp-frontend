import { useEffect, useState } from "react"

function App() {
  const [blogs, setBlogs] = useState([])
  const [search, setSearch] = useState("")
  const [foundedBlog, setFounedBlog] = useState([])

  useEffect(() => {
    fetch("http://localhost:3005/showblog").then((response) => {
      return response.json()
    }).then((result) => {
      setBlogs(result)
      console.log(result);
    })
  }, [])


  function handleSearch(e) {
    e.preventDefault()

    fetch("http://localhost:3005/search?q=" + search)
      .then((response) => {
        return response.json()
      }).then((result) => {
        setFounedBlog(result);
      })
  }

  return (
    <>
      <h1 className="text-5xl p-8 text-center">Blogs</h1>

      <div className="flex justify-center items-center gap-4 mb-8">
        <label htmlFor="search" className="text-2xl">Search Blog</label>
        <input type="text" className="p-2 rounded-lg" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button className="bg-gray-600 text-white border-4" onClick={(e) => handleSearch(e)}>Search</button>
      </div>

      <div className="flex gap-10 flex-wrap">
        {
          search == "" ?

            blogs.map((blog,index) => {
              return <div className="border-2 p-4  w-fit" key={index}>
               {blog.file && (
                 <img src={`http://localhost:3005/${blog.file}` }alt={blog.title} className="img-fluid w-[300px]"  />
                )}
                <h1 className="text-2xl font-bold">{blog.title}</h1>
                <h3 className="text-2xl">{blog.author}</h3>
                <p className="text-xl">{blog.desc}</p>
                
              </div>
            })
            :
            foundedBlog.map((blog,index) => {
              return <div className="border-2 p-4  w-fit" key={index}>
                {blog.file && (
                 <img src={`http://localhost:3005/${blog.file}` }alt={blog.title} className="img-fluid" />
                )}
                <h1 className="text-2xl font-bold">{blog.title}</h1>
                <h3 className="text-2xl">{blog.author}</h3>
                <p className="text-xl">{blog.desc}</p>
              </div>
            })
        }
      </div>
    </>
  )
}

export default App
