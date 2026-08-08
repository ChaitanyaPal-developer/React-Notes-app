import { useState } from 'react'

const App = () => {

  
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({title,details})

    setTask(copyTask)
    console.log(task);
    
    
    setTitle('')
    setDetails('')
  }

  const deleteNote =(idx)=>{
    const copyTask = [...task];

    copyTask.splice(idx,1)

    setTask(copyTask)
       
  }


  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='lg:w-1/2 gap-4 p-10 flex flex-col  '>
        <h1 className='text-3xl font-bold'>Add Notes</h1>

       {/* 1st input for heading */}
        <input 
        type="text"
        placeholder='Enter Notes Heading' 
        className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)

        }}
        />

        {/* Detail vala input */}
        <input 
        type="text" 
        className='px-5 w-full h-32 border-2 outline-none rounded'
        placeholder='Write details'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)

        }}
        />
        <button 
        className='bg-white active:bg-gray-300 font-medium w-full outline-none text-black px-5 py-2 rounded'
        >
          Add Note
          </button>
      </form>
      <div className='lg:w-1/2 p-10 lg:border-l-2'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
          {task.map(function(elem,idx){

            return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]">
              <div>
                <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight font-medium text-gray-700'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs font-bold rounded text-white'>Delete</button>
              </div>

          })}
        </div>
      </div>
    </div>
  )
}

export default App