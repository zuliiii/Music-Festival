import React, { Component } from 'react'
import CardProfile from './CardProfile'

export class AboutDj extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5">
                            <img src="https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2015/04/09195102/azLrpujfjcDTEJIKtuvEYwBYXzHDRpcWwo3dWeRM-972x597.jpeg" alt="" />
                        </div>
                        <div className="col-md-7">
                              <h2>ELLEN ALLIEN</h2>
                              <h6>Date of Birth: <span>1968</span></h6>
                              <h6>Albums: <span>Stadtkind, Berlinette, Thrills</span></h6>
                              <h6>Genres <span>	Electroclash, Experimental techno, Techno</span></h6>

                              <h3>AVAILABLE ON:</h3>
                              <div className="available">
                              <div align="center" class="socialbtns">
                                 <ul>
                                 <li><a href="#" class="fab fa-deezer"></a></li>
                                 <li><a href="#" class="fab fa-youtube"></a></li>
                                 <li><a href="#" class="fab fa-spotify"></a></li>
                                 <li><a href="#" class="fa fa-lg fa-soundcloud"></a></li>
                                 </ul>
                                 </div>
                              </div>
                        </div>
                    </div>
                    <h2>About</h2>
                    <p>Ellen Allien ( it.  Ellen Allien , birth name Ellen Fraatts ( it.  Ellen Fraatz )) - an electronic musician , producer and founder of the label BPitch the Control . Lives in Berlin , Germany but loves to travel. She sings in German and English . Her music is difficult to classify, but most of all it resembles dance-oriented techno and electro , interspersed with unusual sound solutions. Ellen recently launched her clothing line. Ellen's childhood was spent inBerlin , divided by a wall, and this left an indelible mark on her entire subsequent life. <br /> Her work is imbued with boundless love for her native city, and the first album, released in 2001, is called Stadtkind, which literally can be translated "child of the city". The next album, filled with urban romance, Berlinette, dates back to 2003 and was recorded together with Apparat , also known as Sasha Ring. And the most recent project - The Other Side (together with TimeOut magazine ) - is a tourist video guide to Allien's favorite places in Berlin, the musical part is not limited only to electronics and contains specially selected tracks from the best and brightest "Germans" ( Plastikman ,Booka Shade and others).</p>
                


                        <div className="tracks">
                            <h2>Top Tracks</h2>
                              <CardProfile />
                        </div>
                </div>
            </div>
        )
    }
}

export default AboutDj
