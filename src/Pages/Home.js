import React from 'react'
import '../styles/Home.css'
import GithubIcon from '@mui/icons-material/GitHub'
import Linkedin from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'


function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi , i am Naveenchander</h2>
            <div className='prompt'>
                <p>A Software developer with a passion for learning and creating</p>
                <Linkedin/>
                <EmailIcon/>
                <GithubIcon/>
            </div>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Front-End</h2>
                    <span>
                        ReactJs,HTML,CSS,BootStrap
                    </span>
                </li>
                <li className='item'>
                    <h2>Back-End</h2>
                    <span>
                        NodeJs,ExpressJS,MongoDB
                    </span>
                </li>
                <li className='item'>
                    <h2>Languages</h2>
                    <span>
                        Javascript
                    </span>
                </li>

            </ol>

        </div>
    </div>
  )
}

export default Home