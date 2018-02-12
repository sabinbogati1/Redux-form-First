import React from "react";

// export default props =>{
export default ({input , label  }) =>{
// console.log(props.input); // This is replaced by ({input})

 return(
         <div>
             <label>{label} </label>
               <input {...input}  />

        </div>
    )
}