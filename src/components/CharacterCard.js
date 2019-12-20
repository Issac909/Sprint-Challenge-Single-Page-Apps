import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import SearchForm from './SearchForm';

console.log(SearchForm);
export default function CharacterCard(props) {
  return (
    <>
      <SearchForm onChange = {props.onChange} search = {props.search} />
      <Card id = {props.id}>
        <CardTitle>{props.name}</CardTitle>
        <CardBody>
          <CardImg src = {props.img} alt = {props.alt} />
          <CardText>{props.gender}</CardText>
          <CardText>{props.status}</CardText>
        </CardBody>
      </Card>
    </>
  );
}
