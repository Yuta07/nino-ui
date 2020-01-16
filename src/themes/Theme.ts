import { Palette, DEFAULT_PALETTE } from './Palette';
import { FontSize, MediaQuery, DEFAULT_FONT_SIZE, DEFAULT_MEDIA_QUERY } from './Size';

export interface Theme {
  palette: Palette
  size: FontSize
  media: MediaQuery
}

export const theme = () => {
  const ninoTheme: Theme = {
    palette: DEFAULT_PALETTE,
    size: DEFAULT_FONT_SIZE,
    media: DEFAULT_MEDIA_QUERY
  }
  return ninoTheme;
}