import { Image, Linking, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Typescript 
            </Text>
            <Image source={{
                uri:'https://blog.theodo.com/_astro/ts_logo.BstCNrTU_1Dbxpr.webp'
            }} 
            style={styles.cardImage}
            />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  elevatedCard: {},
  card: {},
  headerText:{},
  headingContainer:{},
  cardImage:{
    height:100
  },
});
