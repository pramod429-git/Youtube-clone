import React from "react";

const Video = ({ vList }) => {
  console.log(vList);
  const { medium } = vList?.snippet?.thumbnails || [];
  const { viewCount, likeCount } = vList?.statistics || [];
  //if (!vList) return null;
  return (
    <div className="p-4 hover:shadow-lg">
      <img className="rounded-lg w-56" alt="vCard" src={medium?.url} />
      <ul>
        <li className="w-48 truncate">{vList?.snippet?.title}</li>
        <li className="text-gray-400">{vList?.snippet?.channelTitle}</li>
        <li className="text-gray-400">
          {viewCount} Views . {likeCount} Likes
        </li>
      </ul>
    </div>
  );
};

export const advVideoCard = (Video) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-orange-400 text-white m-2 p-2 hover:shadow-lg hover:bg-red-500 hover:scale-105 transition-transform duration-200 ease-in-out">
          Promotion
        </label>
        <Video {...props} />
      </div>
    );
  };
};

export default Video;
