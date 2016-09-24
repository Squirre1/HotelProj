import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  propertyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
  propertyField: {
    flex: 1,
    height: 50,
    fontSize: 14,
    backgroundColor: 'transparent',
    textAlign: 'right',
    alignSelf: 'center',
  },
  propertyLabel: {
    fontFamily: 'Geometria-Medium',
  },
});


const ButtonStyle = StyleSheet.create({
  buttonBackground: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#10EFAC',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 50,
    width: 150,
    flexWrap: 'nowrap',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Geometria-Medium',
    color: 'white',
    backgroundColor: 'transparent',
  },
});

export { styles, ButtonStyle };
