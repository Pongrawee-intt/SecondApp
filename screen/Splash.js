import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native'; // Corrected 'lmage' to 'Image'

const Flex = () => { // Corrected function name to uppercase 'Flex'
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Image style={styles.image} source={require('../assets/lru.png')} />  
            </View>

            <View style={styles.section}>
                <Text style={styles.text}>สมุนไพรท้องถิ่นไทเลย</Text> {/* Corrected 'Text' to 'text' */}
            </View>

            <View style={styles.section}>
                <Image style={styles.coverScreenImage} source={require('../assets/สมุนไพร.jpg')} />
            </View>

            <View style={styles.screenSection}>
                <Image style={styles.image} source={require('../assets/ขิง.jpg')} /> {/* Corrected 'image' to 'Image' */}
                <Image style={styles.image} source={require('../assets/พริก.jpg')} />
                <Image style={styles.image} source={require('../assets/หว่านห่างจรเข้.jpg')} />
            </View>

            <View style={styles.section}>
                <Text style={styles.text}>มหาวิทยาลัยราชภัฏเลย</Text> {/* Corrected 'Text' to 'text' */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'blue',
        flexDirection: 'column',
    },
    section: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    coverScreenImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginTop: 100,
    },
    screenSection: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        flexDirection: 'row',
        marginTop: 100,
    },
    image: {
        width: 100,
        height: 100,
        marginHorizontal: 10,
    },
    text: { // Changed 'Text' to 'text' for consistency
        textAlign: 'center',
        fontSize: 32,
        color: 'white',
    },
});

export default Flex; // Corrected export name to uppercase 'Flex'
