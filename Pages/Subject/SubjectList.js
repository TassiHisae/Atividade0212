import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import { TouchableHighlight } from 'react-native-gesture-handler';

function SubjectList({ navigation }) {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:3333/Trazer')
            .then(response => {
                console.log(response.data.rows);
                setSubjects(response.data.rows);
            }).catch(error => {
                console.log('Ocorreu um erro - ' + error);
            });
    }, []);

    console.log(subjects);

    if (subjects.length !== 0) {
        const textElements = subjects.map((subject) => {
            const { name, id, descricao, periodo_manha, periodo_tarde, periodo_noite } = subject;
            return (
                <TouchableHighlight onPress={() => {
                    navigation.navigate('Detalhes', { subject })
                }} key={id}>
                    <View style={styles.container}>
                        <Text style={styles.text}>{name}</Text>
                    </View>
                </TouchableHighlight>
            );
        });

        return (
            <ScrollView style={styles.scroll}>
                {textElements}
            </ScrollView>
        );
    }

    return (
        <View style={styles.viewLoading}>
            <Text style={styles.loading}>Carregando os dados...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ba74c2',
        height: 80,
        borderColor: "#c997cf",
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        opacity: 0.8
    },
    text: {
        fontSize: 20,
        flex: 5,
        textAlign: 'center',
        color: '#ffff'
    },
    loading: {
        color: "red",
    },
    scroll: {
        backgroundColor: '#ba74c2'
    },
    viewLoading: {
        alignItems: 'center',
        justifyContent: "center",
        flex: 1
    }

});
export default SubjectList;