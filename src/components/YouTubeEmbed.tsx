import { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
  aspectRatio?: '16/9' | '9/16';
  startTime?: number;
}

/**
 * Lightweight YouTube embed component with click-to-load (facade pattern)
 * 
 * Benefits:
 * - Saves ~732 KiB of YouTube JavaScript on initial page load
 * - Only loads YouTube iframe when user clicks play
 * - Shows thumbnail preview before loading
 * - Better performance, faster page loads
 * 
 * Usage:
 * <YouTubeEmbed videoId="DZ-ZeqDqn-4" title="Video Title" />
 */
export function YouTubeEmbed({ 
  videoId, 
  title = 'YouTube video',
  className = '',
  aspectRatio = '16/9',
  startTime,
}: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Construct video URL with optional start time
  const videoUrl = startTime 
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&start=${startTime}`
    : `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  // YouTube thumbnail URL (maxresdefault for best quality, fallback to hqdefault)
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  // Handle click - load the actual YouTube iframe
  const handleClick = () => {
    setIsLoaded(true);
  };

  if (isLoaded) {
    // User clicked play - load the real YouTube iframe
    return (
      <div 
        className={className}
        style={{ aspectRatio }}
      >
        <iframe
          className="w-full h-full rounded-lg"
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  // Show lightweight thumbnail preview with play button
  return (
    <button
      onClick={handleClick}
      className={`relative overflow-hidden rounded-lg cursor-pointer group ${className}`}
      style={{ aspectRatio }}
      aria-label={`Play ${title}`}
    >
      {/* Thumbnail Image */}
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={(e) => {
          // Fallback to hqdefault if maxresdefault doesn't exist
          const img = e.target as HTMLImageElement;
          if (img.src.includes('maxresdefault')) {
            img.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
          }
        }}
      />
      
      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
      
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-red-600 rounded-full p-4 group-hover:bg-red-700 transition-colors shadow-2xl">
          <Play className="w-12 h-12 text-white fill-white" />
        </div>
      </div>
      
      {/* YouTube logo (optional, for authenticity) */}
      <div className="absolute top-4 right-4 bg-black/70 px-2 py-1 rounded text-white text-xs font-semibold">
        YouTube
      </div>
    </button>
  );
}
