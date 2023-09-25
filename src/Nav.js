import {Link} from 'react-router-dom';
import './nav.css'; //Import css file

function Nav({Data}) {
    
    return(
        <nav className="navbar">
        <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbar">
        <div className="navbar-nav">
            
        <Link to="/SCP002">
        <a className="nav-link" href="#">SCP-002</a> 
        </Link>
        <Link to="/SCP003">
        <a className="nav-link" href="#">SCP-003</a>
        </Link>
        <Link to="/SCP004">
        <a className="nav-link" href="#">SCP-004</a>
        </Link>
        <Link to="/SCP005">
        <a className="nav-link" href="#">SCP-005</a>
        </Link>
        <Link to="/SCP006">
        <a className="nav-link" href="#">SCP-006</a>
        </Link>
        </div>
        </div>
        </div>
        </nav>
    );

}

export default Nav;