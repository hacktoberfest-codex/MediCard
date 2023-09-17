const apiKey = 'd582f72f976c40f0a7cb6638b7a32acf';

// ** fetch all medical details
export const getMedicalDetailsNearMe = async () => {
  const position = await new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocation is not supported by your browser.'));
    }
  });

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const distanceInMeters = 1000;

  const earthRadius = 6378.1; // Radius of the Earth in kilometers
  const latDegPerKm = 1 / (earthRadius * (Math.PI / 180));
  const lonDegPerKm = 1 / (earthRadius * Math.cos((latitude * Math.PI) / 180) * (Math.PI / 180));

  const westBoundary = longitude - lonDegPerKm * distanceInMeters;
  const northBoundary = latitude + latDegPerKm * distanceInMeters;
  const eastBoundary = longitude + lonDegPerKm * distanceInMeters;
  const southBoundary = latitude - latDegPerKm * distanceInMeters;

  try {
    const requestOptions = {
      method: 'GET',
    };

    const response = await fetch(`https://api.geoapify.com/v2/places?categories=healthcare&filter=rect%3A${westBoundary}%2C${northBoundary}%2C${eastBoundary}%2C${southBoundary}&limit=20&apiKey=${apiKey}`, requestOptions);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    const data = result.features

    return data;

  } catch (error) {
    console.error('error', error);
  }
};

// ** fetch all hospitals near me
export const getHospitalsNearMe = async () => {
  const position = await new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocation is not supported by your browser.'));
    }
  });

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const distanceInMeters = 1000;

  const earthRadius = 6378.1; // Radius of the Earth in kilometers
  const latDegPerKm = 1 / (earthRadius * (Math.PI / 180));
  const lonDegPerKm = 1 / (earthRadius * Math.cos((latitude * Math.PI) / 180) * (Math.PI / 180));

  const westBoundary = longitude - lonDegPerKm * distanceInMeters;
  const northBoundary = latitude + latDegPerKm * distanceInMeters;
  const eastBoundary = longitude + lonDegPerKm * distanceInMeters;
  const southBoundary = latitude - latDegPerKm * distanceInMeters;

  try {
    const requestOptions = {
      method: 'GET',
    };

    const response = await fetch(`https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=rect%3A${westBoundary}%2C${northBoundary}%2C${eastBoundary}%2C${southBoundary}&limit=20&apiKey=${apiKey}`, requestOptions);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    const data = result.features

    return data;

  } catch (error) {
    console.error('error', error);
  }
};


// ** fetch all pharmacy
export const getPharmacyNearMe = async () => {
  const position = await new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocation is not supported by your browser.'));
    }
  });

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const distanceInMeters = 1000;

  const earthRadius = 6378.1; // Radius of the Earth in kilometers
  const latDegPerKm = 1 / (earthRadius * (Math.PI / 180));
  const lonDegPerKm = 1 / (earthRadius * Math.cos((latitude * Math.PI) / 180) * (Math.PI / 180));

  const westBoundary = longitude - lonDegPerKm * distanceInMeters;
  const northBoundary = latitude + latDegPerKm * distanceInMeters;
  const eastBoundary = longitude + lonDegPerKm * distanceInMeters;
  const southBoundary = latitude - latDegPerKm * distanceInMeters;

  try {
    const requestOptions = {
      method: 'GET',
    };

    const response = await fetch(`https://api.geoapify.com/v2/places?categories=healthcare.pharmacy&filter=rect%3A${westBoundary}%2C${northBoundary}%2C${eastBoundary}%2C${southBoundary}&limit=20&apiKey=${apiKey}`, requestOptions);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    const data = result.features

    return data;

  } catch (error) {
    console.error('error', error);
  }
};

// ** fetch all dentist
export const getDentistNearMe = async () => {
  const position = await new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocation is not supported by your browser.'));
    }
  });

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const distanceInMeters = 1000;

  const earthRadius = 6378.1; // Radius of the Earth in kilometers
  const latDegPerKm = 1 / (earthRadius * (Math.PI / 180));
  const lonDegPerKm = 1 / (earthRadius * Math.cos((latitude * Math.PI) / 180) * (Math.PI / 180));

  const westBoundary = longitude - lonDegPerKm * distanceInMeters;
  const northBoundary = latitude + latDegPerKm * distanceInMeters;
  const eastBoundary = longitude + lonDegPerKm * distanceInMeters;
  const southBoundary = latitude - latDegPerKm * distanceInMeters;

  try {
    const requestOptions = {
      method: 'GET',
    };

    const response = await fetch(`https://api.geoapify.com/v2/places?categories=healthcare.dentist&filter=rect%3A${westBoundary}%2C${northBoundary}%2C${eastBoundary}%2C${southBoundary}&limit=20&apiKey=${apiKey}`, requestOptions);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    const data = result.features

    return data;

  } catch (error) {
    console.error('error', error);
  }
};

// ** fetch all allergology
export const getAllergologyNearMe = async () => {
  const position = await new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocation is not supported by your browser.'));
    }
  });

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const distanceInMeters = 1000;

  const earthRadius = 6378.1; // Radius of the Earth in kilometers
  const latDegPerKm = 1 / (earthRadius * (Math.PI / 180));
  const lonDegPerKm = 1 / (earthRadius * Math.cos((latitude * Math.PI) / 180) * (Math.PI / 180));

  const westBoundary = longitude - lonDegPerKm * distanceInMeters;
  const northBoundary = latitude + latDegPerKm * distanceInMeters;
  const eastBoundary = longitude + lonDegPerKm * distanceInMeters;
  const southBoundary = latitude - latDegPerKm * distanceInMeters;

  try {
    const requestOptions = {
      method: 'GET',
    };

    const response = await fetch(`https://api.geoapify.com/v2/places?categories=healthcare.clinic_or_praxis.allergology&filter=rect%3A${westBoundary}%2C${northBoundary}%2C${eastBoundary}%2C${southBoundary}&limit=20&apiKey=${apiKey}`, requestOptions);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    const data = result.features

    return data;

  } catch (error) {
    console.error('error', error);
  }
};

// ** fetch all cardiology
export const getCardiologyNearMe = async () => {
  const position = await new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocation is not supported by your browser.'));
    }
  });

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const distanceInMeters = 1000;

  const earthRadius = 6378.1; // Radius of the Earth in kilometers
  const latDegPerKm = 1 / (earthRadius * (Math.PI / 180));
  const lonDegPerKm = 1 / (earthRadius * Math.cos((latitude * Math.PI) / 180) * (Math.PI / 180));

  const westBoundary = longitude - lonDegPerKm * distanceInMeters;
  const northBoundary = latitude + latDegPerKm * distanceInMeters;
  const eastBoundary = longitude + lonDegPerKm * distanceInMeters;
  const southBoundary = latitude - latDegPerKm * distanceInMeters;

  try {
    const requestOptions = {
      method: 'GET',
    };

    const response = await fetch(`https://api.geoapify.com/v2/places?categories=healthcare.clinic_or_praxis.cardiology&filter=rect%3A${westBoundary}%2C${northBoundary}%2C${eastBoundary}%2C${southBoundary}&limit=20&apiKey=${apiKey}`, requestOptions);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    const data = result.features

    return data;

  } catch (error) {
    console.error('error', error);
  }
};

// ** fetch all dermatology
export const getDermatologyNearMe = async () => {
  const position = await new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocation is not supported by your browser.'));
    }
  });

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const distanceInMeters = 1000;

  const earthRadius = 6378.1; // Radius of the Earth in kilometers
  const latDegPerKm = 1 / (earthRadius * (Math.PI / 180));
  const lonDegPerKm = 1 / (earthRadius * Math.cos((latitude * Math.PI) / 180) * (Math.PI / 180));

  const westBoundary = longitude - lonDegPerKm * distanceInMeters;
  const northBoundary = latitude + latDegPerKm * distanceInMeters;
  const eastBoundary = longitude + lonDegPerKm * distanceInMeters;
  const southBoundary = latitude - latDegPerKm * distanceInMeters;

  try {
    const requestOptions = {
      method: 'GET',
    };

    const response = await fetch(`https://api.geoapify.com/v2/places?categories=healthcare.clinic_or_praxis.dermatology&filter=rect%3A${westBoundary}%2C${northBoundary}%2C${eastBoundary}%2C${southBoundary}&limit=20&apiKey=${apiKey}`, requestOptions);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    const data = result.features

    return data;

  } catch (error) {
    console.error('error', error);
  }
};

// ** fetch all gastroenterology
export const getEndocrinologyNearMe = async () => {
  const position = await new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocation is not supported by your browser.'));
    }
  });

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const distanceInMeters = 1000;

  const earthRadius = 6378.1; // Radius of the Earth in kilometers
  const latDegPerKm = 1 / (earthRadius * (Math.PI / 180));
  const lonDegPerKm = 1 / (earthRadius * Math.cos((latitude * Math.PI) / 180) * (Math.PI / 180));

  const westBoundary = longitude - lonDegPerKm * distanceInMeters;
  const northBoundary = latitude + latDegPerKm * distanceInMeters;
  const eastBoundary = longitude + lonDegPerKm * distanceInMeters;
  const southBoundary = latitude - latDegPerKm * distanceInMeters;

  try {
    const requestOptions = {
      method: 'GET',
    };

    const response = await fetch(`https://api.geoapify.com/v2/places?categories=healthcare.clinic_or_praxis.endocrinology&filter=rect%3A${westBoundary}%2C${northBoundary}%2C${eastBoundary}%2C${southBoundary}&limit=20&apiKey=${apiKey}`, requestOptions);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    const data = result.features

    return data;

  } catch (error) {
    console.error('error', error);
  }
};

// ** fetch all endocrinology
export const getGastroenterologyNearMe = async () => {
  const position = await new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocation is not supported by your browser.'));
    }
  });

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const distanceInMeters = 1000;

  const earthRadius = 6378.1; // Radius of the Earth in kilometers
  const latDegPerKm = 1 / (earthRadius * (Math.PI / 180));
  const lonDegPerKm = 1 / (earthRadius * Math.cos((latitude * Math.PI) / 180) * (Math.PI / 180));

  const westBoundary = longitude - lonDegPerKm * distanceInMeters;
  const northBoundary = latitude + latDegPerKm * distanceInMeters;
  const eastBoundary = longitude + lonDegPerKm * distanceInMeters;
  const southBoundary = latitude - latDegPerKm * distanceInMeters;

  try {
    const requestOptions = {
      method: 'GET',
    };

    const response = await fetch(`https://api.geoapify.com/v2/places?categories=healthcare.clinic_or_praxis.gastroenterology&filter=rect%3A${westBoundary}%2C${northBoundary}%2C${eastBoundary}%2C${southBoundary}&limit=20&apiKey=${apiKey}`, requestOptions);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    const data = result.features

    return data;

  } catch (error) {
    console.error('error', error);
  }
};

// ** fetch all general
export const getGeneralNearMe = async () => {
  const position = await new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocation is not supported by your browser.'));
    }
  });

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const distanceInMeters = 1000;

  const earthRadius = 6378.1; // Radius of the Earth in kilometers
  const latDegPerKm = 1 / (earthRadius * (Math.PI / 180));
  const lonDegPerKm = 1 / (earthRadius * Math.cos((latitude * Math.PI) / 180) * (Math.PI / 180));

  const westBoundary = longitude - lonDegPerKm * distanceInMeters;
  const northBoundary = latitude + latDegPerKm * distanceInMeters;
  const eastBoundary = longitude + lonDegPerKm * distanceInMeters;
  const southBoundary = latitude - latDegPerKm * distanceInMeters;

  try {
    const requestOptions = {
      method: 'GET',
    };

    const response = await fetch(`https://api.geoapify.com/v2/places?categories=healthcare.clinic_or_praxis.general&filter=rect%3A${westBoundary}%2C${northBoundary}%2C${eastBoundary}%2C${southBoundary}&limit=20&apiKey=${apiKey}`, requestOptions);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    const data = result.features

    return data;

  } catch (error) {
    console.error('error', error);
  }
};

// ** fetch all gynaecology
export const getGynaecologyNearMe = async () => {
  const position = await new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocation is not supported by your browser.'));
    }
  });

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const distanceInMeters = 1000;

  const earthRadius = 6378.1; // Radius of the Earth in kilometers
  const latDegPerKm = 1 / (earthRadius * (Math.PI / 180));
  const lonDegPerKm = 1 / (earthRadius * Math.cos((latitude * Math.PI) / 180) * (Math.PI / 180));

  const westBoundary = longitude - lonDegPerKm * distanceInMeters;
  const northBoundary = latitude + latDegPerKm * distanceInMeters;
  const eastBoundary = longitude + lonDegPerKm * distanceInMeters;
  const southBoundary = latitude - latDegPerKm * distanceInMeters;

  try {
    const requestOptions = {
      method: 'GET',
    };

    const response = await fetch(`https://api.geoapify.com/v2/places?categories=healthcare.clinic_or_praxis.gynaecology&filter=rect%3A${westBoundary}%2C${northBoundary}%2C${eastBoundary}%2C${southBoundary}&limit=20&apiKey=${apiKey}`, requestOptions);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    const data = result.features

    return data;

  } catch (error) {
    console.error('error', error);
  }
};

// ** fetch all ophthalmology
export const getOphthalmologyNearMe = async () => {
  const position = await new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocation is not supported by your browser.'));
    }
  });

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const distanceInMeters = 1000;

  const earthRadius = 6378.1; // Radius of the Earth in kilometers
  const latDegPerKm = 1 / (earthRadius * (Math.PI / 180));
  const lonDegPerKm = 1 / (earthRadius * Math.cos((latitude * Math.PI) / 180) * (Math.PI / 180));

  const westBoundary = longitude - lonDegPerKm * distanceInMeters;
  const northBoundary = latitude + latDegPerKm * distanceInMeters;
  const eastBoundary = longitude + lonDegPerKm * distanceInMeters;
  const southBoundary = latitude - latDegPerKm * distanceInMeters;

  try {
    const requestOptions = {
      method: 'GET',
    };

    const response = await fetch(`https://api.geoapify.com/v2/places?categories=healthcare.clinic_or_praxis.ophthalmology&filter=rect%3A${westBoundary}%2C${northBoundary}%2C${eastBoundary}%2C${southBoundary}&limit=20&apiKey=${apiKey}`, requestOptions);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    const data = result.features

    return data;

  } catch (error) {
    console.error('error', error);
  }
};

// ** fetch all orthopaedics
export const getOrthopaedicsNearMe = async () => {
  const position = await new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocation is not supported by your browser.'));
    }
  });

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const distanceInMeters = 1000;

  const earthRadius = 6378.1; // Radius of the Earth in kilometers
  const latDegPerKm = 1 / (earthRadius * (Math.PI / 180));
  const lonDegPerKm = 1 / (earthRadius * Math.cos((latitude * Math.PI) / 180) * (Math.PI / 180));

  const westBoundary = longitude - lonDegPerKm * distanceInMeters;
  const northBoundary = latitude + latDegPerKm * distanceInMeters;
  const eastBoundary = longitude + lonDegPerKm * distanceInMeters;
  const southBoundary = latitude - latDegPerKm * distanceInMeters;

  try {
    const requestOptions = {
      method: 'GET',
    };

    const response = await fetch(`https://api.geoapify.com/v2/places?categories=healthcare.clinic_or_praxis.orthopaedics&filter=rect%3A${westBoundary}%2C${northBoundary}%2C${eastBoundary}%2C${southBoundary}&limit=20&apiKey=${apiKey}`, requestOptions);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    const data = result.features

    return data;

  } catch (error) {
    console.error('error', error);
  }
};

// ** fetch all otolaryngology
export const getOtolaryngologyNearMe = async () => {
  const position = await new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocation is not supported by your browser.'));
    }
  });

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const distanceInMeters = 1000;

  const earthRadius = 6378.1; // Radius of the Earth in kilometers
  const latDegPerKm = 1 / (earthRadius * (Math.PI / 180));
  const lonDegPerKm = 1 / (earthRadius * Math.cos((latitude * Math.PI) / 180) * (Math.PI / 180));

  const westBoundary = longitude - lonDegPerKm * distanceInMeters;
  const northBoundary = latitude + latDegPerKm * distanceInMeters;
  const eastBoundary = longitude + lonDegPerKm * distanceInMeters;
  const southBoundary = latitude - latDegPerKm * distanceInMeters;

  try {
    const requestOptions = {
      method: 'GET',
    };

    const response = await fetch(`https://api.geoapify.com/v2/places?categories=healthcare.clinic_or_praxis.otolaryngology&filter=rect%3A${westBoundary}%2C${northBoundary}%2C${eastBoundary}%2C${southBoundary}&limit=20&apiKey=${apiKey}`, requestOptions);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    const data = result.features

    return data;

  } catch (error) {
    console.error('error', error);
  }
};

// ** fetch all paediatrics
export const getPaediatricsNearMe = async () => {
  const position = await new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocation is not supported by your browser.'));
    }
  });

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const distanceInMeters = 1000;

  const earthRadius = 6378.1; // Radius of the Earth in kilometers
  const latDegPerKm = 1 / (earthRadius * (Math.PI / 180));
  const lonDegPerKm = 1 / (earthRadius * Math.cos((latitude * Math.PI) / 180) * (Math.PI / 180));

  const westBoundary = longitude - lonDegPerKm * distanceInMeters;
  const northBoundary = latitude + latDegPerKm * distanceInMeters;
  const eastBoundary = longitude + lonDegPerKm * distanceInMeters;
  const southBoundary = latitude - latDegPerKm * distanceInMeters;

  try {
    const requestOptions = {
      method: 'GET',
    };

    const response = await fetch(`https://api.geoapify.com/v2/places?categories=healthcare.clinic_or_praxis.paediatrics&filter=rect%3A${westBoundary}%2C${northBoundary}%2C${eastBoundary}%2C${southBoundary}&limit=20&apiKey=${apiKey}`, requestOptions);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    const data = result.features

    return data;

  } catch (error) {
    console.error('error', error);
  }
};

// fetch all psychiatry
export const getPsychiatryNearMe = async () => {
  const position = await new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocation is not supported by your browser.'));
    }
  });

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const distanceInMeters = 1000;

  const earthRadius = 6378.1; // Radius of the Earth in kilometers
  const latDegPerKm = 1 / (earthRadius * (Math.PI / 180));
  const lonDegPerKm = 1 / (earthRadius * Math.cos((latitude * Math.PI) / 180) * (Math.PI / 180));

  const westBoundary = longitude - lonDegPerKm * distanceInMeters;
  const northBoundary = latitude + latDegPerKm * distanceInMeters;
  const eastBoundary = longitude + lonDegPerKm * distanceInMeters;
  const southBoundary = latitude - latDegPerKm * distanceInMeters;

  try {
    const requestOptions = {
      method: 'GET',
    };

    const response = await fetch(`https://api.geoapify.com/v2/places?categories=healthcare.clinic_or_praxis.psychiatry&filter=rect%3A${westBoundary}%2C${northBoundary}%2C${eastBoundary}%2C${southBoundary}&limit=20&apiKey=${apiKey}`, requestOptions);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    const data = result.features

    return data;

  } catch (error) {
    console.error('error', error);
  }
};

// fetch all pulmonology
export const getPulmonologyNearMe = async () => {
  const position = await new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocation is not supported by your browser.'));
    }
  });

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const distanceInMeters = 1000;

  const earthRadius = 6378.1; // Radius of the Earth in kilometers
  const latDegPerKm = 1 / (earthRadius * (Math.PI / 180));
  const lonDegPerKm = 1 / (earthRadius * Math.cos((latitude * Math.PI) / 180) * (Math.PI / 180));

  const westBoundary = longitude - lonDegPerKm * distanceInMeters;
  const northBoundary = latitude + latDegPerKm * distanceInMeters;
  const eastBoundary = longitude + lonDegPerKm * distanceInMeters;
  const southBoundary = latitude - latDegPerKm * distanceInMeters;

  try {
    const requestOptions = {
      method: 'GET',
    };

    const response = await fetch(`https://api.geoapify.com/v2/places?categories=healthcare.clinic_or_praxis.pulmonology&filter=rect%3A${westBoundary}%2C${northBoundary}%2C${eastBoundary}%2C${southBoundary}&limit=20&apiKey=${apiKey}`, requestOptions);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    const data = result.features

    return data;

  } catch (error) {
    console.error('error', error);
  }
};

// fetch all radiology
export const getRadiologyNearMe = async () => {
  const position = await new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocation is not supported by your browser.'));
    }
  });

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const distanceInMeters = 1000;

  const earthRadius = 6378.1; // Radius of the Earth in kilometers
  const latDegPerKm = 1 / (earthRadius * (Math.PI / 180));
  const lonDegPerKm = 1 / (earthRadius * Math.cos((latitude * Math.PI) / 180) * (Math.PI / 180));

  const westBoundary = longitude - lonDegPerKm * distanceInMeters;
  const northBoundary = latitude + latDegPerKm * distanceInMeters;
  const eastBoundary = longitude + lonDegPerKm * distanceInMeters;
  const southBoundary = latitude - latDegPerKm * distanceInMeters;

  try {
    const requestOptions = {
      method: 'GET',
    };

    const response = await fetch(`https://api.geoapify.com/v2/places?categories=healthcare.clinic_or_praxis.radiology&filter=rect%3A${westBoundary}%2C${northBoundary}%2C${eastBoundary}%2C${southBoundary}&limit=20&apiKey=${apiKey}`, requestOptions);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    const data = result.features

    return data;

  } catch (error) {
    console.error('error', error);
  }
};

// fetch all rheumatology
export const getRheumatologyNearMe = async () => {
  const position = await new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocation is not supported by your browser.'));
    }
  });

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const distanceInMeters = 1000;

  const earthRadius = 6378.1; // Radius of the Earth in kilometers
  const latDegPerKm = 1 / (earthRadius * (Math.PI / 180));
  const lonDegPerKm = 1 / (earthRadius * Math.cos((latitude * Math.PI) / 180) * (Math.PI / 180));

  const westBoundary = longitude - lonDegPerKm * distanceInMeters;
  const northBoundary = latitude + latDegPerKm * distanceInMeters;
  const eastBoundary = longitude + lonDegPerKm * distanceInMeters;
  const southBoundary = latitude - latDegPerKm * distanceInMeters;

  try {
    const requestOptions = {
      method: 'GET',
    };

    const response = await fetch(`https://api.geoapify.com/v2/places?categories=healthcare.clinic_or_praxis.rheumatology&filter=rect%3A${westBoundary}%2C${northBoundary}%2C${eastBoundary}%2C${southBoundary}&limit=20&apiKey=${apiKey}`, requestOptions);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    const data = result.features

    return data;

  } catch (error) {
    console.error('error', error);
  }
};

// fetch all trauma
export const getTraumaNearMe = async () => {
  const position = await new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocation is not supported by your browser.'));
    }
  });

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const distanceInMeters = 1000;

  const earthRadius = 6378.1; // Radius of the Earth in kilometers
  const latDegPerKm = 1 / (earthRadius * (Math.PI / 180));
  const lonDegPerKm = 1 / (earthRadius * Math.cos((latitude * Math.PI) / 180) * (Math.PI / 180));

  const westBoundary = longitude - lonDegPerKm * distanceInMeters;
  const northBoundary = latitude + latDegPerKm * distanceInMeters;
  const eastBoundary = longitude + lonDegPerKm * distanceInMeters;
  const southBoundary = latitude - latDegPerKm * distanceInMeters;

  try {
    const requestOptions = {
      method: 'GET',
    };

    const response = await fetch(`https://api.geoapify.com/v2/places?categories=healthcare.clinic_or_praxis.trauma&filter=rect%3A${westBoundary}%2C${northBoundary}%2C${eastBoundary}%2C${southBoundary}&limit=20&apiKey=${apiKey}`, requestOptions);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    
  } catch (error) {
    console.error('error', error);
  }
};

// fetch all urology
export const getUrologyNearMe = async () => {
  const position = await new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocation is not supported by your browser.'));
    }
  });

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const distanceInMeters = 1000;

  const earthRadius = 6378.1; // Radius of the Earth in kilometers
  const latDegPerKm = 1 / (earthRadius * (Math.PI / 180));
  const lonDegPerKm = 1 / (earthRadius * Math.cos((latitude * Math.PI) / 180) * (Math.PI / 180));

  const westBoundary = longitude - lonDegPerKm * distanceInMeters;
  const northBoundary = latitude + latDegPerKm * distanceInMeters;
  const eastBoundary = longitude + lonDegPerKm * distanceInMeters;
  const southBoundary = latitude - latDegPerKm * distanceInMeters;

  try {
    const requestOptions = {
      method: 'GET',
    };

    const response = await fetch(`https://api.geoapify.com/v2/places?categories=healthcare.clinic_or_praxis.urology&filter=rect%3A${westBoundary}%2C${northBoundary}%2C${eastBoundary}%2C${southBoundary}&limit=20&apiKey=${apiKey}`, requestOptions);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    const data = result.features

    return data;

  } catch (error) {
    console.error('error', error);
  }
};

// fetch all vascular_surgery
export const getVascularSurgeryNearMe = async () => {
  const position = await new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocation is not supported by your browser.'));
    }
  });

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const distanceInMeters = 1000;

  const earthRadius = 6378.1; // Radius of the Earth in kilometers
  const latDegPerKm = 1 / (earthRadius * (Math.PI / 180));
  const lonDegPerKm = 1 / (earthRadius * Math.cos((latitude * Math.PI) / 180) * (Math.PI / 180));

  const westBoundary = longitude - lonDegPerKm * distanceInMeters;
  const northBoundary = latitude + latDegPerKm * distanceInMeters;
  const eastBoundary = longitude + lonDegPerKm * distanceInMeters;
  const southBoundary = latitude - latDegPerKm * distanceInMeters;

  try {
    const requestOptions = {
      method: 'GET',
    };

    const response = await fetch(`https://api.geoapify.com/v2/places?categories=healthcare.clinic_or_praxis.vascular_surgery&filter=rect%3A${westBoundary}%2C${northBoundary}%2C${eastBoundary}%2C${southBoundary}&limit=20&apiKey=${apiKey}`, requestOptions);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    const data = result.features

    return data;

  } catch (error) {
    console.error('error', error);
  }
};
