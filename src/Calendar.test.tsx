import { useState } from 'react';
import { render } from '@testing-library/react-native';
import { Calendar } from './Calendar';
import { Text, View } from 'react-native';

const App = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  return (
    <View>
      <Text>{formatDateAsPtBr(selectedDate)}</Text>
      <Calendar value={selectedDate} onChange={setSelectedDate} />
    </View>
  );
}

const formatDateAsPtBr = (date: Date) => { 
  return date.toLocaleDateString('pt-br')
}

describe('main test', () => {
  it('multiply 4 * 3 to equal 12', () => {
    render(<App />);
  });
});