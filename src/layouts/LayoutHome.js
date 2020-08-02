/**
 * Layout
 */

import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    justifyContent: 'center',
  },
  containerView: {
    flex: 1,
  },
  headerView: {
    flex: 1 / 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 20,
    fontWeight: '500',
  },
  flatList: {
    flex: 14 / 15,
  },
  cardView: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#e6e6e6',
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 17,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 16,
  },
  imageNews: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
  button: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    backgroundColor: '#2089DB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    marginBottom: 10,
  },
});

export default styles;
