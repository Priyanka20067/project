import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const categories = [
  { id: '1', name: 'Neurologist', image: require('../assets/image/Neurology.png') },
  { id: '2', name: 'Cardiologist', image: require('../assets/image/cardiology.png') },
  { id: '3', name: 'Dermatologist', image: require('../assets/image/Dermatologist.png') },
  { id: '4', name: 'Dentist', image: require('../assets/image/Dentist.png') },
];

export default function CategoriesScreen() {
  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryContainer}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={Array(20).fill(categories).flat()} // Repeating items to mimic the grid
        renderItem={renderCategory}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  listContainer: {
    justifyContent: 'center',
  },
  categoryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    flex: 1,
  },
  imageContainer: {
    width: 65,
    height: 65,
    borderRadius: 30,
   backgroundColor:'#e9e7e4',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  image: {
    width: 37,
    height: 37,
    resizeMode: 'contain',
  },
  categoryText: {
    fontSize: 10,
    color: '#4CAF50',
    textAlign: 'center',
  },
});