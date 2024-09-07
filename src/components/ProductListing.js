<<<<<<< HEAD
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import {fetchProducts} from '../redux/actions/productActions';

export default function ProductListing(props) {
    const data = useSelector(state => state.allProducts)
    // console.log(data)
    const dispatch=useDispatch()

    // const loadProducts = async () => {
    //   const response = await axios.get('https://fakestoreapi.com/products')
    //   // console.log(response);
    //   dispatch(setProducts(response.data))
    // }
    useEffect(()=>{
      dispatch(fetchProducts())
    },[])
      console.log(data);
  return (
    <div className='ui grid container'>
       
        <ProductComponent/>
    </div>
  )
}
=======
import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import {fetchProducts, setProducts} from '../redux/actions/productActions';

export default function ProductListing(props) {
    const data = useSelector(state => state.allProducts)
    // console.log(data)
    const dispatch=useDispatch()

    // const loadProducts = async () => {
    //   const response = await axios.get('https://fakestoreapi.com/products')
    //   // console.log(response);
    //   dispatch(setProducts(response.data))
    // }
    useEffect(()=>{
      dispatch(fetchProducts())
    },[])
      console.log(data);
  return (
    <div className='ui grid container'>
        {/* <h3>Product Listing</h3> */}
        <ProductComponent/>
    </div>
  )
}
>>>>>>> 8000d6aefee7ac732088c8e588acff330cae9e04
