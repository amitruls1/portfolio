import { hydrate, prerender as ssr } from "preact-iso";
import "./style.css";
export function App() {
  const handleClick = () => {
    console.log("clicked on link");
    const fileUrl = "./";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    document.querySelector("#download_text").textContent =
      "Downloaded Successfully ✅";
  };
  return (
    <div class="container">
      <div className="portfolio-header">
        <div class="text-container name">
          <span class="main-name">Amit Chauhan</span>
          <span class="designation">Software Engineer</span>
        </div>
        <div className="social-media-icons">
          <a
            className="instagram"
            href="https://www.instagram.com/musclemugiwara/"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              size={17}
              style="color: rgb(238, 116, 112); position: relative; top: 2px;"
              height="17"
              width="17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Instagram</title>
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>{" "}
            <span>Instagram</span>
          </a>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/amitchauhan220/"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              size={17}
              style="color: rgb(41, 102, 188); position: relative; top: 2px;"
              height="17"
              width="17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>LinkedIn</title>
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
            </svg>{" "}
            <span>LinkedIn</span>
          </a>
          <a
            className="github"
            href="https://github.com/amitruls1/"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 496 512"
              size={17}
              style="color: rgb(212, 212, 212); position: relative; top: 2px;"
              height="17"
              width="17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Github</title>
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>{" "}
            <span>Github</span>
          </a>
          <a
            className="stackoverflow"
            href="https://stackoverflow.com/users/6690371/amit-chauhan"
            target="_blank"
          >
            <svg
              stroke="#7e4b49"
              fill="#7e4b49"
              stroke-width="0"
              viewBox="0 0 496 512"
              size={17}
              style="color: rgb(212, 212, 212); position: relative; top: 2px;"
              height="17"
              width="17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Stackoverflow</title>
              <path d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z" />
            </svg>
            <span>Stackoverflow</span>
          </a>
        </div>
      </div>
      <div className="about-me">
        <img
          src="https://res.cloudinary.com/dp1fd6svk/image/upload/f_auto,q_auto/tkxyicissbvi0xdpzy9u"
          className="image"
        />
        <div className="hello">
          <span className="hello-span">Hello World!</span> crafting{" "}
          <a
            className="github-link"
            href="https://github.com/amitruls1/"
            target="_blank"
          >
            code
          </a>{" "}
          by day, sculpting{" "}
          <a
            className="instagram-link"
            href="https://www.instagram.com/musclemugiwara/"
            target="_blank"
          >
            muscles
          </a>{" "}
          by night – the software engineer with a flexibly fit approach to life!{" "}
        </div>
      </div>
      <div className="editor">
        <div className="mac-controls">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="14"
            viewBox="0 0 54 14"
          >
            <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
              <circle
                cx="6"
                cy="6"
                r="6"
                fill="#FF5F56"
                stroke="#E0443E"
                stroke-width=".5"
              ></circle>
              <circle
                cx="26"
                cy="6"
                r="6"
                fill="#FFBD2E"
                stroke="#DEA123"
                stroke-width=".5"
              ></circle>
              <circle
                cx="46"
                cy="6"
                r="6"
                fill="#27C93F"
                stroke="#1AAB29"
                stroke-width=".5"
              ></circle>
            </g>
          </svg>
        </div>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          {JSON.stringify(
            {
              name: "Amit Chauhan",
              address:
                "G-1365 Awas Vikas 1, Kalyanpur Kanpur, 20180, Uttar Pradesh, India",
              mobile: "+91-7007573234",
              experience: "7 years+",
              skills:
                "ReactJS, NodeJS, Typescript, TailwindCSS, Graphql, Elasticsearch, Serverless, NextJS, Javascript",
              language: "Hindi, English",
              Interests: "Fitness, Football, Anime",
            },
            null,
            4
          )}
        </pre>
        <div onClick={handleClick} style={{ display: "inline-flex" }}>
          <pre
            style={{ whiteSpace: "pre-wrap", display: "inline-flex" }}
            id="download_text"
          >
            Click to Download Resume{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{ width: "16px" }}
            >
              <path
                fill="white"
                d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
              />
            </svg>
          </pre>
        </div>
      </div>
    </div>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
