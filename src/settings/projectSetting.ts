import type { ProjectConfig } from '/#/config';
// import { MenuTypeEnum, MenuModeEnum, TriggerEnum, MixSidebarTriggerEnum } from '/@/enums/menuEnum';
// import { CacheTypeEnum } from '/@/enums/cacheEnum';
// import {
//   ContentEnum,
//   PermissionModeEnum,
//   ThemeEnum,
//   RouterTransitionEnum,
//   SettingButtonPositionEnum,
//   SessionTimeoutProcessingEnum,
// } from '/@/enums/appEnum';
// import { SIDE_BAR_BG_COLOR_LIST, HEADER_PRESET_BG_COLOR_LIST } from './designSetting';
// import { primaryColor } from '../../build/config/themeConfig';

// ! You need to clear the browser cache after the change
const setting: ProjectConfig = {
  showSettingButton: true,
  showDarkModeToggle: true,
  settingButtonPosition: 'auto',
  permissionMode: 'ROUTE_MAPPING',
  permissionCacheType: 1,
  sessionTimeoutProcessing: 0,
  themeColor: '#0960bd',
  grayMode: false,
  colorWeak: false,
  fullContent: false,
  contentMode: 'full',
  showLogo: true,
  showFooter: false,
  headerSetting: {
    bgColor: '#ffffff',
    fixed: true,
    show: true,
    theme: 'light',
    useLockPage: true,
    showFullScreen: true,
    showDoc: true,
    showNotice: true,
    showSearch: true,
  },
  menuSetting: {
    bgColor: '#001529',
    fixed: true,
    collapsed: false,
    collapsedShowTitle: false,
    canDrag: false,
    show: true,
    hidden: false,
    menuWidth: 210,
    mode: 'horizontal',
    type: 'top-menu',
    theme: 'dark',
    topMenuAlign: 'center',
    trigger: 'HEADER',
    accordion: true,
    closeMixSidebarOnChange: false,
    mixSideTrigger: 'click',
    mixSideFixed: false,
  },
  multiTabsSetting: {
    cache: false,
    show: false,
    canDrag: true,
    showQuick: true,
    showRedo: true,
    showFold: true,
  },
  transitionSetting: {
    enable: true,
    basicTransition: 'fade-slide',
    openPageLoading: true,
    openNProgress: false,
  },
  openKeepAlive: true,
  lockTime: 0,
  showBreadCrumb: true,
  showBreadCrumbIcon: true,
  useErrorHandle: false,
  useOpenBackTop: true,
  canEmbedIFramePage: true,
  closeMessageOnSwitch: true,
  removeAllHttpPending: false,
} as any; //使用as any关闭ts检查

export default setting;
