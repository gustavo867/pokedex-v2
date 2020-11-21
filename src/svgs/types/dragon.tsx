import React from "react";
import { SvgXml } from "react-native-svg";

const Dragon: React.FC = () => {
  const dragonMarkup = `
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7128 12.4454C13.8822 12.342 14.026 12.1255 14.1419 11.8849C15.6675 12.5084 16.7397 13.9819 16.7397 15.7002C16.7397 17.9829 14.8476 19.8334 12.5136 19.8334C11.5555 19.8334 10.6718 19.5216 9.963 18.996C9.73048 18.8859 9.53917 18.7802 9.38263 18.6936C9.13981 18.5594 8.98058 18.4713 8.88087 18.4851C8.58942 18.5253 8.67404 18.7935 8.75094 19.0371C8.80314 19.2025 8.85182 19.3567 8.77648 19.4203C8.69767 19.4869 8.4424 19.2435 8.14411 18.9591C7.73805 18.5719 7.25231 18.1088 7.02326 18.2479C6.84215 18.3579 7.01798 18.6563 7.23322 19.0215L7.24918 19.0486C7.3401 19.203 7.44547 19.3603 7.54161 19.5037C7.73707 19.7953 7.8945 20.0302 7.81574 20.07C7.72052 20.118 7.05714 19.6703 6.49811 19.0486C6.28234 18.8087 6.07335 18.5487 5.87911 18.307V18.307C5.45397 17.778 5.09977 17.3373 4.90094 17.3895C4.66176 17.4523 4.84269 17.9457 5.10856 18.4204C5.23287 18.6424 5.37911 18.8685 5.50573 19.0643V19.0643C5.70265 19.3687 5.85211 19.5997 5.79791 19.6281C5.72477 19.6664 5.08116 19.0388 4.64403 18.2479C4.38438 17.7781 4.16637 17.259 3.98986 16.8387C3.79845 16.3829 3.65587 16.0434 3.56198 16.0092C3.23578 15.8905 3.23578 16.5556 3.36661 17.5155C3.38367 17.6408 3.40909 17.7721 3.44038 17.9059C4.70914 22.011 8.60665 25 13.2179 25C18.8584 25 23.4309 20.5279 23.4309 15.0113C23.4309 9.76074 19.2888 5.4564 14.0262 5.05342C14.0328 4.80607 14.1619 4.31558 14.1619 4.31558C14.1619 4.31558 15.091 2.06773 15.1401 1.5874C15.1433 1.55552 15.1472 1.52087 15.1513 1.48398C15.2092 0.964985 15.3169 0 14.4867 0C14.0433 0 13.8372 0.329816 13.6014 0.707026V0.707031C13.5109 0.851841 13.4159 1.00364 13.3016 1.14644C12.4779 2.17498 11.093 3.45941 10.3077 4.14371C8.64782 5.59004 7.0193 6.77871 6.0695 7.47197L6.06945 7.47202C5.63746 7.7873 5.34591 8.00015 5.25568 8.08809C4.5757 8.75098 2.1376 13.1487 2.1376 13.1487C2.1376 13.1487 1.34915 14.5597 1.6294 14.8458C1.90965 15.132 2.58547 15.0664 2.58547 15.0664C2.58547 15.0664 11.6646 12.9835 12.4775 12.8193C12.6963 12.775 12.8508 12.7495 12.9694 12.7299C13.2914 12.6768 13.3492 12.6672 13.7128 12.4454ZM7.29352 9.76875C6.80617 10.232 5.99791 11.3377 5.99791 11.3377C5.99791 11.3377 7.50006 11.4302 8.32736 10.6438C9.1547 9.85742 8.96515 8.51724 8.96515 8.51724C8.96515 8.51724 7.78082 9.30552 7.29352 9.76875Z" fill="#17171B"/>
  </svg>
    `;

  const DragonIcon = () => <SvgXml xml={dragonMarkup} width={15} height={15} />;

  return <DragonIcon />;
};

export default Dragon;
