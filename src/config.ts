export const SITE = {
	title: 'TossiCat',
	description: '한글 조사 변환 라이브러리 — 러스트로 작성된 토시캣 프로젝트 문서',
	defaultLanguage: 'ko',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://tossicat.github.io/default-og-image.png',
		alt: 'TossiCat — 한글 조사 변환 라이브러리',
	},
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	한글: 'ko',
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Project List': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'TossiCat core', link: 'en/TossiCat_core' },
			{ text: 'Page 2', link: 'en/page-2' },
			{ text: 'Page 3', link: 'en/page-3' },
		],
	},
	ko: {
		'Project List': [
			{ text: 'Introduction', link: 'ko/introduction' },
			{ text: 'TossiCat core', link: 'ko/TossiCat_core' },
			{ text: 'Page 2', link: 'ko/page-2' },
			{ text: 'Page 3', link: 'ko/page-3' },
		],
	},
};
