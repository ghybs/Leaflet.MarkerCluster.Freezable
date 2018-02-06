var cdn = 'https://unpkg.com/';
var versionPlaceholder = '@{{VERSION}}/';

var freezablePathPrefix = cdn + 'leaflet.markercluster.freezable' + versionPlaceholder + 'dist/';

var libs = [
	libLeafletVersions, // Assumes that "leaflet-versions.js" file has already been executed, so that libLeafletVersions is globally available.
	libLeafletMarkerClusterVersions // Assumes that "leaflet.markercluster-versions.js" file has already been executed, so that libLeafletMarkerClusterVersions is globally available.
];

// Plugin library.
libs.push({
	name: 'leaflet.markercluster.freezable',
	mandatory: true,
	versions: [
		_makeFreezableVersionAssets({ name: '1.0.0' }),
		_makeFreezableVersionAssets({
			name: '0.1.1',
			sriSrcJs: 'sha384-0m+zNmAAm05B+yuv45nwO0EjOnMb6W9JOu5ISpE4C5dA4G5RCt6yAfXw2BZDsLCC'
		}),
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
});


// To be executed after manage-libs-versions is ready.
// https://github.com/ghybs/manage-libs-versions
// https://www.npmjs.com/package/manage-libs-versions
var bundle1 = new manageLibsVersions.Bundle({
	name: 'bundle1',
	libs: libs
});


function _makeFreezableVersionAssets(options) {
	var versionName = options.name;

	return {
		name: versionName,
		defaultVersion: options.defaultVersion,
		disabled: options.disabled,
		assets: [
			manageLibsVersions.makeScript(freezablePathPrefix + 'leaflet.markercluster.freezable-src.js', versionName, options.sriSrcJs)
		]
	};
}
