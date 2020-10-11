import React from 'react'
import Fb from './fb.png'
import TwT from './twitter.png'
import Insta from './insta.png'
function Address() {
    function SayHi(){
        return (
            alert("Thank you for Contacting Me")
        )
    }
    return (
        <div className="contactMe">
        <p>Beginner FulStack Js developer</p>
            <a href="https://www.facebook.com/tghostprod/"><img src={Fb} width="50" height="50" alt=""/></a>
            <a href="https://twitter.com/waelharrath"><img src={TwT} width="50" height="50" alt=""/></a>
            <a href="https://www.instagram.com/wael_harrath/?hl=fr"><img src={Insta} width="50" height="50" alt=""/></a>
            <button onClick={SayHi}>Contact</button>
            </div>
    )
}

export default Address
