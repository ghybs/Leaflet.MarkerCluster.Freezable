# Leaflet.MarkerCluster.Freezable Changelog


## 1.0.0 (2017-10-27) for Leaflet 1.0 + MCG >= 1.0.4

Compatible with Leaflet >= 1.0.0 and Leaflet.markercluster >= 1.0.4

Breaking changes:

- Fix compatibility issue with MCG >= 1.0.4; previously non-clustered markers disappear when clusters split [#5](https://github.com/ghybs/Leaflet.MarkerCluster.Freezable/issues/5)

Fixes:

- Compatibility with Leaflet.MarkerClusterGroup.LayerSupport sub-plugin [#6](https://github.com/ghybs/Leaflet.MarkerCluster.Freezable/issues/6) and [ghybs/Leaflet.MarkerCluster.LayerSupport#13](https://github.com/ghybs/Leaflet.MarkerCluster.LayerSupport/issues/13)
- Dynamically added marker do not appear if they are out of the initial view port [#7](https://github.com/ghybs/Leaflet.MarkerCluster.Freezable/issues/7)

Docs:

- Refactor demo page so that it can load selected versions of Leaflet, MCG and MCG.Freezable, as well as locally built `dist` version, therefore obsoleting the `debug` pages.
- Move `gh-pages` branch to `docs/` folder, so that online demo pages are easier to maintain [#9](https://github.com/ghybs/Leaflet.MarkerCluster.Freezable/issues/9)
- Use a build script for README, so that versions are automatically updated [#8](https://github.com/ghybs/Leaflet.MarkerCluster.Freezable/issues/8)



## 0.1.1 (2016-10-26) for Leaflet 1.0 + MCG 1.0.0-1.0.3 and Leaflet 0.7.x + MCG 0.5.x

First release

Compatible with both combinations:

- Leaflet >= 1.0.0 + Leaflet.markercluster 1.0.0-1.0.3
- Leaflet legacy (0.7.x) + Leaflet.markercluster legacy (0.5.x)

Fixes:

- Check compatibility with Leaflet 1.0 and MCG 1.0 [#3](https://github.com/ghybs/Leaflet.MarkerCluster.Freezable/issues/3)
- Use proper UMD wrapper [#2](https://github.com/ghybs/Leaflet.MarkerCluster.Freezable/issues/2)
- Dynamically added markers always appear clustered [#1](https://github.com/ghybs/Leaflet.MarkerCluster.Freezable/issues/1)
