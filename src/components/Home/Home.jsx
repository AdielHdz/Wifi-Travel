import style from "./Home.module.css";

import Carousell from "../Carousel/Carousel";
import phones from "../../data"


const Home = () => {
    return (
        <div className={style.home}>
        
       
        
        <h1 className={style.title}>Seguro. Flexible. WiFi fiable.</h1>
        <div className={style.products} >
        {
            phones.map(phone => <Carousell key={phone.modelo} año={phone.año} id={phone.id} marca={phone.marca} img={phone.img} modelo={phone.modelo} precio={phone.precio} />)
        }
        </div>
      
        
        
         </div>
    )
};


export default Home;