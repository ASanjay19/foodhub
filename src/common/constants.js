import {Dimensions} from 'react-native'
const {width,height} = Dimensions.get('window');

export function wp(percentage) {
    const value = (percentage * width) / 100;
    return Math.round(value);
  }

 export function hp(percentage) {
    const value = (percentage * height) / 100;
    return Math.round(value);
  }

export const Colors = {
    SECONDARY : '#02D126',
    BLUE : '#4d8bd6',
    WHITE:'#FFFF',
    BLACK: '#121314',
    GRAY:'#BAB9C0',
    ADDCOLOR:'#845747',
    RATINGCOLOR:'#F59D2D'
}

export const Icons = {
    ArrowBack : 'arrowleft'
}

export const Strings = {
    MENU : 'MENU',
    BREAKFAST : 'BREAKFAST',
    FAVORITE : 'FAVORITE',
    BAG : 'BAG',
}