import baseDonne from './bd.json'

//Как создат функции(свободные,без html) для применения на любой страницу

const getAll =()=>{ return baseDonne }

const getOne =(id)=>{
    return baseDonne.find(logement=>logement.id===id)
}

//или так
export {getAll,getOne}
