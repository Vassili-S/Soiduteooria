import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({

    Main: {
        flex: 1,
        backgroundColor: '#FFF',
    },

    Profile:
    {
        flex: 1,
        
        ImageBorder: {
            alignSelf: 'center',
            margin: 25,
            borderRadius: 100,
            borderWidth: 5,
            borderColor: 'FF0000',
        },
        Image: {
            width: 200,
            height: 200,
            borderRadius: 100,
            borderWidth: 5,
            borderColor: '#FFF',
        },
    },
});