import React from 'react'
import Product  from './Product'

const ProductFeed = ({ products }) => {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-32 mx-auto'>
      
      {products.slice(0, 4).map(({ id, title, price, description, category, image }) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      ))}

      <img className='md:col-span-full' src="https://links.papareact.com/dyz " alt="" />

      <h1 className="text-rg_pink text-3xl ml-5 mt-5 border-b pb-4 font-mono font-black md:col-span-full">Trending Products</h1>

      <div className='md:col-span-2'>
      {products.slice(4, 5).map(({ id, title, price, description, category, image }) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      ))}
      </div>

      {products.slice(5, 11).map(({ id, title, price, description, category, image }) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      ))}


<img className='md:col-span-full' src="https://links.papareact.com/dyz " alt="" />

<h1 className="text-rg_pink-light text-3xl ml-5 mt-5 border-b pb-4 font-mono font-black md:col-span-full">Featured Products</h1>

{products.slice(11, 15).map(({ id, title, price, description, category, image }) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      ))}
    </div>
  )
}

export default ProductFeed