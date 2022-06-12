import React from "react";
import './subscribebutton.css'

function Subuscribebutton({children,...restProps}){
    return(
         <>
          <div className="subscribe-button">
              <a  href="./signup" {...restProps}>
                  {children} 
              </a>
          </div>
         </>
    )
}

export default Subuscribebutton;