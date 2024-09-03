import React from 'react'
import './Hero.css'
import img1 from '../assets/img1.png'
import img2 from '../assets/grid1.jpg'
import mom from '../assets/mom.png'
import baby1 from '../assets/baby1.png'
import baby2 from '../assets/baby2.png'
import toy from '../assets/toy.png'
const Hero = () => {
  return (
    <div className="main">
        <div className="offer">
            <p>TRY RENTING WITH 50% OFF YOUR FIRST 2 MONTHS 💚 EASILY SAVE MONEY WHILST CREATING A SUSTAINABLE WARDROBE 🌍</p>
        </div>
        <div className="hero">
          <nav className='nav'>
              <div className="logo">
                <img src={img1} alt="" />
                <h3>TinyClo</h3>
              </div>
              <div className="links">
                <ul>
                  <li><a href="">Home</a></li>
                  <li><a href="">Why Rent?</a></li>
                  <li><a href="">Clean Out Closet</a></li>
                  <li><a href="">About Us</a></li>
                  <li><a href="">Store</a></li>
                  <li><a href="">Contact Us</a></li>
                </ul>
              </div>
              <div className="btn-div">
                <button className='btn'>Login/Sign Up</button>
              </div>
          </nav>
          <div className="hero-sec">
          <div className="left">
            <h2><span>BABIES</span> GROW FAST</h2>
            <h4>Simplify Your Life with Our </h4>
            <button className="btn btn1">
            TinyClo Subscription
            </button>
            <div className="btns">
              <button className="btn btn2">How it works?</button>
              <button className="btn btn3">Start Membership</button>
            </div>
            
          </div>
          <div className="right">
           
            <div className='img2'>
              <img src={img2} alt="" />
              <div className="ellipse">

              </div>
              <img id='mom' src={mom} alt="" />
            
              </div>
            
            
            
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <p>Starting from 100INR</p>
            <div className="box">
              <img src={baby1} alt="" />
              <div className="info">
                <h4>Kids Clothing</h4>
                <h5>Age(0-6)</h5>
                <button className='btn'>Explore </button>
              </div>
            </div>
          </div>
          <div className="card">
            <p>Starting from 500INR</p>
            <div className="box box2">
              <img src={baby2} alt="" />
              <div className="info">
                <h4>Kids Clothing</h4>
                <h5>Age(0-6)</h5>
                <button className='btn'>Explore </button>
              </div>
            </div>
          </div>
          <div className="card">
            <p>Starting from 100INR</p>
            <div className="box box3">
              <img src={toy} alt="" />
              <div className="info">
                <h4>Kids Clothing</h4>
                <h5>Age(0-6)</h5>
                <button className='btn'>Explore </button>
              </div>
            </div>
          </div>
        </div>
        </div>
        
    </div>
  )
}

export default Hero