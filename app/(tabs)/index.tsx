import { Stack } from 'expo-router';
import EventListitem from '~/components/EventListitem';
import { FlatList } from 'react-native';
import events from '~/assets/events.json';

export default function Events() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />

      <FlatList data={events} renderItem={({ item }) => <EventListitem event={item} />} />

      {/* <EventListitem event={events[0]} />
      <EventListitem event={events[1]} />
      <EventListitem event={events[2]} />
      <EventListitem event={events[3]} />
      <EventListitem event={events[4]} /> */}
    </>
  );
}
