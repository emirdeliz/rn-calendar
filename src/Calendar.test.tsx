import { useState } from 'react';
import { render, screen } from '@testing-library/react-native';
import { Calendar, CalendarProps } from './Calendar';
import { Text, View } from 'react-native';

const App = (props: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>(props.value || new Date());
  return (
    <View>
      <Text>{formatDateAsPtBr(selectedDate)}</Text>
      <Calendar value={selectedDate} onChange={setSelectedDate} {...props} />
    </View>
  );
}

const formatDateAsPtBr = (date: Date) => { 
  return date.toLocaleDateString('pt-br')
}

describe('main test', () => {
  it('Should have a current date', async () => {
    render(<App />);
    const currentDate = await screen.findByText(formatDateAsPtBr(new Date()));
    expect(currentDate).not.toBeNull();
  });

  it('Should have a custom month', async () => {
    const date = new Date();
    date.setMonth(1);

    const customMonths = ['apple', 'pear'];
    render(<App value={date} monthLabel={customMonths} />);
    
    const calendarTitle = `${customMonths[1]} ${date.getFullYear()}`;
    const result = await screen.findByText(calendarTitle);
    expect(result).not.toBeNull();
  });

  it('Should have a custom week', async () => { 
    const date = new Date();
    date.setMonth(1);

    const customWeek = ['apple', 'pear'];
    render(<App value={date} weekLabel={customWeek} />);

    const result = await screen.findByText(customWeek[0]);
    expect(result).not.toBeNull();
  });
});