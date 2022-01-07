import React, {useState} from 'react';
import style from "./Product.module.css";
import {addProductAC, ProductsType} from "../bll/punkReduser";
import {useDispatch} from "react-redux";
import images from "../common/img/Vector.svg"

type CardType = {
    product: ProductsType
}
const ProductCard = (props: CardType) => {
    const [disable, setDisable] = useState(false);
    const dispatch = useDispatch()
    const addProduct = () => {
        dispatch(addProductAC(props.product.id))
        setDisable(true)
    }
    console.log(props.product.id)
    return (
        <div className={style.card}>
            <div className={style.btn}>
                <button onClick={addProduct} className={style.star}>
                    <span>{disable ? <img className={style.images} src={images} alt="photo"/> : " "}</span>
                </button>
            </div>
            <p className={style.name}>{props.product.name}</p>
            <p className={style.opis}>Opis:{props.product.ingredients.yeast}</p>
            <p className={style.des}>Składniki:{props.product.description}</p>
            <img className={style.img} src={props.product.image_url} alt="photo"/>
        </div>
    );
};

export default ProductCard;