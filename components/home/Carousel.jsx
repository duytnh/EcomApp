import React from 'react';
import { View } from 'react-native';
import styles from './carousel.style';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS } from '../../constants/index';

const Carousel = () => {
    const slides = [
        'https://i.ibb.co/WzVmZCx/fn1.jpg',
        'https://i.ibb.co/ZHSzXxQ/fn2.jpg',
        'https://i.ibb.co/h13q8Dz/fn3.jpg',
    ]
    return (
        <View style={styles.carouselContainer}>
            <SliderBox images={slides}
                dotColor={COLORS.primary}
                inactiveDotColor={COLORS.secondary}
                ImageComponentStyle={{ borderRadius: 15, width: "93%", marginTop: 15 }}
                autoplay
                circleLoop
            />
        </View>
    );
}

export default Carousel;
