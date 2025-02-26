import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {useFavorites} from '../state/use-favorites';
import colors from '../utils/global_colors';
import AdoptButton from '../components/adopt-button';

const Favorites = () => {
  const {items, removeFavorite, removeAllFavorites} = useFavorites();

  const handleRemoveAll = () => {
    Alert.alert(
      'Vaciar Favoritos',
      '¿Estás seguro de eliminar todos tus favoritos?',
      [
        {text: 'Cancelar', style: 'cancel'},
        {text: 'Sí, eliminar', onPress: removeAllFavorites},
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> Mis amigos favoritos ❤️</Text>
      </View>
      {items.length === 0 ? (
        <Text style={styles.emptyText}>
          No has agregado ninguna mascota a favoritos
        </Text>
      ) : (
        <>
          <FlatList
            nestedScrollEnabled={true}
            data={items}
            keyExtractor={item => item.id.toString()}
            // numColumns={2}
            renderItem={({item}) => (
              <View style={styles.card}>
                <Image
                  source={{
                    uri: item.url,
                  }}
                  style={styles.image}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%',
                  }}>
                  <View style={{flex: 1}} />

                  <View
                    style={{
                      flex: 2,
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <Text style={styles.title}>{item.name} - </Text>
                    <Text style={styles.title}>{item.age} meses</Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => removeFavorite(item)}
                    style={styles.trashButton}>
                    <MaterialIcons
                      name="delete-outline"
                      size={20}
                      color={colors.primary}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{width: '85%'}}>
                  <AdoptButton item={item} />
                </View>
              </View>
            )}
          />
          <TouchableOpacity
            onPress={handleRemoveAll}
            style={styles.clearButton}>
            <Text style={styles.clearText}>Eliminar todos</Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  headerTitle: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 23,
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 20, paddingHorizontal:20
  },
  card: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 200,
    marginTop: 15,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'Mulish-SemiBold',
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  trashButton: {
    padding: 10, marginRight: 8
  },

  addButton: {
    padding: 10,
    borderRadius: 5,
  },
  clearButton: {
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    alignItems: 'center',
  },
  clearText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Favorites;
