import React, {useEffect} from 'react'
import './main.css'
import { LuClipboardEdit } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import img from '../../Assets/pexels-julia-volk-5205070.jpg'
import img2 from '../../Assets/pexels-david-geib-1265112-3220846.jpg'
 import img3 from '../../Assets/pexels-samson-bush-1387215-2678418.jpg'
 import img4 from '../../Assets/pexels-robertovivancos-2190283.jpg'
 import img5 from '../../Assets/pexels-freestockpro-2166553.jpg'
 import img6 from '../../Assets/pexels-robertovivancos-2190293.jpg'
 import img7 from '../../Assets/pexels-jaime-reimer-1376930-2662116.jpg'
 import img8 from '../../Assets/pexels-pierre-blache-651604-3105066.jpg'
 import img10 from '../../Assets/pexels-julius-silver-240301-753337.jpg'
 import Aos from 'aos'
 import 'aos/dist/aos.css'

const Data=[{id:1,imgSrc:img,destTitle:"Dr",location:"Russia",grade:"data-warehouse",fees:"Ruble",description:"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."},
    {id:2,imgSrc:img2,destTitle:"Rev",location:"Indonesia",grade:"Profound",fees:"Rupiah",description:"Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."},
    {id:3,imgSrc:img3,destTitle:"Ms",location:"Indonesia",grade:"responsive",fees:"Rupiah",description:"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."},
    {id:4,imgSrc:img4,destTitle:"Mr",location:"China",grade:"Right-sized",fees:"Yuan Renminbi",description:"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."},
    {id:5,imgSrc:img5,destTitle:"Dr",location:"Ukraine",grade:"asynchronous",fees:"Hryvnia",description:"Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."},
    {id:6,imgSrc:img6,destTitle:"Mr",location:"France",grade:"firmware",fees:"Euro",description:"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."},
    {id:7,imgSrc:img7,destTitle:"Ms",location:"China",grade:"concept",fees:"Yuan Renminbi",description:"Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo."},
    {id:8,imgSrc:img8,destTitle:"Ms",location:"Indonesia",grade:"Optional",fees:"Rupiah",description:"Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."},
    {id:10,imgSrc:img10,destTitle:"Honorable",location:"Greece",grade:"open architecture",fees:"Euro",description:"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."}]
const Main=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
       <section className='main container section '>
        <div className="secTitle">
            <h3 data-aos="fade-right" className="title">
                Most visited destinations
            </h3>
        </div>
        <div className="secContent grid">
       {
         Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
            return(
                <div key={id} data-aos="fade-up"
                className="singleDestination">
                    <div className="imageDiv">
<img src={imgSrc} alt={destTitle}/>
                    </div>
                    <div className="cardInfo">
                        <h4 className="destTitle">{destTitle}</h4>
                        <span className="continent flex">
                        <HiOutlineLocationMarker className="icon" />
                        <span className="name">{location}</span>
                        </span>
                        <div className="fees flex">
                            <div className="grade">
                               <span>{grade}<small>+1</small></span> 
                            </div>
                            <div className="price">
                                <h5>{fees}</h5>
                            </div>
                        </div>
                        <div className="desc">
                            <p>{description}</p>

                        </div>
                        <button className="btn flex ">
                          DETAILS <LuClipboardEdit className='icon'/>
                        </button>
                    </div>
                    </div>
            )
         })
       }
        </div>
       </section>
    )
}
export default Main