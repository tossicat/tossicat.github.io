import type { FunctionalComponent } from 'preact';
import './LanguageSelect.css';
import { KNOWN_LANGUAGES, langPathRegex } from '../../languages';

const LanguageSelect: FunctionalComponent<{ lang: string }> = ({ lang }) => {
	return (
		<div className="language-select-wrapper">
			<select
				className="language-select"
				value={lang}
				onChange={(e) => {
					const newLang = (e.target as HTMLSelectElement).value;
					let actualDest = window.location.pathname.replace(langPathRegex, '/');
					if (actualDest == '/') actualDest = `/introduction`;
					window.location.pathname = '/' + newLang + actualDest;
				}}
			>
				{Object.entries(KNOWN_LANGUAGES).map(([key, value]) => {
					return (
						<option value={value} key={value}>
							{key}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default LanguageSelect;
