import React from "react";
import { Card, List } from "semantic-ui-react";

function MagicSystems(props) {
  const item = props.info;
  return (
    <Card fluid color="teal" centered>
      <Card.Content>
        <Card.Header>
          🟈
          {item.name.toUpperCase()}
        </Card.Header>
        <Card.Description>
          <h4>{item.description}</h4>
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <List>
          <List.Item> Saga: <b>{item.saga}</b> </List.Item>
        </List>
      </Card.Content>
    </Card>
  );
}

export default MagicSystems;