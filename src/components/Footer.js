import facebookLogo from "../images/socials/facebook.png";
import instagramLogo from "../images/socials/instagram.png";
import twitterLogo from "../images/socials/twitter.png";
export const Footer = () => {
  return (
    <footer className="bg-dark mt-5 p-3 text-center">
      <span>
        <a href="#" className="m-3">
          <img src={facebookLogo} width="20" height="20" alt="social fb" />
        </a>
        <a href="#" className="m-3">
          <img src={instagramLogo} width="20" height="20" alt="social fb" />
        </a>
        <a href="#" className="m-3">
          <img src={twitterLogo} width="20" height="20" alt="social fb" />
        </a>
      </span>
    </footer>
  );
};
