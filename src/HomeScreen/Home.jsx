import React from 'react'
import styles from './Home.module.css'
import Navbar from '../Navbar/Navbar'
import HeaderCalendar from './HeaderCalender/HeaderCalendar'
import TodayTask from './TodayTaskBlock/TodayTask'
import ProjectsTommarow from './ExtraSection/ProjectsTommarow'

const Home = () => {
  return (
    <div>
      <HeaderCalendar/>
      <TodayTask/>
      <ProjectsTommarow/>
    </div>
  )
}

export default Home
