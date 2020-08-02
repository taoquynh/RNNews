/**
 * ArticleItem
 */

import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import moment from 'moment';
import styles from '../layouts/LayoutHome';

const ArticleItem = (item, press) => {
  return (
    <View style={styles.cardView}>
      <Text style={styles.title}>{item.title}</Text>
      {item.urlToImage && (
        <Image style={styles.imageNews} source={{uri: item.urlToImage}}></Image>
      )}
      <View style={styles.row}>
        <Text style={styles.label}>Source</Text>
        <Text style={styles.info}>{item.source.name}</Text>
      </View>
      {item.content && <Text style={styles.description}>{item.content}</Text>}
      <View style={styles.row}>
        <Text style={styles.label}>Published</Text>
        <Text style={styles.info}>
          {moment(item.publishedAt).format('LLL')}
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => press(item.url)}>
        <Text style={styles.textButton}>Read more</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ArticleItem;
