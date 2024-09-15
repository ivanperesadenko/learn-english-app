import { SidebarLink } from '../interfaces/sidebar-link.interface';

export const SIDEBAR_LINKS: SidebarLink[] = [
	{
		title: 'Topics',
		routerLinkPath: '/topics',
		icon: 'apps',
	},
	{
		title: 'Cards',
		routerLinkPath: '/cards',
		icon: 'photo',
	},
	{
		title: 'Training',
		routerLinkPath: '/training',
		icon: 'flash_on',
	},
	{
		title: 'Tenses',
		routerLinkPath: 'tenses',
		icon: 'access_time',
	},
	{
		title: 'Irregular Verbs',
		routerLinkPath: 'irregular-verbs',
		icon: 'view_list',
	},
	{
		title: 'Notes',
		routerLinkPath: 'notes',
		icon: 'notes',
	},
	{
		title: 'Translate',
		routerLinkPath: 'translate',
		icon: 'g_translate',
	},
	{
		title: 'Settings',
		routerLinkPath: '/settings',
		icon: 'settings',
	},
];
