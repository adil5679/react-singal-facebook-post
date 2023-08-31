import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReplyIcon from '@mui/icons-material/Reply';
import myimg from './adilmalik.jpg'

import {HandThumbsUp, } from 'react-bootstrap-icons';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import './index.css';


   function App(props){
 
    return(
    

      <div className='main'>

    

          <div className='mid'>
            <div className="post">
              <div className="postHead">
                <img src={props.profileImg} width={65} height={65} alt="" />
                <div>
                  <h1> {props.name} </h1>
                  <div className="date"> {props.date}</div>
                </div>
              </div>

              <p> {props.text}</p>

              <img className="postImg" src={props.profileImg} alt="" />
              <div className='likes'>
              <div>
                <p className='li'><ThumbUpAltIcon fontSize='small'/></p>
                <p>1k</p>
                </div>
               
                <div className='com'>
                <p className='li'><ChatBubbleIcon fontSize='small'/></p>
                <p>100</p>
                <p className='li'><ReplyIcon fontSize='small' /></p>
                <p>3</p>
                </div>
              </div>
              <div className="postFooter">
                <div className="button">
                  <HandThumbsUp />
                  Like
                </div>
                <div className="button">
                  <ChatBubbleOutlineIcon /> Comment
                </div>
                <div className="button">
                  <ReplyIcon/> Share
                </div>
              </div>
            </div>
          </div>

      

        </div>

)
}


// ReactDOM.render(<op />,document.querySelector('#root'));
 

  const root = ReactDOM.createRoot(document.querySelector('#root'));
 
root.render(
  <div>
    
<App

  profileImg={myimg}
  name="Adil Malik"
  date="3-Jan-2013 4:30 pm"
  img="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/353004991_634970768655599_1562410547950250051_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=iP5CdkXBKeQAX9MAERQ&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfCABLXGN6tiaYzYUK_yrCcQnWdrn0KxbFjCjy0ZTlGWSw&oe=64EDD6B0"
  text="What’s going on here? Welle the keys are prop names and the values are, well, the values of those props."
/>

<App

  profileImg={myimg}
  name="Adil Malik"
  date="3-Jan-2013 4:30 pm"
  img="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/353004991_634970768655599_1562410547950250051_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=iP5CdkXBKeQAX9MAERQ&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfCABLXGN6tiaYzYUK_yrCcQnWdrn0KxbFjCjy0ZTlGWSw&oe=64EDD6B0"
  text="believe in your self."
/>
<App

  profileImg={myimg}
  name="Adil Malik"
  date="3-Jan-2013 4:30 pm"
  img="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/353004991_634970768655599_1562410547950250051_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=iP5CdkXBKeQAX9MAERQ&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfCABLXGN6tiaYzYUK_yrCcQnWdrn0KxbFjCjy0ZTlGWSw&oe=64EDD6B0"
  text="What’s going on hereprops."
/>
<App

  profileImg={myimg}
  name="Adil Malik"
  date="3-Jan-2013 4:30 pm"
  img="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/353004991_634970768655599_1562410547950250051_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=iP5CdkXBKeQAX9MAERQ&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfCABLXGN6tiaYzYUK_yrCcQnWdrn0KxbFjCjy0ZTlGWSw&oe=64EDD6B0"
  text="What’s going on here? Wellethe values of those props."
/>
</div>
)





reportWebVitals();