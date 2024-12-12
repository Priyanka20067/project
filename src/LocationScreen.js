import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';

export default function LocationScreen() {
  return (
    <View style={styles.container}>
      {/* Map Background */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        scrollEnabled={false}
      />
      
      {/* Location Box */}
      <View style={styles.locationBox}>
        <Text style={styles.title}>Where are you?</Text>
        <Text style={styles.description}>Blah blah blah blah blah blah blah blah blah blah blah</Text>
        <TouchableOpacity style={styles.locateButton}>
          <Text style={styles.buttonText}>Locate me</Text>
        </TouchableOpacity>
        <Text style={styles.manualSelect}>Select location manually</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  locationBox: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  locateButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  manualSelect: {
    color: '#007BFF',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});