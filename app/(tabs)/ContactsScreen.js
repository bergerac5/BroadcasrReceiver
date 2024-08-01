import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import * as Contacts from 'expo-contacts';

const ContactsScreen = ({ isDarkMode }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      // Request permission to access contacts
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        // Fetch contacts
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          // Set contacts to state
          setContacts(data);
        }
      } else {
        console.log("Contacts permission denied");
      }
    })();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
      <Text style={[styles.header, { color: isDarkMode ? '#fff' : '#000' }]}>Contacts List</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.contact, { borderBottomColor: isDarkMode ? '#444' : '#ccc' }]}>
            <Text style={[styles.contactName, { color: isDarkMode ? '#fff' : '#000' }]}>
              {item.name}
            </Text>
            <Text style={{ color: isDarkMode ? '#aaa' : '#000' }}>
              {item.phoneNumbers.length > 0 ? item.phoneNumbers[0].number : 'No number'}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contact: {
    padding: 10,
    borderBottomWidth: 1,
  },
  contactName: {
    fontSize: 18,
  },
});

export default ContactsScreen;
