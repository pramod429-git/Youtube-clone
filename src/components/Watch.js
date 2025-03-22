import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/sideToggleSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const Watch = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  console.log("clllling");
  // dispatch(closeSideBar());
  useEffect(() => {
    dispatch(closeSideBar());
  }, []);

  return (
    <div>
      <div className="p-6">
        <div className="flex">
          <iframe
            className="rounded-lg"
            width="1000"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <div className="ml-2 p-3 border border-black rounded-lg w-[29rem] h-[37rem] overflow-y-scroll flex flex-col-reverse">
            <LiveChat />
          </div>
        </div>
      </div>
      <CommentContainer />
    </div>
  );
};

export default Watch;
