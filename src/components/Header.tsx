import '../App.css'
import {Twitch, Search, User, MoreVertical, BatteryCharging, Gem, MessageSquare,Inbox,Crown,} from 'lucide-react'

const Header = () => {
  return(
    <div className='flex flex-row justify-between bg-slate-900 text-white h-12 content-center border-b border-black'> 
    <div className='flex flex-[3_0_0%] content-center justify-between flex-row mt-3'>
      <Twitch className='ml-2 w-8 hover:cursor-pointer' color='rgb(145 70 255)' />
        <div className=' flex flex-row text-xl justify-around mb-3'>
          <div><strong className='ml-1 hover:cursor-pointer hover:text-purple-400'>Seguindo</strong></div>
          <div><strong className='ml-6 hover:cursor-pointer hover:text-purple-400' >Procurar</strong></div>
        </div>            
      <MoreVertical className='ml-4 hover:bg-slate-600 hover:rounded-md hover:cursor-pointer' />
    </div> 

    <div className='h-auto flex flex-row content-center justify-center flex-[9_0_0%] '>
      <input className=' pl-5 my-2 w-2/5 border border-gray-500 rounded-l-lg bg-slate-800' placeholder= 'Buscar' type="text"  />
      <Search className='w-8 h-8 p-1 mt-2 rounded-r-lg bg-slate-700 hover:bg-slate-600' />
    </div>  

    <div className=' flex flex-row  justify-end content-center flex-[4_0_0%]'>
      <div className='flex flex-row mt-3 mr-3'>
        <Gem className='mx-1 w-8 hover:cursor-pointer hover:bg-slate-600 p-1 hover:rounded-md'/>
        <MessageSquare className='mx-1 w-8 hover:cursor-pointer hover:bg-slate-600 p-1 hover:rounded-md'/>
        <Inbox className='mx-1 w-8 hover:cursor-pointer hover:bg-slate-600 p-1 hover:rounded-md'/>
        <Crown className='mx-1 w-8 hover:cursor-pointer hover:bg-slate-600 p-1 hover:rounded-md'/>
      </div>
      <div className='flex flex-row bg-slate-700 my-2 ml-1 rounded-lg hover:cursor-pointer hover:bg-slate-600'>
      <BatteryCharging className=' mt-1 ml-2'/>
      <p className='mt-1 text-md mx-2'>Assista sem anúncios</p>
      </div>
      <div className=' mt-3 self-center bg-purple-900 mx-3 mb-3 h-9 rounded-full hover:cursor-pointer'> 
      <User className='m-1 ' />
      </div>
    </div>       
  </div>
  )
} 

export default Header