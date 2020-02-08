import * as React from 'react';
import { IconContext } from 'react-icons';
import {
  TiAdjustBrightness,
  TiAdjustContrast,
  TiAnchorOutline,
  TiAnchor,
  TiArchive,
  TiArrowBackOutline,
  TiArrowBack,
  TiArrowDownOutline,
  TiArrowDownThick,
  TiArrowDown,
  TiArrowForwardOutline,
  TiArrowForward,
  TiArrowLeftOutline,
  TiArrowLeftThick,
  TiArrowLeft,
  TiArrowLoopOutline,
  TiArrowLoop,
  TiArrowMaximiseOutline,
  TiArrowMaximise,
  TiArrowMinimiseOutline,
  TiArrowMinimise,
  TiArrowMoveOutline,
  TiArrowMove,
  TiArrowRepeatOutline,
  TiArrowRepeat,
  TiArrowRightOutline,
  TiArrowRightThick,
  TiArrowRight,
  TiArrowShuffle,
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiArrowSyncOutline,
  TiArrowSync,
  TiArrowUnsorted,
  TiArrowUpOutline,
  TiArrowUpThick,
  TiArrowUp,
  TiAt,
  TiAttachmentOutline,
  TiAttachment,
  TiBackspaceOutline,
  TiBackspace,
  TiBatteryCharge,
  TiBatteryFull,
  TiBatteryHigh,
  TiBatteryLow,
  TiBatteryMid,
  TiBeaker,
  TiBeer,
  TiBell,
  TiBook,
  TiBookmark,
  TiBriefcase,
  TiBrush,
  TiBusinessCard,
  TiCalculator,
  TiCalendarOutline,
  TiCalendar,
  TiCameraOutline,
  TiCamera,
  TiCancelOutline,
  TiCancel,
  TiChartAreaOutline,
  TiChartArea,
  TiChartBarOutline,
  TiChartBar,
  TiChartLineOutline,
  TiChartLine,
  TiChartPieOutline,
  TiChartPie,
  TiChevronLeftOutline,
  TiChevronLeft,
  TiChevronRightOutline,
  TiChevronRight,
  TiClipboard,
  TiCloudStorageOutline,
  TiCloudStorage,
  TiCodeOutline,
  TiCode,
  TiCoffee,
  TiCogOutline,
  TiCog,
  TiCompass,
  TiContacts,
  TiCreditCard,
  TiCss3,
  TiDatabase,
  TiDeleteOutline,
  TiDelete,
  TiDeviceDesktop,
  TiDeviceLaptop,
  TiDevicePhone,
  TiDeviceTablet,
  TiDirections,
  TiDivideOutline,
  TiDivide,
  TiDocumentAdd,
  TiDocumentDelete,
  TiDocumentText,
  TiDocument,
  TiDownloadOutline,
  TiDownload,
  TiDropbox,
  TiEdit,
  TiEjectOutline,
  TiEject,
  TiEqualsOutline,
  TiEquals,
  TiExportOutline,
  TiExport,
  TiEyeOutline,
  TiEye,
  TiFeather,
  TiFilm,
  TiFilter,
  TiFlagOutline,
  TiFlag,
  TiFlashOutline,
  TiFlash,
  TiFlowChildren,
  TiFlowMerge,
  TiFlowParallel,
  TiFlowSwitch,
  TiFolderAdd,
  TiFolderDelete,
  TiFolderOpen,
  TiFolder,
  TiGift,
  TiGlobeOutline,
  TiGlobe,
  TiGroupOutline,
  TiGroup,
  TiHeadphones,
  TiHeartFullOutline,
  TiHeartHalfOutline,
  TiHeartOutline,
  TiHeart,
  TiHomeOutline,
  TiHome,
  TiHtml5,
  TiImageOutline,
  TiImage,
  TiInfinityOutline,
  TiInfinity,
  TiInfoLargeOutline,
  TiInfoLarge,
  TiInfoOutline,
  TiInfo,
  TiInputCheckedOutline,
  TiInputChecked,
  TiKeyOutline,
  TiKey,
  TiKeyboard,
  TiLeaf,
  TiLightbulb,
  TiLinkOutline,
  TiLink,
  TiLocationArrowOutline,
  TiLocationArrow,
  TiLocationOutline,
  TiLocation,
  TiLockClosedOutline,
  TiLockClosed,
  TiLockOpenOutline,
  TiLockOpen,
  TiMail,
  TiMap,
  TiMediaEjectOutline,
  TiMediaEject,
  TiMediaFastForwardOutline,
  TiMediaFastForward,
  TiMediaPauseOutline,
  TiMediaPause,
  TiMediaPlayOutline,
  TiMediaPlayReverseOutline,
  TiMediaPlayReverse,
  TiMediaPlay,
  TiMediaRecordOutline,
  TiMediaRecord,
  TiMediaRewindOutline,
  TiMediaRewind,
  TiMediaStopOutline,
  TiMediaStop,
  TiMessageTyping,
  TiMessage,
  TiMessages,
  TiMicrophoneOutline,
  TiMicrophone,
  TiMinusOutline,
  TiMinus,
  TiMortarBoard,
  TiNews,
  TiNotesOutline,
  TiNotes,
  TiPen,
  TiPencil,
  TiPhoneOutline,
  TiPhone,
  TiPiOutline,
  TiPi,
  TiPinOutline,
  TiPin,
  TiPipette,
  TiPlaneOutline,
  TiPlane,
  TiPlug,
  TiPlusOutline,
  TiPlus,
  TiPointOfInterestOutline,
  TiPointOfInterest,
  TiPowerOutline,
  TiPower,
  TiPrinter,
  TiPuzzleOutline,
  TiPuzzle,
  TiRadarOutline,
  TiRadar,
  TiRefreshOutline,
  TiRefresh,
  TiRssOutline,
  TiRss,
  TiScissorsOutline,
  TiScissors,
  TiShoppingBag,
  TiShoppingCart,
  TiSocialAtCircular,
  TiSocialDribbbleCircular,
  TiSocialDribbble,
  TiSocialFacebookCircular,
  TiSocialFacebook,
  TiSocialFlickrCircular,
  TiSocialFlickr,
  TiSocialGithubCircular,
  TiSocialGithub,
  TiSocialGooglePlusCircular,
  TiSocialGooglePlus,
  TiSocialInstagramCircular,
  TiSocialInstagram,
  TiSocialLastFmCircular,
  TiSocialLastFm,
  TiSocialLinkedinCircular,
  TiSocialLinkedin,
  TiSocialPinterestCircular,
  TiSocialPinterest,
  TiSocialSkypeOutline,
  TiSocialSkype,
  TiSocialTumblerCircular,
  TiSocialTumbler,
  TiSocialTwitterCircular,
  TiSocialTwitter,
  TiSocialVimeoCircular,
  TiSocialVimeo,
  TiSocialYoutubeCircular,
  TiSocialYoutube,
  TiSortAlphabeticallyOutline,
  TiSortAlphabetically,
  TiSortNumericallyOutline,
  TiSortNumerically,
  TiSpannerOutline,
  TiSpanner,
  TiSpiral,
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarHalf,
  TiStarOutline,
  TiStar,
  TiStarburstOutline,
  TiStarburst,
  TiStopwatch,
  TiSupport,
  TiTabsOutline,
  TiTag,
  TiTags,
  TiThLargeOutline,
  TiThLarge,
  TiThListOutline,
  TiThList,
  TiThMenuOutline,
  TiThMenu,
  TiThSmallOutline,
  TiThSmall,
  TiThermometer,
  TiThumbsDown,
  TiThumbsOk,
  TiThumbsUp,
  TiTickOutline,
  TiTick,
  TiTicket,
  TiTime,
  TiTimesOutline,
  TiTimes,
  TiTrash,
  TiTree,
  TiUploadOutline,
  TiUpload,
  TiUserAddOutline,
  TiUserAdd,
  TiUserDeleteOutline,
  TiUserDelete,
  TiUserOutline,
  TiUser,
  TiVendorAndroid,
  TiVendorApple,
  TiVendorMicrosoft,
  TiVideoOutline,
  TiVideo,
  TiVolumeDown,
  TiVolumeMute,
  TiVolumeUp,
  TiVolume,
  TiWarningOutline,
  TiWarning,
  TiWatch,
  TiWavesOutline,
  TiWaves,
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherNight,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherSunny,
  TiWeatherWindyCloudy,
  TiWeatherWindy,
  TiWiFiOutline,
  TiWiFi,
  TiWine,
  TiWorldOutline,
  TiWorld,
  TiZoomInOutline,
  TiZoomIn,
  TiZoomOutOutline,
  TiZoomOut,
  TiZoomOutline,
  TiZoom,
} from 'react-icons/ti';

export const TypIconType: { [key: string]: React.ElementType } = {
  'Ti-AdjustBrightness': TiAdjustBrightness,
  'Ti-AdjustContrast': TiAdjustContrast,
  'Ti-AnchorOutline': TiAnchorOutline,
  'Ti-Anchor': TiAnchor,
  'Ti-Archive': TiArchive,
  'Ti-ArrowBackOutline': TiArrowBackOutline,
  'Ti-ArrowBack': TiArrowBack,
  'Ti-ArrowDownOutline': TiArrowDownOutline,
  'Ti-ArrowDownThick': TiArrowDownThick,
  'Ti-ArrowDown': TiArrowDown,
  'Ti-ArrowForwardOutline': TiArrowForwardOutline,
  'Ti-ArrowForward': TiArrowForward,
  'Ti-ArrowLeftOutline': TiArrowLeftOutline,
  'Ti-ArrowLeftThick': TiArrowLeftThick,
  'Ti-ArrowLeft': TiArrowLeft,
  'Ti-ArrowLoopOutline': TiArrowLoopOutline,
  'Ti-ArrowLoop': TiArrowLoop,
  'Ti-ArrowMaximiseOutline': TiArrowMaximiseOutline,
  'Ti-ArrowMaximise': TiArrowMaximise,
  'Ti-ArrowMinimiseOutline': TiArrowMinimiseOutline,
  'Ti-ArrowMinimise': TiArrowMinimise,
  'Ti-ArrowMoveOutline': TiArrowMoveOutline,
  'Ti-ArrowMove': TiArrowMove,
  'Ti-ArrowRepeatOutline': TiArrowRepeatOutline,
  'Ti-ArrowRepeat': TiArrowRepeat,
  'Ti-ArrowRightOutline': TiArrowRightOutline,
  'Ti-ArrowRightThick': TiArrowRightThick,
  'Ti-ArrowRight': TiArrowRight,
  'Ti-ArrowShuffle': TiArrowShuffle,
  'Ti-ArrowSortedDown': TiArrowSortedDown,
  'Ti-ArrowSortedUp': TiArrowSortedUp,
  'Ti-ArrowSyncOutline': TiArrowSyncOutline,
  'Ti-ArrowSync': TiArrowSync,
  'Ti-ArrowUnsorted': TiArrowUnsorted,
  'Ti-ArrowUpOutline': TiArrowUpOutline,
  'Ti-ArrowUpThick': TiArrowUpThick,
  'Ti-ArrowUp': TiArrowUp,
  'Ti-At': TiAt,
  'Ti-AttachmentOutline': TiAttachmentOutline,
  'Ti-Attachment': TiAttachment,
  'Ti-BackspaceOutline': TiBackspaceOutline,
  'Ti-Backspace': TiBackspace,
  'Ti-BatteryCharge': TiBatteryCharge,
  'Ti-BatteryFull': TiBatteryFull,
  'Ti-BatteryHigh': TiBatteryHigh,
  'Ti-BatteryLow': TiBatteryLow,
  'Ti-BatteryMid': TiBatteryMid,
  'Ti-Beaker': TiBeaker,
  'Ti-Beer': TiBeer,
  'Ti-Bell': TiBell,
  'Ti-Book': TiBook,
  'Ti-Bookmark': TiBookmark,
  'Ti-Briefcase': TiBriefcase,
  'Ti-Brush': TiBrush,
  'Ti-BusinessCard': TiBusinessCard,
  'Ti-Calculator': TiCalculator,
  'Ti-CalendarOutline': TiCalendarOutline,
  'Ti-Calendar': TiCalendar,
  'Ti-CameraOutline': TiCameraOutline,
  'Ti-Camera': TiCamera,
  'Ti-CancelOutline': TiCancelOutline,
  'Ti-Cancel': TiCancel,
  'Ti-ChartAreaOutline': TiChartAreaOutline,
  'Ti-ChartArea': TiChartArea,
  'Ti-ChartBarOutline': TiChartBarOutline,
  'Ti-ChartBar': TiChartBar,
  'Ti-ChartLineOutline': TiChartLineOutline,
  'Ti-ChartLine': TiChartLine,
  'Ti-ChartPieOutline': TiChartPieOutline,
  'Ti-ChartPie': TiChartPie,
  'Ti-ChevronLeftOutline': TiChevronLeftOutline,
  'Ti-ChevronLeft': TiChevronLeft,
  'Ti-ChevronRightOutline': TiChevronRightOutline,
  'Ti-ChevronRight': TiChevronRight,
  'Ti-Clipboard': TiClipboard,
  'Ti-CloudStorageOutline': TiCloudStorageOutline,
  'Ti-CloudStorage': TiCloudStorage,
  'Ti-CodeOutline': TiCodeOutline,
  'Ti-Code': TiCode,
  'Ti-Coffee': TiCoffee,
  'Ti-CogOutline': TiCogOutline,
  'Ti-Cog': TiCog,
  'Ti-Compass': TiCompass,
  'Ti-Contacts': TiContacts,
  'Ti-CreditCard': TiCreditCard,
  'Ti-Css3': TiCss3,
  'Ti-Database': TiDatabase,
  'Ti-DeleteOutline': TiDeleteOutline,
  'Ti-Delete': TiDelete,
  'Ti-DeviceDesktop': TiDeviceDesktop,
  'Ti-DeviceLaptop': TiDeviceLaptop,
  'Ti-DevicePhone': TiDevicePhone,
  'Ti-DeviceTablet': TiDeviceTablet,
  'Ti-Directions': TiDirections,
  'Ti-DivideOutline': TiDivideOutline,
  'Ti-Divide': TiDivide,
  'Ti-DocumentAdd': TiDocumentAdd,
  'Ti-DocumentDelete': TiDocumentDelete,
  'Ti-DocumentText': TiDocumentText,
  'Ti-Document': TiDocument,
  'Ti-DownloadOutline': TiDownloadOutline,
  'Ti-Download': TiDownload,
  'Ti-Dropbox': TiDropbox,
  'Ti-Edit': TiEdit,
  'Ti-EjectOutline': TiEjectOutline,
  'Ti-Eject': TiEject,
  'Ti-EqualsOutline': TiEqualsOutline,
  'Ti-Equals': TiEquals,
  'Ti-ExportOutline': TiExportOutline,
  'Ti-Export': TiExport,
  'Ti-EyeOutline': TiEyeOutline,
  'Ti-Eye': TiEye,
  'Ti-Feather': TiFeather,
  'Ti-Film': TiFilm,
  'Ti-Filter': TiFilter,
  'Ti-FlagOutline': TiFlagOutline,
  'Ti-Flag': TiFlag,
  'Ti-FlashOutline': TiFlashOutline,
  'Ti-Flash': TiFlash,
  'Ti-FlowChildren': TiFlowChildren,
  'Ti-FlowMerge': TiFlowMerge,
  'Ti-FlowParallel': TiFlowParallel,
  'Ti-FlowSwitch': TiFlowSwitch,
  'Ti-FolderAdd': TiFolderAdd,
  'Ti-FolderDelete': TiFolderDelete,
  'Ti-FolderOpen': TiFolderOpen,
  'Ti-Folder': TiFolder,
  'Ti-Gift': TiGift,
  'Ti-GlobeOutline': TiGlobeOutline,
  'Ti-Globe': TiGlobe,
  'Ti-GroupOutline': TiGroupOutline,
  'Ti-Group': TiGroup,
  'Ti-Headphones': TiHeadphones,
  'Ti-HeartFullOutline': TiHeartFullOutline,
  'Ti-HeartHalfOutline': TiHeartHalfOutline,
  'Ti-HeartOutline': TiHeartOutline,
  'Ti-Heart': TiHeart,
  'Ti-HomeOutline': TiHomeOutline,
  'Ti-Home': TiHome,
  'Ti-Html5': TiHtml5,
  'Ti-ImageOutline': TiImageOutline,
  'Ti-Image': TiImage,
  'Ti-InfinityOutline': TiInfinityOutline,
  'Ti-Infinity': TiInfinity,
  'Ti-InfoLargeOutline': TiInfoLargeOutline,
  'Ti-InfoLarge': TiInfoLarge,
  'Ti-InfoOutline': TiInfoOutline,
  'Ti-Info': TiInfo,
  'Ti-InputCheckedOutline': TiInputCheckedOutline,
  'Ti-InputChecked': TiInputChecked,
  'Ti-KeyOutline': TiKeyOutline,
  'Ti-Key': TiKey,
  'Ti-Keyboard': TiKeyboard,
  'Ti-Leaf': TiLeaf,
  'Ti-Lightbulb': TiLightbulb,
  'Ti-LinkOutline': TiLinkOutline,
  'Ti-Link': TiLink,
  'Ti-LocationArrowOutline': TiLocationArrowOutline,
  'Ti-LocationArrow': TiLocationArrow,
  'Ti-LocationOutline': TiLocationOutline,
  'Ti-Location': TiLocation,
  'Ti-LockClosedOutline': TiLockClosedOutline,
  'Ti-LockClosed': TiLockClosed,
  'Ti-LockOpenOutline': TiLockOpenOutline,
  'Ti-LockOpen': TiLockOpen,
  'Ti-Mail': TiMail,
  'Ti-Map': TiMap,
  'Ti-MediaEjectOutline': TiMediaEjectOutline,
  'Ti-MediaEject': TiMediaEject,
  'Ti-MediaFastForwardOutline': TiMediaFastForwardOutline,
  'Ti-MediaFastForward': TiMediaFastForward,
  'Ti-MediaPauseOutline': TiMediaPauseOutline,
  'Ti-MediaPause': TiMediaPause,
  'Ti-MediaPlayOutline': TiMediaPlayOutline,
  'Ti-MediaPlayReverseOutline': TiMediaPlayReverseOutline,
  'Ti-MediaPlayReverse': TiMediaPlayReverse,
  'Ti-MediaPlay': TiMediaPlay,
  'Ti-MediaRecordOutline': TiMediaRecordOutline,
  'Ti-MediaRecord': TiMediaRecord,
  'Ti-MediaRewindOutline': TiMediaRewindOutline,
  'Ti-MediaRewind': TiMediaRewind,
  'Ti-MediaStopOutline': TiMediaStopOutline,
  'Ti-MediaStop': TiMediaStop,
  'Ti-MessageTyping': TiMessageTyping,
  'Ti-Message': TiMessage,
  'Ti-Messages': TiMessages,
  'Ti-MicrophoneOutline': TiMicrophoneOutline,
  'Ti-Microphone': TiMicrophone,
  'Ti-MinusOutline': TiMinusOutline,
  'Ti-Minus': TiMinus,
  'Ti-MortarBoard': TiMortarBoard,
  'Ti-News': TiNews,
  'Ti-NotesOutline': TiNotesOutline,
  'Ti-Notes': TiNotes,
  'Ti-Pen': TiPen,
  'Ti-Pencil': TiPencil,
  'Ti-PhoneOutline': TiPhoneOutline,
  'Ti-Phone': TiPhone,
  'Ti-PiOutline': TiPiOutline,
  'Ti-Pi': TiPi,
  'Ti-PinOutline': TiPinOutline,
  'Ti-Pin': TiPin,
  'Ti-Pipette': TiPipette,
  'Ti-PlaneOutline': TiPlaneOutline,
  'Ti-Plane': TiPlane,
  'Ti-Plug': TiPlug,
  'Ti-PlusOutline': TiPlusOutline,
  'Ti-Plus': TiPlus,
  'Ti-PointOfInterestOutline': TiPointOfInterestOutline,
  'Ti-PointOfInterest': TiPointOfInterest,
  'Ti-PowerOutline': TiPowerOutline,
  'Ti-Power': TiPower,
  'Ti-Printer': TiPrinter,
  'Ti-PuzzleOutline': TiPuzzleOutline,
  'Ti-Puzzle': TiPuzzle,
  'Ti-RadarOutline': TiRadarOutline,
  'Ti-Radar': TiRadar,
  'Ti-RefreshOutline': TiRefreshOutline,
  'Ti-Refresh': TiRefresh,
  'Ti-RssOutline': TiRssOutline,
  'Ti-Rss': TiRss,
  'Ti-ScissorsOutline': TiScissorsOutline,
  'Ti-Scissors': TiScissors,
  'Ti-ShoppingBag': TiShoppingBag,
  'Ti-ShoppingCart': TiShoppingCart,
  'Ti-SocialAtCircular': TiSocialAtCircular,
  'Ti-SocialDribbbleCircular': TiSocialDribbbleCircular,
  'Ti-SocialDribbble': TiSocialDribbble,
  'Ti-SocialFacebookCircular': TiSocialFacebookCircular,
  'Ti-SocialFacebook': TiSocialFacebook,
  'Ti-SocialFlickrCircular': TiSocialFlickrCircular,
  'Ti-SocialFlickr': TiSocialFlickr,
  'Ti-SocialGithubCircular': TiSocialGithubCircular,
  'Ti-SocialGithub': TiSocialGithub,
  'Ti-SocialGooglePlusCircular': TiSocialGooglePlusCircular,
  'Ti-SocialGooglePlus': TiSocialGooglePlus,
  'Ti-SocialInstagramCircular': TiSocialInstagramCircular,
  'Ti-SocialInstagram': TiSocialInstagram,
  'Ti-SocialLastFmCircular': TiSocialLastFmCircular,
  'Ti-SocialLastFm': TiSocialLastFm,
  'Ti-SocialLinkedinCircular': TiSocialLinkedinCircular,
  'Ti-SocialLinkedin': TiSocialLinkedin,
  'Ti-SocialPinterestCircular': TiSocialPinterestCircular,
  'Ti-SocialPinterest': TiSocialPinterest,
  'Ti-SocialSkypeOutline': TiSocialSkypeOutline,
  'Ti-SocialSkype': TiSocialSkype,
  'Ti-SocialTumblerCircular': TiSocialTumblerCircular,
  'Ti-SocialTumbler': TiSocialTumbler,
  'Ti-SocialTwitterCircular': TiSocialTwitterCircular,
  'Ti-SocialTwitter': TiSocialTwitter,
  'Ti-SocialVimeoCircular': TiSocialVimeoCircular,
  'Ti-SocialVimeo': TiSocialVimeo,
  'Ti-SocialYoutubeCircular': TiSocialYoutubeCircular,
  'Ti-SocialYoutube': TiSocialYoutube,
  'Ti-SortAlphabeticallyOutline': TiSortAlphabeticallyOutline,
  'Ti-SortAlphabetically': TiSortAlphabetically,
  'Ti-SortNumericallyOutline': TiSortNumericallyOutline,
  'Ti-SortNumerically': TiSortNumerically,
  'Ti-SpannerOutline': TiSpannerOutline,
  'Ti-Spanner': TiSpanner,
  'Ti-Spiral': TiSpiral,
  'Ti-StarFullOutline': TiStarFullOutline,
  'Ti-StarHalfOutline': TiStarHalfOutline,
  'Ti-StarHalf': TiStarHalf,
  'Ti-StarOutline': TiStarOutline,
  'Ti-Star': TiStar,
  'Ti-StarburstOutline': TiStarburstOutline,
  'Ti-Starburst': TiStarburst,
  'Ti-Stopwatch': TiStopwatch,
  'Ti-Support': TiSupport,
  'Ti-TabsOutline': TiTabsOutline,
  'Ti-Tag': TiTag,
  'Ti-Tags': TiTags,
  'Ti-ThLargeOutline': TiThLargeOutline,
  'Ti-ThLarge': TiThLarge,
  'Ti-ThListOutline': TiThListOutline,
  'Ti-ThList': TiThList,
  'Ti-ThMenuOutline': TiThMenuOutline,
  'Ti-ThMenu': TiThMenu,
  'Ti-ThSmallOutline': TiThSmallOutline,
  'Ti-ThSmall': TiThSmall,
  'Ti-Thermometer': TiThermometer,
  'Ti-ThumbsDown': TiThumbsDown,
  'Ti-ThumbsOk': TiThumbsOk,
  'Ti-ThumbsUp': TiThumbsUp,
  'Ti-TickOutline': TiTickOutline,
  'Ti-Tick': TiTick,
  'Ti-Ticket': TiTicket,
  'Ti-Time': TiTime,
  'Ti-TimesOutline': TiTimesOutline,
  'Ti-Times': TiTimes,
  'Ti-Trash': TiTrash,
  'Ti-Tree': TiTree,
  'Ti-UploadOutline': TiUploadOutline,
  'Ti-Upload': TiUpload,
  'Ti-UserAddOutline': TiUserAddOutline,
  'Ti-UserAdd': TiUserAdd,
  'Ti-UserDeleteOutline': TiUserDeleteOutline,
  'Ti-UserDelete': TiUserDelete,
  'Ti-UserOutline': TiUserOutline,
  'Ti-User': TiUser,
  'Ti-VendorAndroid': TiVendorAndroid,
  'Ti-VendorApple': TiVendorApple,
  'Ti-VendorMicrosoft': TiVendorMicrosoft,
  'Ti-VideoOutline': TiVideoOutline,
  'Ti-Video': TiVideo,
  'Ti-VolumeDown': TiVolumeDown,
  'Ti-VolumeMute': TiVolumeMute,
  'Ti-VolumeUp': TiVolumeUp,
  'Ti-Volume': TiVolume,
  'Ti-WarningOutline': TiWarningOutline,
  'Ti-Warning': TiWarning,
  'Ti-Watch': TiWatch,
  'Ti-WavesOutline': TiWavesOutline,
  'Ti-Waves': TiWaves,
  'Ti-WeatherCloudy': TiWeatherCloudy,
  'Ti-WeatherDownpour': TiWeatherDownpour,
  'Ti-WeatherNight': TiWeatherNight,
  'Ti-WeatherPartlySunny': TiWeatherPartlySunny,
  'Ti-WeatherShower': TiWeatherShower,
  'Ti-WeatherSnow': TiWeatherSnow,
  'Ti-WeatherStormy': TiWeatherStormy,
  'Ti-WeatherSunny': TiWeatherSunny,
  'Ti-WeatherWindyCloudy': TiWeatherWindyCloudy,
  'Ti-WeatherWindy': TiWeatherWindy,
  'Ti-WiFiOutline': TiWiFiOutline,
  'Ti-WiFi': TiWiFi,
  'Ti-Wine': TiWine,
  'Ti-WorldOutline': TiWorldOutline,
  'Ti-World': TiWorld,
  'Ti-ZoomInOutline': TiZoomInOutline,
  'Ti-ZoomIn': TiZoomIn,
  'Ti-ZoomOutOutline': TiZoomOutOutline,
  'Ti-ZoomOut': TiZoomOut,
  'Ti-ZoomOutline': TiZoomOutline,
  'Ti-Zoom': TiZoom,
};

export interface TypIconProps {
  name: keyof typeof TypIconType;
  color?: string;
  size?: number;
  className?: string;
}

export const TypIcon = ({ name, color = '#363636', size = 16, className = '' }: TypIconProps) => {
  const NinoIcon = TypIconType[name];
  return (
    <IconContext.Provider value={{ color: color, size: `${size}px`, className: className }}>
      <NinoIcon />
    </IconContext.Provider>
  );
};
