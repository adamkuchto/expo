import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import MovieList from './MovieList';
import { useState } from 'react';
import AddMovie from './AddMovie';

export default function App() {
  const [addMovie, setAddMovie] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filmoteka</Text>
      {!addMovie && <MovieList />}
      {addMovie && <AddMovie setAddMovie={setAddMovie} />}
      {
        !addMovie && <TouchableOpacity style={styles.buttonContainer} onPress={() => setAddMovie(true)}>
          <Text style={styles.buttonText}>Dodaj film</Text>
        </TouchableOpacity>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 50,
    marginBottom: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    textAlign: 'center',
  },
});
