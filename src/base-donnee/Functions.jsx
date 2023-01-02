import baseDonne from './bd.json'

// function vide
const getAll =()=>{ return baseDonne }

const getOne =(id)=>{
    return baseDonne.find(logement=>logement.id===id)
}

export {getAll,getOne}
