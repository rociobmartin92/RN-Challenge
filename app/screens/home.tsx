import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  LogBox,
} from 'react-native';

import Loading from '../components/loading';

import BannerCards from '../components/banner-cards';
import useGetImages from '../services/useGetImages';
import colors from '../utils/global_colors';

const Home = ({navigation}: any) => {
  LogBox.ignoreAllLogs();
  const {resultCats, resultDogs, loading} = useGetImages();

  return (
    <SafeAreaView style={styles.container}>
  

      <Text style={styles.title}>Adopta un Amigo 🐾</Text>
      {/* <BannerCards /> */}
      {loading ? (
        <Loading />
      ) : (
        <View style={styles.content}>
          <Text
            style={[
              styles.description,
              {fontFamily: 'Mulish-SemiBold', marginBottom: 15},
            ]}>
            Esta aplicación está hecha para encontrar un amor incondicional y
            salvar una vida.
          </Text>
          <Text style={styles.description}>
            Explora nuestra galería de adorables gatos y perros en adopción.
          </Text>
          <Text style={styles.description}>
            Encuentra tu compañero perfecto y convierte tu casa en un verdadero
            hogar.
          </Text>

          <View style={styles.imageContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('gallery', {origin: 'cats'})}>
              {resultCats[0] && resultCats[0].url && (
                <Image source={{uri: resultCats[0].url}} style={styles.image} />
              )}
              <Text style={styles.label}>Gatos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('gallery', {origin: 'dogs'})}>
              {resultDogs[0] && resultDogs[0].url && (
                <Image source={{uri: resultDogs[0].url}} style={styles.image} />
              )}
              <Text style={styles.label}>Perros</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center', justifyContent: "center"
  },
  title: {
    fontSize: 28,
    fontFamily: 'Mulish-SemiBold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 10,
    fontFamily: 'Mulish-Regular',
    marginTop: 8,
  },
  content: {paddingHorizontal: 10},
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    marginTop: 20,
  },
  image: {
    width: 155,
    height: 155,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: colors.background,
    borderColor: colors.primary,
  },
  label: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 8,
    fontFamily: 'Mulish-SemiBold',
  },
});

export default Home;
