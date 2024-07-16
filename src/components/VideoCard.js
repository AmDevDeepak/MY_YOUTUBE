import { formatNumber} from "../utils/helper.js";
const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className="p-2 w-[16rem]">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-[500] px-2 mt-2">{title}</li>
        <li className="px-2 font-thin">{channelTitle}</li>
        <li className="px-2">{formatNumber(statistics.viewCount)} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
