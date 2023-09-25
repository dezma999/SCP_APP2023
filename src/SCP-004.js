import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

  function SCP004() {
      return (
        <div className="card">
        <h1>Object Class: Euclid</h1>
        <div className="card-body">
        <h3 className="card-title">Item:SCP-004 </h3>
        <h3 className="card-text">Special Containment Procedures:</h3>
        <p className="card-text">When handling items SCP-004-2 through SCP-004-13, proper procedure is vital.4 security personnel. Under no circumstances should any other component of SCP-004 be taken through SCP-004-1. The effects of doing so are as yet unknown,and the current cost of experimentation makes further research impractical.</p>
        
        <p className='Images'/>
        <h1>SCP-004</h1>
        <img src="scp_images/SCP004_door.jpg" alt="-004" />
           
        <Link to="/"> {/* Link to the home page */}
        <button className="btn btn-primary">Learn More</button> 
        </Link>  
       </div>
    </div>
  );
}

export default SCP004;