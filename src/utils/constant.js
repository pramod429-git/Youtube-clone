const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
export const YOUTUBE_API_VIDEO =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;
