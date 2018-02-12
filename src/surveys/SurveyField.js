import React from "react";

// export default props =>{
export default ({input , label, meta:{error,touched}  }) =>{
// console.log(props.input); // This is replaced by ({input})


 return(
         <div className="form-group">
             <label>{label} </label>
               <input className="form-control" {...input}  />

               <div className="text-danger">
                    {touched && error}
                </div>

        </div>
    )
}