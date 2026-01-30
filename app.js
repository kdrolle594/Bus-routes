        // Initialize map centered on Freeport, Grand Bahama
        const map = L.map('map').setView([26.5384, -78.6963], 12);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(map);

        // Define bus routes with GeoJSON LineString
        const busRoutes = {
            route1: {
                name: "Bus 14 - Eight Mile Rock Loop",
                description: "Eight Mile Rock - Downtown",
                color: "#e74c3c",
                geojson: {
                    type: "Feature",
                    geometry: {
                        type: "LineString",
                        coordinates: 
                        [
          [-78.83949803162582,26.565454615661338],
          [-78.82885675872105,26.556739089216393],
          [-78.8215887909382,26.55051833215981],
          [-78.81649793033675,26.54588727099521],
          [-78.81554654588625,26.545089606446638],
          [-78.81275186292882,26.543854683140623],
          [-78.80753660140826,26.541691014934102],
          [-78.80441357449489,26.54032068792118],
          [-78.80208136829579,26.539399826190476],
          [-78.79626523763329,26.53691884750816],
          [-78.79589987935499,26.53660646595067],
          [-78.78969398115098,26.531284783817313],
          [-78.78887408933642,26.530579988228524],
          [-78.78768097656535,26.529574050975256],
          [-78.78723976222594,26.52986716919422],
          [-78.78342444950223,26.53334598981465],
          [-78.7829920878991,26.533849149666295],
          [-78.78237702650706,26.535311713303983],
          [-78.78210075918922,26.53650909375007],
          [-78.78210758481549,26.537701708455145],
          [-78.78198054363477,26.539648617181427],
          [-78.78165446017577,26.541778709644504],
          [-78.78137679076686,26.5425821497423],
          [-78.78085625714988,26.543308539897907],
          [-78.7801549804259,26.543816628385244],
          [-78.7795121929048,26.54405449545014],
          [-78.77860964401145,26.544193259739146],
          [-78.77779621767189,26.544119410521063],
          [-78.77075884168204,26.5429744921465],  
          [-78.76203020407962,26.540723164356237],
          [-78.75659063355188,26.53913281497752],
          [-78.75541349935202,26.538647059695393],
          [-78.75357620190378,26.537890513304234],
          [-78.75161088004725,26.537056869659054],
          [-78.75099101910303,26.536743741171605],
          [-78.75037547928315,26.536256931877972],
          [-78.74983331495389,26.53579380719809],
          [-78.74935279143752,26.53507293121963],
          [-78.74920134252949,26.534693982244377],
          [-78.74899694408178,26.533952783252843],
          [-78.74890134071337,26.533670061359217],
          [-78.74863556007442,26.533237513083876],
          [-78.74842873999435,26.533072270074044],
          [-78.74813565539786,26.533054961641383],
          [-78.74773700692809,26.533096994238022],
          [-78.7470655806863,26.533116152271603],
          [-78.7432302012542,26.533157586206116],
          [-78.74283425862427,26.53311113899059],
          [-78.74243606889766,26.532919563497572],
          [-78.74224482293165,26.53273708609295],
          [-78.74207770967013,26.532409708835274],
          [-78.74192821986533,26.532075902213506],
          [-78.7417819283418,26.53172324039548],
          [-78.73913983570397,26.52498267830093],
          [-78.73897574776394,26.52494425832326],
          [-78.73785683548026,26.52526928105108],
          [-78.73548627391364,26.52599633221736],
          [-78.7340140656116,26.52647128065044],
          [-78.73342454139906,26.526724644202446],
          [-78.7325402704601,26.52716282680511],
          [-78.73122501191467,26.527900098577874],
          [-78.72644024576893,26.530531263161322],
          [-78.72323320707783,26.53236310194164],
          [-78.71668975604742,26.535956808935097],
          [-78.71176021316842,26.538670183978994],
          [-78.70953864882105,26.539908802595562],
          [-78.70854111217163,26.540380163822846],
          [-78.70705545176278,26.540980572201903],
          [-78.70480278337921,26.54194094339688],
          [-78.70269699541329,26.542813720495403],
          [-78.70209714069907,26.543061079350437],
          [-78.7017802573258,26.54248775199153],
          [-78.70076439745249,26.54050680358695],
          [-78.69960379619415,26.53735658931994],
          [-78.69957167741885,26.537288656180834],
          [-78.69887756837807,26.537518812953024],
          [-78.69874282797038,26.537631601935487],
          [-78.69867632275891,26.5377893906431],
          [-78.69848737808869,26.537869899552646],
          [-78.69829740668551,26.537798268303604],
          [-78.69823142560536,26.537644518681375],
          [-78.6982897083106,26.53749730241121],
          [-78.69843519450312,26.53732912097462],
          [-78.6984401491048,26.534279268305895],
          [-78.69830121153747,26.53422309141564],
          [-78.69717232887454,26.53420499299061],
          [-78.69718465202058,26.53263672770113],
          [-78.69702479712124,26.53262025573207],
          [-78.69701628192539,26.53211716139073],
          [-78.69673770369704,26.532091746842582]
        ]
                    }
                },
                schedule: ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", 
                          "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"],
                interval: 60 // minutes between buses
            },
            route2: {
                name: "Bus 15 - Eight Mile Rock International Bazzar Loop",
                description: "Eight Mile Rock - International Bazzar - Downtown",
                color: "#3498db",
                geojson: {
                    type: "Feature",
                    geometry: {
                        type: "LineString",
                        coordinates:  [
          [
            -78.83947055142959,
            26.565355794679476
          ],
          [
            -78.83133291010252,
            26.558752819721207
          ],
          [
            -78.82333422391704,
            26.552092973943786
          ],
          [
            -78.81943632779954,
            26.548583507152628
          ],
          [
            -78.81587476064101,
            26.54535882322159
          ],
          [
            -78.81522473733159,
            26.54493290499667
          ],
          [
            -78.80719502228257,
            26.54157294574736
          ],
          [
            -78.79950101399916,
            26.53831885957976
          ],
          [
            -78.79620524189966,
            26.536901440845455
          ],
          [
            -78.78768528969572,
            26.529589905129797
          ],
          [
            -78.78678030189297,
            26.53024922714812
          ],
          [
            -78.78332461176907,
            26.533445409614416
          ],
          [
            -78.7830789722227,
            26.533792410016744
          ],
          [
            -78.7825876931299,
            26.534740872430106
          ],
          [
            -78.78214969973776,
            26.536106842265667
          ],
          [
            -78.78208505775117,
            26.53717094882552
          ],
          [
            -78.78205920095711,
            26.538859619412946
          ],
          [
            -78.7817809144277,
            26.541266859162107
          ],
          [
            -78.78136670571611,
            26.542682924155343
          ],
          [
            -78.78081078463744,
            26.543376868033647
          ],
          [
            -78.77996992384902,
            26.543900934052687
          ],
          [
            -78.77914250642918,
            26.54413224668872
          ],
          [
            -78.77828923221529,
            26.544190074774818
          ],
          [
            -78.77713769312292,
            26.54401434056112
          ],
          [
            -78.77426758894826,
            26.543470754567323
          ],
          [
            -78.77036144510348,
            26.54291978366274
          ],
          [
            -78.76806019040522,
            26.54246871882161
          ],
          [
            -78.75973228914746,
            26.540070905022986
          ],
          [
            -78.7563840238961,
            26.53906500353804
          ],
          [
            -78.7517815144996,
            26.537145009715076
          ],
          [
            -78.75038895894623,
            26.536324593047425
          ],
          [
            -78.74954861312936,
            26.535491808696293
          ],
          [
            -78.74909611922763,
            26.534589618829102
          ],
          [
            -78.74893562843343,
            26.533747392763402
          ],
          [
            -78.7484702061347,
            26.533076524108807
          ],
          [
            -78.7477462158925,
            26.533064957372943
          ],
          [
            -78.74686708488383,
            26.53311122430742
          ],
          [
            -78.74411756643075,
            26.533177377937122
          ],
          [
            -78.74313500824516,
            26.5331658112121
          ],
          [
            -78.74263047315925,
            26.533038483352968
          ],
          [
            -78.74220383605231,
            26.532749314523386
          ],
          [
            -78.74197112490292,
            26.532228808795068
          ],
          [
            -78.74164791518952,
            26.53155793161116
          ],
          [
            -78.73914537719789,
            26.525022968448383
          ],
          [
            -78.73890349601336,
            26.524274248915575
          ],
          [
            -78.73812192815242,
            26.522742564256745
          ],
          [
            -78.73738163595482,
            26.52208548822943
          ],
          [
            -78.7366717357801,
            26.52175473570387
          ],
          [
            -78.73509340404682,
            26.52135630628967
          ],
          [
            -78.73424173844886,
            26.521058503664946
          ],
          [
            -78.73366360106039,
            26.520624731575968
          ],
          [
            -78.73328335629637,
            26.52019708391522
          ],
          [
            -78.7329942876019,
            26.519606271669026
          ],
          [
            -78.73285673362426,
            26.518439038622667
          ],
          [
            -78.73286277482333,
            26.517286370784788
          ],
          [
            -78.73233583325255,
            26.5171898239345
          ],
          [
            -78.7305619218685,
            26.51721601390229
          ],
          [
            -78.72625027153111,
            26.517231565441506
          ],
          [
            -78.72073581527047,
            26.517194035792734
          ],
          [
            -78.700729738016,
            26.517175269096693
          ],
          [
            -78.7006675723184,
            26.51914423484022
          ],
          [
            -78.70023009231477,
            26.519779955824006
          ],
          [
            -78.69972510213833,
            26.520204252835182
          ],
          [
            -78.69927007653183,
            26.51980479015068
          ],
          [
            -78.69870906523578,
            26.519387787804103
          ],
          [
            -78.69795598837936,
            26.51945111800073
          ],
          [
            -78.69713540135012,
            26.51933322722104
          ],
          [
            -78.69625574291956,
            26.51886799426704
          ],
          [
            -78.6954435946618,
            26.518946426031196
          ],
          [
            -78.69492680340957,
            26.519991367251905
          ],
          [
            -78.69447752233017,
            26.52058325784858
          ],
          [
            -78.6934402214848,
            26.521935581083458
          ],
          [
            -78.69345093696407,
            26.52330054907779
          ],
          [
            -78.69365038645023,
            26.52399058360518
          ],
          [
            -78.69369793804776,
            26.52510344677811
          ],
          [
            -78.69339682114057,
            26.52603926380011
          ],
          [
            -78.69346701018205,
            26.527850928882856
          ],
          [
            -78.69343861283576,
            26.530447404625274
          ],
          [
            -78.6963524695643,
            26.53046166326262
          ],
          [
            -78.69635102821763,
            26.531212686872237
          ],
          [
            -78.6963704457755,
            26.531753959010132
          ],
          [
            -78.6970427023543,
            26.531774153007582
          ],
          [
            -78.6970284254243,
            26.531935596134673
          ],
          [
            -78.69667893703226,
            26.531929834170107
          ]
        ]
                    }
                },
                schedule: ["06:30", "08:00", "09:30", "11:00", "12:30", "14:00", 
                          "15:30", "17:00", "18:30", "20:00"],
                interval: 90
            },
            route3: {
                name: "Route 3 - North Shore Express",
                description: "Lucaya - Fortune Beach - Taino Beach",
                color: "#2ecc71",
                geojson: {
                    type: "Feature",
                    geometry: {
                        type: "LineString",
                        coordinates: [
                            [-78.6650, 26.5340], // Port Lucaya
                            [-78.6600, 26.5450],
                            [-78.6500, 26.5550], // Fortune Beach
                            [-78.6400, 26.5650],
                            [-78.6300, 26.5750], // Taino Beach
                            [-78.6200, 26.5850],
                            [-78.6100, 26.5800],
                            [-78.6200, 26.5700],
                            [-78.6300, 26.5600],
                            [-78.6400, 26.5500],
                            [-78.6500, 26.5450],
                            [-78.6650, 26.5340]  // Return
                        ]
                    }
                },
                schedule: ["07:00", "08:30", "10:00", "11:30", "13:00", "14:30", 
                          "16:00", "17:30", "19:00"],
                interval: 90
            }
        };

        // Define bus stops with GeoJSON Point
        const busStops = [
            { name: "Mall Drive Terminal", coords: [-78.6963, 26.5384], routes: ["route1", "route2"] },
            { name: "East Mall Plaza", coords: [-78.6850, 26.5420], routes: ["route1"] },
            { name: "Downtown Center", coords: [-78.6750, 26.5380], routes: ["route1"] },
            { name: "Port Lucaya Marketplace", coords: [-78.6650, 26.5340], routes: ["route1", "route3"] },
            { name: "Cruise Port", coords: [-78.6550, 26.5300], routes: ["route1"] },
            { name: "Harbor View", coords: [-78.6450, 26.5280], routes: ["route1"] },
            { name: "West End Plaza", coords: [-78.7200, 26.5500], routes: ["route2"] },
            { name: "Queens Highway Stop", coords: [-78.6800, 26.5450], routes: ["route2"] },
            { name: "Airport Terminal", coords: [-78.5800, 26.5100], routes: ["route2"] },
            { name: "Fortune Beach Access", coords: [-78.6500, 26.5550], routes: ["route3"] },
            { name: "Taino Beach Resort", coords: [-78.6300, 26.5750], routes: ["route3"] },
            { name: "North Beach End", coords: [-78.6200, 26.5850], routes: ["route3"] }
        ];

        // Store route layers and bus markers
        let routeLayers = {};
        let stopMarkers = [];
        let busMarkers = {};
        let activeRoute = null;

        // Create custom bus icon
        function createBusIcon(color) {
            return L.divIcon({
                html: `<div class="bus-icon" style="border: 3px solid ${color};">🚌</div>`,
                className: 'bus-marker',
                iconSize: [32, 32],
                iconAnchor: [16, 16]
            });
        }

        // Draw all routes
        Object.keys(busRoutes).forEach(routeId => {
            const route = busRoutes[routeId];
            const layer = L.geoJSON(route.geojson, {
                style: {
                    color: route.color,
                    weight: 4,
                    opacity: 0.7
                }
            }).addTo(map);
            
            routeLayers[routeId] = layer;
        });

        // Add bus stops
        busStops.forEach(stop => {
            const marker = L.circleMarker([stop.coords[1], stop.coords[0]], {
                radius: 6,
                fillColor: "#333",
                color: "#fff",
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8
            }).addTo(map);
            
            marker.bindPopup(`<strong>${stop.name}</strong><br>Routes: ${stop.routes.join(', ')}`);
            stopMarkers.push(marker);
        });

        // Populate route list
        const routeList = document.getElementById('routeList');
        Object.keys(busRoutes).forEach(routeId => {
            const route = busRoutes[routeId];
            const li = document.createElement('li');
            li.className = 'route-item';
            li.style.borderLeftColor = route.color;
            li.innerHTML = `
                <div class="route-name">${route.name}</div>
                <div class="route-desc">${route.description}</div>
            `;
            li.onclick = () => showSchedule(routeId);
            routeList.appendChild(li);
        });

        // Show schedule panel
        function showSchedule(routeId) {
            const route = busRoutes[routeId];
            const panel = document.getElementById('schedulePanel');
            const title = document.getElementById('scheduleTitle');
            const content = document.getElementById('scheduleContent');
            
            // Update active route styling
            document.querySelectorAll('.route-item').forEach(item => {
                item.classList.remove('active');
            });
            event.target.closest('.route-item').classList.add('active');
            
            title.textContent = route.name;
            
            // Show schedule times
            let html = '<strong>Departure Times:</strong><div class="schedule-times">';
            route.schedule.forEach(time => {
                html += `<div class="time-slot">${time}</div>`;
            });
            html += '</div>';
            
            // Show stops on this route
            const routeStops = busStops.filter(stop => stop.routes.includes(routeId));
            html += '<div class="stops-list"><strong>Stops:</strong>';
            routeStops.forEach(stop => {
                html += `<div class="stop-item">📍 ${stop.name}</div>`;
            });
            html += '</div>';
            
            content.innerHTML = html;
            panel.classList.add('visible');
            
            // Highlight route on map
            highlightRoute(routeId);
            activeRoute = routeId;
        }

        function closeSchedule() {
            document.getElementById('schedulePanel').classList.remove('visible');
            document.querySelectorAll('.route-item').forEach(item => {
                item.classList.remove('active');
            });
            resetRouteHighlight();
            activeRoute = null;
        }

        function highlightRoute(routeId) {
            // Dim all routes
            Object.keys(routeLayers).forEach(id => {
                routeLayers[id].setStyle({
                    opacity: id === routeId ? 1 : 0.2,
                    weight: id === routeId ? 6 : 4
                });
            });
            
            // Fit map to route bounds
            map.fitBounds(routeLayers[routeId].getBounds(), { padding: [50, 50] });
        }

        function resetRouteHighlight() {
            Object.keys(routeLayers).forEach(id => {
                routeLayers[id].setStyle({
                    opacity: 0.7,
                    weight: 4
                });
            });
        }

        // Animate buses along routes
        function animateBuses() {
            const currentTime = new Date();
            const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
            
            Object.keys(busRoutes).forEach(routeId => {
                const route = busRoutes[routeId];
                const coords = route.geojson.geometry.coordinates;
                
                // Calculate how many buses should be on this route based on schedule
                const activeBuses = route.schedule.filter(time => {
                    const [hours, minutes] = time.split(':').map(Number);
                    const scheduleMinutes = hours * 60 + minutes;
                    const diff = currentMinutes - scheduleMinutes;
                    return diff >= 0 && diff < route.interval;
                });
                
                // For demo purposes, show at least one bus on each route
                if (activeBuses.length === 0 && !busMarkers[routeId]) {
                    activeBuses.push(route.schedule[0]);
                }
                
                activeBuses.forEach((time, index) => {
                    const busId = `${routeId}_${index}`;
                    
                    if (!busMarkers[busId]) {
                        // Create new bus marker
                        const marker = L.marker([coords[0][1], coords[0][0]], {
                            icon: createBusIcon(route.color)
                        }).addTo(map);
                        
                        marker.bindPopup(`<strong>${route.name}</strong><br>Departure: ${time}`);
                        busMarkers[busId] = {
                            marker: marker,
                            routeId: routeId,
                            coordIndex: 0,
                            progress: 0
                        };
                    }
                    
                    // Animate bus position
                    const bus = busMarkers[busId];
                    bus.progress += 0.02; // Adjust speed
                    
                    if (bus.progress >= 1) {
                        bus.coordIndex = (bus.coordIndex + 1) % coords.length;
                        bus.progress = 0;
                    }
                    
                    // Interpolate position between coordinates
                    const startCoord = coords[bus.coordIndex];
                    const endCoord = coords[(bus.coordIndex + 1) % coords.length];
                    const lat = startCoord[1] + (endCoord[1] - startCoord[1]) * bus.progress;
                    const lng = startCoord[0] + (endCoord[0] - startCoord[0]) * bus.progress;
                    
                    bus.marker.setLatLng([lat, lng]);
                });
            });
        }

        // Start animation loop
        setInterval(animateBuses, 100);

        // Initial animation
        animateBuses();