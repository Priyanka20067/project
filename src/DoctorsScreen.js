import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const doctors = [
  {
    id: '1',
    name: 'Dr. Abcde Fghi',
    specialty: 'Cardiologist/Therapy',
    experience: '30+ Years of experience in Cardiovascular surgery',
    rating: '5.0',
    reviews: '150+',
    fee: 800,
    image: 'https://via.placeholder.com/100',
  },
 
];

const DoctorCard = ({ doctor }) => (
  <View style={styles.card}>
    <Image source={{ uri: doctor.image }} style={styles.image} />
    <View style={styles.cardDetails}>
      <Text style={styles.name}>{doctor.name}</Text>
      <Text style={styles.specialty}>{doctor.specialty}</Text>
      <Text style={styles.experience}>{doctor.experience}</Text>
      <Text style={styles.rating}>
        ⭐ {doctor.rating} ({doctor.reviews})
      </Text>
      <Text style={styles.fee}>Fee: Rs. {doctor.fee}/-</Text>
    </View>
    <TouchableOpacity style={styles.bookButton}>
      <Text style={styles.bookButtonText}>Book Now</Text>
    </TouchableOpacity>
  </View>
);

export default function DoctorsScreen() {
  const [filter, setFilter] = useState('Experience'); // Default filter

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Your Doctor</Text>

      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'Experience' && styles.activeFilter]}
          onPress={() => setFilter('Experience')}
        >
          <Text style={styles.filterText}>Experience</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'Most Qualified' && styles.activeFilter]}
          onPress={() => setFilter('Most Qualified')}
        >
          <Text style={styles.filterText}>Most Qualified</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'Fee' && styles.activeFilter]}
          onPress={() => setFilter('Fee')}
        >
          <Text style={styles.filterText}>Fee</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DoctorCard doctor={item} />}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  filterButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  activeFilter: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  filterText: {
    color: '#000',
  },
  list: {
    marginTop: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  cardDetails: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  specialty: {
    color: '#666',
  },
  experience: {
    color: '#666',
    marginTop: 4,
  },
  rating: {
    marginTop: 4,
  },
  fee: {
    marginTop: 4,
    fontWeight: 'bold',
  },
  bookButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});