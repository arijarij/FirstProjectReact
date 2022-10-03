import React, { useState } from 'react';


//https://cc-west-usa.oss-accelerate.aliyuncs.com/1614397762255.jpg
//https://cc-west-usa.oss-accelerate.aliyuncs.com/16040736/1321845374125.jpg
//https://cc-west-usa.oss-accelerate.aliyuncs.com/15200352/656226109525.jpg
//https://cc-west-usa.oss-accelerate.aliyuncs.com/2043/1405149433027.jpg

const DATA = [
    {
        src:'https://cc-west-usa.oss-accelerate.aliyuncs.com/1614397762255.jpg',
        name:'Denim Light Board British Style Jazz Hat',
        soldQTE:4,
        remainQTE:30000,
    },
    {
        src:'https://cc-west-usa.oss-accelerate.aliyuncs.com/16040736/1321845374125.jpg',
        name:'Geometric Print Shawl',
        soldQTE:3,
        remainQTE:10000,
    },
    {
        src:'https://cc-west-usa.oss-accelerate.aliyuncs.com/15200352/656226109525.jpg',
        name:'Log Color Diy Photo Clip Snack Clip',
        soldQTE:2,
        remainQTE:10000,
    },
    {
        src:'https://cc-west-usa.oss-accelerate.aliyuncs.com/2043/1405149433027.jpg',
        name:'Contrasting Color Sunglasses For Men And Women',
        soldQTE:1,
        remainQTE:10000,
    },
    {
        src:'https://cc-west-usa.oss-accelerate.aliyuncs.com/20210113/82327191797.jpg',
        name:'Silk Scarf Women\'s Spring And Autumn Long Silk With Shawl',
        soldQTE:1,
        remainQTE:10000,
    },
    {
        src:'https://cc-west-usa.oss-accelerate.aliyuncs.com/0da154a3-ec4e-46ba-872d-e51bd115e778.jpg',
        name:'Duckbill 3d Three-Dimensional Mask',
        soldQTE:1,
        remainQTE:41473,
    },
    {
        src:'https://cc-west-usa.oss-accelerate.aliyuncs.com/1622273682988.jpg',
        name:'Ultra-Thin Mobile Phone Case Holder Flip Holster',
        soldQTE:1,
        remainQTE:33491,
    },
]

const row_style = 'flex gap-2 w-full px-2';
const column_1_style = 'w-full';
const column_2_style = 'w-40 text-center ';
const ProductTitle = (props) => {
    return(
        <div id="productTitle" className={row_style+' items-end text-justify font-medium pb-1 bg-gray-100 '}>
            <div className={column_1_style} >The product</div>
            <div className={column_2_style} >The sold <br /> quantity</div>
            <div className={column_2_style} >The remaining <br /> quantity </div>
        </div>
    )
}
const Product = (props) => {
    const {productName,soldQuantity,remainQuantity,img} = props;
    
    return(
        <div id="product" style={{borderWidth:'0px 0px 1px 0px'}} className={row_style + ' p-4 bg-white border-gray-100 hover:bg-gray-100' }>
            <div className={column_1_style + " flex gap-2"}>
                <img className="w-8 " src={img} alt={productName} />
                <div>{productName}</div>
            </div>
            <div className={column_2_style} >{soldQuantity}</div>
            <div className={column_2_style} >{remainQuantity}</div>
        </div>
    )
}

const Products = () => {
    const [height,setHeight] = useState('100px');
    const handleLoad = (e) => {
        const titleData = document.getElementById('productTitle').getBoundingClientRect();
        const product = document.getElementById('product').getBoundingClientRect();
        const newHeight = `${product.height*4+titleData.height}px`;
        setHeight(newHeight);
    }
    return (
        <div onLoad={handleLoad} style={{height:height}}  className="products flex flex-col items-center w-10/12 overflow-y-scroll px-2" >
            <ProductTitle/>
            {
                DATA.map((item,index)=>(
                    <Product
                        key={index} 
                        productName={item.name} 
                        soldQuantity={item.soldQTE}
                        remainQuantity={item.remainQTE}
                        img={item.src} 
                    />   
                ))
            }
        </div>
    )
}

const BestSelling = () => {
    return (
        <div className="flex flex-col items-center w-full border-2 border-gray-100 rounded-lg py-5">
            <div style={{borderWidth:'0px 0px 1px 0px'}} className="flex gap-1 items-center h-11 mb-2 border-gray-100 font-medium w-10/12">
                <img src="https://demo.mycn.io/client_assets/img/portlet-icon.svg" alt="" />
                <div>Bestselling Products</div>    
            </div>
            <Products/>             
        </div>
    );
}

export default BestSelling;
