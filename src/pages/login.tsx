import Head from 'next/head'
import React from 'react'
import styles from '../styles/pages/Login.module.css'

import { FiArrowRight } from "react-icons/fi";
import { signIn, useSession } from "next-auth/client";
import {useRouter} from 'next/router';
import Redirect from '../components/Redirect';

const Login = () => {
    const [session] = useSession();

    if (session) {
      return <Redirect to='/'/>
    }




    return (
        <>
            <Head>
                <title>Login | Moveit</title>
            </Head>
            <div className={styles.container}>
                <section>
                    <div className={styles.LoginContainer}>
                        <h2>Bem-Vindo</h2>
                        <p>Faça login com seu Github</p>

                        <button
                                onClick={() => signIn("github")}
                                className={styles.githubLogin}
                                >
                                <span>Logar com Github</span>
                                <div>
                                    <FiArrowRight size={36} color="#fff" />
                                </div>
                        </button>
                    </div>
                </section>

            </div>


        </>
    )
}

export default Login
