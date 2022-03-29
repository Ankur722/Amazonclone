import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg" alt="" />

        <div className="home__row">
          <Product
          id="1" 
          title="Logitech G213 Prodigy Gaming Keyboard, LIGHTSYNC RGB Backlit Keys, Spill-Resistant, Customizable Keys, Dedicated Multi-Media Keys – Black" 
          price={49.99} 
          image="https://m.media-amazon.com/images/I/61Nt8geXzWL._AC_UY327_FMwebp_QL65_.jpg" 
          rating={4} />
          <Product
          id="2" 
          title="Logitech G502 Lightspeed Wireless Gaming Mouse with Hero 25K Sensor, PowerPlay Compatible, Tunable Weights and Lightsync RGB - Black" 
          price={119.99} 
          image="https://m.media-amazon.com/images/I/718b9wK3eaL._AC_SX679_.jpg" 
          rating={5} />
        </div>

        <div className="home__row">
        <Product
          id="3" 
          title="Logitech G435 LIGHTSPEED and Bluetooth Wireless Gaming Headset - Lightweight over-ear headphones, built-in mics, 18h battery, compatible with Dolby Atmos, PC, PS4, PS5, Nintendo Switch, Mobile - White" 
          price={59.99} 
          image="https://m.media-amazon.com/images/I/81Kh1wq4YOL._AC_SX466_.jpg" 
          rating={5} />
          <Product
          id="4" 
          title="Apple iPhone 13 (128GB) - Midnight" 
          price={999.99} 
          image="https://m.media-amazon.com/images/I/61VuVU94RnL._SX679_.jpg" 
          rating={4} />
          <Product
          id="5" 
          title="Lenovo Legion Tower 5 Gaming Desktop (AMD Ryzen 7 5700G/16GB/512GB SSD/Windows11/NVIDIA RTX 3060 12GB GDDR6 Graphics/Legion ColdFront 2.0 Cooling/WiFi 6/Bluetooth 5.1/USB Keyboard & Mouse), 90RC00M0IN" 
          price={1199.99} 
          image="https://m.media-amazon.com/images/I/71OxPxfeSXL._SX679_.jpg" 
          rating={4} />
        </div>

        <div className="home__row">
        <Product
          id="6" 
          title="Samsung g9 odyssey 123.9cm Gaming Monitor with 32:9 aspect ratio display and 240Hz refresh rate" 
          price={1299.99} 
          image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SY450_.jpg" 
          rating={5} />
        </div>
      </div>

    </div>
  )
}

export default Home