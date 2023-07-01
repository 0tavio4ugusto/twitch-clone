import '../index.css'

const Users = (props: any) =>{
  return(
    <div className=" my-2 ">
      <p style={{color:"white"}}><span style={{color:props.cor}} >{props.nome}</span>: {props.mensagem}</p>
    </div>
  )
}

export default Users