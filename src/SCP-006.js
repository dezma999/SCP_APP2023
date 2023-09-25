import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

  function SCP006() {
    return (
        <div className="card">
        <h1>Object Class: Safe</h1>
        < div className="card-body">
        <h3 className="card-title">Item:SCP-006</h3>
        <h3 className="card-text">Special Containment Procedures:</h3>
        <p className="card-text">Whereas the nature of SCP-006 does not warrant any extensive containment, a certain level of secrecy is necessary regarding the object's existence and properties, for obvious reasons. The following procedures are required not for personnel safety, but to deny or hide knowledge of SCP-006's effects from the personnel who interact with it. All personnel interacting with SCP-006 in any physical way are required to wear modified Class VI BNC suits. Before personnel are allowed to perform procedures, they must be briefed with Material SCP-006B or SCP-006C. SCP-006A Briefing is the correct one and is restricted to only those with O5 clearance. To ensure personnel are wearing suits properly, they are to be submerged into a pool of water. Any air bubbles spotted signify a leak in the suit. Procedures with SCP-006 are to be carried out under extreme surveillance. In case of contact with SCP-006, the commander in charge will announce Procedure 006-Xi-12, which the personnel have been briefed to believe to mean high toxicity is present and they must evacuate.</p>
        
        <p className='Images'/>
        <h1>SCP-006</h1>
        <img src="scp_images/SCP006.jpg" alt="-006" />
        
        <Link to="/"> {/* Link to the home page */}
        <button className="btn btn-primary">Learn More</button> 
        </Link>  
       </div>
    </div>
  );
  
}

export default SCP006;