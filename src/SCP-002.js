import React from 'react';
import {Link} from 'react-router-dom';

function SCP002(){

return (
      <div className="card">
        <h1>Object Class: Euclid</h1>
        <div className="card-body">
        <h3 className="card-title">Item:SCP-002</h3>
        <h4 className="card-text">Special Containment Procedures:</h4>
        <p className="card-text">
          SCP-002 is to remain connected to a suitable power supply at all times, to keep it in what appears to be a recharging mode. In case of electrical outage, the emergency barrier betweenTeams including a minimum of two (2) members are required within 20 meters of SCP-002 or its containment area. Personnel should maintain physical contact with one another at all times.No personnel below Level 3 are permitted within SCP-002. This requirement may be waived via written authorization from two (2) off-site Level 4 administrators Description:SCP-002 resembles a tumorous, fleshy growth with a volume of roughly 60 m³ (or 2000 ft³). An iron valve hatch on one side leads to its interior, which appears to be a standard low-rent.Refer to the Mulhausen Report [cross-ref:document00.023.603] for details related to object's discovery.</p>
        <h2>SCP-002</h2>
          <img src="scp_images/SCP002.jpg" alt="SCP-002" />

        <Link to="/"> 
          <button className="btn btn-primary">Learn More</button>  
        </Link>  
        </div>
      </div>
  );
}
  
  export default SCP002;