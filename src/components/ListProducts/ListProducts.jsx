import { Link } from "react-router-dom";
import style from "./ListProducts.module.css"
import { RiDeleteBin5Line } from "react-icons/ri"
import { deleteFromCar } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const ListProducts = (props) => {
    const { modelo, marca, precio, año, img, id } = props;
    const dispatch = useDispatch()
    const deleteInCar = () =>{
        dispatch(deleteFromCar(id))
    }
    return (
        <div className={style.phoneCard} >
            <div className={style.divImg}>
            <img src={img} alt={modelo} className={style.img}/>
            
            </div>
            
            <div className={style.divDetalles}>
                <Link to="/phoneDetail" className={style.marca}><h1>{marca}</h1></Link>
                <p className={style.details}>Modelo: {modelo}</p>
                <p className={style.details}>Año de lanzamiento: {año}</p>
                <p className={style.details}>Precio: {precio}</p>
            </div>
            
            <input type="checkbox" className={style.checkbox}/>
            
            <RiDeleteBin5Line  className={style.delete} onClick={deleteInCar} />
        </div>
    )
}


export default ListProducts;