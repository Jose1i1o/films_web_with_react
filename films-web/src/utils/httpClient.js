const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWNjZGM1NzhjNjU0YWQyZmQ5MGU3ZTQyMjM0Yjc4NCIsInN1YiI6IjYxNDYzMjViYjViYzIxMDA0NGZjMDg0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OqFhik6xrMtpqMcxfAra_GvVhLgc0T03LrWGr2pF6mk",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((response) => response.json());
}
