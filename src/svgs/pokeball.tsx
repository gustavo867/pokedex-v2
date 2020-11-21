import React from "react";
import { Dimensions, View } from "react-native";
import { SvgXml } from "react-native-svg";

const { width, height } = Dimensions.get("window");

const PokeBall: React.FC = () => {
  const pokeBallSvgMarkup = `
    <svg width="414" height="207" viewBox="0 0 414 207" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M207 -207C313.525 -207 401.396 -127.727 414 -25.3742H312.97C301.466 -72.8752 258.386 -108.174 207 -108.174C155.614 -108.174 112.534 -72.8752 101.03 -25.3742H0C12.604 -127.727 100.475 -207 207 -207Z" fill="url(#paint0_linear)"/>
        <path d="M312.97 25.3742H414C401.396 127.727 313.525 207 207 207C100.475 207 12.604 127.727 0 25.3742H101.03C112.534 72.8751 155.614 108.174 207 108.174C258.386 108.174 301.466 72.8751 312.97 25.3742Z" fill="url(#paint1_linear)"/>
        <path d="M207 68.1096C244.898 68.1096 275.62 37.6159 275.62 0C275.62 -37.6159 244.898 -68.1097 207 -68.1097C169.102 -68.1097 138.38 -37.6159 138.38 0C138.38 37.6159 169.102 68.1096 207 68.1096Z" fill="url(#paint2_linear)"/>
        <defs>
        <linearGradient id="paint0_linear" x1="207" y1="0" x2="207" y2="185.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F5F5F5"/>
        <stop offset="1" stop-color="white"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="207" y1="0" x2="207" y2="185.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F5F5F5"/>
        <stop offset="1" stop-color="white"/>
        </linearGradient>
        <linearGradient id="paint2_linear" x1="207" y1="0" x2="207" y2="185.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F5F5F5"/>
        <stop offset="1" stop-color="white"/>
        </linearGradient>
        </defs>
    </svg>
    `;

  const PokeBallImage = () => (
    <SvgXml
      xml={pokeBallSvgMarkup}
      width={width}
      height={height}
      style={{
        position: "absolute",
        top: -height * 0.37,
      }}
    />
  );

  return <PokeBallImage />;
};

export default PokeBall;
