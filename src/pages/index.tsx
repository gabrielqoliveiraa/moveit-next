import React, {useContext, useState} from 'react';

import {ExperienceBar} from '../components/ExperienceBar'
import {Profile} from '../components/Profile'
import {CompletedChallenges} from '../components/CompletedChallenges'
import {Countdown} from '../components/Countdown'
import {ChallengeBox} from '../components/ChallengeBox'
import Header from '../components/Header/HeaderTheme';




import GlobalStyle from '../styles/globalStyled';
import { ThemeProvider } from 'styled-components';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import Head from 'next/head'

import { GetServerSideProps} from 'next'



import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengesContext'

import { useSession, session } from "next-auth/client";
import { useRouter } from "next/router";



import styles from '../styles/pages/Home.module.css'
import Redirect from '../components/Redirect';


interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}


export default function Home(props: HomeProps) {
  const [session]: any = useSession()

  if(!session){
    return <Redirect to='/login' />
  }



  const [theme, setTheme] = useState(light);

  const toogleTheme = () => {
    setTheme(theme.title === 'light' ? dark:light)
  };


  


  return (

    <ThemeProvider theme={theme}> 
      <GlobalStyle/>


        <ChallengesProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted} >


          <div className={styles.container}>
            <Head>
              <title>Home | Moveit</title>
            </Head>

            <Header toggleTheme={toogleTheme} />

            <ExperienceBar/>  

            <CountdownProvider>

              <section>
                

                <div>

                  <Profile/>
                  <CompletedChallenges/>
                  <Countdown/>
                </div>


                  
                <div>
                  <ChallengeBox/>
                </div>

              </section>
            </CountdownProvider>


            


          </div>
        </ChallengesProvider>

      </ThemeProvider>


  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {



  const {level, currentExperience, challengesCompleted} = ctx.req.cookies

  return { 
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}