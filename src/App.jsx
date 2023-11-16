import React, { useRef, useState } from 'react'

function App() {
  const [list, setlist] = useState([]);
  const ref = useRef(null);

  const handleOnAdd = ()=>{
    setlist([...list, ref.current.value]);
    ref.current.value = [];
    console.log(list);
  }
  const handleDelete = (listitem)=>{
    setlist(
      list.filter((e)=>{
        return e !==listitem
      })
    )
  }
  const handleClick=()=>{
    setlist([...list,ref.current.value])
  }

  return (
    
    <>
    <nav className='bg-red-300 flex justify-between items-center p-7'>
    <div className="w-50 text-5xl text-white">
      To Do List
    </div>
    <div className="w-72 bg-white p-5 flex justify-between">
      <input ref={ref} type="text" className='border-0 outline-0 bg-transparent bg-white' placeholder='Type Your List'/>
      <button onClick={handleOnAdd} className='border-none outline-none'>
      <i class="fa-solid fa-plus"></i>
      </button>
    </div>
    </nav>
    {list?.map((listitem)=>{
        return (
          <>
          <div key={listitem} className='border-1 border-red-500 border-solid w-52 p-32 drop-shadow-lg'>
            {listitem}
            <button className='bg-blue-600' onClick={()=>{
              handleDelete(listitem)
            }}>Delete</button>
            </div>
          </>
    )}) }
    </>
  )
}

export default App
