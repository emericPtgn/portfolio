"use client";
import React from "react";
import Lottie from "react-lottie";

export const LottieAnimation = ({ options, height, width }) => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <Lottie options={options} height={height} width={width} />;
};
