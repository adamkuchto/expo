import { TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from './config'

const AddMovie = ({ setAddMovie, refreshMovies }) => {

    const [title, setTitle] = useState('')
    const [director, setDirector] = useState('')
    const [year, setYear] = useState('')

    async function addMovie(e) {

        const newMovie = {
            Tytuł: title,
            Reżyseria: director,
            Rok: year
        }
        const colRef = collection(db, 'Filmy')
        await addDoc(colRef, newMovie)

        setAddMovie(false)
        refreshMovies()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dodaj nowy Film</Text>
            <TextInput
                value={title}
                onChangeText={text => setTitle(text)}
                style={styles.input}
                placeholder='Tytuł...' name='Tytuł'
            />
            <TextInput
                value={director}
                onChangeText={text => setDirector(text)}
                style={styles.input}
                placeholder='Reżyser...' name='Reżyseria'
            />
            <TextInput
                value={year}
                onChangeText={text => setYear(text)}
                style={styles.input}
                placeholder='Rok...' name='Rok'
            />
            <TouchableOpacity style={styles.addButton} onPress={addMovie}>
                <Text style={styles.buttonText}>Dodaj</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setAddMovie(false)}>
                <Text style={styles.buttonText}>Cofnij</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddMovie

const styles = StyleSheet.create({
  input: {
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
    padding: 10,
    margin: 10,
    width: '100%', // Zmiana szerokości na 100%
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 20, // Zmniejszenie marginesu górnego
    marginBottom: 10, // Zmniejszenie marginesu dolnego
    width: '100%', // Zmiana szerokości na 100%
    textAlign: 'center', // Wyśrodkowanie tekstu
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'flex-start', // Umieszczenie elementów wyżej
    padding: 20,
    width: '100%', // Zmiana szerokości na 100%
  },
  addButton: {
    width: '100%', // Zmiana szerokości na 100%
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginTop: 10,
  },
  cancelButton: {
    width: '100%', // Zmiana szerokości na 100%
    alignItems: 'center',
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
});
