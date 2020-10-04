const KEY = "aac11052b0cc251fbcbb9a04302d117f";

const getTrending = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch(() => {
      return "err";
    });
};

const getMovieDetails = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch(() => {
      return "err";
    });
};

const searchMovieByRequest = (request) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${request}&language=en-US&page=1&include_adult=false`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch(() => {
      return "err";
    });
}

const getCastByID = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch(() => {
      return "err";
    });
}

export { getTrending, getMovieDetails, searchMovieByRequest, getCastByID };
