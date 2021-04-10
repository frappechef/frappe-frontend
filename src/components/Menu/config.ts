import { MenuEntry } from '@frappefinance-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.frappe.finance',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.frappe.finance/#/pool',
      },
    ],
  },
  {
    label: 'Frappe Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Frappe Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.frappe.finance',
      },
      {
        label: 'Tokens',
        href: 'https://info.frappe.finance/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.frappe.finance/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.frappe.finance/accounts',
      },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.frappe.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/frappechef',
      },
      {
        label: 'Docs',
        href: 'https://docs.frappe.finance',
      },
      {
        label: 'Blog',
        href: 'https://frappefinance.medium.com',
      },
    ],
  },
]

export default config
