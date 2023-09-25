import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

function SCP005(){
    return(
      <div className="card">
      <h1>Object Class: Safe</h1>
      <div className="card-body">
      <h3 className="card-title">Item:SCP-005</h3>
      <h3 className="card-text">Special Containment Procedures:</h3>
      <p className="card-text">SCP-005 poses no immediate risk in any direct sense. Even so, its unique functions require special measures be taken to restrict access and manipulation of the object. Approval of at least one (1) Level 4 personnel is required for the removal of the object from its containment area.In appearance, SCP-005 resembles an ornate key, displaying the characteristics of a typical mass produced key used in the 1920s. The key was discovered when a civilian used it to infiltrate a high security facility. SCP-005 seems to have the unique ability to open any and all forms of lock (See Appendix A), be they mechanical or digital, with relative ease. The origin of this ability has yet to be determined. Additional Notes.SCP-005 may be used as a replacement for lost security passes, but only under the supervision of at least one (1) Level 4 personnel. SCP-005 may not be used for vending machine repairs, opening lockers, or for any personnel's spare home key. Removal of the object from the compound will result in immediate termination.</p>
      <Link to="/"> {/* Link to the home page */}
      <button className="btn btn-primary">Learn More</button> 
      </Link>  
      </div>
    </div>
  );
}

export default SCP005;