import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'rn-calendar-simple';

export default function App() {
  const [valueAsDate, setValueAsDate] = useState<Date>(new Date());

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <Calendar
        value={valueAsDate}
        onChange={(date) => {
          setValueAsDate(date);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
});
