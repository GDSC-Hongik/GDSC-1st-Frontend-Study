const userCoordinateGenerator = () => {
  return new Promise((resolve, reject) => {
    try {
      if (!navigator.geolocation) {
        throw 'Not supported on your browser';
      }

      navigator.geolocation.getCurrentPosition((coordinate) => {
        resolve({
          latitude: coordinate.coords.latitude,
          longitude: coordinate.coords.longitude,
        });
      });
    } catch (error) {
      reject(error);
    }
  });
};

export default userCoordinateGenerator;
