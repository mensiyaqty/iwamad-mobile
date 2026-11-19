import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import { router } from 'expo-router';
import { EVENTS, EventItem } from '../../src/data/events';
import { EventRow } from '../../src/components/EventRow';

export default function EventsScreen() {
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [query, setQuery] = useState('');

  const handleToggleSave = (id: number) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const normalizedQuery = query.trim().toLowerCase();
  const filteredEvents = EVENTS.filter((event) =>
    event.title.toLowerCase().includes(normalizedQuery)
  );

  const renderItem = ({ item }: { item: EventItem }) => (
    <EventRow
      event={item}
      isSaved={savedIds.includes(item.id)}
      onPress={() => router.push(`/events/${item.id}`)}
      onLongPress={() => handleToggleSave(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.hint}>Long-press an event to save it. Saved: {savedIds.length}</Text>

      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search events"
        style={styles.searchInput}
      />

      <FlatList
        data={filteredEvents}
        keyExtractor={(e) => String(e.id)}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.emptyText}>No events match</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  hint: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
  },
  searchInput: {
    minHeight: 44,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    marginBottom: 14,
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 24,
  },
});