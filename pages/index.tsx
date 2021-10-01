import React, { useState } from "react";
import { Htag, Button, P, Tag, Rating } from "../components";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Привет мир!</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost">Кнопка</Button>

      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci non,
        reprehenderit quod hic culpa eum magni velit nostrum cumque dolores?
      </P>

      <Tag color="gray" size="big">
        1
      </Tag>
      <Tag color="red" size="big">
        2
      </Tag>
      <Tag color="green" size="small">
        3
      </Tag>
      <Tag color="primary" size="big" href="https://google.com/">
        4
      </Tag>
      <Tag color="ghost" size="big">
        5
      </Tag>

      <Rating rating={4} setRating={setRating} isEditable />
    </>
  );
}
