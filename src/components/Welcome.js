import React,{} from 'react';
import {Link} from "react-router-dom";



const Welcome=()=>{
    
    return (
      
        <section id="accueil">
<div class="triangle_rose"></div>
<div class="triangle_vert"></div>
  <header>
    <h5 > WELCOME TO TODO_APP BY TRAMTRAM</h5>
    <div>
    Let's work with our TodoApp to create a Todo List of specific tasks to get the job done quickly and efficiently!
    </div>
    <Link to="/home" className='home'>
                <button className='menu_welcome'>HOME</button>
            </Link>
            <Link to="/about" className='about'>
                <button className='menu_welcome'>READ ME</button>
            </Link>
  </header>
</section>
    );
  }
export default Welcome


