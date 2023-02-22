import Head from "next/head";
import Header from "../components/Header";
import Banner  from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import Footer from "../components/Footer";

export default function Home({ products } ) {
  return (
    <div className="bg-gray-100 w-screen">
      <Head>
        <title>R&G AFROCARRIBEAN FOODS - WE PRIDE OURSELVES IN SELLING UNIQUE AND QUALITY FOOD PRODUCTS</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />

        <ProductFeed products={products} /> 

      </main>

      <Footer />
    </div>
  );
}


export async function getServerSideProps(context) {
  const products = await fetch('https://www.jsonkeeper.com/b/XCVR').then(
    (res) => res.json()
  );

  return { props: {
    products,
  } }

}

// https://fakestoreapi.com/products/
//npx json-server -p 3500 -w database/ProductDb.json 
//  http://localhost:3500/products
//https://papaya-tarsier-eb6327.netlify.app/database/ProductDb.json
//https://taiwoemmmanuel.github.io/product-database/database/ProductDb.json