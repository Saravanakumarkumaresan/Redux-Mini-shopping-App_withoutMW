import React,{useEffect} from 'react';
import axios from 'axios'

import {useDispatch, useSelector} from 'react-redux'
import { ProductComponents } from './PoductComponents';
import { setProducts } from '../Redux/Actions/Productaction';

export const ProductListing=()=>{
    const products=useSelector((state)=>state);
    const dispatch=useDispatch();
   

const getproducts=async()=>{
    const response=await axios
    .get('https://fakestoreapi.com/products')
    .catch((err)=>{
        console.log('err',err);
    });
    dispatch(setProducts(response.data));
}

useEffect(()=>{
    getproducts();
},[]);
console.log("products:",products);

    return(
        <div className='ui grid container'>
            <ProductComponents />
        </div>
    )
}