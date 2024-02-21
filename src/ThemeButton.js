import React from 'react'

function onChangeBtn(e){
    console.log(e);
}

function ThemeBtn(){
    return (<div> 
        <input 
        type =  "button " className='btn btn-primary'  placeholder='Switch  theme color' onClick = {onChangeBtn} />
        
         </div>)
}

export default ThemeBtn