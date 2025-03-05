import React, { useEffect, useState } from "react";
import { YOUTUBE_API_VIDEO } from "../utils/constant";
import Video from "./Video";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  const getVideo = async () => {
    const data = await fetch(YOUTUBE_API_VIDEO);
    const JSON = await data.json();
    console.log(JSON.items);
    setVideo(JSON.items);
  };
  useEffect(() => {
    getVideo();
  }, []);
  return (
    <div className="flex flex-wrap">
      {video.map((card) => (
        <Link to={"/watch?v=" + card.id} key={card?.id}>
          <Video vList={card} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
