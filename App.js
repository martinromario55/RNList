import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native'

import pokemonList from './data.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#333" />

      {/* <ScrollView style={styles.scrollView}>
        {pokemonList.map(pokemon => {
          return (
            <View style={styles.card} key={pokemon.id}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}
      <View style={styles.paddingView}>
        <FlatList
          data={pokemonList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card} key={item.id}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            )
          }}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={<View style={{ height: 16 }}></View>}
          ListEmptyComponent={
            <View style={styles.card}>
              <Text style={styles.cardText}>No item found</Text>
            </View>
          }
          ListHeaderComponent={
            <Text style={styles.headerText}>Pokemon List</Text>
          }
          ListFooterComponent={
            <Text style={styles.footerText}>End of List</Text>
          }
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  paddingView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    // marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 12,
  },
})
