import { useEffect, useState } from "react"

function LojaRoupas(){
    const itensData= JSON.parse(localStorage.getItem('box1'))
    console.log(itensData)
    const [qtd,setQtd] = useState(0)
    const[qtdGeral,setGeral]= useState(0)
    const [cor,setCor] = useState("")
    const [desc,setDesc] = useState("")
    const [link,setLink] = useState("")
    const [box,setBox] = useState(itensData ||[])

useEffect(()=>{
    localStorage.setItem('box1',JSON.stringify(box))
},[box])

const addItem=(e)=>{
    e.preventDefault()
    const item={
        quantidade: qtd,
        cores: cor,
        imgRoupa:<img src={link} height = "30%"/>,
        descricao: desc,
    }
    box.push(item)
    setGeral(qtdGeral+(+qtd))
    setQtd(0)
    setCor('')
    setDesc('')
    setLink('')
}


const remove = (link, qtd) => {
    setBox(box.filter((item) => item.imgRoupa !== link))
    setGeral(qtdGeral-qtd)
}

   return(
    <div>
    <h1>Lista de compra de roupas</h1>
    <h3>{qtdGeral} itens</h3>
    {console.log(box)}
    {box.map((item)=>(
        console.log(item),
        <div key={item}>
            <p>{item.quantidade}</p>
            <p>{item.cores}</p>
            <p>{item.descricao}</p>
            <p>{item.imgRoupa}</p>
            <button onClick={()=> remove(item.imgRoupa, item.quantidade)}>X</button>
        </div>
    ))}
    <form onSubmit={addItem}>
    <input placeholder='quantidade' value={qtd} onChange ={(e) => setQtd(e.target.value)}/>
    <input placeholder='cor' value={cor} onChange ={(e) => setCor(e.target.value)}/>
    <input placeholder='url' value={link} onChange ={(e) => setLink(e.target.value)}/>
    <input placeholder='descrição' value={desc} onChange ={(e) => setDesc(e.target.value)}/>
    <button> adicionar </button>
   </form>
    </div>
   ); 
}
export default LojaRoupas;