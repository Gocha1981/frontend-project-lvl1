const getRandomInt = (min = 0, max = 100) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInt();
export default getRandomInt;