import "./accordian.css"
export default function AccodianBox() {
  return (
    <div className="bg-black p-2 rounded-bottom">
      <h3 className="text-white fst-normal ">Frequently Asked Questions</h3>
      <div className="p-2 mx-5">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item acc-div mb-1">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed acc-h fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                What is Netflix?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
              </div>
            </div>
          </div>
          <div className="accordion-item acc-div mb-1">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed acc-h fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                How much does Netflic Cost?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649/month.
              </div>
            </div>
          </div>
          <div className="accordion-item acc-div mb-1">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed acc-h fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Where Can i watch?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
