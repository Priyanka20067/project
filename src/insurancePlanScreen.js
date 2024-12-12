import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const InsurancePlanScreen = () => {
  const hospitals = [
    {
      id: '1',
      name: 'ABC Hospital',
      specialty: 'Emergency/Surgery/Doctors',
      experience: '30+ Years of experience ',
      experience1:'in Cardiovascular surgery',
      rating: 4.5,
      reviews: '150+',
    },
    {
      id: '2',
      name: 'ABC Hospital',
      specialty: 'Emergency/Surgery/Doctors',
      experience: '30+ Years of experience in Cardiovascular surgery',
      rating: 4.5,
      reviews: '150+',
    },
    {
      id: '3',
      name: 'ABC Hospital',
      specialty: 'Emergency/Surgery/Doctors',
      experience: '30+ Years of experience in Cardiovascular surgery',
      rating: 4.5,
      reviews: '150+',
    },
  ];

  const renderHospital = ({ item }) => (
    <View style={styles.hospitalCard}>
      
      <View style={styles.flexDirection}>
            <Image
                source={require( '../assets/image/image1.png' )}
                style={styles.hospitalImage}
            />
            <View style={styles.hospitalInfo}>
                <Text style={styles.hospitalName}>{item.name}</Text>
                <Text style={styles.hospitalSpecialty}>{item.specialty}</Text>
                <Text style={styles.hospitalExperience}>{item.experience}</Text>
                <Text style={styles.hospitalExperience}>{item.experience1}</Text>
                <Text style={styles.hospitalRating}>
                {'⭐'.repeat(Math.round(item.rating))} ({item.reviews})
                </Text>
            </View>
        </View>
            <View style={styles.insuranceLogos}>
                <Text style={styles.logo}>ICICI Lombard</Text>
                <Text style={styles.logo}>HDFC ERGO</Text>
            </View>
            
            <TouchableOpacity style={styles.bookNowButton}>
                <Text style={styles.bookNowText}>Book Now</Text>
            </TouchableOpacity>
       
      <View style={styles.hospitalActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Get Directions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Contact the place</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
        <Icon name="arrow-back-outline" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Insurance Plan</Text>
        <TouchableOpacity>
        <Icon name="search-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>
        Select Hospital according to your Insurance Plan
      </Text>
      <View style={styles.filters}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Lowest Cost</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Rating</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Nearest</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={hospitals}
        renderItem={renderHospital}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.activeTab}>Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Maps</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  backArrow: {
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchIcon: {
    fontSize: 18,
  },
  subtitle: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
  },
  flexDirection:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:4,
   
     },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  filterButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  filterText: {
    fontSize: 14,
  },
  hospitalCard: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    elevation: 2,
  },
  hospitalImage: {
    width: 80,
    height: 80,
    borderRadius: 35,
  },
  hospitalInfo: {
    marginLeft: 10,
  },
  hospitalName: {
    fontWeight: 'bold',
    fontSize:16,
  },
  hospitalSpecialty: {
    color: '#555',
    fontSize:11,
  },
  hospitalExperience: {
    fontSize: 12,
    color: '#777',
    fontSize:10,
  },
  hospitalRating: {
    fontSize: 12,
    color: '#777',
  },
  insuranceLogos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  logo: {
    fontSize: 12,
    color: '#777',
  },
  bookNowButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  bookNowText: {
    color: '#fff',
    textAlign: 'center',
  },
  hospitalActions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  actionButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
  },
  actionText: {
    fontSize: 12,
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#f9f9f9',
  },
  activeTab: {
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});
export default InsurancePlanScreen;