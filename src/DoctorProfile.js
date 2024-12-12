import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const DoctorProfile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <View style={styles.topRightContainer}>
      <Image source={require('../assets/image/Icons.png')} style={styles.arrow}/>
      <Image source={require('../assets/image/Vector(1).png')} style={styles.arrow}/>
       
      
      </View>
        <Text style={styles.title}>Doctor Profile</Text>
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/image/dr.png')}
          style={styles.image}
        />
        <View style={styles.flexDirection}>
          <Text style={styles.name}>Dr. Abcde Fghi</Text>
          <Text style={styles.specialization}>Cardiologist/Therapy</Text>
          <Text style={styles.experience}>30+ Years of experience in </Text>
          <Text style={styles.experience}> Cardiovascular surgery</Text>
          <Text style={styles.rating}>⭐ ⭐ ⭐ ⭐ ⭐ [150+]</Text>
        </View>
      </View>

      <View style={styles.tagsContainer}>
        <Text style={styles.tag}>Cardiology</Text>
        <Text style={styles.tag}>Surgery</Text>
        <Text style={styles.tag}>Therapy</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Biography:</Text>
        <Text style={styles.text}>
          A doctor's biography can include their professional experience, achievements, and areas
          of specialization. A doctor’s biography can also include personal information, such as
          their interests and hobbies.
        </Text>
        <Text style={styles.readMore}>Read more</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Working Hours:</Text>
        <Text style={styles.text}>Mon-Fri: 8:00 am - 6:00 pm</Text>
        <Text style={styles.text}>Sat-Sun: 9:00 am - 5:00 pm</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Details:</Text>
        <Text style={styles.text}>Hospital/Clinic: ABC Hospital</Text>
        <Text style={styles.text}>Specialization: Cardiology</Text>
        <Text style={styles.text}>Years of Experience: 30+ in cardio</Text>
        <Text style={styles.text}>Phone Number: +91 00000 00000</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.fee}>Fee: Rs. 800/-</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Book an appointment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8', padding: 16 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  backButton: { fontSize: 18, color: '#333' },
  topRightContainer: {
    flexDirection: 'row', // Align items in a row
    justifyContent: 'flex-end', // Push content to the right
    alignItems: 'center', // Align vertically
    padding: 10, // Add padding around the content
  },
  arrow: {
    height:32,
   width:32,
    marginRight:250,
    marginTop:-90,
  },
  title: { flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 'bold' },

  profileContainer: { alignItems: 'center', marginBottom: 20 ,display:'flex',
 flexDirection:'row',
 justifyContent:'center',
 alignItems:'center',
 marginTop:4,
},
flexDirection:{
  display:'flex',
  flexDirection:'columns',
},
  image: { width: 120, height: 120, borderRadius: 60, marginBottom: 10 },
  name: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  specialization: { fontSize: 16, color: '#666' },
  experience: { fontSize: 14, color: '#666', marginVertical: 5 },
  rating: { fontSize: 14, color: '#FFD700' },

  tagsContainer: { flexDirection: 'row', justifyContent: 'center', marginVertical: 10 },
  tag: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius:21,
    border: 1 ,
    borderColor:' #5C634C',
    marginHorizontal: 5,
    fontSize: 13,
  },

  section: { marginVertical: 10 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  text: { fontSize: 14, color: '#666', marginVertical: 2 },
  readMore: { fontSize: 14, color: '#007BFF' },

  footer: { alignItems: 'center', marginTop: 20 },
  fee: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});

export default DoctorProfile;