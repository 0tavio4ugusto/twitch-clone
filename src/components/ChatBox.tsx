import '../App.css'
import Users from "./User"
import {Users2,ArrowRightFromLine,Smile,Bitcoin,Settings,Star,Gem} from 'lucide-react'

const ChatBox = () =>{
  return(
    <div className=' flex flex-col bg-slate-800 flex-[2.5_0_0%] border-l border-gray-700'>
            <div className='text-white text-sm font-semibold flex flex-row py-3 justify-around border-b border-gray-700'>
              <ArrowRightFromLine className='hover:bg-slate-700 p-1 h-7 w-7 rounded-md cursor-pointer' />
              <p className='mt-1'>CHAT DA TRANSMISSÃO</p>
              <Users2  className='hover:bg-slate-700 p-1 h-7 w-7 rounded-md cursor-pointer'/>
            </div>
            <div className='mx-5 my-3 text-base font-normal'>
              <Users cor='red' nome='Vermelho1' mensagem='Eae Chat como vcs estão??' />
              <Users cor='yellow' nome='Amarelinho' mensagem='Oi chat <3' />
              <Users cor='cyan' nome='CeuDeSp' mensagem='Salve fml' />
              <Users cor='green' nome='GramaFresca' mensagem='OMEGALUL' />
              <Users cor='pink' nome='RosaDoChat' mensagem='😍🥰😍🥰' />
              <Users cor='white' nome='NeveNova' mensagem='POGGERS' />
              <Users cor='purple' nome='XxUvaSemSementexX' mensagem='Vai jogar um mine hoje????' />
              <Users cor='magenta' nome='BananinhaRosa' mensagem='Me deram TO só pq eu tava spammando, pode isso mods??' />
              <Users cor='red' nome='Vermelho1' mensagem='Sem spam no chat pf' />
              <Users cor='white' nome='NeveNova' mensagem='Alguem sabe se ele vai abrir live hoje?' />
              <Users cor='cyan' nome='CeuDeSp' mensagem='CAPSLOCK DA BAN??????' />                    
            </div>
            <div className=' flex-row w-72 h-10 flex mt-80 self-center rounded-md border-2 border-slate-400 px-3'>
              <Star className='text-slate-400 w-48 h-9' />
              <input className=' =  focus:outline-none w-screen pl-4 bg-slate-800' type="text" placeholder= 'Envie uma mensagem' />
              <Gem className='text-slate-400 w-48 h-9' />
              <Smile className='text-slate-400 ml-2 w-48 h-9' />
            </div>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row mt-3 ml-4'>
                <div className=' flex flex-row hover:bg-slate-700 cursor-pointer rounded-md px-2 py-1'>
                <Bitcoin className='text-yellow-200' />
                <p className='text-slate-400 font-semibold'>13,4 mil</p>
                </div>                             
              </div>
              <div className=' flex flex-row mt-3 mr-4'>
                <Settings className='text-white mt-1'/>
                <div className='bg-purple-400 rounded-md text-white text-sm py-1 px-2 ml-3'>
                  <p>Chat</p>
                </div>
              </div>
            </div>
          </div>
  )  
}

export default ChatBox

