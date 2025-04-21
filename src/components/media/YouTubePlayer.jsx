import React from 'react';

export default function YouTubePlayer({ videoId, title }) {
  return (
    <div className="relative w-full aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title || "YouTube video player"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
} 