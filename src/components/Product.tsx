import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchBeersThunk, ProductsType} from "../bll/punkReduser";
import {AppStoreType} from "../bll/store";
import style from "./Product.module.css"
import {Paginator} from "../common/paginator/Paginator";
import s from './Login.module.css'
import {Preloader} from "../common/Preloader/Preloader";
import ProductCard from "./ProductCard";

const Product = () => {
    const dispatch = useDispatch();
    const [isFetching, setIsFetching] = useState(true)
    const beers = useSelector<AppStoreType, Array<ProductsType>>((state) => state.beers.items)
    const page = useSelector<AppStoreType, number>((state) => state.beers.page)
    const per_page = useSelector<AppStoreType, number>((state) => state.beers.per_page)

    console.log(beers, "beers")

    useEffect(() => {
        dispatch(fetchBeersThunk())
        setTimeout(() => {
            setIsFetching(false)
        }, 2000)
    }, [])


    if (isFetching) {
        return <div><Preloader/></div>
    }

    return (
        <div className={style.p}>
            <h6 className={s.error}>pokazać loading,dorobić style paginator </h6>
            <h3 className={style.h3}>Nagłówek duży</h3>
            <div className={style.productBlock}>

                {
                    beers.map((b) => {
                        return <ProductCard
                            product={b}
                            key={b.id}/>
                    })
                }
            </div>
            <Paginator page={page}
                       per_page={per_page}
            />
        </div>
    );
};

export default Product;
