import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Nav from './Nav';
import Data from './Data.json';
import SCP002 from './SCP-002';
import SCP003 from './SCP-003';
import SCP004 from './SCP-004';
import SCP005 from './SCP-005';
import SCP006 from './SCP-006';
import './nav.css';

function App (){
    return(
      <>
        <Router>
          <Nav Data={Data} />
          <Routes>
            <Route path="/SCP002" element={<SCP002 />} />
            <Route path="/SCP003" element={<SCP003 />} />
            <Route path="/SCP004" element={<SCP004 />} />
            <Route path="/SCP005" element={<SCP005 />} />
            <Route path="/SCP006" element={<SCP006 />} />
          </Routes>
        </Router>     
      </>
  );

}

export default App;

