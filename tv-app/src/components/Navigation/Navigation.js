import React from 'react';
import style from './style.module.css';

const Navigation = () => {
  return (
    <>
      <nav className={`${style.main_menu}`}>
        <div className={style.user_info}>
          <img src="assets/Sung-Gi-Hoon.png" alt="user-avatar" />
          <span>Daniel</span>
        </div>
        <ul>
          <li>
            <a href="/">
              <img src="assets/icons/search.png" className={style.nav_icon} alt="search-icon" />
              <span className={style.nav_text}>Search</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src="assets/icons/home.png" className={style.nav_icon} alt="home-icon" />
              <span className={style.nav_text}>Home</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src="assets/icons/movie.png" className={style.nav_icon} alt="tv-show-icon" />
              <span className={style.nav_text}>TV Shoes</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src="assets/icons/group.png" className={style.nav_icon} alt="movie-icon" />
              <span className={style.nav_text}>Movies</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src="assets/icons/mask.png" className={style.nav_icon} alt="genres-icon" />
              <span className={style.nav_text}>Genres</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src="assets/icons/history.png"
                className={style.nav_icon}
                alt="watch-later-icon"
              />
              <span className={style.nav_text}>Watch Later</span>
            </a>
          </li>
        </ul>
        <ul className={style.bottom_nav}>
          <li>
            <a href="/">Language</a>
          </li>
          <li>
            <a href="/">Get Help</a>
          </li>
          <li>
            <a href="/">Exit</a>
          </li>
        </ul>
      </nav>
      <div className={style.backdrop}></div>
    </>
  );
};

export default Navigation;
