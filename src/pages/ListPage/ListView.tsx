import React, {FC} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import {DataType} from '../../api/ApiTypes';

import PlusIcon from '../../assets/icons/PlusIcon';
import TrashIcon from '../../assets/icons/TrashIcon';

import colors from '../../utils/colors';

export interface IListViewProps {
  data: Array<DataType> | [];
  onPressItem: (item: DataType) => void;
  onPressDeleteItem: (id: string) => void;
  onPressAddNew: () => void;
}

const ListView: FC<IListViewProps> = ({data, onPressItem, onPressDeleteItem, onPressAddNew}) => {
  const renderItem = ({item}: {item: DataType}) => {
    return (
      <TouchableOpacity style={styles.row} onPress={() => onPressItem(item)}>
        <View style={styles.leftSide}>
          <View style={{}}>
            <Image source={{uri: `https${item.avatar.slice(4)}`}} style={styles.imageStyle} />
          </View>
          <Text>{item.name}</Text>
        </View>
        <TouchableOpacity onPress={() => onPressDeleteItem(item.id)} style={styles.rightSide}>
          <TrashIcon size={24} color={colors.black} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <SafeAreaView>
        <FlatList data={data} renderItem={renderItem} />
      </SafeAreaView>
      <TouchableOpacity style={styles.plusButton} onPress={onPressAddNew}>
        <PlusIcon size={40} color={colors.white} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 54,
    paddingHorizontal: 18,
    backgroundColor: '#fff',
    borderBottomColor: colors.gray.transparentGray,
    borderBottomWidth: 0.5,
  },
  leftSide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageStyle: {
    width: '100%',
    height: 52,
    aspectRatio: 640 / 480,
    resizeMode: 'stretch',
    marginRight: 6,
  },
  rightSide: {},
  plusButton: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 12,
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: colors.blue,
  },
});

export default ListView;
