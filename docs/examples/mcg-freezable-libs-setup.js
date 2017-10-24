// To be executed after manage-libs-versions is ready.
// https://github.com/ghybs/manage-libs-versions
// https://www.npmjs.com/package/manage-libs-versions
var bundle1 = new manageLibsVersions.Bundle({
	name: 'bundle1',
	libs: [{
		name: 'leaflet',
		mandatory: true,
		versions: [
			_makeLeafletVersionAssets({
				name: '1.2.0',
				defaultVersion: true,
				sriCss: 'sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ==',
				sriSrcJs: 'sha512-YLT+I34kEPlk5OqR5XObf40B7sInrIU+bGe5VcwSpfR5OrFVjExFxfhVoJQEPZQWMyB53o3AU/bb5J91nc8CPA=='
			}),
			_makeLeafletVersionAssets({
				name: '1.1.0',
				sriCss: 'sha512-wcw6ts8Anuw10Mzh9Ytw4pylW8+NAD4ch3lqm9lzAsTxg0GFeJgoAtxuCLREZSC5lUXdVyo/7yfsqFjQ4S+aKw==',
				sriSrcJs: 'sha512-sIPSXEX730B6EcdQyVPmIGp7f7ZrxIuECnkwYtPpEltG6NqOVtmBNoxHkMamNsAOHLMnDFaUoJYA4PWtzNZDuA=='
			}),
			_makeLeafletVersionAssets({ name: '1.0.3' }),
			_makeLeafletVersionAssets({ name: '1.0.2' }),
			_makeLeafletVersionAssets({ name: '1.0.1' }),
			_makeLeafletVersionAssets({ name: '1.0.0' }),
			_makeLeafletVersionAssets({ name: '0.7.7' })
		]
	}, {
		name: 'leaflet.markercluster',
		mandatory: true,
		versions: [
			_makeMCGVersionAssets({ name: '1.1.0', defaultVersion: true }),
			_makeMCGVersionAssets({ name: '1.0.6' }),
			_makeMCGVersionAssets({ name: '1.0.5' }),
			_makeMCGVersionAssets({ name: '1.0.4' }),
			_makeMCGVersionAssets({ name: '1.0.3' }),
			_makeMCGVersionAssets({ name: '1.0.2' }),
			_makeMCGVersionAssets({ name: '1.0.1' }),
			_makeMCGVersionAssets({ name: '1.0.0' }),
			_makeMCGVersionAssets({ name: '0.5.0' })
		]
	}, {
		name: 'leaflet.markercluster.freezable',
		mandatory: true,
		versions: [
			_makeFreezableVersionAssets({ name: '1.0.0', disabled: true }), // Disable for now (not published yet)
			_makeFreezableVersionAssets({ name: '0.1.1' }),
			{
				name: 'local',
				defaultVersion: true,
				disabled: true, // Will be enabled if assets are found to be available at runtime.
				assets: [{
					type: 'script',
					path: '../../dist/leaflet.markercluster.freezable-src.js'
				}]
			}
		]
	}]
});

function _makeLeafletVersionAssets(options) {
	var versionName = options.name;

	return {
		name: versionName,
		defaultVersion: options.defaultVersion,
		assets: [
			manageLibsVersions.makeStylesheet('https://unpkg.com/leaflet@{{VERSION}}/dist/leaflet.css', versionName, options.sriCss),
			manageLibsVersions.makeScript('https://unpkg.com/leaflet@{{VERSION}}/dist/leaflet-src.js', versionName, options.sriSrcJs)
		]
	};
}

function _makeMCGVersionAssets(options) {
	var versionName = options.name;

	return {
		name: versionName,
		defaultVersion: options.defaultVersion,
		assets: [
			manageLibsVersions.makeStylesheet('https://unpkg.com/leaflet.markercluster@{{VERSION}}/dist/MarkerCluster.css', versionName, options.sriCss),
			manageLibsVersions.makeStylesheet('https://unpkg.com/leaflet.markercluster@{{VERSION}}/dist/MarkerCluster.Default.css', versionName, options.sriDefaultCss),
			manageLibsVersions.makeScript('https://unpkg.com/leaflet.markercluster@{{VERSION}}/dist/leaflet.markercluster-src.js', versionName, options.sriSrcJs)
		]
	};
}

function _makeFreezableVersionAssets(options) {
	var versionName = options.name;

	return {
		name: versionName,
		defaultVersion: options.defaultVersion,
		disabled: options.disabled,
		assets: [
			manageLibsVersions.makeScript('https://unpkg.com/leaflet.markercluster.freezable@{{VERSION}}/dist/leaflet.markercluster.freezable-src.js', versionName, options.sriSrcJs)
		]
	};
}
