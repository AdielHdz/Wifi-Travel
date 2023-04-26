import React from "react";
import style from "./buyButton.module.css";

class BuyButton extends React.Component {
    render() {

        
        return(
            <>
            <button className={style.buyButton} >Buy now</button>
            </>
        )
    }
}


export default BuyButton;