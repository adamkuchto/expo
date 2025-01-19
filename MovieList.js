import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from './config';

const MovieList = () => {

    const [movies, setMovies] = useState([])

    async function getData() {
        const colRef = collection(db, 'Filmy')
        const docsSnap = await getDocs(colRef)

        const data = docsSnap.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        setMovies(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {movies.map(movie => (
                    <View key={movie.id} style={styles.movie}>
                        <Text>Tytuł: {movie.Tytuł}</Text>
                        <Text>Reżyser: {movie.Reżyseria}</Text>
                        <Text>Rok: {movie.Rok}</Text>
                    </View>
                ))}
            </ScrollView>
            <Button title="Dodaj film" onPress={() => { }} />
        </View>
    )
}

export default MovieList

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    marginBottom: 20,
  },
  movie: {
    marginVertical: 10,
    backgroundColor: '#E38E49',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  movieText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});
