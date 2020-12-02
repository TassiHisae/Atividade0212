import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import DataPeriod from './DataPeriod';

function SubjectDetails({ route }) {
    const { subject } = route.params;
    const { descricao, periodo_manha, periodo_tarde, periodo_noite } = subject;


    return (
        <ScrollView style={styles.scroll}>
            <DataPeriod morning={periodo_manha} afternoon={periodo_tarde} night={periodo_noite} />
            <View style={styles.view}>
                <View style={styles.viewDescLabel}>
                    <Text>Descrição:</Text>
                </View>
                <View style={styles.viewDesc}>
                    <Text>{descricao}</Text>
                </View>
            </View>
        </ScrollView>
    );
}





const styles = StyleSheet.create({
    scroll: {
        paddingTop: 30,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    view: {
        marginTop: 10,
        padding: 10,
        flexDirection: "column",
        borderWidth: 1,
        borderColor: 'purple',
    },
    viewDescLabel: {
        justifyContent: "flex-start",
    },
    viewDesc: {
        marginTop: 10,
        justifyContent: "flex-end",
    },
});

export default SubjectDetails;