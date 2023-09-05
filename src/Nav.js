import {Link} from 'react-router-dom';
import './Style.css'; //Import CSS file

function Nav({Data}) {
    
    return(
        <nav className="navbar">
        <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
        <div className="navbar-nav">
        <Link to="/">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        </Link>
        <Link to="/SCP002">
        <a className="nav-link" href="#">SCP002</a> 
        </Link>
        <Link to="/SCP003">
        <a className="nav-link" href="#">SCP003</a>
        </Link>
        <Link to="/SCP004">
        <a className="nav-link" href="#">SCP004</a>
        </Link>
        <Link to="/SCP005">
        <a className="nav-link" href="#">SCP005</a>
        </Link>
        <Link to="/SCP006">
        <a className="nav-link" href="#">SCP006</a>
        </Link>
        </div>
        </div>
        </div>
        </nav>
    );

}

export default Nav;