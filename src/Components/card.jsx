import React, { useState } from "react";
import {
  CardWrapper,
  ProfileImg,
  Name,
  Bio,
  ToggleButton,
} from "../styles/Card.styles";

export default function Card() {
  const [isLarge, setIsLarge] = useState(true);

  return (
    <CardWrapper isLarge={isLarge}>
      <ProfileImg
        src='https://i.ibb.co.com/TxTvdxNt/488670191-3862163097384348-3298242418708695290-n.jpg'
        alt='Profile'
      />
      <Name>Tahseen Hossain</Name>
      <Bio>
        I am a recent Computer Science graduate working as a Full-Stack
        Developer.
      </Bio>
      <ToggleButton onClick={() => setIsLarge(!isLarge)}>
        Toggle Size
      </ToggleButton>
    </CardWrapper>
  );
}
