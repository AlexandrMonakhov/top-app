import React from "react";
import { Htag, Button } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Привет мир!</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost">Кнопка</Button>
    </>
  );
}
