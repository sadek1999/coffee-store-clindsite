

import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffee from './Components/Coffee'

function App() {
  const  coffees=useLoaderData()
  

  return (
    <>
     <div>
     <h1 className='text-6xl text-center'>hot hot cold coffee {coffees.length}</h1>
       <div className='mt-20 grid lg:grid-cols-2'>
        {
          coffees.map(coffee=><Coffee
          key={coffee._id}
           coffee={coffee}
           >

          </Coffee>)
        }

       </div>
      
     </div>
      
    </>
  )
}

export default App
