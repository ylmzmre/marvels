import React from "react";
import _ from "lodash";
import CharacterListItem from "./character-list-item";

const CharacterList = props => {
  return (
    <div className="col-md-4">
      {_.map(props.characters, (item, index) => (
        <CharacterListItem key={index} character={item} onCharacterSelect={props.onCharacterSelect}></CharacterListItem>
      ))}
    </div>
  );
};

export default CharacterList;
