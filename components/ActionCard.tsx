import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
          <Text style={styles.headerText}>What's new in Typescript?</Text>
          <Image
            source={{
              uri: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*qZAZmura6mxKIMDbsxdH4A.png',
            }}
            style={styles.cardImage}
          />
          <View style={styles.bodyContainer}>
            <Text numberOfLines={2} style={styles.footerContainer}>
              Smart Monorepos: Determining Impact from Deep Dependency Changes
              in Typescript
            </Text>
            <View >
              <TouchableOpacity
                onPress={() =>
                  openWebsite(
                    'https://medium.com/gitconnected/smart-monorepos-determining-impact-from-deep-dependency-changes-in-typescript-a5516f34b471',
                  )
                }
              >
                <Text style={styles.readMoreButton}>Read More</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  elevatedCard: {
    backgroundColor:'gray',
    paddingHorizontal:10
  },
  card: {
    marginHorizontal:10,
    borderRadius:10,
    padding:10,
    marginBottom:28
  },
  headerText: {
    fontSize:20,
    fontWeight:'700',
    marginVertical:10
  },
  headingContainer: {
    marginVertical:10
  },
  cardImage: {
    height: 100,
    borderRadius: 8,
    backgroundColor: 'gray',
  },
  bodyContainer: {},
  footerContainer: {
    marginVertical:10
  },
  readMoreButton: {
    marginBottom: 28,
    marginHorizontal: 10,
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
});
