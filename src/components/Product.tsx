import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchBeersThunk, ProductsType} from "../bll/punkReduser";
import {AppStoreType} from "../bll/store";
import style from "./Product.module.css"
import {Paginator} from "../common/paginator/Paginator";
import s from './Login.module.css'

const Product = () => {
    const dispatch = useDispatch();
    const beers = useSelector<AppStoreType, Array<ProductsType>>((state) => state.beers.items)
    const page = useSelector<AppStoreType, number>((state) => state.beers.page)
    const per_page = useSelector<AppStoreType, number>((state) => state.beers.per_page)
    useEffect(() => {
        dispatch(fetchBeersThunk())
    }, [])
    console.log(beers, "beers")

    return (
        <div className={style.p}>
            <h6 className={s.error}>pokazać loading,dorobić style paginator </h6>
            <h3 className={style.h3}>Nagłówek duży</h3>
            <div className={style.productBlock}>
                {beers.map((b) => {
                    return (
                        <div className={style.card}>
                            <p className={style.name}>{b.name}</p>
                            <p className={style.opis}>Opis:{b.ingredients.yeast}</p>
                            <p className={style.des}>Składniki:{b.description}</p>
                            <img className={style.img} src={b.image_url} alt="photo"/>
                        </div>
                    )
                })}
            </div>
            <Paginator page={page}
                       per_page={per_page}
            />
        </div>
    );
};

export default Product;