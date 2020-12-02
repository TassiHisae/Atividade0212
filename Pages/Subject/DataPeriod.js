import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

function DataPeriod({ morning, afternoon, night }) {
    const okImg = require('../../assets/icons/true.png');
    const NotOkImg = require('../../assets/icons/false.png');

    function verifyState(bool) {
        if (bool) {
            return (
                okImg
            );
        } else {
            return (
                NotOkImg
            );
        }
    }
    return (
        <View style={styles.view}>
            <View style={styles.viewPeriod}>
                <Text style={styles.period}>Período: </Text>
            </View>
            <View style={styles.viewImg}>
                <View style={styles.viewImgItems}>
                    <Text style={styles.viewImgLabel}> Manhã: </Text>
                    <Image source={verifyState(morning)} key={'Morning'} style={styles.img} />
                </View>
                <View style={styles.viewImgItems}>
                    <Text style={styles.viewImgLabel}> Tarde: </Text>
                    <Image source={verifyState(afternoon)} key={'Afternoon'} style={styles.img} />
                </View>
                <View style={styles.viewImgItems}>
                    <Text style={styles.viewImgLabel}> Noite: </Text>
                    <Image source={verifyState(night)} key={'Night'} style={styles.img} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: 'purple',
        padding: 10,
        alignItems: 'center'
    },
    viewPeriod: {
        justifyContent: "flex-start",
    },
    viewImg: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    viewImgItems: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    viewImgLabel: {
        paddingTop: 5
    },
    img: {
        width: 30,
        height: 30
    },
    period: {
        justifyContent: "space-around",
    }
});

export default DataPeriod;