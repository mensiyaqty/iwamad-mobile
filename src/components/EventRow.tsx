import React from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { EventItem } from '../data/events';

interface EventRowProps {
  event: EventItem;
  isSaved: boolean;
  onPress: () => void;
  onLongPress: () => void;
}

export function EventRow({ event, isSaved, onPress, onLongPress }: EventRowProps) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({ pressed }) => [
        styles.card,
        isSaved && styles.cardSaved,
        pressed && styles.cardPressed,
      ]}
    >
      <View style={styles.headerRow}>
        <Text style={styles.title}>{event.title}</Text>
        {isSaved && <Text style={styles.savedBadge}>★ Saved</Text>}
      </View>
      <Text style={styles.meta}>
        {event.date} • {event.place}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 44,
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  cardSaved: {
    borderColor: '#f59e0b',
    backgroundColor: '#fffbeb',
  },
  cardPressed: {
    backgroundColor: '#e6f0ff',
    borderColor: '#007AFF',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
    flex: 1,
    marginRight: 8,
  },
  savedBadge: {
    fontSize: 14,
    fontWeight: '700',
    color: '#b45309',
  },
  meta: {
    fontSize: 14,
    color: '#555',
  },
});