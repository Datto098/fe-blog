import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player"; 

const ContactLottie = ({ src, ...props }) => {
  return (
    <DotLottiePlayer
      src={src}
      background="transparent"
      speed={1}
      className="w-100% h-100%"
      direction={1}
      playMode="normal"
      loop
      autoplay
      {...props}
    />
  );
};

export default ContactLottie;
