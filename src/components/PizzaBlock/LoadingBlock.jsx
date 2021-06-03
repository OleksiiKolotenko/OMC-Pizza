import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="269" rx="6" ry="6" width="277" height="33" />
      <rect x="0" y="315" rx="6" ry="6" width="280" height="80" />
      <circle cx="129" cy="129" r="129" />
      <rect x="130" y="409" rx="21" ry="21" width="146" height="48" />
      <rect x="1" y="418" rx="21" ry="21" width="91" height="31" />
    </ContentLoader>
  );
}

export default LoadingBlock;
