import React from "react";
import { Card, List, Icon } from "semantic-ui-react";

function Books(props) {
  const item = props.info;
  return (
    <Card color="red" centered>
      <Card.Content>
        <Card.Header>
          <Icon name="book" />
          {item.name.toUpperCase()}
        </Card.Header>
        <Card.Meta>Published {item.pub_date.split('T')[0]}</Card.Meta>
      </Card.Content>
      <Card.Content>
        <List>
          <List.Item> Pages: <b>{item.pages}</b> </List.Item>
          <List.Item> Saga: <b>{item.saga}</b> </List.Item>
        </List>
      </Card.Content>
    </Card>
  );
}

export default Books;