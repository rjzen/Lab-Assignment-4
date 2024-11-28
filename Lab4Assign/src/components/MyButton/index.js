import React from 'react';
import { Button } from 'react-native-paper';

const MyButton = ({ text, action, mode, textColor, buttonColor, style }) => {
  return (
    <Button
      mode={mode}
      textColor={textColor}
      buttonColor={buttonColor}
      style={style}
      onPress={() => action()}
    >
      {text}
    </Button>
  );
};

export default MyButton;
