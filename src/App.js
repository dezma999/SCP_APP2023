import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Nav from './Nav';
import Data from './Data.json';
import SCP002 from './SCP002';
import SCP003 from './SCP003';
import SCP004 from './SCP004';
import SCP005 from './SCP005';
import SCP006 from './SCP006';
import './Style.css';

function App (){
    return(
      <>
        <Router>
          <Nav Data={Data} />
          <Routes>
            <Route path="/" element={<Home/>}/>
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

export function Home()
{
  return(
  <h1>SCP Home Page</h1>
  
  );
}

export default App;












