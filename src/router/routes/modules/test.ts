import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/demo',
  name: 'Demo',
  component: LAYOUT,
  redirect: '/demo/index',
  meta: {
    icon: 'simple-icons:about-dot-me',
    title: t('测试新增路由'),
  },
  children: [
    {
      path: 'index',
      name: 'Demo',
      component: () => import('/@/views/demo/index.vue'),
      meta: {
        title: t('测试新增路由'),
        icon: 'simple-icons:about-dot-me',
      },
    },
  ],
};

export default dashboard;
