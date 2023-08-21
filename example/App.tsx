import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Calendar } from 'rn-calendar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Calendar value={new Date()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
