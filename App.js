import { Text, View, SafeAreaView, StyleSheet, Image, StatusBar, TouchableOpacity, Vibration, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { posts } from './posts'

import {Post} from './Post'

export default function App() {

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor="#991c00" />

      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('./assets/icon.webp')}
        />
        <MaterialCommunityIcons name='chat-outline' size={30} color="#CCC" />
      </View>

      <ScrollView>
        {
          posts.map((post) => (
            <Post post={post}></Post>
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#1d1d1d'
  },
  logo: {
    width: 40,
    height: 40
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: '#adadad',
    borderBottomWidth: 1
  },
  headerPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center',
  },
  imagePost: {
    width: '90%', 
    height: 350, 
    borderRadius: 10, 
    resizeMode: 'cover'
  },
  footerPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center',
    color: '#fff',
    fontSize: 30
  },
  likeCount: {
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#fff'
  },
  comment: {
    textAlign: 'justify',
    marginLeft: 5,
    color: '#fff'
  },
  whiteColor: {
    color: '#fff'
  }
})