import React from 'react'
import './home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
           <div className="home__container">
               <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg" className="home__image"/>
                   
                   <div className="home__row">
                   <Product 
                   id="8988989"
                   title='The Lean Startp:How constant InnovationCreates Radically Successful Buisness Paperback'
                   price={29.99}
                   image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UL480_FMwebp_QL65_.jpg"
                   rating={5}/>
                   <Product 
                   id="8988988"
                   title='Procus ONE Virtual Reality Headset 40MM Lenses -For IOS and Android – (Black)'
                   price={1,998}
                   image="https://m.media-amazon.com/images/I/6176A7LJyTL._AC_UL480_FMwebp_QL65_.jpg"
                   rating={4}/>
                   </div>
                   <div className="home__row">
                   <Product 
                   id="8988987"
                   title='Sricam SP Series Wireless HD IP WiFi CCTV [Watch Live Demo Right Now] Indoor Security Camera (Support Upto 128 GB SD Card) (White Color)'
                   price={2,292}
                   image="https://m.media-amazon.com/images/I/31Akjj0FVcL._AC_UL480_FMwebp_QL65_.jpg"
                   rating={4}/>
                  <Product 
                   id="8988986"
                   title='Withings Activité Steel - Activity & Sleep-Tracking Watch'
                   price={8,203}
                   image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UL480_FMwebp_QL65_.jpg"
                   rating={4}/>
                   <Product 
                   id="8988985"
                   title='LCARE Watch Activity Tracker, Heart Rate Monitor, Smart Activity Tracker, Alert for Android and iPhone (Red)'
                   price={8,203}
                   image="https://m.media-amazon.com/images/I/714QJogJ56L._AC_UL480_FMwebp_QL65_.jpg"
                   rating={5}/>
                   </div>
                   <div className="home__row">
                   <Product 
                   id="8988984"
                   title='Fitbit Alta HR (Black)'
                   price={4,568}
                   image="https://m.media-amazon.com/images/I/61vyVXBk9sL._AC_UL480_FMwebp_QL65_.jpg"
                   rating={4}/>
                   </div>

           </div>
        </div>
    )
}

export default Home 
