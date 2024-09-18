import React from "react";
import ContentLoader from "react-content-loader";

const MyInstagramLoader = () => (
  <ContentLoader
    speed={2}
    width={900}
    height={320}
    viewBox="0 0 900 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="31" cy="31" r="15" />
    <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
    <rect x="58" y="34" rx="2" ry="2" width="190" height="10" />
    <rect x="50" y="60" rx="2" ry="2" width="400" height="400" />
    <rect x="59" y="71" rx="0" ry="0" width="468" height="251" />
    <rect x="312" y="59" rx="0" ry="0" width="215" height="17" />
  </ContentLoader>
);

export default MyInstagramLoader;
