import SvgIconStyle from 'src/components/SvgIconStyle';

const getIcon = (name: string) => (
  <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
};

const navConfig = [
  {
    subheader: 'General',
    items: [
      { title: 'One', path: '/dashboard/one', icon: ICONS.dashboard },
      { title: 'Two', path: '/dashboard/two', icon: ICONS.ecommerce },
      { title: 'Three', path: '/dashboard/three', icon: ICONS.analytics },
    ],
  },
  {
    subheader: 'management',
    items: [
      {
        title: 'user',
        path: '/dashboard/user',
        icon: ICONS.user,
        children: [
          { title: 'Four', path: '/dashboard/user/four' },
          { title: 'Five', path: '/dashboard/user/five' },
          { title: 'Six', path: '/dashboard/user/six' },
        ],
      },
    ],
  },
];

export default navConfig;
