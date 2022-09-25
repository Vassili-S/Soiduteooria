import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import { StyleSheet, Text, Image, SafeAreaView, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.header.text}>Profile</Text>
      </View>

      {/* Main */}
      <View style={styles.main}>
        <View style={styles.main.profileBorder}>
          <Image style={styles.main.profileImage} source={{ uri: 'https://sun9-east.userapi.com/sun9-42/s/v1/ig2/68bm_BBW1yoLlgkuTYDl3mjVTjnBsDI2IlhmGFH6E-2xz4OXzLg5b2G9OQrn-sRGU_GNqTHU_a4vsRnqPGuIAjFL.jpg?size=400x400&quality=96&crop=114,23,727,727&ava=1', }} />
        </View>
        <View style={styles.main.profileName}>
          <Text style={styles.main.profileName.name}>Vassili</Text>
          <Text style={styles.main.profileName.category}>AM B</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,

    text: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  },

  main: {
    alignItems: 'center',

    profileBorder: {
      margin: 5,
      borderRadius: 100,
      borderWidth: 5,
      borderColor: "#FF0000",
    },

    profileImage: {
      width: 200,
      height: 200,
      borderRadius: 100,
      borderWidth: 2.5,
      borderColor: "#FFF"
    },

    profileName: {
      marginTop: -65,
      width: 100,
      height: 100,
      backgroundColor: '#FFF',
      borderRadius: 500,
      alignItems: 'center',
      justifyContent: 'center',

      name: {
        fontSize: 20,
      },

      category: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#EA4B4B',
      },

    },
  },

});
