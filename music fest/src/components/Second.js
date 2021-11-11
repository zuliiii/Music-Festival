import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import { Link } from 'react-router-dom';
import Item from './Item';
import "../sass/style.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Second() {
  return (
    <>
      <div className="Second">
        <Carousel className="carousel" breakPoints={breakPoints}>
           <Item className="Item"> <div className="dj-hover">
            <a href="https://soundcloud.com/ellen-allien"><i class="fa fa-soundcloud"></i></a>
            <h4>Ellen Allien</h4>
            </div> <img src="https://www.forcedexposure.com/App_Themes/Default/Images/artist_images/B/BPX001CD_pic.jpg" alt="" /></Item>
          <Item className="Item"><div className="dj-hover">
            <a href="https://soundcloud.com/ellen-allien"><i class="fa fa-soundcloud"></i></a>
            <h4>SNTS</h4>
            </div> <img src="https://img.discogs.com/1VHNsAOurH6U_0QqzJlw7LkI0i0=/600x786/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-3062923-1446746257-7372.jpeg.jpg" alt="" /></Item>
          <Item className="Item"><div className="dj-hover">
            <a href="https://soundcloud.com/ellen-allien"><i class="fa fa-soundcloud"></i></a>
            <h4>Paula Temple</h4>
            </div> <img src="https://lastfm.freetls.fastly.net/i/u/ar0/06dde9fb21fad29a1aa510bd5f8faf60.jpg" alt="" /></Item>
          <Item className="Item"><div className="dj-hover">
            <a href="https://soundcloud.com/ellen-allien"><i class="fa fa-soundcloud"></i></a>
            <h4> MCMLXXXV</h4>
            </div> <img src="https://aughtmag.com/wp-content/uploads/2019/02/Untitled-1nnij-1.jpg" alt="" /></Item>
          <Item className="Item"><div className="dj-hover">
            <a href="https://soundcloud.com/ellen-allien"><i class="fa fa-soundcloud"></i></a>
            <h4> 999999999</h4>
            </div> <img src="https://i2.wp.com/dancewax.net/wp-content/uploads/2021/04/176031346_291929799126729_1298436934332860024_n.jpg?fit=828%2C552&ssl=1" alt="" /></Item>
          <Item className="Item"><div className="dj-hover">
            <a href="https://soundcloud.com/ellen-allien"><i class="fa fa-soundcloud"></i></a>
            <h4>Tima Tama</h4>
            </div> <img src="https://i1.sndcdn.com/artworks-000375006552-ml4j7p-t500x500.jpg" alt="" /></Item>
          <Item className="Item"><div className="dj-hover">
            <a href="https://soundcloud.com/ellen-allien"><i class="fa fa-soundcloud"></i></a>
            <h4>Kas:st</h4>
            </div> <img src="https://img.discogs.com/BKlPxXbkuOAqHxt2s3B5q52WUqk=/600x400/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-5018073-1516750954-7630.jpeg.jpg" alt="" /></Item>
          <Item className="Item"><div className="dj-hover">
            <a href="https://soundcloud.com/ellen-allien"><i class="fa fa-soundcloud"></i></a>
            <h4>Pablo Bozzi</h4>
            </div> <img src="https://static.wixstatic.com/media/c9f31e_7372ef848220450694baa384176ea134~mv2.jpg/v1/fill/w_955,h_955,al_c,q_90/c9f31e_7372ef848220450694baa384176ea134~mv2.jpg" alt="" /></Item>
        </Carousel>
      </div>
    </>
  );
}

export default Second

const rootElement = document.getElementById("root");
ReactDOM.render(<Second />, rootElement);
