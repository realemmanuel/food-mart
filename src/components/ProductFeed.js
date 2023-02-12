import React from 'react'
import Product  from './Product'

const ProductFeed = ({ products }) => {
  return (
    <div className='grid grid-flow-row-dense  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-32 mx-auto'>
      
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

      <div className='md:col-span-5'>
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

      
      {products.slice(5, 12).map(({ id, title, price, description, category, image }) => (
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
{products.slice(12, 16).map(({ id, title, price, description, category, image }) => (
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