const ipgeolocation_api_key = 'b84f3fc365d2436ab3c61d68402b6d09'

// get current latitude and longitude of the user
export const getLatitudeAndLongitude = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

    });
  } else {
    alert('Geolocation is not supported by your browser.');
  }
}

// get details of the current location of the user
export const getCurrentAddressDetails = async () => {
  try {
    const position = await new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject(new Error('Geolocation is not supported by your browser.'));
      }
    });

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    async function httpGetAsync(url) {
      return new Promise((resolve, reject) => {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
          if (xmlHttp.readyState === 4) {
            if (xmlHttp.status === 200) {
              resolve(xmlHttp.responseText);
            } else {
              reject(new Error(`HTTP error: ${xmlHttp.status}`));
            }
          }
        };
        xmlHttp.open("GET", url, true);
        xmlHttp.send(null);
      });
    }

    const url = `https://ipgeolocation.abstractapi.com/v1/?api_key=${ipgeolocation_api_key}&longitude=${latitude}&latitude=${longitude}`;

    const response = await httpGetAsync(url);

  } catch (error) {
    console.error(error.message);
  }
};

// ** autocomplete address
export const AutocompleteAddress = async ({ text }) => {
  const apiKey = 'd582f72f976c40f0a7cb6638b7a32acf';
  const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&type=amenity&format=json&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
}
