import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=796&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.imageCard}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Colosseum Arena</Text>
          <Text style={styles.cardLabel}>Rome, Italy</Text>
          <Text style={styles.cardDescription}>
            Colosseum in Rome during the morning blue hour with no people
          </Text>
          <Text style={styles.cardFooter}>40 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight:'bold',
    paddingHorizontal:10
  },
  card: {
    width:350,
    height:360,
    borderRadius:8,
    marginVertical:12,
    marginHorizontal:16,

  },
  cardElevated: {
    backgroundColor:'black',
    elevation:3,
    shadowOffset:{
        width:1,
        height:1
    },
    color:"white",
  },
  imageCard: {
    height: 180,
    marginBottom:8,
    borderTopLeftRadius:6,
    borderTopRightRadius:6
  },
  cardBody: {
    flex:1,
    flexGrow:1,
    paddingHorizontal:12
  },
  cardTitle: {
    color:'white',
    fontSize:22,
    fontWeight:'bold',
    marginBottom:6
  },
  cardLabel: {
    color:'white',
    fontSize:16,
    fontWeight:'medium',
    marginBottom:6,

  },
  cardDescription: {
    color:'gray',
    fontSize:14,
    fontWeight:'normal',
    marginBottom:12,
    marginTop:6,
    flexShrink:1
  },
  cardFooter: {
    paddingHorizontal:4,
    paddingVertical:2,
    borderRadius:10,
    color:'#9f2d00',
    fontSize:16,
    fontWeight:'bold',
    backgroundColor:'#ffb86a'
  },
});
