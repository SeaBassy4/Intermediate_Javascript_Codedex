const randomNumberPromise = () => {
  return new Promise((resolve,reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    if(randomNumber < 5){
      resolve(randomNumber);
    }else{
      reject("number was more than 5")
    }
  });
}

const generateBtn = document.getElementById("generateButton");

generateBtn.addEventListener("click", () => {
  randomNumberPromise()
    .then((num) => {
      console.log("Success! Number is:", num);
    })
    .catch((err) => {
      console.error("Error:", err);
    });
});