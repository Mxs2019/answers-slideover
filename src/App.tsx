import React, { useRef, useState } from "react";
import SearchOverlay from "./SearchOverlay";
import { FaSearch } from "react-icons/fa";

export default function App() {
  const [navLinks, setNavLinks] = useState([
    "Home",
    "Locations",
    "Events",
    "Support",
  ]);
  const commonURLs = [
    ["Finance (Silver)", "https://silver.yext-cdn.com/?"],
    ["Healthcare (Synergic)", "https://synergic.yext-cdn.com?"],
    ["Food (Subz)", "https://subz.yext-cdn.com?"],
    ["Retail (Sneaks)", "https://sneaks.yext-cdn.com?"],
  ];
  const [iframeURL, setIframeURL] = useState("https://silver.yext-cdn.com/?");

  const [showingConfig, setShowingConfig] = useState(false);
  const searchOverlayRef = useRef(null);
  return (
    <div>
      <div className="flex justify-between items-center bg-blue-900 text-white mb-4 sticky top-0">
        <div className="flex">
          {navLinks.map((l) => {
            return (
              <div
                className="ml-4 px-4 py-3 hover:bg-blue-800 cursor-pointer"
                key={l}
              >
                {l}
              </div>
            );
          })}
        </div>
        <div
          className="flex px-4 py-1 items-center bg-gray-300 text-blue-800 rounded mx-2 w-40 hover:bg-white cursor-pointer"
          onClick={() => {
            if (searchOverlayRef.current) {
              //@ts-ignore
              searchOverlayRef.current.showSearchOverlay();
            }
          }}
        >
          <FaSearch />
          <div className="ml-2">Search</div>
        </div>
      </div>
      <div className="p-4 mx-auto max-w-3xl">
        <h1 className="text-2xl pb-2">Sample Website</h1>
        {!showingConfig && (
          <div
            className="text-sm text-gray-500 cursor-pointer"
            onClick={() => setShowingConfig(true)}
          >
            Configure Demo
          </div>
        )}
        {showingConfig && (
          <div className="bg-gray-100 py-2 px-2">
            <div
              className="text-sm text-gray-500 cursor-pointer mb-6"
              onClick={() => setShowingConfig(false)}
            >
              Hide Configuration
            </div>
            <label className="my-2">
              iFrame URL
              <input
                className="border w-full rounded-md py-2 px-4"
                onChange={(e) => setIframeURL(e.target.value)}
                value={iframeURL}
              />
            </label>
            <div>Common Demos</div>
            {commonURLs.map((c) => {
              return (
                <li
                  key={c[1]}
                  onClick={() => setIframeURL(c[1])}
                  className="px-2 hover:bg-gray-200 rounded-md py-1 cursor-pointer"
                >
                  {c[0]}
                </li>
              );
            })}
          </div>
        )}
        <img
          src="https://images.unsplash.com/photo-1591388783682-1609c4bcd8cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        //@ts-ignore
        <SearchOverlay ref={searchOverlayRef} iframeURL={iframeURL} />
      </div>
    </div>
  );
}
