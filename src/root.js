import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { HotelsListContainer, HotelCardContainer } from '@appContainers/hotels';
import { Provider, connect } from 'react-redux';

const RouterWithRedux = connect()(Router);
import { store } from './store/store';

export default class Root extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Provider store={store}>
      <RouterWithRedux>
        <Scene key="root" tabs hideNavBar hideTabBar>
          <Scene key="hotelsList" component={HotelsListContainer} title="HotelsList" hideNavBar />
          <Scene key="hotelCard" component={HotelCardContainer} title="HotelCard" hideNavBar />
        </Scene>
      </RouterWithRedux>
    </Provider>;
  }
}
