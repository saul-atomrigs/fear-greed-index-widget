// components/FearGreedIndex.tsx
import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { colors, fontSizes, spacing, borderRadius, shadows } from '../design-tokens';
import { FEAR_GREED_INDEX_API_URL } from '../constants';
import Gauge from './Gauge';

// Fear and Greed Index 데이터를 가져오는 함수
const fetchFearGreedIndex = async () => {
  const { data } = await axios.get(FEAR_GREED_INDEX_API_URL);
  return data;
};

const FearGreedIndex = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['fearGreedIndex'],
    queryFn: fetchFearGreedIndex,
  });

  if (isLoading) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }
  if (error) {
    return <Text style={styles.errorText}>데이터를 불러오는데 실패했습니다.</Text>;
  }

  const { fearAndGreedIndex, timestamp } = data;

  return (
    <View style={styles.indexContainer}>
      <Gauge value={fearAndGreedIndex} />
      <Text style={styles.timestamp}>{timestamp}</Text>
    </View>
  );
};

export default FearGreedIndex;

const styles = StyleSheet.create({
  indexContainer: {
    padding: spacing.large,
    backgroundColor: colors.white,
    borderRadius: borderRadius.default,
    ...shadows.default,
    alignItems: 'center',
  },
  indexValue: {
    fontSize: fontSizes.value,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: spacing.medium,
  },
  indexClassification: {
    fontSize: fontSizes.classification,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  timestamp: {
    fontSize: fontSizes.timestamp,
    color: colors.textTertiary,
    textAlign: 'center',
    marginTop: spacing.small,
  },
  errorText: {
    color: colors.error,
    textAlign: 'center',
  },
});