import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import "./index.css"


const imgUrl = "https://scontent.fclj3-1.fna.fbcdn.net/v/t1.0-9/106507877_1489722797894789_5522299099264087342_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=9k1V2K5U_8YAX8d5HkI&_nc_ht=scontent.fclj3-1.fna&oh=537b56ebf05c7670c386aee01c956fba&oe=5F9B1A12";
const user = {
  firstName : "Carina",
  lastName : "Duca",
  ocupation : "Happy Student",
  school: "Colegiul Tehnic Ana Aslan",
  fb : <a href = "https://www.facebook.com/carina.duca.9">Facebook</a>,
  insta : <a href="https://www.instagram.com/?hl=ro">Instagram</a>
};
ReactDOM.render(
  <div className = "profile">
<div>
  <img src = {imgUrl} alt ="Profile"/>
</div>
<div>
  <h2 id="info1"> {user.ocupation}</h2>
</div>
<div > 
<h3 id="info2">{user.school}</h3>
</div>
<div>
  <button id="fb">{user.fb}</button>
  <button id="insta">{user.insta}</button>
</div>
<div id="contact">
  <p>Contact</p>
</div>


  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
