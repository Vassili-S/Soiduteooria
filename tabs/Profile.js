import { StatusBar } from 'expo-status-bar';
import { Text, Button, Image, SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';
import { Styles } from '../styles/Main';

export default function App({navigation}) {

  return (
    <SafeAreaView style={Styles.Main}>
        <Text>Profile</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}