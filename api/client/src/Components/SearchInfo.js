import React from "react";
import { Container, Segment, Card } from "semantic-ui-react";
import "../css/home.css";
import { charList, booksList, planetsList, sagasList, msList } from "../util/lists";

import Characters from "./Cards/Characters";
import Books from "./Cards/Books";
import Sagas from "./Cards/Sagas";
import Planets from "./Cards/Planets";
import MagicSystems from "./Cards/MagicSystems";

// El map no es general, por lo tanto en caso de que
// no exista la informacion, hay que renderizar distintos tipos de Cards.
function SearchInfo(props) {
  const data = props.info;
  return (
    <Container>
      <Segment id="infoBg" padded raised color="teal" style={{ marginBottom: "15px" }}>  
        <Card.Group>
          {data.map((item) => {
            if(charList.includes(item.name)) {
              return <Characters key={item.char_id} info={item} />
            }
            else if(booksList.includes(item.name)) {
              return <Books key={item.book_id} info={item} />
            }
            else if(sagasList.includes(item.name)) {
              return <Sagas key={item.saga_id} info={item} />
            }
            else if(planetsList.includes(item.name)) {
              return <Planets key={item.planet_id} info={item} />
            }
            else if(msList.includes(item.name)) {
              return <MagicSystems key={item.magic_system_id} info={item} />
            }
          })}
        </Card.Group>
      </Segment>
    </Container>
  );
}

export default SearchInfo;
