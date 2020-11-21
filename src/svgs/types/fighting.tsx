import React from "react";
import { SvgXml } from "react-native-svg";

const Fighting: React.FC = () => {
  const FightingMarkup = `
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.31152 2.0784C4.61407 0.883858 5.69625 0 6.98483 0C7.95138 0 8.80182 0.4973 9.2942 1.25H10.1005C10.6014 0.735918 11.3013 0.416667 12.0757 0.416667C13.2112 0.416667 14.1864 1.10294 14.6091 2.08333H15.2842C15.7072 1.81926 16.207 1.66667 16.7424 1.66667C17.8779 1.66667 18.853 2.35294 19.2758 3.33333H21.1115C21.1272 3.33333 21.1419 3.33756 21.1545 3.34493C21.2383 3.33726 21.3233 3.33333 21.409 3.33333C22.932 3.33333 24.1666 4.56794 24.1666 6.09092V14.3597L24.1667 14.375L24.1666 14.3903V14.5094C24.1666 14.5599 24.1652 14.6101 24.1625 14.6601C23.9966 20.3963 18.8386 25 12.5 25C6.05665 25 0.833313 20.243 0.833313 14.375C0.833313 11.5425 2.05035 8.9689 4.03417 7.06421C4.02922 9.82559 4.07586 12.6804 4.29087 12.6314C4.86657 12.5001 4.41676 3.94724 4.31152 2.0784Z" fill="#17171B"/>
  </svg>
    `;

  const FightingIcon = () => (
    <SvgXml xml={FightingMarkup} width={15} height={15} />
  );

  return <FightingIcon />;
};

export default Fighting;
