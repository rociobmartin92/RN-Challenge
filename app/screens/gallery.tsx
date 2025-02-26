import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Card, ActivityIndicator, IconButton} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import useGetImages from '../services/useGetImages.ts';
import {generateAge, generateCatName} from '../utils/index.ts';
import {Animal} from '../types/animal.ts';
import colors from '../utils/global_colors.ts';
import {useFavorites} from '../state/use-favorites.ts';
import AdoptButton from '../components/adopt-button.tsx';

const Gallery = ({route}: any) => {
  const {origin} = route.params;
  const navigation = useNavigation();
  const {resultDogs, resultCats, loading} = useGetImages();
  const {addFavorite, items: favorites} = useFavorites();
  const [list, setList] = useState<Animal[]>([]);

  useEffect(() => {
    if (resultDogs.length > 0 && resultCats.length > 0) {
      const updateAnimals: Animal[] = (
        origin === 'cats' ? resultCats : resultDogs
      ).map(animal => ({
        ...animal,
        name: generateCatName(),
        age: generateAge(),
      }));
      setList(updateAnimals);
    }
  }, [resultDogs, resultCats]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator animating={true} size="large" color="#6200ea" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <MaterialIcons name="chevron-left" size={28} color="black" />
      </TouchableOpacity>

      <View style={styles.listContainer}>
        <Text style={styles.mainTitle}>
          Nuestros {origin === 'cats' ? 'gatos' : 'perros'} en adopción
        </Text>
        <FlatList
        
          data={list}
          renderItem={({item}) => (
            <Card style={styles.card}>
              <View style={styles.imageContainer}>
                <Image
                  source={{uri: item.url}}
                  style={styles.image}
                  onError={e =>
                    console.log(
                      'Error cargando la imagen:',
                      e.nativeEvent.error,
                    )
                  }
            
                />
                <TouchableOpacity
                  style={styles.favoriteButton}
                  onPress={() => addFavorite(item)}>
                  <MaterialIcons
                    name={
                      favorites.some(el => el.id === item.id)
                        ? 'favorite'
                        : 'favorite-border'
                    }
                    size={24}
                    color={
                      favorites.some(el => el.id === item.id)
                        ? colors.primary
                        : 'grey'
                    }
                  />
                </TouchableOpacity>
              </View>
              <Card.Content>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.subtitle}>Edad: {item.age} meses</Text>
                <AdoptButton item={item} />
              </Card.Content>
            </Card>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
  },
  mainTitle: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Mulish-SemiBold',
    marginBottom: 15,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  listContainer: {marginTop: 10, marginBottom: 50, paddingHorizontal: 10},
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    marginLeft: 10, marginTop: 10,
    backgroundColor: colors.background,
    borderRadius: 30,
  },
  card: {
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: colors.background,
    borderWidth: 1,
    margin: 10,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '90%',
    height: 200,
    margin: 15,
  },
  favoriteButton: {
    position: 'absolute',
    top: 9,
    right: 10,
    backgroundColor: colors.background,
    borderRadius: 50,
    padding: 10,
    // borderWidth: 1,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Mulish-Regular',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
    fontFamily: 'Mulish-Light',
  },
});
