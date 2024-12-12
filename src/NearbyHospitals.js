import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const hospitals = [
  {
    id: '1',name: 'ABC Hospital', specialization: 'Emergency/Surgery/Doctors', experience: '30+ Years of experience inCardiovascular surgery', rating: '★★★★★',reviews: '150+',distance: '1 km',
    image: ('../assets/image/image2.png') 
  },
  {
    id: '2',
    name: 'EFG Hospital',
    specialization: 'Emergency/Surgery/Doctors',
    experience: '30+ Years of experience in Cardiovascular surgery',
    rating: '★★★★★',
    reviews: '150+',
    distance: '1 km',
    image: ('../assets/image/image2.png') 
  },
  {
    id: '3',
    name: 'Victoria MED Centre',
    specialization: 'Emergency/Surgery/Doctors',
    experience: '30+ Years of experience in Cardiovascular surgery',
    rating: '★★★★★',
    reviews: '150+',
    distance: '1 km',
    image: ('../assets/image/image2.png')
  },
];

const NearbyHospitals = () => {
  const renderHospital = ({ item }) => (
    <View style={styles.hospitalCard}>
      <Image source={{ uri: item.image }} style={styles.hospitalImage} />
      <View style={styles.hospitalDetails}>
        <Text style={styles.hospitalName}>{item.name}</Text>
        <Text style={styles.hospitalSpec}>{item.specialization}</Text>
        <Text style={styles.hospitalExp}>{item.experience}</Text>
        <Text style={styles.hospitalRating}>
          {item.rating} ({item.reviews})
        </Text>
        <Text style={styles.hospitalDistance}>Distance: {item.distance}</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Directions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Contact the place</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {hospitals.map((hospital, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: 37.78825 + index * 0.002, longitude: -122.4324 + index * 0.002 }}
            title={hospital.name}
          />
        ))}
      </MapView>
      <FlatList
        data={hospitals}
        renderItem={renderHospital}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: '40%',
    width: '100%',
  },
  list: {
    padding: 10,
  },
  hospitalCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 3,
  },
  hospitalImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  hospitalDetails: {
    flex: 1,
  },
  hospitalName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  hospitalSpec: {
    color: '#555',
  },
  hospitalExp: {
    fontSize: 12,
    marginVertical: 5,
  },
  hospitalRating: {
    fontSize: 12,
    color: '#888',
  },
  hospitalDistance: {
    fontSize: 12,
    marginVertical: 5,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#ddd',
    borderRadius: 5,
    padding: 5,
  },
  buttonText: {
    fontSize: 12,
    color: '#333',
  },
  bookButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default NearbyHospitals;