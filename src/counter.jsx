
import React from 'react'
import  {useState} from "react"


function Counter({ initialCount }){



const[count, newCount] = useState(initialCount)


const increment = () => {
// an updater function
    newCount(c => c + 1)
}
const reset = () => {

    newCount(0)
}
const decrement = () => {
 if(count === 0){

    return;
 } newCount(c=> c - 1)
}

const swutchsigns = () =>{
    newCount(c=> c * -1 )
}


    return(
    
   <div >
    <p  data-testid = "count">{count}</p>
<button  onClick={decrement} > Decrement  </button>        
<button  onClick={reset} > reset  </button>        
<button  onClick={increment} > increment  </button>        
<button onClick={ swutchsigns}> Switch signs    </button>         
              
              
              
              </div>)
}



export default Counter



