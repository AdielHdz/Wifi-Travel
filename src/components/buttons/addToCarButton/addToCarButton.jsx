import React from "react";
import { connect } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai"
import style from "./addToCarButton.module.css";
import { addToCar } from "../../../redux/actions";
class AddToCarButton extends React.Component {
    
    render() {
        const { modelo, precio, marca, img, año} = this.props.details

        return(
            <>
            <button className={style.addToCarButton} onClick={() => this.props.addToCarDispatch({ modelo, precio, marca, img, año})} ><AiOutlineShoppingCart /></button>
            </>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addToCarDispatch: (phone) => {
            dispatch(addToCar(phone))
        }
    }
}


export default connect(null, mapDispatchToProps)(AddToCarButton);