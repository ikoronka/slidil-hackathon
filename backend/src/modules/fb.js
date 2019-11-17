function getFBData(query) {
  axios.get("https://www.facebook.com/zuck")
  .then((data) => {
    console.log(data);
  });
}
