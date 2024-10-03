import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import FearGreedIndex from './components/FearGreedIndex';
import { colors, fontSizes, spacing } from './design-tokens';

// React Query 클라이언트 생성
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Fear and Greed Index</Text>
        <FearGreedIndex />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  title: {
    fontSize: fontSizes.title,
    fontWeight: 'bold',
    marginBottom: spacing.large,
  },
});
