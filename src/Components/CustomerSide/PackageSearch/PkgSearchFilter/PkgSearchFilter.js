import React from 'react';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const PkgSearchFilter = ({head_text, filters_head}) => {
    return (
       <div className="container-fluid">
           <div className="row">
               <div className="col">
                   <h5 style={{color: "gray", textAlign: "left"}}>{filters_head}</h5>
               </div>
           </div>
           <div className="row">
               <div className="col">
                  <input className="dropdown-toggle" style={{width: "50%"}} type="text" placeholder={head_text}/>
               </div>
           </div>

           <div className="row">
               <div style={{marginTop: "15px", justifyContent: "left"}} className="col d-flex">
                 <RadioButtonUncheckedIcon style={{color: "gray", fontSize: "16px", marginRight: "5px"}}/> 
                 <p style={{color: "black", fontSize: "12px"}}>Name</p>
               </div>
           </div>

           <div className="row">
               <div style={{marginTop: "15px", justifyContent: "left"}} className="col d-flex">
                 <RadioButtonUncheckedIcon style={{color: "gray", fontSize: "16px", marginRight: "5px"}}/> 
                 <p style={{color: "black", fontSize: "12px"}}>Name</p>
               </div>
           </div>

           <div className="row">
               <div style={{marginTop: "15px", justifyContent: "left"}} className="col d-flex">
                 <RadioButtonUncheckedIcon style={{color: "gray", fontSize: "16px", marginRight: "5px"}}/> 
                 <p style={{color: "black", fontSize: "12px"}}>Name</p>
               </div>
           </div>

           <div className="row">
               <div style={{marginTop: "15px", justifyContent: "left"}} className="col d-flex">
                 <RadioButtonUncheckedIcon style={{color: "gray", fontSize: "16px", marginRight: "5px"}}/> 
                 <p style={{color: "black", fontSize: "12px"}}>Name</p>
               </div>
           </div>
           
       </div>
    )
}

export default PkgSearchFilter;
