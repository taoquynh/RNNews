/**
 * News
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import moment from 'moment';
import styles from '../layouts/LayoutHome';
import datas from '../datas/Data';
import ArticleItem from '../components/ArticleItem';
import filterForUniqueArticles from '../helper/FilterArticles';

function News() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasErrored, setHasApiError] = useState(false);

  const getNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=6eec2f7fe6cd4c40a3fef8f33f5778fe&page=${pageNumber}`,
      );

      let jsonData = await response.json();
      // Nếu quá số lần request cho phép thì lấy dữ liệu fix cứng để hiển thị
      if (jsonData.code === 'rateLimited') {
        setArticles(datas);
      } else {
        const newArticleList = filterForUniqueArticles(
          articles.concat(jsonData.articles),
        );

        setArticles(newArticleList);
        setPageNumber(pageNumber + 1);
      }
    } catch {
      setHasApiError(true);
    }
    setLoading(false);
  };

  const press = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log(`Don't know how to open URL: ${url}`);
      }
    });
  };

  // Gọi dữ liệu khi vào màn hình
  useEffect(() => {
    getNews();
  }, []);

  // Nếu call api không thành công thì show màn error
  if (hasErrored) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>Error, try again!</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeView}>
      {loading ? (
        <ActivityIndicator size='large' loading={loading} />
      ) : (
        <View style={styles.containerView}>
          <View style={styles.headerView}>
            <Text style={styles.countText}>
              Articles count: {articles.length}
            </Text>
          </View>
          <View style={styles.flatList}>
            <FlatList
              data={articles}
              onEndReached={getNews}
              onEndReachedThreshold={1}
              renderItem={({item}) => ArticleItem(item, press)}
              keyExtractor={(item) => item.title}
              ListFooterComponent={
                <ActivityIndicator size='large' loading={loading} />
              }
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

export default News;
