import React from 'react'
import { useEffect } from 'react'
import Nav from "../Nav";
import Banner from '../Banner';
import Footer from '../Footer';

export default function Banners() {
    useEffect(() => {
        document.title = "Banners-CPS";
      }, []);
  return (
    <>
         <Nav />
         <Banners />
        <Footer></Footer>
    </>
  )
}
