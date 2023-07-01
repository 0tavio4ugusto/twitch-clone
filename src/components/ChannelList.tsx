import '../App.css'
import Canal from './Canal'
import CanalOff from './CanalOff'
import {ArrowLeftFromLine,ArrowUpDown} from 'lucide-react'



const ChannelList = () =>{
  return(
    <div className='bg-slate-800 flex-[2_0_0%]'>
            <div className='flex flex-row justify-between mt-2'>
               <strong className=' text-xl ml-2 text-white'>Para você</strong>
              <ArrowLeftFromLine className='w-5 mr-4 mt-1' color='rgb(255 255 255)'/>
            </div>
            <div className='flex flex-row justify-between mt-2'>
               <strong className=' text-sm mt-2 ml-2 text-white'>CANAIS SEGUIDOS</strong>
              <ArrowUpDown className='w-5 mr-4 mt-1' color='rgb(255 255 255)'/>
            </div>
            <div className='pt-5'>
              <Canal img='https://static-cdn.jtvnw.net/jtv_user_pictures/41db2352-66da-489d-a058-c9349db3c830-profile_image-70x70.png' nome='Mount' jogo='GeoGuessr' viwers='900'/>
              <Canal img='https://static-cdn.jtvnw.net/jtv_user_pictures/0595cdd0-65a7-4fa3-996d-323cf3a54be1-profile_image-70x70.png' nome='Cellbit' jogo='Minecraft' viwers='37,2 mil'/>
              <Canal img='https://static-cdn.jtvnw.net/jtv_user_pictures/4d2e7f32-73cb-47bd-8152-ca60811dffa6-profile_image-70x70.png' nome='Rakin' jogo='Teamfight Tatics' viwers='1,9 mil'/>
              <Canal img='https://static-cdn.jtvnw.net/jtv_user_pictures/distortion2-profile_image-bb052bec695cc197-70x70.png' nome='Distortion2' jogo='Only up!' viwers='6,1 mil'/>
              <Canal img='https://static-cdn.jtvnw.net/jtv_user_pictures/e5e89aba-723b-4ba1-852c-d8fba19b1da1-profile_image-70x70.png' nome='YoDa' jogo='League of Legends' viwers='7,4 mil'/>
              <Canal img='https://static-cdn.jtvnw.net/jtv_user_pictures/016626ec-56e6-40e1-9278-60e60508e099-profile_image-70x70.png' nome='G0ularte' jogo='Só na conversa' viwers='1,2 mil'/>
              <Canal img='https://static-cdn.jtvnw.net/jtv_user_pictures/41dbfc92-40cd-414f-bbde-159297b2ab47-profile_image-70x70.png' nome='PatoPapao' jogo='The Elder Scrolls V:...' viwers='849'/>
              <Canal img='https://static-cdn.jtvnw.net/jtv_user_pictures/f4b12683-57ff-4b57-926a-67512b43a7ff-profile_image-70x70.png' nome='Gaules' jogo='Counter-Strike: G...' viwers='8,1 mil'/>
              <CanalOff img='https://static-cdn.jtvnw.net/jtv_user_pictures/3b4f19d8-c145-4740-a0d4-8ad01189ed14-profile_image-70x70.png' nome='Doazin' viwers='Offline'/>
              <CanalOff img='https://static-cdn.jtvnw.net/jtv_user_pictures/41db2352-66da-489d-a058-c9349db3c830-profile_image-70x70.png' nome='Mount' viwers='Offline'/>
              
            </div>
            <p className='text-purple-400 text-xs pl-3 cursor-pointer hover:text-purple-500 hover:underline pt-3' >Monstrar mais</p>   

            <div className='pt-2'>
              <strong className=' text-sm mt-2 ml-2 text-white'>CANAIS RECOMENDADOS</strong>
              <Canal img='https://static-cdn.jtvnw.net/jtv_user_pictures/64d44235-1dee-4bca-95da-bee1ee96eea3-profile_image-70x70.png' nome='Alanzoka' jogo='FINAL FANTASY...' viwers='12,9 mil'/>
              <Canal img='https://static-cdn.jtvnw.net/jtv_user_pictures/50942827-74fa-407b-9edc-bc3827e47f9f-profile_image-70x70.png' nome='Felps' jogo='Só na conversa' viwers='1,4 mil'/>
              <Canal img='https://static-cdn.jtvnw.net/jtv_user_pictures/66e83125-195e-4431-bde8-89ac425a9038-profile_image-70x70.png' nome='Foolish_Gamers' jogo='Minecraft' viwers='9,1 mil'/>
              <Canal img='https://static-cdn.jtvnw.net/jtv_user_pictures/lobosjr-profile_image-b5e3a6c3556aed54-70x70.png' nome='LobosJr' jogo='Elden Ring' viwers='856'/>


            </div>
          </div>
  )
}

export default ChannelList