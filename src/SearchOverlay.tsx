import React, { useState, forwardRef, useImperativeHandle } from "react";
import {
  FaSearch,
  FaTimes,
  FaCompress,
  FaExpand,
  FaComment
} from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import { useWindowWidth } from "@react-hook/window-size";

const SearchOverlay = forwardRef((props, ref) => {
  const windowWidth = useWindowWidth();
  const [showingSearch, setShowingSearch] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const narrowWidth = 450;
  const popoverStyle = useSpring({
    right: showingSearch ? `${0}px` : `${-narrowWidth}px`,
    width: fullScreen ? `${windowWidth}px` : `${narrowWidth}px`
  });

  const showSearchOverlay = () => {
    setShowingSearch(true);
  };

  useImperativeHandle(ref, () => {
    return {
      showSearchOverlay: showSearchOverlay
    };
  });

  const hideSearchPopover = () => {
    setShowingSearch(false);
    setFullScreen(false);
  };

  const buttonStyle = useSpring({
    opacity: !showingSearch ? 1 : 0,
    bottom: !showingSearch ? "0px" : "-100px"
  });

  const badgeStyle = useSpring({
    top: "30%",
    left: showingSearch ? "-50px" : "0px"
  });

  const overlayStyle = useSpring({
    backgroundColor: showingSearch ? "#00000040" : "#00000000"
  });

  return (
    <div>
      {showingSearch && (
        <animated.div
          style={overlayStyle}
          className="fixed top-0 bottom-0 right-0 left-0 overflow:hidden transparent"
          onClick={() => setShowingSearch(false)}
        />
      )}
      <animated.div
        className="fixed bottom-0 top-0 border shadow-xl bg-white flex flex-col"
        style={popoverStyle}
      >
        <div className="py-1 flex justify-between bg-gray-100 border-b items-center flex-0">
          <div className="text-xs  tracking-wider mx-2 text-gray-500">
            Yext Answers
          </div>
          <div className="right-0">
            <button
              type="button"
              className="text-gray-500 mr-2 focus:outline-none hover:text-gray-600 hover:bg-gray-200 rounded p-1"
              onClick={() => setFullScreen(!fullScreen)}
            >
              {fullScreen && <FaCompress />}
              {!fullScreen && <FaExpand />}
            </button>
            <button
              type="button"
              className="text-gray-500 mr-2 focus:outline-none hover:text-gray-600 hover:bg-gray-200 rounded p-1"
              onClick={() => hideSearchPopover()}
            >
              <FaTimes />
            </button>
          </div>
        </div>
        <div className="flex-grow">
          <iframe
            title="Search"
            src="https://silver.yext-cdn.com/?"
            height="100%"
            width="100%"
          />
        </div>
        <div className="flex-0 flex justify-center items-center text-gray-600 py-4 bg-gray-100 cursor-pointer hover:bg-gray-200 border-t">
          <FaComment /> <div className="ml-2">Chat with an Agent</div>
        </div>
      </animated.div>

      <animated.div style={buttonStyle} className="fixed right-0 m-4 mb-16">
        <button
          type="button"
          className="w-16 h-16 rounded-full text-white text-2xl flex items-center justify-center bg-blue-900 shadow-lg hover:bg-blue-800 hover:shadow-xl focus:outline-none"
          onClick={() => setShowingSearch(true)}
        >
          <FaSearch />
        </button>
      </animated.div>
      <animated.button
        className="fixed left-0 focus:outline-none"
        style={badgeStyle}
        onClick={() => setShowingSearch(true)}
      >
        <div
          className="bg-blue-900 text-gray-100 px-1 py-4 shadow hover:shadow-lg hover:bg-blue-800 rounded-r line-snug"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed"
          }}
        >
          Ask a Question
        </div>
        <div
          className="bg-blue-900 text-gray-100 px-1 py-4 shadow hover:shadow-lg mt-2 hover:bg-blue-800  rounded-r  line-snug"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed"
          }}
        >
          Live Chat
        </div>
      </animated.button>
    </div>
  );
});

export default SearchOverlay;
