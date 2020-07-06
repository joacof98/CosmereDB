import React from "react";
import { Segment, Grid, Container, Header, List, Image } from "semantic-ui-react";

function Footer() {
  return (
    <Segment inverted vertical style={{ padding: '3em 0em' }}>
      <Container>
        <Grid divided>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Cosmemap</List.Item>
                <List.Item as="a">Contact 17th Shard</List.Item>
                <List.Item as="a">More investigations</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={8}>
              <Image src='https://i.imgur.com/3lAifEq.png' size='tiny' centered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}

export default Footer;
