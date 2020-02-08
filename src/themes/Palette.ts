export interface Palette {
  PRIMARY: string
  SECONDARY: string
  BORDER: string
  MAIN: string
  DANGER: string
  WARNING: string
  INFO: string
  SUCCESS: string
  OVERLAY: string
}

export const DEFAULT_PALETTE: Palette = {
  PRIMARY: '#363636',
  SECONDARY: '#eeeeee',
  BORDER: '#c2c2c2',
  MAIN: '#f39c12',
  DANGER: '#c0392b',
  WARNING: '#f1c40f',
  INFO: '#16a085',
  SUCCESS: '#3498db',
  OVERLAY: 'rgba(250, 250, 250, 0.4)'
}