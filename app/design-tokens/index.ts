// /design-tokens/index.ts
// https://www.figma.com/design/e3Jy3KozAScODE6xLm9b0Z/Mobile-Apps-%E2%80%93-Prototyping-Kit-(Community)?node-id=6-464&node-type=canvas&t=0NKyc652j8v4fxKC-0
const colors = {
  background: '#F3F4F6',
  white: '#FFFFFF',
  highlight: '006FFD',
  textPrimary: '#000000',
  textSecondary: '#6B7280',
  textTertiary: '#9CA3AF',
  error: '#ED3241',
  warning: '#E86339',
  success: '#298267',
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
