var cdn = 'https://unpkg.com/';
var versionPlaceholder = '@{{VERSION}}/';

var leafletPathPrefix = cdn + 'leaflet' + versionPlaceholder + 'dist/';
var mcgPathPrefix = cdn + 'leaflet.markercluster' + versionPlaceholder + 'dist/';
var freezablePathPrefix = cdn + 'leaflet.markercluster.freezable' + versionPlaceholder + 'dist/';

var mcgSriCss = 'sha384-lPzjPsFQL6te2x+VxmV6q1DpRxpRk0tmnl2cpwAO5y04ESyc752tnEWPKDfl1olr';
var mcgSriCssDefault = 'sha384-5kMSQJ6S4Qj5i09mtMNrWpSi8iXw230pKU76xTmrpezGnNJQzj0NzXjQLLg+jE7k';


// To be executed after manage-libs-versions is ready.
// https://github.com/ghybs/manage-libs-versions
// https://www.npmjs.com/package/manage-libs-versions
var bundle1 = new manageLibsVersions.Bundle({
	name: 'bundle1',
	libs: [{
		name: 'leaflet',
		mandatory: true,
		versions: [
			{
				name: 'master',
				assets: [{
					type: 'stylesheet',
					path: 'https://leafletjs-cdn.s3.amazonaws.com/content/build/master/leaflet.css'
				}, {
					type: 'script',
					path: 'https://leafletjs-cdn.s3.amazonaws.com/content/build/master/leaflet-src.js'
				}]
			},
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
			_makeLeafletVersionAssets({
				name: '1.0.3',
				sriCss: 'sha512-07I2e+7D8p6he1SIM+1twR5TIrhUQn9+I6yjqD53JQjFiMf8EtC93ty0/5vJTZGF8aAocvHYNEDJajGdNx1IsQ==',
				sriSrcJs: 'sha512-WXoSHqw/t26DszhdMhOXOkI7qCiv5QWXhH9R7CgvgZMHz1ImlkVQ3uNsiQKu5wwbbxtPzFXd1hK4tzno2VqhpA=='
			}),
			_makeLeafletVersionAssets({
				name: '1.0.2',
				sriCss: 'sha384-UWNncEeCHTwoCP7ET6ZTVSPNXkKL7EWioe9by1pCm4Nu7nF9hR+tOaQzYSKp2dWN',
				sriSrcJs: 'sha384-KNLak5IVC1MuCvuK2/vsXntDe3JNjiQVrRbeoCBUtLnSRbQgcPbTepID1g8Llk9Y'
			}),
			_makeLeafletVersionAssets({
				name: '1.0.1',
				sriCss: 'sha384-jbhYDFfm+l6mA6jJUD5X/yv7LoRqVSoV/P77fNwITqMNlHHVIdSwj3SexyasxFL/',
				sriSrcJs: 'sha384-ObOe0J9dj8lQbJA8Pq3nwRiDPV58lDWqCJ/gLn2KPrUefv5P427o9ph0I4zyWWyu'
			}),
			_makeLeafletVersionAssets({
				name: '1.0.0',
				sriCss: 'sha384-eEKCX4qfm6OKwQ/hvjr7cRoBNXSQuFQoaiS7sXxD1x5Fmus85DkG7OTFoU6eI3FV',
				sriSrcJs: 'sha384-l/IzbI3svpXQy9ek7BrZfibt+dygUKc6XwMFKuvoCCGcwL+3GKNzMbF920axFAUy'
			}),
			_makeLeafletVersionAssets({
				name: '0.7.7',
				sriCss: 'sha384-99ZJFcuBCh9c/V/+8YwDX/TUGG8JWMG+gKFJWzk0BZP3IoDMN+pLGd3/H0yjg4oa',
				sriSrcJs: 'sha384-AoPn7rJ3h17Ohw5HQ0Y6dQ/PwJxk6tIU61Hn0B7So8NGej/J1YCA9R4eehsfCid7'
			})
		]
	}, {
		name: 'leaflet.markercluster',
		mandatory: true,
		versions: [
			_makeMCGVersionAssets({
				name: '1.1.0',
				defaultVersion: true,
				sriCss: mcgSriCss,
				sriCssDefault: mcgSriCssDefault,
				sriSrcJs: 'sha384-o8NFSSgfa9PqnsO3+nQ3SQHkZfNwNVe+en1fpThO4r7AO72gGwy5zUxx3HGJiJoY'
			}),
			_makeMCGVersionAssets({
				name: '1.0.6',
				sriCss: mcgSriCss,
				sriCssDefault: mcgSriCssDefault,
				sriSrcJs: 'sha384-lmV2R0fFKgT9V8tqRhrINPsBGa2NTfCWs1Wy84HSmlfbtKX01TQly38wIkVtXG0p'
			}),
			_makeMCGVersionAssets({
				name: '1.0.5',
				sriCss: mcgSriCss,
				sriCssDefault: mcgSriCssDefault,
				sriSrcJs: 'sha384-MVfmnZ+vs5hd+jOXn6SkjoYXM3xwNNaocrr+VyryJw5oZr7elduarCOzVPMonjM1'
			}),
			_makeMCGVersionAssets({
				name: '1.0.4',
				sriCss: mcgSriCss,
				sriCssDefault: mcgSriCssDefault,
				sriSrcJs: 'sha384-N1djY2M5G5H27agJbWSeFU64nyV5Oo4unb0juOYWaKpr9VnX7eU2yPqzl/CSq3Yz'
			}),
			_makeMCGVersionAssets({
				name: '1.0.3',
				sriCss: mcgSriCss,
				sriCssDefault: mcgSriCssDefault,
				sriSrcJs: 'sha384-aPW7+bcmswg0D7N22za0Cj4RDQtJjUVz9obDfEeT0q8ekjOqn32IJt8Hmxqjl6jV'
			}),
			_makeMCGVersionAssets({
				name: '1.0.2',
				sriCss: mcgSriCss,
				sriCssDefault: mcgSriCssDefault,
				sriSrcJs: 'sha384-YZdVvMa2yGxN2JQjoeU0/VOEw5ukEi1qeyPeE5XMLG4NZeuG6UdasPeIWf3dggi+'
			}),
			_makeMCGVersionAssets({
				name: '1.0.1',
				sriCss: mcgSriCss,
				sriCssDefault: mcgSriCssDefault,
				sriSrcJs: 'sha384-Nn6VTBhTBwBk8NdNSCwI0iOCtEAYxq4ibhwBBi5ry05C+WUXieiTNfVb43K3bqA7'
			}),
			_makeMCGVersionAssets({
				name: '1.0.0',
				sriCss: mcgSriCss,
				sriCssDefault: mcgSriCssDefault,
				sriSrcJs: 'sha384-ho4yZuhivic8f9ODd7mDXL0tnARAH7Kjrvuziv1WljsEU8HMV416zSDtLTdMyz8i'
			}),
			_makeMCGVersionAssets({
				name: '0.5.0',
				sriCss: mcgSriCss,
				sriCssDefault: mcgSriCssDefault,
				sriSrcJs: 'sha384-DWfQP+GCYps97g3yfrDI8mUTMqyjWK8RLB3hHEq8i9j5orKVzJaeXTGl/skeKsiP'
			})
		]
	}, {
		name: 'leaflet.markercluster.freezable',
		mandatory: true,
		versions: [
			_makeFreezableVersionAssets({ name: '1.0.0', disabled: true }), // Disable for now (not published yet)
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
	}]
});

function _makeLeafletVersionAssets(options) {
	var versionName = options.name;

	return {
		name: versionName,
		defaultVersion: options.defaultVersion,
		assets: [
			manageLibsVersions.makeStylesheet(leafletPathPrefix + 'leaflet.css', versionName, options.sriCss),
			manageLibsVersions.makeScript(leafletPathPrefix + 'leaflet-src.js', versionName, options.sriSrcJs)
		]
	};
}

function _makeMCGVersionAssets(options) {
	var versionName = options.name;

	return {
		name: versionName,
		defaultVersion: options.defaultVersion,
		assets: [
			manageLibsVersions.makeStylesheet(mcgPathPrefix + 'MarkerCluster.css', versionName, options.sriCss),
			manageLibsVersions.makeStylesheet(mcgPathPrefix + 'MarkerCluster.Default.css', versionName, options.sriCssDefault),
			manageLibsVersions.makeScript(mcgPathPrefix + 'leaflet.markercluster-src.js', versionName, options.sriSrcJs)
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
			manageLibsVersions.makeScript(freezablePathPrefix + 'leaflet.markercluster.freezable-src.js', versionName, options.sriSrcJs)
		]
	};
}
