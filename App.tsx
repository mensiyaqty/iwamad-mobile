import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>
      <Text style={styles.name}>Temirlan Nussipkozha</Text>

      <Text style={styles.likesText}>Likes: {likes}</Text>

      <Pressable 
        onPress={() => setLikes(likes + 1)} 
        style={styles.button}
      >
        <Text style={styles.buttonText}>Like</Text>
      </Pressable>

      <Pressable 
        onPress={() => setLikes(0)} 
        disabled={likes === 0} 
        style={[styles.resetButton, likes === 0 && styles.disabledButton]}
      >
        <Text style={styles.resetButtonText}>Reset</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  name: {
    fontSize: 32,
    marginBottom: 30,
    color: '#333',
  },
  likesText: {
    fontSize: 22,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    minHeight: 44,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 12,
    width: 200,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  resetButton: {
    backgroundColor: '#FF3B30',
    minHeight: 44,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: 200,
  },
  disabledButton: {
    backgroundColor: '#cccccc',
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});