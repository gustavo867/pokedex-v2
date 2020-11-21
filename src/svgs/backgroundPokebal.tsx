import React from "react";
import { Dimensions, View } from "react-native";
import { SvgXml } from "react-native-svg";

const { width, height } = Dimensions.get("window");

const BackgroundPokeBall: React.FC = () => {
  const BackgroundPokeBallSvgMarkup = `
  <svg width="130" height="115" viewBox="0 0 130 115" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M72.5 -15C109.809 -15 140.586 12.7646 145 48.6129H109.615C105.586 31.9761 90.4976 19.6129 72.5 19.6129C54.5024 19.6129 39.4139 31.9761 35.3849 48.6129H0C4.41443 12.7646 35.1905 -15 72.5 -15Z" fill="url(#paint0_linear)"/>
  <path d="M109.615 66.3871H145C140.586 102.235 109.809 130 72.5 130C35.1905 130 4.41443 102.235 0 66.3871H35.3849C39.4139 83.0239 54.5024 95.3871 72.5 95.3871C90.4976 95.3871 105.586 83.0239 109.615 66.3871Z" fill="url(#paint1_linear)"/>
  <path d="M72.5 81.3548C85.7734 81.3548 96.5336 70.6747 96.5336 57.5C96.5336 44.3253 85.7734 33.6452 72.5 33.6452C59.2266 33.6452 48.4664 44.3253 48.4664 57.5C48.4664 70.6747 59.2266 81.3548 72.5 81.3548Z" fill="url(#paint2_linear)"/>
  <defs>
  <linearGradient id="paint0_linear" x1="72.5" y1="-15" x2="72.5" y2="130" gradientUnits="userSpaceOnUse">
  <stop stop-color="white" stop-opacity="0.3"/>
  <stop offset="1" stop-color="white" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="paint1_linear" x1="72.5" y1="-15" x2="72.5" y2="130" gradientUnits="userSpaceOnUse">
  <stop stop-color="white" stop-opacity="0.3"/>
  <stop offset="1" stop-color="white" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="paint2_linear" x1="72.5" y1="-15" x2="72.5" y2="130" gradientUnits="userSpaceOnUse">
  <stop stop-color="white" stop-opacity="0.3"/>
  <stop offset="1" stop-color="white" stop-opacity="0"/>
  </linearGradient>
  </defs>
  </svg>
  
    `;

  const BackgroundPokeBallImage = () => (
    <SvgXml
      xml={BackgroundPokeBallSvgMarkup}
      width={145}
      height="100%"
      style={{
        position: "absolute",
        right: 0,
      }}
    />
  );

  return <BackgroundPokeBallImage />;
};

export default BackgroundPokeBall;
