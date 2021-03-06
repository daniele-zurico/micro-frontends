module.exports = {
	development: {
		config_url: 'http://localhost:8233',
		commonDeps_url: 'http://localhost:8234',
		navBar_url: 'http://localhost:8235',
		people_url: 'http://localhost:8236',
		planets_url: 'http://localhost:8237',
		fetchWithCache_url: 'http://localhost:8238',
		test: 'http://localhost:8239',
		apps: {
			imports: {
				'@portal/config': 'http://localhost:8233/bootstrap.js',
				'@portal/navbar': 'http://localhost:8235/navbar.js',
				'@portal/people': 'http://localhost:8236/people.js',
				'@portal/planets': 'http://localhost:8237/planets.js',
				'@portal/test': 'http://localhost:8239/test.js',
				'@portal/fetchWithCache': 'http://localhost:8238/fetchWithCache.js',
			},
		},
		activeApps: [
			{
				name: 'navbar',
				mount: '@portal/navbar',
				active: true,
			},
			{
				name: 'test',
				mount: '@portal/test',
				prefix: 'test',
				active: false,
			},
			{
				name: 'people',
				mount: '@portal/people',
				prefix: 'people',
				active: false,
			},
			{
				name: 'planets',
				mount: '@portal/planets',
				prefix: 'planets',
				active: false,
			},
		],
	},
	stage: {
		config_url: 'http://localhost:8233',
		commonDeps_url: 'http://localhost:8234',
		navBar_url: 'http://localhost:8235',
		people_url: 'http://localhost:8236',
		planets_url: 'http://localhost:8237',
		fetchWithCache_url: 'http://localhost:8238',
		apps: {
			imports: {
				'@portal/config': 'http://localhost:8233/config.js',
				'@portal/navbar': 'http://localhost:8235/navbar.js',
				'@portal/people': 'http://localhost:8236/people.js',
				'@portal/planets': 'http://localhost:8237/planets.js',
				'@portal/fetchWithCache': 'http://localhost:8238/fetchWithCache.js',
			},
		},
		activeApps: [
			{
				name: 'navbar',
				mount: '@portal/navbar',
				active: true,
			},
			{
				name: 'people',
				mount: '@portal/people',
				prefix: 'people',
				active: false,
			},
			{
				name: 'planets',
				mount: '@portal/planets',
				prefix: 'planets',
				active: false,
			},
		],
	},
	production: {
		config_url: 'http://localhost:8233',
		commonDeps_url: 'http://localhost:8234',
		navBar_url: 'http://localhost:8235',
		people_url: 'http://localhost:8236',
		planets_url: 'http://localhost:8237',
		fetchWithCache_url: 'http://localhost:8238',
		apps: {
			imports: {
				'@portal/config': 'http://localhost:8233/config.js',
				'@portal/navbar': 'http://localhost:8235/navbar.js',
				'@portal/people': 'http://localhost:8236/people.js',
				'@portal/planets': 'http://localhost:8237/planets.js',
				'@portal/fetchWithCache': 'http://localhost:8238/fetchWithCache.js',
			},
		},
		activeApps: [
			{
				name: 'navbar',
				mount: '@portal/navbar',
				active: true,
			},
			{
				name: 'people',
				mount: '@portal/people',
				prefix: 'people',
				active: false,
			},
			{
				name: 'planets',
				mount: '@portal/planets',
				prefix: 'planets',
				active: false,
			},
		],
	},
};
