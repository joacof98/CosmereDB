import React, { useEffect } from "react";
import { Container, Segment, Header, Icon } from "semantic-ui-react";
import "../css/home.css";
import WOW from 'wowjs';

function NoDataMsj() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <Container>
      <Segment id="infoBg" placeholder style={{marginBottom: '15px'}}>
        <Header icon as="h1">
          <Icon
            name="hand point up outline"
            color="teal"
            className="wow fadeIn"
            data-wow-delay="0.5s"
          />
          Theres nothing to show, try to search above.
        </Header>
      </Segment>
    </Container>
  );
}

export default NoDataMsj;