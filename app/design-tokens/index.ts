// /design-tokens/index.ts
const colors = {
  background: '#F3F4F6',
  white: '#FFFFFF',
  textPrimary: '#000000',
  textSecondary: '#6B7280',
  textTertiary: '#9CA3AF',
  error: 'red',
};

const fontSizes = {
  title: 24,
  value: 32,
  classification: 18,
  timestamp: 12,
};

const spacing = {
  small: 4,
  medium: 8,
  large: 16,
};

const borderRadius = {
  default: 8,
};

const shadows = {
  default: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
};

export { colors, fontSizes, spacing, borderRadius, shadows };
