# react-native-calendar

[![Test](https://github.com/emirdeliz/rn-calendar-simple/actions/workflows/test.yml/badge.svg)](https://github.com/emirdeliz/rn-calendar-simple/actions/workflows/test.yml)
[![Lint](https://github.com/emirdeliz/rn-calendar-simple/actions/workflows/lint.yml/badge.svg)](https://github.com/emirdeliz/rn-calendar-simple/actions/workflows/lint.yml)

<p align="center">
  <img src="https://github.com/emirdeliz/rn-calendar-simple/blob/main/docs/demo.gif" width="300" height="auto" alt="Peggada"/>
</p>

## Installation
```bash
yarn add rn-calendar-simple
```
```bash
npm install rn-calendar-simple
```

## How use
```typescript
import { useState } from 'react';
import { Text, View } from 'react-native';
import { Calendar } from 'rn-calendar-simple';

export default function App() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  return (
    <View>
      <Text>{selectedDate.toLocaleString()}</Text>
      <Calendar value={selectedDate} onChange={setSelectedDate} />
    </View>
  );
}
```

## Props

| **Prop**           | **Type**      | **Description**                              |
| ------------------ | ------------- | -------------------------------------------- |
| **value** (optional) | Date | The calendar value |
| **onChange** (optional)  | (d: Date) => void | The method called when an update is performed  |
| **min** (optional) | Date | The minimum date to be selected |
| **max** (optional) | Date | The maximum date to be selected |
| **monthLabel** (optional) | Array<ReactNode> | The name of the months |
| **weekLabel** (optional) | Array<ReactNode> | the name of the weeks |



