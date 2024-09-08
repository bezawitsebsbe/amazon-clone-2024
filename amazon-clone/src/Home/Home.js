import React from 'react'
import './Home.css';

import Product from '../Product/product';

const Home = () => {
    return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image'
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
/>
            <div className='home__row'>
            <Product 
            id="12321341"
            title="JBL TUNE 770NC - Adaptive Noise Cancelling with Smart Ambient Wireless Over-Ear Headphones, Bluetooth 5.3, Up to 70H battery life with speed charge, Lightweight, comfortable & foldable design (Blue)"
            price={99.95}
            rating={5}
            image="https://m.media-amazon.com/images/I/61turRGN1cL._AC_UY327_FMwebp_QL65_.jpg"
            /> 
            <Product
            id="14362789"
            title="Amazon Fire Max 11, powerful octa-core tablet with brilliant display, 14-hour battery life, and lightweight durable aluminum design, 64 GB, Gray"
            price={183.9}
            rating={4}
            image="https://m.media-amazon.com/images/I/51gj5oQXbnL._AC_UY327_FMwebp_QL65_.jpg"
            />
            </div>
            
            <div className='home__row'>
            <Product
            id="14572393"
            title="Choose to Soar: Navigating Disruption In Business And Life "
            price={20.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/616EoURRVmL._SY522_.jpg"
            /> 
            <Product
            id="97473207"
            title="Playstation Sony 4, 500GB Slim System [CUH-2215AB01], Black, 3003347"
            price={105.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY327_FMwebp_QL65_.jpg"
            />
            <Product
            id="25378921"
            title="JBL TUNE 770NC - Adaptive Noise Cancelling with Smart Ambient Wireless Over-Ear Headphones, Bluetooth 5.3, Up to 70H battery life with speed charge, Lightweight, comfortable & foldable design (Blue)"
            price={99.95}
            rating={5}
            image="https://m.media-amazon.com/images/I/71kbRVr8YfL._AC_UL480_FMwebp_QL65_.jpg"
            />
            </div>
            
            <div className='home__row'>
            <Product
            id="24333619"
            title="SAMSUNG 32-inch Class LED Smart FHD TV 1080P (UN32N5300AFXZA, 2018 Model), Black"
            price={176.51}
            rating={4}
            image="https://m.media-amazon.com/images/I/91snjIt0nUL._AC_UY327_FMwebp_QL65_.jpg"
            /> 

            </div>
             <div className='home__row'>
            <Product
            id="14572393"
            title="It Ends with Us: A Novel "
            price={18.47}
            rating={5}
            image="https://m.media-amazon.com/images/I/51X4eBEqyqL._SY445_SX342_.jpg"
            /> 
            <Product
            id="97473333"
            title="Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens | Built-in Wi-Fi | 24.1 MP CMOS Sensor | DIGIC 4+ Image Processor and Full HD Videos"
            price={479.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71suGwfhN1L._AC_UY327_FMwebp_QL65_.jpg"
            />
            <Product
            id="22278921"
            title="Apple iPhone 13 Pro Max, 128GB, Graphite - T-Mobile (Renewed)"
            price={476.93}
            rating={4}
            image="https://m.media-amazon.com/images/I/61iVuXR3dhL._AC_SX679_.jpg"
            />
            </div>
        </div>
    </div>
    )
}

export default Home
