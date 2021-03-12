
import React from 'react';
import { Provider } from 'next-auth/client'
import '../styles/global.css';
import { useRouter } from "next/router";
import { SideBar } from "../components/SideBar";







function MyApp({ Component, pageProps }) {
  const router = useRouter();

  


  return (
    <Provider session={pageProps.session}>
        {router.pathname !== "/login" ? <SideBar /> : ""}
        <Component {...pageProps}> </Component>
    </Provider>




      
  )
}

    


    

export default MyApp
