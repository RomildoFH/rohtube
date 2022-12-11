import config from "../../config.json";
import styled from "styled-components";
import { CSSReset } from "../components/CSSReset";
import Menu from "../components/Menu";
import { StyledTimeline } from "../components/StyledTimeLine.Js";

function HomePage() {
  const estilosDaHomePage = { width: "100%" }
  return (
    <>
      <CSSReset />
        <div style={ estilosDaHomePage }>
          <Menu />
          <Header />
          <TimeLine playlists={ config.playlists } />
        </div>
    </>
  );
}

export default HomePage

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-data {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
    margin-top: 50px;
  }
`;
function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner" alt="banner" /> */}
      <section className="user-data">
        <img src={ `https://github.com/${config.github}.png` } alt="foto-perfil" />
        <div>
          <h2>{ config.name }</h2>
          <p>{ config.job }</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function TimeLine(props) {
  const playlistNames = Object.keys(props.playlists)
  return (
      <StyledTimeline>
        {
          playlistNames.map((playlist) => {
            const videos = props.playlists[playlist];
            return (
              <section key={`${playlist}`}>
                <h2>{ playlist.toUpperCase() }</h2>
                <div>
                  {
                    videos.map((video, index) => {
                      return (
                        <a href={ video.url } key={`${playlist}-video-${index}`}>
                          <img src={ video.thumb } alt={ `${video.title}-image` } />
                          <span>{ video.title }</span>
                        </a>
                      )
                    })
                  }
                </div>
              </section>
            )
          })
        }
      </StyledTimeline>
  );
}
