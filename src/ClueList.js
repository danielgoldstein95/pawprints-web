import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default class ClueList extends React.Component {

  render() {
    return (
      <ListGroup>
        {this.props.clues.map(clue => <ListGroup.Item>{this.clueString(clue)}</ListGroup.Item>)}
      </ListGroup>
    );
  }

  clueString = function(clue) {
    return `(${clue.clueListId}${clue.clueNum}) ${clue.title}`
  };
}