import React, {FC} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';

import {DataType} from '../../api/ApiTypes';

import colors from '../../utils/colors';
import {metrics} from '../../utils/metrics';
import {texts} from '../../utils/texts';

export interface IDetailViewProps {
  item: DataType;
}

const DetailView: FC<IDetailViewProps> = ({item}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: `https${item.avatar.slice(4)}`}} style={styles.imageStyle} />
      </View>
      <ScrollView contentContainerStyle={styles.bottomContainer}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.jobText}>{item.job}</Text>
        <Text style={styles.descriptionText}>
          {item.description ? item.description : texts.description}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imageContainer: {
    width: metrics.screenWidth - 50,
    aspectRatio: 1,
  },
  imageStyle: {
    flex: 1,
    resizeMode: 'contain',
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  nameText: {
    fontSize: 32,
    color: colors.black,
  },
  jobText: {
    fontSize: 22,
    color: colors.gray.default,
    marginBottom: 18,
  },
  descriptionText: {
    fontSize: 14,
    color: colors.gray.default,
  },
});

export default DetailView;
