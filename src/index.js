import React from 'react';
import ReactDom from 'react-dom';
import './style.css'


function App(){
    return<><div className='nav'>
    <div className='menu'>
        <ul>
            <li style={{fontSize:"22px", fontWeight:"bolder"}}><a href='#'>snap</a></li>
            <li><a href='#'>Features</a>
                <ul>
                    <li><a href='#'>Legal Person</a></li>
                    <li><a href='#'>Common Seal</a></li>
                    <li><a href='#'>Limite Liability</a></li>
                </ul>
            </li>
            <li><a href='#'>Company</a>
            <ul>
                    <li><a href='#'>Royal Chartered</a></li>
                    <li><a href='#'>Registered</a></li>
                </ul>    
            </li>
            <li><a href='#'>Careers</a></li>
            <li><a href='#'>About</a></li>
            <li style={{float:"right", textAlign:"center"}}><button>Register</button></li>
            <li style={{float:"right", paddingRight:"20px"}}><a href='#'>Login</a></li>
        </ul>
    </div>
    </div>
        
        <div> 
            <img src='work.jpg'></img>
        </div>
        <div>
            <h1>Make<br></br>remote work</h1>
            <p>Get your team in sync, no matter your location <br></br>
            Streamline processes, create team rituals, and <br></br>
            watch productivity soar</p>
            <button className='btn'>Learn more</button>

        </div>
        
    
 </>
    
}
ReactDom.render(<App/>,document.getElementById("root"));