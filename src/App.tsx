import React, { useRef } from "react";
import SearchOverlay from "./SearchOverlay";
import { FaSearch } from "react-icons/fa";

export default function App() {
  const navLinks = ["Home", "Locations", "Events", "Support"];
  const searchOverlayRef = useRef(null);
  return (
    <div>
      <div className="flex justify-between items-center bg-blue-900 text-white mb-4">
        <div className="flex">
          {navLinks.map(l => {
            return (
              <div className="ml-4 px-4 py-3 hover:bg-blue-800 cursor-pointer">
                {l}
              </div>
            );
          })}
        </div>
        <div
          className="flex px-4 py-1 items-center bg-gray-300 text-blue-800 rounded mx-2 w-40 hover:bg-white cursor-pointer"
          onClick={() => {
            searchOverlayRef.current.showSearchOverlay();
          }}
        >
          <FaSearch />
          <div className="ml-2">Search</div>
        </div>
      </div>
      <div className="p-4 mx-auto max-w-3xl">
        <h1 className="text-2xl pb-2">Answers Slideover Demo</h1>

        <p>
          This is a demo of a new type of Anwers Integration called the
          Slideover. On this demo page we are showing 4 different ways of
          invoking the Answers Slideover.
        </p>
        <p>
          On the left we have two tabs that do the same thing. One is phrased as
          Ask a Question and the second one is phrased as Live Chat. You would
          usually not have both methods on the same screen but this shows how
          text can vary the user experience.
        </p>
        <p>
          On the bottom right you can see a floating bubble with a search icon.
          This is extremly common with live chat and is another option. You
          could display this an a left tab at the same time to try and increase
          searches.
        </p>
        <p>
          The final mode is by clicking the search bar itself. We would not
          encourage our standard implementations to do this but if you do
          implement via slideover this could be a good way to drive people to
          search without having to implement a full search results page.
        </p>
        <p>
          <a
            className="text-blue-900 underline"
            href="https://docs.google.com/document/d/1DeVkjRO3uOVXFz1nszikB_FzVtZzBI6wIU20TfxyxZE/edit#heading=h.b8lcieajbv4n"
          >
            Learn more about the strategy here
          </a>
        </p>

        <h2 className="text-xl mb-2 mt-4">Negatives of Slideover</h2>
        <p>There are some key drawbacks of this approach:</p>
        <ol className="list-disc ml-6">
          <li>
            We no longer perserve state via URL. You can't share a url with
            others and search engines can't point at a specific page
          </li>
          <li>
            Our UX indicate that less people click floating bubbles then run
            search.
          </li>
        </ol>

        <SearchOverlay ref={searchOverlayRef} />
      </div>
    </div>
  );
}
