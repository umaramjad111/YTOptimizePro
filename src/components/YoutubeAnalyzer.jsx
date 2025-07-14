import React, { useState } from "react";
import axios from "axios";

const YoutubeAnalyzer = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getVideoId = (url) => {
    const match = url.match(/(?:v=|youtu\.be\/)([\w-]{11})/);
    return match ? match[1] : null;
  };

  const fetchMetadata = async () => {
    const videoId = getVideoId(videoUrl);
    if (!videoId) return alert("Invalid YouTube URL");

    const API_KEY = "AIzaSyAyiS6WmZhEpE2iYYOGPURsiCxCHuUNSe0"; // 🔑 Replace this with your real API key

    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos`,
        {
          params: {
            part: "snippet,statistics",
            id: videoId,
            key: API_KEY,
          },
        }
      );
      const data = response.data.items[0];
      setVideoData(data);
    } catch (error) {
      alert("Error fetching video data.");
    } finally {
      setLoading(false);
    }
  };

  const scoreTitle = (title) => {
    const lengthScore = title.length >= 40 && title.length <= 70 ? 10 : 5;
    const clickWords = ["best", "how", "top", "why", "secret", "you"];
    const clickScore = clickWords.some((word) =>
      title.toLowerCase().includes(word)
    )
      ? 10
      : 3;
    return lengthScore + clickScore;
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow p-4">
            <h2 className="text-center text-danger mb-4">
              YouTube Title & Thumbnail Analyzer
            </h2>
            <div className="mb-3">
              <input
                type="text"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="form-control"
                placeholder="Enter YouTube Video URL"
              />
            </div>
            <div className="d-grid">
              <button
                onClick={fetchMetadata}
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Analyzing..." : "Analyze Video"}
              </button>
            </div>

            {/* AdSense Ad Unit */}
            <div className="text-center my-4">
              <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-9093380069334790"
                data-ad-slot="1234567890"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
            </div>

            {videoData && (
              <div className="mt-4">
                <div className="d-flex justify-content-center">
                  <img
                    src={videoData.snippet.thumbnails.medium.url}
                    alt="Thumbnail"
                    className="img-fluid rounded mb-3"
                  />
                </div>
                <h4>{videoData.snippet.title}</h4>
                <p className="text-muted mb-1">
                  <strong>By:</strong> {videoData.snippet.channelTitle}
                </p>
                <p className="mb-1">
                  <strong>Views:</strong> {videoData.statistics.viewCount}
                </p>
                <p>
                  <strong>Description:</strong>{" "}
                  {videoData.snippet.description.slice(0, 200)}...
                </p>
                <div className="alert alert-success">
                  <strong>Title Score:</strong>{" "}
                  {scoreTitle(videoData.snippet.title)} / 20
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeAnalyzer;
