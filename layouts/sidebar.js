function SideBar() {
  return (
    <>
      <h4 className="mb-3">Dev Tools</h4>
      <nav className="nav flex-column">
        <a className="nav-link active" aria-current="pagez" href="/">
          Count Characters
        </a>
        <a
          className="nav-link"
          aria-current="pagez"
          href="/capitalize-sentenses"
        >
          Capitalize Sentences
        </a>
        <a className="nav-link" href="/javascript-to-json">
          Javascript Object to JSON
        </a>
        <a className="nav-link" href="/xml-to-json">
          XML to JSON
        </a>
        <a className="nav-link" href="/file-to-buffer">
          Convert Files to Buffer
        </a>
        <a className="nav-link" href="/json-to-url-param">
          JSON to Params URL
        </a>
        <a className="nav-link" href="/utc-to-local-date">
          UTC date to Local date
        </a>
        <a className="nav-link" href="/text-to-speech">
          Convert Text to Speech
        </a>
      </nav>

      <br></br>
      <h4 className="mb-3">Other Tools</h4>
      <nav className="nav flex-column">
        <a
          className="nav-link active"
          aria-current="pagez"
          href="/download-youtube-thumbnail"
        >
          Download Youtube Thumbnail
        </a>
        {/* <a
          className="nav-link active"
          aria-current="pagez"
          href="/download-instagram-image"
        >
          Download Instagram Photo
        </a> */}
      </nav>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("LeftSideBar")).render(<SideBar />);
