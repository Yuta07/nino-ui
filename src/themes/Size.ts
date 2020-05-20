export interface FontSize {
  SMALL: number;
  MEDIUM: number;
  LARGE: number;
}

export interface MediaQuery {
  MOBILE_S: number;
  MOBILE: number;
  TABLET: number;
  TABLET_PRO: number;
  LAPTOP: number;
}

export interface Device {
  MOBILE_S: string;
  MOBILE: string;
  TABLET: string;
  TABLET_PRO: string;
  LAPTOP: string;
}

export const FONT_SIZE: FontSize = { SMALL: 14, MEDIUM: 16, LARGE: 18 };
export const MEDIA_QUERY: MediaQuery = { MOBILE_S: 320, MOBILE: 480, TABLET: 768, TABLET_PRO: 1024, LAPTOP: 1025 };
export const DEVICE: Device = {
  MOBILE_S: `(max-width: ${MEDIA_QUERY.MOBILE_S}px)`,
  MOBILE: `(max-width: ${MEDIA_QUERY.MOBILE}px)`,
  TABLET: `(max-width: ${MEDIA_QUERY.TABLET}px)`,
  TABLET_PRO: `(max-width: ${MEDIA_QUERY.TABLET_PRO}px)`,
  LAPTOP: `(min-width: ${MEDIA_QUERY.LAPTOP}px)`,
};
