import React, {FC, ReactNode} from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform, ViewStyle} from 'react-native';

import {getStatusBarHeight} from 'react-native-status-bar-height';

import colors from '../utils/colors';

export interface IKeyboardAvoidProps {
  children: ReactNode;
  style?: ViewStyle;
}

const KeyboardAvoid: FC<IKeyboardAvoidProps> = ({children, style}) => (
  <KeyboardAvoidingView
    keyboardVerticalOffset={getStatusBarHeight(true) + 50}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    style={[styles.container, style]}>
    {children}
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
});

export default KeyboardAvoid;
