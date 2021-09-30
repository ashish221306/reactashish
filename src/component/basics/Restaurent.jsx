import React ,{useState} from 'react'
import Menucard from './Menucard'


export const Restaurent = () => {
    const [modal, setmodal] = useState('ashish kumar')
    const updatemodal=(x)=>{
        setmodal(x)
    }
    return (
        <div>
            <Menucard modal={updatemodal}/>
             <h1 >{modal}</h1>
        </div>
    )
}

export default Restaurent;