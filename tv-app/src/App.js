import { useEffect, useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import { Button } from './components/Button/Button';
import { convertMillisecondsToHours, removeDuplicatesKeepOrder } from './utils/utils';
import './App.css';
import Slider from './components/Slider/Slider';

function App() {
  const viewedMovies = localStorage.getItem('viewedMovies');
  if (!viewedMovies) {
    localStorage.setItem('viewedMovies', JSON.stringify([]));
  }

  const [data, setData] = useState([]);
  const [bannerData, setBannerData] = useState({});
  const [sliderData, setSliderData] = useState([]);
  const [play, setPlay] = useState(false);
  const [orderBy, setOrderBy] = useState(viewedMovies && [...JSON.parse(viewedMovies)]);

  useEffect(() => {
    (async function () {
      const response = await import('./db/data.json');
      setData(JSON.parse(JSON.stringify(response)));
    })();
  }, []);

  const { Featured, TendingNow } = data;
  useEffect(() => {
    setBannerData(Featured);
    setSliderData(TendingNow);
  }, [Featured, TendingNow]);

  const onPlayHandler = () => {
    setPlay(!play);
    const arr = removeDuplicatesKeepOrder([...JSON.parse(viewedMovies), bannerData.Id]);
    localStorage.setItem('viewedMovies', JSON.stringify(arr));
    setOrderBy(arr);
  };
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <div className="main_banner">
          {!play || !bannerData?.VideoUrl ? (
            <img
              src={`assets/${bannerData?.CoverImage}`}
              className="banner_media"
              alt={`assets/${bannerData?.CoverImage}`}
            />
          ) : (
            <video autoPlay playsInline muted loop className="banner_media">
              <source src={bannerData?.VideoUrl} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          )}
          <p className="sub_heading">{bannerData?.Category}</p>
          <img
            src="assets/FeaturedTitleImage.png"
            className="featured_title"
            alt="featured-title"
          />
          <p className="movie_info">
            {bannerData?.ReleaseYear} {bannerData?.MpaRating}{' '}
            {convertMillisecondsToHours(bannerData?.Duration)}
          </p>
          <p className="movie_description">{bannerData?.Description}</p>
          <div className="btn_group">
            <Button
              title={!play || !bannerData?.VideoUrl ? 'Play' : 'Stop'}
              icon="assets/icons/playIcon.svg"
              onClick={onPlayHandler}
            />
            <Button title="More Info" variant="blue" />
          </div>
        </div>
        <div className="trending-now">
          <h2>Trending Now</h2>
          <Slider
            slides={sliderData}
            setBannerData={setBannerData}
            setPlay={setPlay}
            orderBy={orderBy}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
