import * as singleSpa from 'single-spa';

function prefix(location, ...prefixes) {
	return prefixes.some(prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1);
}

// Register all the application available in the config.js(activeApps)
process.env.activeApps.map(a => {
	singleSpa.registerApplication(
		a.name,
		() => SystemJS.import(a.mount),
		location => (a.active ? true : prefix(location, a.prefix)),
		{ activeApps: process.env.activeApps }
	);
});

singleSpa.start();
