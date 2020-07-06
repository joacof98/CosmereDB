import React from "react";
import { Card, List, Icon } from "semantic-ui-react";

function Characters(props) {
  const item = props.info;
  return (
    <Card fluid color="orange">
      <Card.Content>
        <Card.Header>
          <Icon name="sun" />
          {item.name.toUpperCase()}
        </Card.Header>
        <Card.Meta>{item.is_alive}</Card.Meta>
        <Card.Description>
          <h4>{item.description}</h4>
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <List>
          <List.Item> Alias: <b>{item.alias}</b> </List.Item>
          <List.Item> Residence: <b>{item.residence}</b> </List.Item>
          <List.Item> Ethnicity: <b>{item.ethnicity}</b> </List.Item>
          <List.Item> Books: <b>{item.books}</b> </List.Item>
          <List.Item> Saga: <b>{item.saga}</b> </List.Item>
          <List.Item> Planet: <b>{item.planet}</b> </List.Item>
        </List>
      </Card.Content>
    </Card>
  );
}

export default Characters;
