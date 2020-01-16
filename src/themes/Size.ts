export interface FontSize {
  SMALL: number
  MEDIUM: number
  LARGE: number
}

export interface MediaQuery {
  MOBILE: number
  TABLET: number
  TABLET_PRO: number
}

export const DEFAULT_FONT_SIZE: FontSize = { SMALL: 11, MEDIUM: 14, LARGE: 16 };
export const DEFAULT_MEDIA_QUERY: MediaQuery = { MOBILE: 599, TABLET: 959, TABLET_PRO: 1024 }