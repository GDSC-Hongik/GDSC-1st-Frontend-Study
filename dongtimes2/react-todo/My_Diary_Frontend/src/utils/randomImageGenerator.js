const getSeedValue = () => {
  return Math.floor(Math.random() * 1000);
};

const randomImageGenerator = () => {
  const seed = getSeedValue();

  return new Promise((resolve) => {
    try {
      const result = `https://picsum.photos/id/${seed}/${window.innerWidth}/${window.innerHeight}.jpg`;
      resolve(result);
    } catch (error) {
      console.log('eeee');
      console.error(error);
    }
  });
};

export default randomImageGenerator;
