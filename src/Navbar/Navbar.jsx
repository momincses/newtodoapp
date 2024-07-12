import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [list, setList] = useState([
        {
            'img': 'src/assets/menu.png',
            'selected': true,
            'title' : 'home'
        },
        {
            'img': 'src/assets/clock.png',
            'selected': false,
            'title' : 'reminder'
        },
        {
            'img': 'src/assets/add.png',
            'selected': false,
            'title' : 'add'
        },
        {
            'img': 'src/assets/bookmark.png',
            'selected': false,
            'title' : 'bookmark'
        },
        {
            'img': 'src/assets/setting.png',
            'selected': false,
            'title' : 'setting'
        }
    ])

    const handleClick = (index) => {
        setList(list.map((item, i) => {
            return {
                ...item, // Spread the properties of the existing item
                selected: i === index // Set selected to true if the current index matches
            };
        }));
    }

  return (
    <div className={styles.mainContainer}>
        {list.map((item, index) => (
            <div 
            onClick={() => handleClick(index)}
            key={index}
            className={`${styles.navItem} 
            ${item.title === 'add'? styles.add : ''}
            ${item.selected ? styles.active : ''}`}>
                {/* <div className={styles.navItemBg}></div> */}
                <Link to={`./${item.title}`}>
                <img src={item.img} alt="img" className={styles.navImage}/>
                </Link>
            </div>
        ))}
    </div>
  )
}

export default Navbar
