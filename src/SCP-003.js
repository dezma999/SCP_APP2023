import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

function SCP003(){
  return(
    <div className="card">
       <h1>Object Class: Euclid</h1>
       <div className="card-body">
        <h3 className="card-title">Item:SCP-003</h3>
        <h3 className="card-text">Special Containment Procedures:</h3>
        <p className="card-text">SCP-003 is to be maintained at a constant temperature of no less than 35°C and ideally kept above 100°C. No living multicellular organisms of Category IV or higher complexity may be allowed to come into contact with SCP-003. In event of total power failure, if SCP-003-1 begins to increase its mass, assigned personnel must engage in skin contact with SCP-003-1. Ideally, personnel may use their body heat to return SCP-003-1 to above the critical temperature; however, skin contact must be maintained even in event of SCP-003 reaching activation temperature, lasting at minimum until SCP-003-1 advances fully to its second growth stage.Personnel who enter SCP-003's containment area must first be examined for body parasites of Category IV or higher complexity, and sterilized if such organisms are present. All personnel who have come in physical contact with SCP-003-1 are to immediately report for sterilization afterwards.SCP-003-1 must not be removed from SCP-003-2 except in case of emergency procedures detailed above. Any significant change in SCP-003-2's rune activity (including pattern, frequency, or color) should be reported within three (3) hours of occurrence. Cessation of rune activity must be reported immediately. SCP-003-2 must be supplied with power via the source designated Generator 003-IX at all times.</p>
        <Link to="/"> {/* Link to the home page */}
        <button className="btn btn-primary">Learn More</button>  
        </Link>  
       </div>
    </div>
  );
}

export default SCP003;