// components/HighlightResponse.js
import hljs from "highlight.js";
import "highlight.js/styles/github.css"; // Choose a style that suits your design
import Highlight from "react-highlight";

import { useEffect } from "react";

export default function HighlightResponse({ response }) {
  useEffect(() => {
    // Find and highlight code blocks
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, [response]);

  return (
    <Highlight className="text-wrap">
      <div
        className="highlighted-response"
        dangerouslySetInnerHTML={{ __html: response }}
      />
    </Highlight>
  );
}
