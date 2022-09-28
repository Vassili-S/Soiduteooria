import { StatusBar } from 'expo-status-bar';
import { Text, Button, Image, SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';
import { Styles } from '../styles/Main';

export default function App({navigation}) {

  return (
    <SafeAreaView style={Styles.Main}>
        <ScrollView>
            <View style={Styles.Profile.ImageBorder}>
                <Image style={Styles.Profile.Image} source={{uri: 'https://sun9-east.userapi.com/sun9-42/s/v1/ig2/68bm_BBW1yoLlgkuTYDl3mjVTjnBsDI2IlhmGFH6E-2xz4OXzLg5b2G9OQrn-sRGU_GNqTHU_a4vsRnqPGuIAjFL.jpg?size=400x400&quality=96&crop=114,23,727,727&ava=1',}}/>
            </View>
        </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}