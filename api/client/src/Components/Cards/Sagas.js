import React from "react";
import { Card, List, Icon } from "semantic-ui-react";

function Sagas(props) {
  const item = props.info;
  return (
    <Card color="pink" centered>
      <Card.Content>
        <Card.Header>
          <Icon name="star" />
          {item.name.toUpperCase()}
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <List>
          <List.Item> Books quantity: <b>{item.books_quantity}</b> </List.Item>
          <List.Item> Planet: <b>{item.planet}</b> </List.Item>
          <List.Item> Magic System: <b>{item.magic_system}</b> </List.Item>
        </List>
      </Card.Content>
    </Card>
  );
}

export default Sagas;