import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native-web';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Album API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/albums';

    // Fetch data from API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setData(data); // Set the data in the state
        setLoading(false); // Set loading to false
      })
      .catch(error => {
        setError(error); // Handle errors
        setLoading(false); // Set loading to false
      });
  }, []); // Empty dependency array means this runs only once, when the component mounts

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Album List</Text>
      <View style={styles.dataContainer}>
        {data && data.map((album) => (
          <View key={album.id} style={styles.item}>
            <Text style={styles.title}>Album ID: {album.id}</Text>
            <Text style={styles.albumTitle}>Title: {album.title}</Text>
            <Text>User ID: {album.userId}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dataContainer: {
    marginTop: 20,
  },
  item: {
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  albumTitle: {
    fontStyle: 'italic',
    marginBottom: 5,
  },
});

export default Home;
