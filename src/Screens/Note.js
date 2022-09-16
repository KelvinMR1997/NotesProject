import React from 'react';
import {SafeAreaView, ScrollView, TextInput} from 'react-native';
import {tableStyles} from '../Theme/appTheme';

export const Note = props => {
  const noteInfo = props?.route?.params;

  return (
    <>
      <ScrollView>
        <SafeAreaView style={tableStyles.globalMargin}>
          <TextInput multiline={true} style={tableStyles.title}>
            {noteInfo.title}
          </TextInput>
          <TextInput multiline={true} style={tableStyles.noteText}>
            {noteInfo.data}
          </TextInput>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};
