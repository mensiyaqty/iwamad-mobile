import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>
      <Text style={styles.name}>Temirlan Nussipkozha</Text>

      <Text style={styles.likesText}>Likes: {likes}</Text>

      <Pressable
        onPress={() => setLikes(likes + 1)}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      >
        <Text style={styles.buttonText}>Like</Text>
      </Pressable>

      <Pressable
        onPress={() => setLikes(0)}
        disabled={likes === 0}
        style={({ pressed }) => [
          styles.resetButton,
          likes === 0 && styles.disabledButton,
          pressed && likes !== 0 && styles.buttonPressed,
        ]}
      >
        <Text style={styles.resetButtonText}>Reset</Text>
      </Pressable>

      <Link href="/events" asChild>
        <Pressable
          style={({ pressed }) => [styles.eventsButton, pressed && styles.buttonPressed]}
        >
          <Text style={styles.buttonText}>Events</Text>
        </Pressable>
      </Link>
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
    marginBottom: 24,
    color: '#333',
  },
  likesText: {
    fontSize: 22,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    minHeight: 44,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 12,
    width: 220,
  },
  resetButton: {
    backgroundColor: '#FF3B30',
    minHeight: 44,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 12,
    width: 220,
  },
  eventsButton: {
    backgroundColor: '#28A745',
    minHeight: 44,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 8,
    width: 220,
  },
  disabledButton: {
    backgroundColor: '#cccccc',
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});