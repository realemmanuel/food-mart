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
  const products = await fetch('https://fakestoreapi.com/products/').then(
    (res) => res.json()
  );

  return { props: {
    products,
  } }

}

// https://fakestoreapi.com/products/