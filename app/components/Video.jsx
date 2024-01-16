export default function Video() {
  return (
    <div>
      <div>
        {/* <h1>YouTube Video Example</h1> */}
        <div className="video-responsive">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jpCJfYoXdC0?si=bUzz32HdwaCn_K6G"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
