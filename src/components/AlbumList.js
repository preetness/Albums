import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends React.Component {
  state = { albums: [] };

  componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  render() {
    console.log(this.state);
    return (
      <View>
        <Text>Album List!</Text>
      </View>
    );
  }
}

export default AlbumList;
