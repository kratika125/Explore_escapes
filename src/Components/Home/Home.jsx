import React, {useEffect} from 'react'
import './home.css'
import { TbAppsFilled } from "react-icons/tb";
import { IoList } from "react-icons/io5";
import { HiFilter } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { FiFacebook } from "react-icons/fi";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiTripadvisor } from "react-icons/si";
 import video from '../../Assets/182082-867762198_small.mp4'
 import Aos from 'aos'
 import 'aos/dist/aos.css'
const Home=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
      <section className="home ">
   <div className="overlay"></div>
   <video src={video} muted autoPlay loop type="182082-867762198_small/mp4"></video>
   <div className="homeContent container">
    <div className="textDiv">
        <span data-aos="fade-up" className="smallText">
            Our Packages
        </span>
        <h1  data-aos="fade-up" className="homeTitle">
            Search your Holiday
        </h1>
    </div>
<div data-aos="fade-up" className="cardDiv grid">
<div className="destinationInput">
    <label htmlFor="city" className="city">
        Search your destination:
    </label>
    <div className="input flex">
        <input type="text" placeholder='Enter name here...'/>
        <GrLocation className="icon" />

    </div>
</div>
<div className="dateInput">
    <label htmlFor="date" className="city">
        Select your date:
    </label>
    <div className="input flex">
        <input type="date" />
       

    </div>
</div>
<div className="priceInput">
    <div className="label_total flex">
        <label htmlFor="price">Maximum price:</label>
        <h3 className='total'>$5000</h3>
    </div>
    <div className="input flex">
        <input type="range" max="5000" min="1000" />
    </div>
</div>
<div className="searchOptions flex">
<HiFilter className="icon"/>
<span>MORE FILTERS</span>
</div>
</div>
<div data-aos="fade-up" className="homeFooterIcons flex">
    <div className="rightIcons">
    <FiFacebook className="icon"/>
    <FaSquareInstagram className="icon" />
    <SiTripadvisor className="icon" />
    </div>
    <div className="leftIcons">
    <IoList className="icon"/>
    <TbAppsFilled className="icon"/>
        </div>
</div>
   </div>
        </section>

    )
}
export default Home