import React, {useRef} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import colors from '../utils/global_colors';

const {width} = Dimensions.get('window');

const carouselItems = [
  {
    title: '🐈 Salva una vida 🦮',
    subtitle: 'Adopta un gato o perro y dale un hogar lleno de amor.',
    description: '¡Cambia la vida de un animal y la tuya también!',
  },
  {
    title: '🎉 ¡Adopta y haz la diferencia!',
    subtitle: 'Cada adopción salva una vida. Únete a nuestra causa.',
    description: 'Encuentra tu compañero perfecto en nuestra galería.',
  },
  {
    title: '🔄 Facilidades para adoptar',
    subtitle:
      'Contamos con procesos rápidos y seguros para que adoptes sin problemas.',
    description:
      'Nos aseguramos de que la adopción sea lo más sencilla posible.',
  },
  {
    title: '🧡 ¡Próximamente más animales en adopción!',
    subtitle:
      '¡Visítanos pronto y encuentra a tu nuevo amigo peludo!',

  },
];

const BannerCards = () => {
  const carouselRef = useRef(null);

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={carouselItems}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
            {item.description && (
              <Text style={styles.description}>{item.description}</Text>
            )}
          </View>
        )}
        sliderWidth={width}
        itemWidth={width * 0.8}
        autoplay
        loop
        autoplayInterval={2000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    alignItems: 'center',
    height: 160,
    marginTop: 20,
  },
  card: {
    backgroundColor: colors.background,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.primary
  },
  title: {
    fontSize: 18,
    color: colors.primary,
    fontFamily: 'Mulish-SemiBold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
    fontFamily: 'Mulish-Regular',
  },
  description: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
    fontFamily: 'Mulish-Regular',
  },
});

export default BannerCards;
