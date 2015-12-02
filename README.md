# Leaflet.MarkerCluster.Freezable
Sub-plugin for [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster)
plugin (MCG in short); adds the ability to freeze clusters at a specified zoom.

[Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) plugin
provides beautiful animated Marker Clustering functionality.

[Leaflet](http://leafletjs.com/) is the leading open-source JavaScript library
for mobile-friendly interactive maps.

Current MCG.Freezable version: 0.1.0



## Requirements
- Leaflet stable (0.7.x)
- Leaflet.markercluster stable (0.4.x)



## Demos
- [LayerSupport with standard L.Control.Layers](http://ghybs.github.io/Leaflet.MarkerCluster.LayerSupport/examples/mcgLayerSupport-controlLayers-realworld.388.html)
- [LayerSupport with LeafletSlider plugin](http://ghybs.github.io/Leaflet.MarkerCluster.LayerSupport/examples/mcgLayerSupport-leafletslider.html)


## Usage instructions

### Quick Guide
HTML:
```html
<!-- After Leaflet and Leaflet.markercluster scripts -->
<script src="leaflet.markercluster.freezable-src.js"></script>
```

JavaScript:
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


### Installing the sub-plugin
Simply add the "leaflet.markercluster.freezable-src.js" script file to your page
after Leaflet and Leaflet.markercluster scripts.


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
moment, it will freeze at the zoom the map is currently at when added to it.
to the map, without clustering. What did you expect? :-)

## License
Leaflet.MarkerCluster.Freezable is distributed under the
[MIT License](http://choosealicense.com/licenses/mit/) (Expat type), like
Leaflet.markercluster.
