import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentsContainer";

import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col gap-3 p-5 w-full mt-20">
      <div className="flex w-full">
        <div>
          <iframe
            width="900"
            height="500"
            src={`https://www.youtube.com/embed/${videoId}?si=RrVYvFJMSkttW0Qb&amp;controls=0&amp;autoplay=0&amp;mute=1&amp;loop=1&amp;playlist=${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
          <LiveChat />
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
