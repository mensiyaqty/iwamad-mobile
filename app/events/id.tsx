import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { EVENTS } from '../../src/data/events';

export default function EventDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const event = EVENTS.find((item) => item.id === Number(id));

  if (!event) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: 'Event' }} />
        <Text style={styles.notFoundTitle}>Event not found</Text>
        <Text style={styles.detailText}>No event with id {id}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: event.title }} />
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.detailText}>Date: {event.date}</Text>
      <Text style={styles.detailText}>Place: {event.place}</Text>
      <Text style={styles.detailText}>Seats: {event.seats}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  notFoundTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 18,
    marginBottom: 8,
    color: '#333',
  },
});