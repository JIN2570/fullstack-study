import React from "react";
import Card from "./Card";

function ProfileCard(props) {
  return (
    <Card
    title='Jin Lee'
    backgroundColor='#dee7ff'
    >
      <p>안녕하세요. 진행입니다.</p>
      <p>리액트 개발 공부중입니다.</p>
    </Card>

  );
}

export default ProfileCard;