export interface Palette {
  PRIMARY: string;
  SECONDARY: string;
  SUB_SECONDARY: string;
  GRAY: string;
  DARK: string;
  PLACE_HOLDER: string;
  BORDER: string;
  MAIN: string;
  DANGER: string;
  WARNING: string;
  INFO: string;
  SUCCESS: string;
  OVERLAY: string;
  TRANSPARENT: string;
}

export const DEFAULT_PALETTE: Palette = {
  PRIMARY: '#2c3e50',
  SECONDARY: '#fefefe',
  SUB_SECONDARY: '#f5f5f5',
  GRAY: '#ced4da',
  DARK: 'rgb(43, 46, 53)',
  PLACE_HOLDER: 'rgba(69, 69, 69, 0.5)',
  BORDER: '#c2c2c2',
  MAIN: '#f39c12',
  DANGER: '#e74c3c',
  WARNING: '#f1c40f',
  INFO: '#16a085',
  SUCCESS: '#3498db',
  OVERLAY: 'rgba(250, 250, 250, 0.4)',
  TRANSPARENT: 'transparent',
};
