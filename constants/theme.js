import { Dimensions } from "react-native";
const { width, height} = Dimensions.get('window');

export const COLORS = {
    primary: '#033E3E',
    secondary: '#EE9A4D',
    black: '#3B2F2F',
    white: '#FFFFFF',
    gray: '#9B9B9B',
    lightgray: '#CECECE',
    transparent: 'transparent',
};

export const SIZES ={
    base: 8,
    font: 16,
    radius: 30,
    padding:10,
    padding2: 12,

    //font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 24,
    body2: 20,
    body3: 16,
    body4: 14,
    body2: 12,

    //app dimensions
    width,
    height,

};

export const FONTS = {
    largeTitle: {fontFamily: 'AvenirNext-DemiBold', fontSize: SIZES.largeTitle, lineHeight: 40},
    h1: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h1, lineHeight: 36},
    h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
    h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 24},
    h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},
    body1: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 28},
    body2: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 26},
    body3: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body3, lineHeight: 24},
    body4: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22},
    body5: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body5, lineHeight: 18},

};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;