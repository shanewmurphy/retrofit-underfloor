export default function Video() {
  return (
    <div>
      <div>
        <h1>YouTube Video Example</h1>
        <div className="video-responsive">
          <iframe
            width="560"
            height="315"
            src="https://youtu.be/l3__aCWq9_E?si=uvlW8gpjurKhO5pp"
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
