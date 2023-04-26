import { useParams } from "react-router-dom";
import style from "./PhoneDetails.module.css"
import data from "../../data";
import BuyButton from "../buttons/buyButton/buyButton";
import AddToCarButton from "../buttons/addToCarButton/addToCarButton";
const PhoneDetails = () => {
    const cel = useParams()

    const { img, description, marca, modelo, año, precio } = data.find(phone => phone.modelo === cel.modelo && phone.marca === cel.marca)


    return (
        <div className={style.phoneView}>

            <div className={style.boxImg}>
                <img src={img} alt={modelo} className={style.img}/>
            </div>
            <div className={style.boxTexts}>
                <h1 className={style.marcaModelo}>{marca} {modelo}</h1>
                <span className={style.año}>Año de lanzamiento: {año}</span>
                
                <p className={style.description}>{description}</p>

                <span className={style.precio}>Precio: {precio}</span>
                <div className={style.buttons}>
                    <BuyButton />
                    <AddToCarButton details={{modelo, precio, marca, img, año}} />
                </div>
                
            </div>
            
        </div>
    )
}

export default PhoneDetails;