import React , {useState, useRef} from 'react'
import ImageWelcome from "../img/Welcome.png"
import Login from './tools/Login'
import Ragister from './tools/Ragister'

const LoginPage = () => {
    const [cheak , setCheak] = useState(true);
    let ref = useRef("Create a account ,  Ragister Now");
    
    const handleSet=()=>{
        if(cheak){
            setCheak(false);
            ref.current = "Existing account , Login Now";
        }else{
            setCheak(true);
            ref.current = "Create a account ,  Ragister Now";
        }
        
    }

  return (
    <>
        <div className='p-10  overflow-hidden font-Ubuntu'>
            <div className='m-6 rounded-2xl overflow-hidden bg-sky-50 shadow-xl '>
            <div className='flex '>
                <div className='w-full basis-3/4'>
                     
                    <img src={ImageWelcome} alt="" />
                </div>
                <div className='w-full '>
                
                    
                     {
                        <div className='flex flex-col items-center w-full visible transition-transform  '>  
                        {cheak ? <Login/> : <Ragister/>}
                        </div> 
                        
                     }
                    <div className='flex justify-center'>
                        <button className='font-bold hover:underline' onClick={handleSet}>{ref.current} </button>
                    </div>
                    
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default LoginPage
