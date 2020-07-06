import React from "react";
import { Card, List, Icon } from "semantic-ui-react";

function Planets(props) {
  const item = props.info;
  return (
    <Card color="yellow" centered>
      <Card.Content>
        <Card.Header>
          <Icon name="sun outline" />
          {item.name.toUpperCase()}
        </Card.Header>
        <Card.Description>
          <b>{item.description}</b>
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <List>
          <List.Item> Shards: <b>{item.shard}</b> </List.Item>
          <List.Item> Magic System: <b>{item.magic_system}</b> </List.Item>
        </List>
      </Card.Content>
    </Card>
  );
}

export default Planets;