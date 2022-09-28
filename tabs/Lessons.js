import { StatusBar } from 'expo-status-bar';
import { Text, Button, Image, SafeAreaView, ScrollView, View, ImageBackground } from 'react-native';
import { Styles } from '../styles/Main';

export default function App() {

  return (
    <SafeAreaView style={Styles.Main}>
        <ScrollView>
          <ImageBackground source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Road_in_Norway.jpg/1200px-Road_in_Norway.jpg' }} style={Styles.Lessons.Task} imageStyle={Styles.Lessons.TaskImage}>
            <Text style={Styles.Lessons.Task.Text}>Traffic as a System</Text>
            <Text style={Styles.Lessons.Task.Description}>Basics of Traffic Rules. General Duties of the Driver. Signals Given by Driver</Text>
          </ImageBackground>
        </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}