import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faSearch } from '@fortawesome/free-solid-svg-icons'

class Landing extends React.Component {

  render() {
    const style = {
      color: "red",
      fontSize: "40px"
    }

    const bookmark = <FontAwesomeIcon icon={faBookmark} style={style} />
    const searchGlass = <FontAwesomeIcon icon={faSearch} className="search" />

    return (
      <div>
        <section id="banner" >
        <h1>V-MARKER</h1>
            {bookmark}
            <p className="landing-content-text">
              V-MARKER allows users to search videos via youtube api. If the user finds a video that they found useful
             or just well done in general, they can bookmark it, rate it and leave some feedback about how the video was of use. User must be authenticated to
             add bookmarks. The DEMO credentials are username: "demo1234" password: "Demo1234!";
            </p>
            
          </section>
          <section className="section section-grid">
            <div className="section-grid-item" />
            <div className="section-grid-item">

              <div className="landing-btns-box">
                <Link className="btn" to="/bmFeed">
                  {searchGlass} Search Videos
            </Link>
                <Link className="btn" to="/login">
                  Login as a Guest
            </Link>
                <Link className="btn" to="/register">
                  Register
            </Link>
              </div>

            </div>
            <div className="section-grid-item" />
          </section>
      </div>
    );
  }
}

export default Landing;
