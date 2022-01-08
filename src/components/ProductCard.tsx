import React, {useState} from 'react';
import style from "./Product.module.css";
import {addProductAC, deleteProductAC, ElementType, ProductsType} from "../bll/punkReduser";
import {useDispatch, useSelector} from "react-redux";
import images from "../common/img/Vector.svg"
import {AppStoreType} from "../bll/store";

type CardType = {
    product: ProductsType
}
const ProductCard = (props: CardType) => {
    const dispatch = useDispatch()
    const element = useSelector<AppStoreType, Array<ElementType>>((state) => state.beers.element)
    const favoriteProduct = () => {
        if (element.find(el => el.product.id === props.product.id)) {
            dispatch(deleteProductAC(props.product.id))
        } else {
            dispatch(addProductAC(props.product.id))
        }
        // console.log('add', element.find(el => el.product.id === props.product.id))
        // console.log(props.product.id)
    }
    const favoriteButton = element.find(el => el.product.id === props.product.id)
    return (
        <div className={style.card}>
            <div className={style.btn}>

                    <button onClick={favoriteProduct} className={style.star}>
                        <span>{favoriteButton ? <img className={style.images} src={images} alt="photo"/> : " "}</span>
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