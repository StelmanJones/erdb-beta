import { SimpleGrid } from '@mantine/core';
import { InputWithButton } from "./InputSubmit";

export function SettingsGrid() {
  return (
    <SimpleGrid cols={1}>
      <div><InputWithButton/></div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  )
}