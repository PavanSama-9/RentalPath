import React, { Component } from 'react';
//import logo from './logo.svg';
import '../assets/css/App.css';
//import {Map} from 'Immutable';
import mapboxgl from 'mapbox-gl';
import  MapboxGeocoder from 'mapbox-gl-geocoder';
mapboxgl.accessToken = 'pk.eyJ1IjoicHNhbWEiLCJhIjoiY2pibmoybG1sNTZpMzMzbXJzcmllM3ZmbSJ9.5XqQHv6jNmk9LYIrl3P4hg';

class Signup extends Component {
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/outdoors-v9',
      center: [78.4840, 17.4021 ],
      zoom: 13
    });
    var geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken
    });

    map.addControl(geocoder);

    var stores = {
      "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                78.4789194,
                17.4072782
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 234-7336",
              "phone": "2022347336",
              "address": "Devaki Apartments",
              "city": "Hyderabad",
              "country": "United States",
              "crossStreet": "at 15th St NW",
              "postalCode": "20005",
              "state": "D.C.",
              "image":"http://whc.unesco.org/uploads/sites/site_275.jpg"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                78.47963460000005,
                17.4060897
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 507-8357",
              "phone": "2025078357",
              "address": "Sphinx Apartments",
              "city": "Hyderabad",
              "country": "United States",
              "crossStreet": "at 22nd St NW",
              "postalCode": "20037",
              "state": "D.C.",
              "image": "http://whc.unesco.org/uploads/sites/site_1187.jpg",
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                78.48494249999999,
                17.3974027
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 387-9338",
              "phone": "2023879338",
              "address": "Sowbhagya Laxmi Apartments",
              "city": "Hyderabad",
              "country": "United States",
              "crossStreet": "at Dupont Circle",
              "postalCode": "20036",
              "state": "D.C.",
              "image": "http://whc.unesco.org/uploads/sites/site_33.jpg"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                78.48422949999997,
                17.4041144
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 337-9338",
              "phone": "2023379338",
              "address": "Seetharamiah Apartments",
              "city": "Hyderabad",
              "country": "United States",
              "crossStreet": "at 34th St NW",
              "postalCode": "20007",
              "state": "D.C.",
              "image": "http://whc.unesco.org/uploads/sites/site_1504.jpg"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                78.4813881,
                17.4055416
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 547-9338",
              "phone": "2025479338",
              "address": "Ashiana Apartments",
              "city": "Hyderabad",
              "country": "United States",
              "crossStreet": "btwn 2nd & 3rd Sts. SE",
              "postalCode": "20003",
              "state": "D.C.",
              "image": "http://whc.unesco.org/uploads/sites/site_89.jpg"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                78.48390549999999,
                17.4024154
              ]
            },
            "properties": {
              "address": "Sreeman Nirantak Apartments",
              "city": "Hyderabad",
              "country": "United States",
              "postalCode": "20740",
              "state": "MD",
              "image": "http://whc.unesco.org/uploads/sites/site_1314.jpg"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                78.48356349999995,
                17.4035752
              ]
            },
            "properties": {
              "phoneFormatted": "(301) 654-7336",
              "phone": "3016547336",
              "address": "Srinivasa Apartments",
              "cc": "US",
              "city": "Hyderabad",
              "country": "United States",
              "postalCode": "20814",
              "state": "MD",
              "image": "http://whc.unesco.org/uploads/sites/site_72.jpg",
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                78.48411850000002,
                17.4068151
              ]
            },
            "properties": {
              "phoneFormatted": "(571) 203-0082",
              "phone": "5712030082",
              "address": "Legend Apartments",
              "city": "Hyderabad",
              "country": "United States",
              "crossStreet": "btw Explorer & Library",
              "postalCode": "20190",
              "state": "VA",
              "image": "http://whc.unesco.org/uploads/sites/site_354.jpg",
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                78.9629,
                20.5937
              ]
            },
            "properties": {
              "phoneFormatted": "(571) 203-0082",
              "phone": "5712030082",
              "address": "India",
              "city": "Hyderabad",
              "country": "United States",
              "crossStreet": "btw Explorer & Library",
              "postalCode": "20190",
              "state": "VA",
              "image":"http://whc.unesco.org/uploads/sites/site_1442.jpg"
            }
          }
         ]
   
    };
    map.on('load', function (e) {
      map.loadImage('https://png.icons8.com/office/50/000000/marker.png', function (error, image) {
        if (error) throw error;
        map.addImage('home', image);
        map.addSource('single-point', {
          "type": "geojson",
          "data": stores
        });
      map.addLayer({
        id: 'locations',
        "source": "single-point",
        type: 'symbol',
        layout: {
          'icon-image': 'home',
          "icon-size":0.85,
          'icon-allow-overlap': true,
        },
       
      });

    });
    }, buildLocationList(stores));

    function buildLocationList(data) {
      for (var i = 0; i < data.features.length; i++) {
        var currentFeature = data.features[i];
         var prop = currentFeature.properties;
         var listings = document.getElementById('listings');
        var listing = listings.appendChild(document.createElement('div'));
        listing.className = 'item';
        listing.id = 'listing-' + i;
        var link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.dataPosition = i;
        link.innerHTML = prop.address;
        link.addEventListener('click', function (e) {
          var clickedListing = data.features[this.dataPosition];
          flyToStore(clickedListing);
           createPopUp(clickedListing);
          var activeItem = document.getElementsByClassName('active');
          if (activeItem[0]) {
            activeItem[0].classList.remove('active');
          }
          this.parentNode.classList.add('active');
        });
        var details = listing.appendChild(document.createElement('div'));
        details.innerHTML = prop.city;
        if (prop.phone) {
          details.innerHTML += ' &middot; ' + prop.phoneFormatted;
        }
      }
    }

    function flyToStore(currentFeature) {
      map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 15
      });
    }

    function createPopUp(currentFeature) {
      var popUps = document.getElementsByClassName('mapboxgl-popup');
       if (popUps[0]) popUps[0].remove();

      var popup = new mapboxgl.Popup({ closeButton: false })
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML('' +
        '<h4>' + currentFeature.properties.address + '</h4>'+
        '<br>'+
        '<img src='+currentFeature.properties.image+'>')
        .addTo(map);
    }

   
    map.on('click', function (e) {
      var features = map.queryRenderedFeatures(e.point, { layers: ['locations'] });
      if (features.length) {
        var clickedPoint = features[0];
         flyToStore(clickedPoint);
        createPopUp(clickedPoint);
        var activeItem = document.getElementsByClassName('active');
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        var selectedFeature = clickedPoint.properties.address;
        var selectedFeatureIndex=0;
        for (var i = 0; i < stores.features.length; i++) {
          if (stores.features[i].properties.address === selectedFeature) {
            selectedFeatureIndex = i;
          }
        }
        var listing = document.getElementById('listing-' + selectedFeatureIndex);
        listing.classList.add('active');
      }
    });
  }

  render() {
    return (
        <div className="Container">
         <div className='sidebar'>
          <div className='heading'>
            <h1>Our Locations</h1>
          </div>
          <div id='listings' className='listings'></div>
         </div>
        <div id='map' className='map pad2'><h1>Map</h1></div>
        </div>
    );

  }
}

export default Signup;
