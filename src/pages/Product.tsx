import React from 'react'
import ProductCaseStudies from '../components/product/ProductCaseStudies';
import AllProductAndDetails from '../components/product/AllProductAndDetails';
import AllProductAndDetailsTwo from '../components/product/AllProductAndDetailsTwo';
import AllProductAndDetailsThree from '../components/product/AllProductAndDetailsThree';
import AllProductAndDetailsFour from '../components/product/AllProductAndDetailsFour';
import AllProductAndDetailsFive from '../components/product/AllProductAndDetailsFive';
import AllProductAndDetailsSix from '../components/product/AllProductAndDetailsSix';
import LetsMakeSomethingAmazing from '../components/product/LetsMakeSomethingAmazing';


const Product = () => {
  return (
    <div className='h-screen w-full'>
      <ProductCaseStudies />
      <AllProductAndDetails />
      <AllProductAndDetailsTwo />
      <AllProductAndDetailsThree />
      <AllProductAndDetailsFour />
      <AllProductAndDetailsFive />
      <AllProductAndDetailsSix />
      <LetsMakeSomethingAmazing />
    </div>
  )
}

export default Product
