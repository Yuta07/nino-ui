import * as React from 'react';
import { IconContext } from 'react-icons';
import {
  FiActivity,
  FiAirplay,
  FiAlertCircle,
  FiAlertOctagon,
  FiAlertTriangle,
  FiAlignCenter,
  FiAlignJustify,
  FiAlignLeft,
  FiAlignRight,
  FiAnchor,
  FiAperture,
  FiArchive,
  FiArrowDownCircle,
  FiArrowDownLeft,
  FiArrowDownRight,
  FiArrowDown,
  FiArrowLeftCircle,
  FiArrowLeft,
  FiArrowRightCircle,
  FiArrowRight,
  FiArrowUpCircle,
  FiArrowUpLeft,
  FiArrowUpRight,
  FiArrowUp,
  FiAtSign,
  FiAward,
  FiBarChart2,
  FiBarChart,
  FiBatteryCharging,
  FiBattery,
  FiBellOff,
  FiBell,
  FiBluetooth,
  FiBold,
  FiBookOpen,
  FiBook,
  FiBookmark,
  FiBox,
  FiBriefcase,
  FiCalendar,
  FiCameraOff,
  FiCamera,
  FiCast,
  FiCheckCircle,
  FiCheckSquare,
  FiCheck,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiChevronUp,
  FiChevronsDown,
  FiChevronsLeft,
  FiChevronsRight,
  FiChevronsUp,
  FiChrome,
  FiCircle,
  FiClipboard,
  FiClock,
  FiCloudDrizzle,
  FiCloudLightning,
  FiCloudOff,
  FiCloudRain,
  FiCloudSnow,
  FiCloud,
  FiCode,
  FiCodepen,
  FiCodesandbox,
  FiCoffee,
  FiColumns,
  FiCommand,
  FiCompass,
  FiCopy,
  FiCornerDownLeft,
  FiCornerDownRight,
  FiCornerLeftDown,
  FiCornerLeftUp,
  FiCornerRightDown,
  FiCornerRightUp,
  FiCornerUpLeft,
  FiCornerUpRight,
  FiCpu,
  FiCreditCard,
  FiCrop,
  FiCrosshair,
  FiDatabase,
  FiDelete,
  FiDisc,
  FiDollarSign,
  FiDownloadCloud,
  FiDownload,
  FiDroplet,
  FiEdit2,
  FiEdit3,
  FiEdit,
  FiExternalLink,
  FiEyeOff,
  FiEye,
  FiFacebook,
  FiFastForward,
  FiFeather,
  FiFigma,
  FiFileMinus,
  FiFilePlus,
  FiFileText,
  FiFile,
  FiFilm,
  FiFilter,
  FiFlag,
  FiFolderMinus,
  FiFolderPlus,
  FiFolder,
  FiFrown,
  FiGift,
  FiGitBranch,
  FiGitCommit,
  FiGitMerge,
  FiGitPullRequest,
  FiGithub,
  FiGitlab,
  FiGlobe,
  FiGrid,
  FiHardDrive,
  FiHash,
  FiHeadphones,
  FiHeart,
  FiHelpCircle,
  FiHexagon,
  FiHome,
  FiImage,
  FiInbox,
  FiInfo,
  FiInstagram,
  FiItalic,
  FiKey,
  FiLayers,
  FiLayout,
  FiLifeBuoy,
  FiLink2,
  FiLink,
  FiLinkedin,
  FiList,
  FiLoader,
  FiLock,
  FiLogIn,
  FiLogOut,
  FiMail,
  FiMapPin,
  FiMap,
  FiMaximize2,
  FiMaximize,
  FiMeh,
  FiMenu,
  FiMessageCircle,
  FiMessageSquare,
  FiMicOff,
  FiMic,
  FiMinimize2,
  FiMinimize,
  FiMinusCircle,
  FiMinusSquare,
  FiMinus,
  FiMonitor,
  FiMoon,
  FiMoreHorizontal,
  FiMoreVertical,
  FiMousePointer,
  FiMove,
  FiMusic,
  FiNavigation2,
  FiNavigation,
  FiOctagon,
  FiPackage,
  FiPaperclip,
  FiPauseCircle,
  FiPause,
  FiPenTool,
  FiPercent,
  FiPhoneCall,
  FiPhoneForwarded,
  FiPhoneIncoming,
  FiPhoneMissed,
  FiPhoneOff,
  FiPhoneOutgoing,
  FiPhone,
  FiPieChart,
  FiPlayCircle,
  FiPlay,
  FiPlusCircle,
  FiPlusSquare,
  FiPlus,
  FiPocket,
  FiPower,
  FiPrinter,
  FiRadio,
  FiRefreshCcw,
  FiRefreshCw,
  FiRepeat,
  FiRewind,
  FiRotateCcw,
  FiRotateCw,
  FiRss,
  FiSave,
  FiScissors,
  FiSearch,
  FiSend,
  FiServer,
  FiSettings,
  FiShare2,
  FiShare,
  FiShieldOff,
  FiShield,
  FiShoppingBag,
  FiShoppingCart,
  FiShuffle,
  FiSidebar,
  FiSkipBack,
  FiSkipForward,
  FiSlack,
  FiSlash,
  FiSliders,
  FiSmartphone,
  FiSmile,
  FiSpeaker,
  FiSquare,
  FiStar,
  FiStopCircle,
  FiSun,
  FiSunrise,
  FiSunset,
  FiTablet,
  FiTag,
  FiTarget,
  FiTerminal,
  FiThermometer,
  FiThumbsDown,
  FiThumbsUp,
  FiToggleLeft,
  FiToggleRight,
  FiTrash2,
  FiTrash,
  FiTrello,
  FiTrendingDown,
  FiTrendingUp,
  FiTriangle,
  FiTruck,
  FiTv,
  FiTwitter,
  FiType,
  FiUmbrella,
  FiUnderline,
  FiUnlock,
  FiUploadCloud,
  FiUpload,
  FiUserCheck,
  FiUserMinus,
  FiUserPlus,
  FiUserX,
  FiUser,
  FiUsers,
  FiVideoOff,
  FiVideo,
  FiVoicemail,
  FiVolume1,
  FiVolume2,
  FiVolumeX,
  FiVolume,
  FiWatch,
  FiWifiOff,
  FiWifi,
  FiWind,
  FiXCircle,
  FiXOctagon,
  FiXSquare,
  FiX,
  FiYoutube,
  FiZapOff,
  FiZap,
  FiZoomIn,
  FiZoomOut,
} from 'react-icons/fi';

export const IconType: { [key: string]: React.ElementType } = {
  'Fi-Activity': FiActivity,
  'Fi-Airplay': FiAirplay,
  'Fi-AlertCircle': FiAlertCircle,
  'Fi-AlertOctagon': FiAlertOctagon,
  'Fi-AlertTriangle': FiAlertTriangle,
  'Fi-AlignCenter': FiAlignCenter,
  'Fi-AlignJustify': FiAlignJustify,
  'Fi-AlignLeft': FiAlignLeft,
  'Fi-AlignRight': FiAlignRight,
  'Fi-Anchor': FiAnchor,
  'Fi-Aperture': FiAperture,
  'Fi-Archive': FiArchive,
  'Fi-ArrowDownCircle': FiArrowDownCircle,
  'Fi-ArrowDownLeft': FiArrowDownLeft,
  'Fi-ArrowDownRight': FiArrowDownRight,
  'Fi-ArrowDown': FiArrowDown,
  'Fi-ArrowLeftCircle': FiArrowLeftCircle,
  'Fi-ArrowLeft': FiArrowLeft,
  'Fi-ArrowRightCircle': FiArrowRightCircle,
  'Fi-ArrowRight': FiArrowRight,
  'Fi-ArrowUpCircle': FiArrowUpCircle,
  'Fi-ArrowUpLeft': FiArrowUpLeft,
  'Fi-ArrowUpRight': FiArrowUpRight,
  'Fi-ArrowUp': FiArrowUp,
  'Fi-AtSign': FiAtSign,
  'Fi-Award': FiAward,
  'Fi-BarChart2': FiBarChart2,
  'Fi-BarChart': FiBarChart,
  'Fi-BatteryCharging': FiBatteryCharging,
  'Fi-Battery': FiBattery,
  'Fi-BellOff': FiBellOff,
  'Fi-Bell': FiBell,
  'Fi-Bluetooth': FiBluetooth,
  'Fi-Bold': FiBold,
  'Fi-BookOpen': FiBookOpen,
  'Fi-Book': FiBook,
  'Fi-Bookmark': FiBookmark,
  'Fi-Box': FiBox,
  'Fi-Briefcase': FiBriefcase,
  'Fi-Calendar': FiCalendar,
  'Fi-CameraOff': FiCameraOff,
  'Fi-Camera': FiCamera,
  'Fi-Cast': FiCast,
  'Fi-CheckCircle': FiCheckCircle,
  'Fi-CheckSquare': FiCheckSquare,
  'Fi-Check': FiCheck,
  'Fi-ChevronDown': FiChevronDown,
  'Fi-ChevronLeft': FiChevronLeft,
  'Fi-ChevronRight': FiChevronRight,
  'Fi-ChevronUp': FiChevronUp,
  'Fi-ChevronsDown': FiChevronsDown,
  'Fi-ChevronsLeft': FiChevronsLeft,
  'Fi-ChevronsRight': FiChevronsRight,
  'Fi-ChevronsUp': FiChevronsUp,
  'Fi-Chrome': FiChrome,
  'Fi-Circle': FiCircle,
  'Fi-Clipboard': FiClipboard,
  'Fi-Clock': FiClock,
  'Fi-CloudDrizzle': FiCloudDrizzle,
  'Fi-CloudLightning': FiCloudLightning,
  'Fi-CloudOff': FiCloudOff,
  'Fi-CloudRain': FiCloudRain,
  'Fi-CloudSnow': FiCloudSnow,
  'Fi-Cloud': FiCloud,
  'Fi-Code': FiCode,
  'Fi-Codepen': FiCodepen,
  'Fi-Codesandbox': FiCodesandbox,
  'Fi-Coffee': FiCoffee,
  'Fi-Columns': FiColumns,
  'Fi-Command': FiCommand,
  'Fi-Compass': FiCompass,
  'Fi-Copy': FiCopy,
  'Fi-CornerDownLeft': FiCornerDownLeft,
  'Fi-CornerDownRight': FiCornerDownRight,
  'Fi-CornerLeftDown': FiCornerLeftDown,
  'Fi-CornerLeftUp': FiCornerLeftUp,
  'Fi-CornerRightDown': FiCornerRightDown,
  'Fi-CornerRightUp': FiCornerRightUp,
  'Fi-CornerUpLeft': FiCornerUpLeft,
  'Fi-CornerUpRight': FiCornerUpRight,
  'Fi-Cpu': FiCpu,
  'Fi-CreditCard': FiCreditCard,
  'Fi-Crop': FiCrop,
  'Fi-Crosshair': FiCrosshair,
  'Fi-Database': FiDatabase,
  'Fi-Delete': FiDelete,
  'Fi-Disc': FiDisc,
  'Fi-DollarSign': FiDollarSign,
  'Fi-DownloadCloud': FiDownloadCloud,
  'Fi-Download': FiDownload,
  'Fi-Droplet': FiDroplet,
  'Fi-Edit2': FiEdit2,
  'Fi-Edit3': FiEdit3,
  'Fi-Edit': FiEdit,
  'Fi-ExternalLink': FiExternalLink,
  'Fi-EyeOff': FiEyeOff,
  'Fi-Eye': FiEye,
  'Fi-Facebook': FiFacebook,
  'Fi-FastForward': FiFastForward,
  'Fi-Feather': FiFeather,
  'Fi-Figma': FiFigma,
  'Fi-FileMinus': FiFileMinus,
  'Fi-FilePlus': FiFilePlus,
  'Fi-FileText': FiFileText,
  'Fi-File': FiFile,
  'Fi-Film': FiFilm,
  'Fi-Filter': FiFilter,
  'Fi-Flag': FiFlag,
  'Fi-FolderMinus': FiFolderMinus,
  'Fi-FolderPlus': FiFolderPlus,
  'Fi-Folder': FiFolder,
  'Fi-Frown': FiFrown,
  'Fi-Gift': FiGift,
  'Fi-GitBranch': FiGitBranch,
  'Fi-GitCommit': FiGitCommit,
  'Fi-GitMerge': FiGitMerge,
  'Fi-GitPullRequest': FiGitPullRequest,
  'Fi-Github': FiGithub,
  'Fi-Gitlab': FiGitlab,
  'Fi-Globe': FiGlobe,
  'Fi-Grid': FiGrid,
  'Fi-HardDrive': FiHardDrive,
  'Fi-Hash': FiHash,
  'Fi-Headphones': FiHeadphones,
  'Fi-Heart': FiHeart,
  'Fi-HelpCircle': FiHelpCircle,
  'Fi-Hexagon': FiHexagon,
  'Fi-Home': FiHome,
  'Fi-Image': FiImage,
  'Fi-Inbox': FiInbox,
  'Fi-Info': FiInfo,
  'Fi-Instagram': FiInstagram,
  'Fi-Italic': FiItalic,
  'Fi-Key': FiKey,
  'Fi-Layers': FiLayers,
  'Fi-Layout': FiLayout,
  'Fi-LifeBuoy': FiLifeBuoy,
  'Fi-Link2': FiLink2,
  'Fi-Link': FiLink,
  'Fi-Linkedin': FiLinkedin,
  'Fi-List': FiList,
  'Fi-Loader': FiLoader,
  'Fi-Lock': FiLock,
  'Fi-LogIn': FiLogIn,
  'Fi-LogOut': FiLogOut,
  'Fi-Mail': FiMail,
  'Fi-MapPin': FiMapPin,
  'Fi-Map': FiMap,
  'Fi-Maximize2': FiMaximize2,
  'Fi-Maximize': FiMaximize,
  'Fi-Meh': FiMeh,
  'Fi-Menu': FiMenu,
  'Fi-MessageCircle': FiMessageCircle,
  'Fi-MessageSquare': FiMessageSquare,
  'Fi-MicOff': FiMicOff,
  'Fi-Mic': FiMic,
  'Fi-Minimize2': FiMinimize2,
  'Fi-Minimize': FiMinimize,
  'Fi-MinusCircle': FiMinusCircle,
  'Fi-MinusSquare': FiMinusSquare,
  'Fi-Minus': FiMinus,
  'Fi-Monitor': FiMonitor,
  'Fi-Moon': FiMoon,
  'Fi-MoreHorizontal': FiMoreHorizontal,
  'Fi-MoreVertical': FiMoreVertical,
  'Fi-MousePointer': FiMousePointer,
  'Fi-Move': FiMove,
  'Fi-Music': FiMusic,
  'Fi-Navigation2': FiNavigation2,
  'Fi-Navigation': FiNavigation,
  'Fi-Octagon': FiOctagon,
  'Fi-Package': FiPackage,
  'Fi-Paperclip': FiPaperclip,
  'Fi-PauseCircle': FiPauseCircle,
  'Fi-Pause': FiPause,
  'Fi-PenTool': FiPenTool,
  'Fi-Percent': FiPercent,
  'Fi-PhoneCall': FiPhoneCall,
  'Fi-PhoneForwarded': FiPhoneForwarded,
  'Fi-PhoneIncoming': FiPhoneIncoming,
  'Fi-PhoneMissed': FiPhoneMissed,
  'Fi-PhoneOff': FiPhoneOff,
  'Fi-PhoneOutgoing': FiPhoneOutgoing,
  'Fi-Phone': FiPhone,
  'Fi-PieChart': FiPieChart,
  'Fi-PlayCircle': FiPlayCircle,
  'Fi-Play': FiPlay,
  'Fi-PlusCircle': FiPlusCircle,
  'Fi-PlusSquare': FiPlusSquare,
  'Fi-Plus': FiPlus,
  'Fi-Pocket': FiPocket,
  'Fi-Power': FiPower,
  'Fi-Printer': FiPrinter,
  'Fi-Radio': FiRadio,
  'Fi-RefreshCcw': FiRefreshCcw,
  'Fi-RefreshCw': FiRefreshCw,
  'Fi-Repeat': FiRepeat,
  'Fi-Rewind': FiRewind,
  'Fi-RotateCcw': FiRotateCcw,
  'Fi-RotateCw': FiRotateCw,
  'Fi-Rss': FiRss,
  'Fi-Save': FiSave,
  'Fi-Scissors': FiScissors,
  'Fi-Search': FiSearch,
  'Fi-Send': FiSend,
  'Fi-Server': FiServer,
  'Fi-Settings': FiSettings,
  'Fi-Share2': FiShare2,
  'Fi-Share': FiShare,
  'Fi-ShieldOff': FiShieldOff,
  'Fi-Shield': FiShield,
  'Fi-ShoppingBag': FiShoppingBag,
  'Fi-ShoppingCart': FiShoppingCart,
  'Fi-Shuffle': FiShuffle,
  'Fi-Sidebar': FiSidebar,
  'Fi-SkipBack': FiSkipBack,
  'Fi-SkipForward': FiSkipForward,
  'Fi-Slack': FiSlack,
  'Fi-Slash': FiSlash,
  'Fi-Sliders': FiSliders,
  'Fi-Smartphone': FiSmartphone,
  'Fi-Smile': FiSmile,
  'Fi-Speaker': FiSpeaker,
  'Fi-Square': FiSquare,
  'Fi-Star': FiStar,
  'Fi-StopCircle': FiStopCircle,
  'Fi-Sun': FiSun,
  'Fi-Sunrise': FiSunrise,
  'Fi-Sunset': FiSunset,
  'Fi-Tablet': FiTablet,
  'Fi-Tag': FiTag,
  'Fi-Target': FiTarget,
  'Fi-Terminal': FiTerminal,
  'Fi-Thermometer': FiThermometer,
  'Fi-ThumbsDown': FiThumbsDown,
  'Fi-ThumbsUp': FiThumbsUp,
  'Fi-ToggleLeft': FiToggleLeft,
  'Fi-ToggleRight': FiToggleRight,
  'Fi-Trash2': FiTrash2,
  'Fi-Trash': FiTrash,
  'Fi-Trello': FiTrello,
  'Fi-TrendingDown': FiTrendingDown,
  'Fi-TrendingUp': FiTrendingUp,
  'Fi-Triangle': FiTriangle,
  'Fi-Truck': FiTruck,
  'Fi-Tv': FiTv,
  'Fi-Twitter': FiTwitter,
  'Fi-Type': FiType,
  'Fi-Umbrella': FiUmbrella,
  'Fi-Underline': FiUnderline,
  'Fi-Unlock': FiUnlock,
  'Fi-UploadCloud': FiUploadCloud,
  'Fi-Upload': FiUpload,
  'Fi-UserCheck': FiUserCheck,
  'Fi-UserMinus': FiUserMinus,
  'Fi-UserPlus': FiUserPlus,
  'Fi-UserX': FiUserX,
  'Fi-User': FiUser,
  'Fi-Users': FiUsers,
  'Fi-VideoOff': FiVideoOff,
  'Fi-Video': FiVideo,
  'Fi-Voicemail': FiVoicemail,
  'Fi-Volume1': FiVolume1,
  'Fi-Volume2': FiVolume2,
  'Fi-VolumeX': FiVolumeX,
  'Fi-Volume': FiVolume,
  'Fi-Watch': FiWatch,
  'Fi-WifiOff': FiWifiOff,
  'Fi-Wifi': FiWifi,
  'Fi-Wind': FiWind,
  'Fi-XCircle': FiXCircle,
  'Fi-XOctagon': FiXOctagon,
  'Fi-XSquare': FiXSquare,
  'Fi-X': FiX,
  'Fi-Youtube': FiYoutube,
  'Fi-ZapOff': FiZapOff,
  'Fi-Zap': FiZap,
  'Fi-ZoomIn': FiZoomIn,
  'Fi-ZoomOut': FiZoomOut,
};

export interface IconProps {
  name: keyof typeof IconType;
  color?: string;
  size?: number;
  className?: string;
}

export const Icon = ({ name, color = '#363636', size = 16, className = '' }: IconProps) => {
  const NinoIcon = IconType[name];
  return (
    <IconContext.Provider value={{ color: color, size: `${size}px`, className: className }}>
      <NinoIcon />
    </IconContext.Provider>
  );
};
