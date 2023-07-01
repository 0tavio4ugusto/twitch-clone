import '../index.css'

const Canal = (props: any) =>{
  return(
    <div className="flex flex-row justify-between hover:cursor-pointer hover:bg-slate-700 px-3 py-1">
      <img className="rounded-full w-9 h-9 ml-1 mt-1 flex-[1_0_0%]" src={props.img} alt="" />
      <div className='flex flex-row justify-between flex-[10_0_0%]'>
        <div className='flex flex-col'>
          <p className='ml-3 text-white text-sm'>{props.nome}</p>
          <p className='ml-3 text-white text-sm'>{props.jogo}</p>
        </div> 
        <div className='flex flex-row mt-3'>
          <div className='h-2 w-2 rounded-full bg-red-600  mt-2 mr-1'></div>
          <p className='text-white text-sm'>{props.viwers}</p>
        </div>       
      </div>
     

    </div>
  )
}

export default Canal