import { Palette, DEFAULT_PALETTE } from './Palette';
import { FontSize, MediaQuery, Device, FONT_SIZE, MEDIA_QUERY, DEVICE } from './Size';

export interface Theme {
  palette: Palette
  fontSize: FontSize
  media: MediaQuery
  device: Device
}

export const theme = () => {
  const ninoTheme: Theme = {
    palette: DEFAULT_PALETTE,
    fontSize: FONT_SIZE,
    media: MEDIA_QUERY,
    device: DEVICE
  }
  return ninoTheme;
}