import React from 'react'
import Head from "next/head";
import { useRouter } from 'next/router'
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const index = () => {
    const router = useRouter();
  return (
    <div>
        <Header />

        <Footer />
    </div>
  )
}

export default index