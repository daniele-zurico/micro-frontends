window.SystemJS = window.System;

export default function insertNewImportMap(newMapJSON) {
	const newScript = document.createElement('script');
	newScript.type = 'systemjs-importmap';
	newScript.text = JSON.stringify(newMapJSON);
	document.head.appendChild(newScript);
}

const apps = {
	imports: {
		'@portal/config': 'http://localhost:8233/config.js',
		'@portal/navbar': 'http://localhost:8235/navbar.js',
		'@portal/people': 'http://localhost:8236/people.js',
		'@portal/planets': 'http://localhost:8237/planets.js',
		'@portal/fetchWithCache': 'http://localhost:8238/fetchWithCache.js',
	},
};

insertNewImportMap(apps);
