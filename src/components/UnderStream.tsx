import '../App.css'
import {BadgeCheck,Heart,Bell,Star,ChevronDown} from 'lucide-react'


const UnderStream = () =>{
  return(
    <div className='flex flex-row content-around'>
              <div className='flex flex-[2_0_0%] mt-1 mx-5'>
                <div className='flex flex-row'>
                  <div className=' mt-4 w-20 h-20 flex bg-gray-200 rounded-full justify-center align-middle'>
                  <img className=' w-11/12 self-center rounded-full' src="https://avatars.githubusercontent.com/u/109428686?v=4" alt="" />
                  </div>
                  <div className='flex flex-col justify-between'>
                    <div className='flex flex-row mt-2'>
                      <p className='text-white text-xl font-semibold ml-2'>0tavio4ugusto</p>
                      <BadgeCheck className='w-4 ml-2 mt-1' color='#9146FF'/>
                    </div>
                    <div className='flex flex-col'>
                      <p className='text-white text-sm font-semibold ml-2'>Treinando React/TS/HTML CSS</p>
                      <p className='text-purple-500 text-sm font-semibold ml-2'>Desenvolvimento de softwares</p>
                    </div>                    
                  </div>
                </div>
              </div>
              <div className=' flex flex-[3_0_0%]'></div>
              <div className='flex flex-[2_0_0%] flex-row mt-5'>
              <div className= ' '>
                <p className='text-purple-500 hover:text-gray-300 hover:bg-slate-500 rounded-md h-7 px-3 mb-2 '>Reagir</p>
              </div>
              <Heart className=' cursor-pointer mx-3 h-7 w-11 p-1 bg-slate-700 rounded-md hover:bg-pink-500' color='#fff'/>
              <Bell  className=' cursor-pointer h-7 w-11 p-1 bg-slate-700 rounded-md hover:bg-slate-600'color='#fff'/>
              <div className=' mx-3  bg-purple-600 flex flex-row h-7 rounded-md cursor-pointer hover:bg-purple-800'>
                <Star className=' mx-1 mt-0.5 w-5 ' color='#fff'/>
                <p className=' mt-1 text-white text-sm mx-1'>Inscreva-se</p>
                <ChevronDown className='mx-1 mt-1	' color='#fff'/>
              </div>
              </div>
            </div>
  )
}

export default UnderStream