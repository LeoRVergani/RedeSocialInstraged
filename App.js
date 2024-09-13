import { Text, View, SafeAreaView, StyleSheet, Image, StatusBar, TouchableOpacity, Vibration, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { posts } from './posts'

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
            <View key={post.id}>

              <View style={styles.headerPost}>
                <Text style={styles.whiteColor}>{post.user}</Text>
                <MaterialCommunityIcons name='dots-horizontal' size={30} color="#ffffff" />
              </View>

              <Image style={styles.imagePost} source={{ uri: post.image }} />

              <View style={styles.footerPost}>
                <TouchableOpacity onPress={() => Vibration.vibrate(500)}>
                  <MaterialCommunityIcons name='heart-outline' size={30} color="#CCC" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <MaterialCommunityIcons name='chat-outline' size={30} color="#CCC" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <MaterialCommunityIcons name='share-outline' size={30} color="#CCC" />
                </TouchableOpacity>
              </View>

              <Text style={styles.likeCount}> {post.likes} likes</Text>
              <Text style={styles.comment}>{post.caption}</Text>
            </View>
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
    width: '100%', 
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