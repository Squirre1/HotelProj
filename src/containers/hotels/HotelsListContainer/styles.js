import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  hotelList: {
    flex: 1,
    backgroundColor: '#F6F6F8',
    flexDirection: 'column',
  },
  hotelItem: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E5E9',
    height: 100,
  },
  hotelInformation: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  name: {
    bottom: 5,
    fontSize: 18,
    fontFamily: 'Geometria-Medium',
    color: 'black',
  },
  hotelTimes: {
    top: 20,
  },
  created: {
    fontSize: 12,
    fontFamily: 'Geometria-Medium',
    color: 'black',
  },
  edited: {
    fontSize: 12,
    fontFamily: 'Geometria-Medium',
    color: 'black',
  },
  city: {
    bottom: 16,
    fontSize: 14,
    fontFamily: 'Geometria-Medium',
  },
});

export default styles;
