import React, { useEffect } from 'react';

const Map = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://www.bing.com/api/maps/mapcontrol?callback=initMap&key=AidbIn3f1LzkT4v1CshU8rjBOdL3wr426E3vDDs7LUE9P7vkIEnDDf6EoSu6ukvw`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        window.initMap = () => {
            const getUrlParameter = (name) => {
                name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
                const results = regex.exec(window.location.search);
                return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
            }

            const lat = parseFloat(getUrlParameter('lat')) || 21.0285;
            const lng = parseFloat(getUrlParameter('lng')) || 105.8542;
            const location = new window.Microsoft.Maps.Location(lat, lng);

            const map = new window.Microsoft.Maps.Map('#map', {
                credentials: 'AidbIn3f1LzkT4v1CshU8rjBOdL3wr426E3vDDs7LUE9P7vkIEnDDf6EoSu6ukvw',
                center: location,
                zoom: 10
            });

            const pushpin = new window.Microsoft.Maps.Pushpin(location, {
                title: 'Location',
                subTitle: 'Selected Location',
                text: 'L'
            });

            map.entities.push(pushpin);

            const infobox = new window.Microsoft.Maps.Infobox(location, {
                title: 'Location',
                description: 'Selected Location',
                visible: false
            });

            infobox.setMap(map);

            window.Microsoft.Maps.Events.addHandler(pushpin, 'click', () => {
                infobox.setOptions({ visible: true });
            });
        }

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <div id="map" style={{ width: '100%', height: '100vh' }}></div>
    );
}

export default Map;
