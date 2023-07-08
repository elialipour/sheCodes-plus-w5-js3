function comments(response) {
  console.log(response.data);
  console.log(response.data[0].email);
}

let apiUrl = "https://jsonplaceholder.typicode.com/comments";

axios.get(apiUrl).then(comments);
