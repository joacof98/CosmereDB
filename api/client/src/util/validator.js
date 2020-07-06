import {
  getOneCharacter,
  getOneMagicSystem,
  getOneBook,
  getOnePlanet,
  getOneSaga,
  getAllData,
} from "./queries";

import { charList, booksList, planetsList, sagasList, msList } from "./lists";

const validateInputData = (input) => {
    var resultQuery = "";
    if(charList.includes(input)) {
        resultQuery = getOneCharacter(input);
    } 
    else if(booksList.includes(input)) {
        resultQuery = getOneBook(input);
    }
    else if(planetsList.includes(input)) {
        resultQuery = getOnePlanet(input);
    }
    else if(sagasList.includes(input)) {
        resultQuery = getOneSaga(input);
    }
    else if(msList.includes(input)) {
        resultQuery = getOneMagicSystem(input);
    }
    else if(input === "All Magic Systems") {
        resultQuery = getAllData("magic-systems");
    }
    else {
        const tableName = input.split(" ")[1].toLowerCase();
        resultQuery = getAllData(tableName);
    }

    return resultQuery;
}

export {validateInputData};
