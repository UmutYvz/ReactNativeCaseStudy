import React, {FC} from 'react';
import {StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity} from 'react-native';

import KeyboardAvoid from '../../components/KeyboardAvoid';

import colors from '../../utils/colors';
import {texts} from '../../utils/texts';

export interface IRegisterPersonViewProps {
  onChangePersonData: (key: string, value: string) => void;
  onPressAddPerson: () => void;
}

const RegisterPersonView: FC<IRegisterPersonViewProps> = ({
  onChangePersonData,
  onPressAddPerson,
}) => {
  return (
    <KeyboardAvoid style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.textInputViewContainer}>
          <Text>{texts.labels.name}</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              caretHidden={false}
              autoCapitalize="sentences"
              onChangeText={(value: string) => {
                onChangePersonData('name', value);
              }}
              numberOfLines={1}
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={styles.textInputViewContainer}>
          <Text>{texts.labels.job}</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              caretHidden={false}
              autoCapitalize="sentences"
              onChangeText={(value: string) => {
                onChangePersonData('job', value);
              }}
              numberOfLines={1}
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={styles.textInputViewContainer}>
          <Text>{texts.labels.about}</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              caretHidden={false}
              autoCapitalize="sentences"
              onChangeText={(value: string) => {
                onChangePersonData('description', value);
              }}
              style={[styles.textInput, styles.textArea]}
              multiline
              textAlignVertical="top"
            />
          </View>
        </View>
        <View style={styles.textInputViewContainer}>
          <Text>{texts.labels.link}</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              caretHidden={false}
              autoCapitalize="sentences"
              onChangeText={(value: string) => {
                onChangePersonData('avatar', value);
              }}
              numberOfLines={1}
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={styles.textInputViewContainer}>
          <TouchableOpacity style={styles.button} onPress={onPressAddPerson}>
            <Text style={styles.buttonText}>{texts.labels.addPerson}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: colors.gray.lightGray,
  },
  contentContainer: {
    flexGrow: 1,
  },
  textInput: {flex: 1, padding: 12},
  textInputContainer: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.gray.borderGray,
    borderRadius: 6,
    backgroundColor: colors.white,
  },
  textInputViewContainer: {
    marginTop: 12,
    flexDirection: 'column',
  },
  textArea: {
    height: 150,
    paddingTop: 12,
  },
  button: {
    flex: 1,
    backgroundColor: colors.blue,
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 6,
  },
  buttonText: {
    color: colors.white,
  },
});

export default RegisterPersonView;
