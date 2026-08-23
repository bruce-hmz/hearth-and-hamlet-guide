type GameFigureProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  eager?: boolean;
};

export function GameFigure({
  src,
  alt,
  caption,
  className = "",
  eager = false,
}: GameFigureProps) {
  return (
    <figure className={`game-figure ${className}`.trim()}>
      {/* Static export: official Steam media is stored locally and pre-compressed. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={1200}
        height={675}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding="async"
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function TrailerFeature() {
  return (
    <figure className="trailer-feature">
      <video
        controls
        playsInline
        preload="metadata"
        poster="/img/trailer-launch.webp"
        aria-label="Hearth and Hamlet official launch trailer"
      >
        <source src="/img/launch-trailer.mp4" type="video/mp4" />
        Your browser does not support embedded video.
      </video>
      <figcaption>
        <span className="badge badge--ember">Official video</span>
        <span>Launch Trailer</span>
        <span className="media-credit">Source: Steam / Phorust Studios</span>
      </figcaption>
    </figure>
  );
}
