import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import './Loader.css'

export const Loader = () => {
    return (
        <div className="loader-container">
           <ClipLoader
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={0.7}
        // className="loader"
      /> 
        </div>
        
    )
}


export default Loader;