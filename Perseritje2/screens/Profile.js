import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native-web';

const Profile = () => {
  // State to hold form input values
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);

    // API URL for posting data
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    const postData = {
      title: title,
      body: body,
      userId: 1, // You can set this to any value, this is typically used to associate with a user.
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Failed to create post');
      }

      const jsonResponse = await response.json();
      setResponse(jsonResponse); // Set the response data
      setLoading(false); // Set loading to false after the response
    } catch (error) {
      setError(error.message); // Handle error
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create a Post</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter post title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter post body"
        value={body}
        onChangeText={(text) => setBody(text)}
        multiline
      />

      <Button title="Submit Post" onPress={handleSubmit} />

      {loading && <Text style={styles.loadingText}>Submitting...</Text>}

      {response && (
        <View style={styles.responseContainer}>
          <Text style={styles.responseText}>Post Created Successfully!</Text>
          <Text>ID: {response.id}</Text>
          <Text>Title: {response.title}</Text>
          <Text>Body: {response.body}</Text>
        </View>
      )}

      {error && <Text style={styles.errorText}>Error: {error}</Text>}
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
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  loadingText: {
    marginTop: 10,
    color: 'blue',
  },
  responseContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e1f7d5',
    borderRadius: 5,
  },
  responseText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    marginTop: 10,
    color: 'red',
  },
});

export default Profile;
