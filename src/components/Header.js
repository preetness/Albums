import React from 'react';
import { Text } from 'react-native';

const styles = {
  textStyle: {
    fontSize: 20,
    marginTop: 45
  }
};

const Header = () => {
  const { textStyle } = styles;

  return <Text style={textStyle}>Albums</Text>;
};
export default Header;
