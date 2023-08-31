import { Facebook, List, Search, House, PlayBtn, Shop, PersonFill, Messenger, BellFill } from 'react-bootstrap-icons';
import myimg from './adilmalik.jpg'
import Diversity3Icon from '@mui/icons-material/Diversity3';
import './navbar.css';

function Op(props) {
    return (<div>
  
  
      <header className="head">
        <div className='logo-inp'>
          <i className='fb'> <Facebook color="blue" size={40} /> </i>
          <div className="inp">
            <input type="search" placeholder='Search Facebook' name="" id="" />
            <Search color='black' size={24} />
          </div>
        </div>
  
  
        <div className="mainBtn">
  
          <div className="house">
            <i> <House size={27} /> </i>
          </div>
  
          <div className="house">
            <i> <PersonFill size={27} /> </i>
          </div>
  
          <div className="house">
            <i> <PlayBtn size={27} /> </i>
          </div>
  
          <div className="house">
            <i> <Shop size={27} /> </i>
          </div>
  
          <div className="house">
            <i> <Diversity3Icon size={29} /> </i>
          </div>
  
        </div>
  
  
        <div className="profile">
          <div className="pro-ic">
            <i> <List size={23} /> </i>
          </div>
  
  
          <div className="pro-ic">
            <i> <Messenger size={23} /> </i>
          </div>
  
  
          <div className="pro-ic">
            <i> <BellFill size={23} /> </i>
          </div>
  
          <div className="pro-ic">
            <img src={myimg} alt="" />
          </div>
  
        </div>
      </header>
  
      </div>
  
    )
  }

  
export default Op;