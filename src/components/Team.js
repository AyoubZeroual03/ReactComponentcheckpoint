import { Container, Row, Col } from "react-bootstrap";
import { TeamItem } from "./TeamItem";
import { ourTeamData } from "../data";
export const Team = () => {
  return (
    <Container className="team" id="team">
      <Row>
        <h1 className="text-center">Our team</h1>
      </Row>
      <Row>
        {ourTeamData &&
          ourTeamData.map((member) => {
            return (
              <Col md={3} key={member.id}>
                <TeamItem
                  first_name={member.first_name}
                  last_name={member.last_name}
                  profession={member.profession}
                  image={member.image}
                  socials={member.socials}
                />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};
