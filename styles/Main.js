import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({

    Main: {
        flex: 1,
        backgroundColor: '#FFF',
    },

    Profile:{
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

    Lessons: {
        flex: 1,

        Task: {
            width: '90%',
            height: 100,
            backgroundColor: '#000',
            margin: '5%',
            borderRadius: '25%',
            border: 1,

            Text: {
                width: '100%',
                marginTop: 10,
                paddingLeft: 12,
                paddingRight: 12,
                color: 'white',
                fontSize: 24,
                fontWeight: 'bolt',
            },

            Description: {
                paddingLeft: 12,
                paddingRight: 12,
                color: 'white',
                fontSize: 16,
            },
        },
        TaskImage: {
            width: '100%',
            height: '100%',
            borderRadius: '25%',
            backgroundColor: '#000',
            opacity: 0.6,
        },
    },
});