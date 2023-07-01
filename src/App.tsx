import './App.css'

import ChatBox from './components/ChatBox'
import ChannelList from './components/ChannelList'
import Header from './components/Header'
import UnderStream from './components/UnderStream'

function App() {
  return (
    <div className=''>
      <Header/>
        <div className='flex flex-row h-screen'>
          <ChannelList/>
          <div className='bg-slate-950 flex-[10_0_0%] flex-col justify-between'>
            <img className='w-screen' src="https://influencermarketinghub.com/wp-content/uploads/2020/06/Grid.png" alt="" />
            <UnderStream/>
          </div>
          <ChatBox />          
        </div>
    </div>
  )
}

export default App
