import ReactPlayer from "react-player";
import { useState } from "react";
import LoadRoller from '../load-roller/load-roller'
const Player = ({ trailer }) => {
  const [ready, setReady] = useState(false)
  return (
    <div className="player-wrapper relative pt-[56.25%] mt-10">
      {!ready && <LoadRoller />}
      <ReactPlayer
        className="react-player absolute top-0 left-0 "
        width="100%"
        height="100%"
        url={`https://www.youtube.com/embed/${trailer.key}`}
        controls
        playsinline={true}
        // onProgress={(e) => console.log(e)}
        on
        onReady={() => setReady(true)}
        config={{
          youtube: {
            playerVars: { showinfo: 1 },
          },
        }}
      />
    </div>
  );
};

export default Player;
