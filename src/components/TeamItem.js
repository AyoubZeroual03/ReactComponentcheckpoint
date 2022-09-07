import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export const TeamItem = ({
  image = "https://placeholder.com/150",
  first_name = "Abdelkader",
  last_name = "lounis",
  profession = "fullstack web dev",
  socials = {
    facebook: "http://localhost:3000",
    instagram: "http://localhost:3000",
    twitter: "http://localhost:3000",
  },
}) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} style={{ maxHeight: "172px" }} />
      <Card.Body>
        <Card.Title>
          {first_name} {last_name}
        </Card.Title>
        <Card.Text>{profession}</Card.Text>
        <span>
          <a className="text-warning m-2" href={socials.facebook}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a className="text-warning m-2" href={socials.instagram}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className="text-warning m-2" href={socials.twitter}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </span>
      </Card.Body>
    </Card>
  );
};

TeamItem.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  socials: PropTypes.array.isRequired,
};
