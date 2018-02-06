<!-- ##########################################################################
NOTE TO CONTRIBUTOR:
this README is automatically generated from build/readme.template.md.
Should you need to modify the README, please make your modifications on
the template file.
########################################################################### -->

# Leaflet.MarkerCluster.Freezable
Sub-plugin for [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster)
plugin (MCG in short); adds the ability to freeze clusters at a specified zoom.

[Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) plugin
provides beautiful animated Marker Clustering functionality.

[Leaflet](http://leafletjs.com/) is the leading open-source JavaScript library
for mobile-friendly interactive maps.

[![GitHub releases](https://img.shields.io/github/release/ghybs/leaflet.markercluster.freezable.svg?label=GitHub)](https://github.com/ghybs/Leaflet.MarkerCluster.Freezable/releases)
[![npm](https://img.shields.io/npm/v/leaflet.markercluster.freezable.svg)](https://www.npmjs.com/package/leaflet.markercluster.freezable)



## Requirements
This plugin is compatible with the following combinations:

<table>
	<tr>
		<th>Leaflet</th>
		<th>Leaflet.markercluster</th>
		<th>Leaflet.MarkerCluster.Freezable</th>
	</tr>
	<tr>
		<td rowspan="2">
		    1.0.0&nbsp;→&nbsp;1.3.1
		</td>
		<td>
		    1.0.4&nbsp;→&nbsp;1.3.0
		</td>
		<td>
		    <a href="https://github.com/ghybs/Leaflet.MarkerCluster.Freezable/releases/tag/v1.0.0">1.0.0</a>
		</td>
	</tr>
	<tr>
		<!--td>("eaten" by above rowspan)</td-->
		<td>
		    1.0.0&nbsp;→&nbsp;1.0.3
		</td>
		<td rowspan="2">
		    <a href="https://github.com/ghybs/Leaflet.MarkerCluster.Freezable/releases/tag/v0.1.1">0.1.1</a>
		</td>
	</tr>
	<tr>
		<td>
		    0.7.7
		</td>
		<td>
		    0.5.0
		</td>
		<!--td>("eaten" by above rowspan)</td-->
	</tr>
</table>



## Demos
- [Leaflet.MarkerCluster.Freezable 1.0.0 (Leaflet 1.3.1 + Leaflet.markercluster 1.3.0)](https://ghybs.github.io/Leaflet.MarkerCluster.Freezable/examples/mcg-freezable.html?leaflet=1.3.1&leaflet.markercluster=1.3.0&leaflet.markercluster.freezable=1.0.0)
- [Leaflet.MarkerCluster.Freezable 0.1.1 (Leaflet 1.3.1 + Leaflet.markercluster 1.0.3)](https://ghybs.github.io/Leaflet.MarkerCluster.Freezable/examples/mcg-freezable.html?leaflet=1.3.1&leaflet.markercluster=1.0.3&leaflet.markercluster.freezable=0.1.1)
- [Leaflet.MarkerCluster.Freezable 0.1.1 (Leaflet 0.7.7 + Leaflet.markercluster 0.5.0)](https://ghybs.github.io/Leaflet.MarkerCluster.Freezable/examples/mcg-freezable.html?leaflet=0.7.7&leaflet.markercluster=0.5.0&leaflet.markercluster.freezable=0.1.1)


## Usage instructions

### Quick Guide
**HTML:**
```html
<!-- After Leaflet and Leaflet.markercluster scripts -->
<script src="leaflet.markercluster.freezable.js"></script>
```

**JavaScript:**
```javascript
var map = L.map("map"),
    mcg = L.markerClusterGroup(options);
    
mcg.addLayers(arrayOfMarkers);
mcg.addTo(map);

mcg.freezeAtZoom(15);
mcg.freezeAtZoom("maxKeepSpiderfy");
mcg.freezeAtZoom("max");
mcg.unfreeze(); // shortcut for mcg.freezeAtZoom(false)

mcg.disableClusteringKeepSpiderfy(); // shortcut for mcg.freezeAtZoom("maxKeepSpiderfy")
mcg.disableClustering(); // shortcut for mcg.freezeAtZoom("max")
mcg.enableClustering(); // alias for mcg.unfreeze()
```

When frozen / disabled, clusters will no longer split / merge on map zoom, but
retain their status as if they were on the specified zoom level. They will
directly spiderfy when clicked on, instead of zooming to bounds (since zooming
will not make them split apart).

In particular, freezing at `maxZoom + 1` removes all clusters.

Freezing at `maxZoom` removes all clusters except the bottom-most ones, so that
user can still spiderfy closely positioned markers.

**CAUTION: make sure your operations makes sense before freezing to high zoom
whereas the map is at a low zoom. It may have to load _thousands_ of markers
suddenly!**

_Note: while frozen, MCG will continue removing clusters and markers which are
far from the view port, accordingly with `removeOutsideVisibleBounds` option._



### Installing the sub-plugin

#### Local copy
1. Download the "<a href="https://github.com/ghybs/Leaflet.MarkerCluster.Freezable/releases/download/{{TAG_NAME}}/leaflet.markercluster.freezable.js">`leaflet.markercluster.freezable.js`</a>" file from the [`{{TAG_NAME}}` release](https://github.com/ghybs/Leaflet.MarkerCluster.Freezable/releases/tag/{{TAG_NAME}}).
2. Place the file alongside your page.
3. Add the `script` tag (see [Quick Guide > HTML](#quick-guide)) to your page after Leaflet and Leaflet.markercluster scripts.

#### CDN
You can alternatively use the free [unpkg](https://unpkg.com) CDN service, but keep in mind that it "[_is a free, best-effort service and cannot provide any uptime or support guarantees_](https://unpkg.com/#/about)".

```html
<!-- After Leaflet script -->
<script src="https://unpkg.com/leaflet.markercluster.freezable@{{VERSION}}/dist/leaflet.markercluster.freezable.js"></script>
```
Or with [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity):
```html
<script
    src="https://unpkg.com/leaflet.markercluster.freezable@1.0.0/dist/leaflet.markercluster.freezable.js"
    integrity="sha384-QXTyM8sAAM5XAUeRoyzNadlfH7KuYt0C6i9O/T2vFb4wGIKwL9Ak++3y3JBqfGyg"
    crossorigin="anonymous"
></script>
```

#### npm
1. Add this package to your project:
   ```bash
   $ npm install leaflet.markercluster.freezable --save
   ```

2. If you are using a bundling tool, import in your JavaScript.
It only performs the side effect of adding new methods to `L.markerClusterGroup`,
so you do not need to store it into a local variable or import a namespace.
   ```javascript
   require('leaflet.markercluster.freezable');
   // Or with ES6:
   import 'leaflet.markercluster.freezable';
   ```



### Creation
Simply use the the regular `L.markerClusterGroup` factory, as Freezable plugin
directly adds new methods to Leaflet.markercluster:

```javascript
var mcg = L.markerClusterGroup(options);

mcg.addTo(map);
```



## API Reference

### Methods
| Method  | Returns  | Description |
| :------ | :------- | :---------- |
| **freezeAtZoom**( `<Number>` or `<String>` or `<Boolean>` frozenZoom? ) | `this` | Freezes clusters at specified zoom, current zoom, or unfreeze. If passed a positive number (including 0), freezes at that zoom. If passed `"max"` (string), freezes at `maxZoom + 1`. If passed `"maxKeepSpiderfy"` (string), freezes at `maxZoom`. If passed nothing, `undefined`, `true` (boolean) or `NaN`, freezes at current zoom. If passed `false` (boolean) or any other non-number, unfreezes. |
| **unfreeze**() | `this` | Shortcut for `freezeAtZoom(false)`. |
| **disableClustering**() | `this` | Shortcut for `freezeAtZoom("max")`. |
| **disableClusteringKeepSpiderfy**() | `this` | Shortcut for `freezeAtZoom("maxKeepSpiderfy")`. |
| **enableClustering**() | `this` | Shortcut for `unfreeze()`. |

MCG.Freezable does not provide any extra option or event.


### Regular MCG options, events and methods
All regular MCG [options](https://github.com/Leaflet/Leaflet.markercluster#all-options),
[events](https://github.com/Leaflet/Leaflet.markercluster#events) and
[methods](https://github.com/Leaflet/Leaflet.markercluster#methods) are
available within MCG Layer Support. Refer to Leaflet.markercluster documentation.



## Limitations

### Freezing at current zoom while not on map
If you request MCG to freeze at current zoom, but MCG is not on any map at that
moment, it will freeze at the zoom the map is at when added to it.

## License
[![license](https://img.shields.io/github/license/ghybs/leaflet.markercluster.freezable.svg)](LICENSE)

Leaflet.MarkerCluster.Freezable is distributed under the
[MIT License](http://choosealicense.com/licenses/mit/) (Expat type), like
Leaflet.markercluster.
