// No infinte scroll

// import React, { useEffect, useState } from "react";
// import { youtubeVideoAPI } from "../utils/constants";
// import VideoCard from "./VideoCard";
// import { Link } from "react-router-dom";
// const VideoContainer = () => {
//   const [videos, setVideos] = useState([]);
//   useEffect(() => {
//     getVideos();
//   }, []);
//   const getVideos = async () => {
//     const response = await fetch(youtubeVideoAPI);
//     console.log(response);
//     const json = await response.json();
//     setVideos(json.items);
//   };
//   return (
//     <div className="flex flex-wrap">
//       {videos.map((video) => (
//         <Link to={"/watch/?v="+video.id}>
//           <VideoCard info={video} key= {video.id} />
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default VideoContainer;


// Implementing infinite scrolling.
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { youtubeVideoAPI } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(`${youtubeVideoAPI}&page=${page}`);
    const json = await response.json();

    if (json.items.length === 0) {
      setHasMore(false);
    } else {
      setVideos((prevVideos) => [...prevVideos, ...json.items]);
      setPage((prevPage) => prevPage + 1);
    }
  };

  const fetchMoreData = () => {
    if (hasMore) {
      getVideos();
    }
  };

  return (
    <div className="pl-2">
      <InfiniteScroll
        className="videoContainer flex flex-wrap gap-1"
        dataLength={videos.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4 className="text-gray-200 font-5xl font-bold">Loading...</h4>}
        endMessage={
          <p style={{}}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {videos.map((video) => (
          <Link to={"/watch/?v=" + video.id}>
            <VideoCard info={video} key={video.id.videoId} />
          </Link>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default VideoContainer;