import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  // {
  //   title: 'dashboard',
  //   path: '/',
  //   icon: icon('ic_analytics'),
  // },
  {
    title: 'home',
    path: '/blog',
    icon: icon('home2'),
  },
  {
    title: 'Trough',
    path: '/trough',
    icon: icon('trough'),
  },
];

export default navConfig;
