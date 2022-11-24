
export const createProducts = () => {
  return new Promise((resolve, reject, data) => {
    setTimeout(() => {

      const createProducts = new FormData();
     
      resolve(createProducts);
    }, 2000);
  });
};
