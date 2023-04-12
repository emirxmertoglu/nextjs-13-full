import React from "react";
import HomeContainer from "@/containers/home";
import Movies from "@/mocks/movies.json";

const API_URL = "https://api.themoviedb.org/3";

const getCategories = async () => {
  const res = await fetch(
    `${API_URL}/genre/movie/list?api_key=${process.env.API_KEY}&page=1`
  );
  return res.json();
};

const getPopularMovies = async () => {
  const res = await fetch(
    `${API_URL}/movie/popular?api_key=${process.env.API_KEY}&page=1`
  );
  return res.json();
};

const getTopRatedMovies = async () => {
  const res = await fetch(
    `${API_URL}/movie/top_rated?api_key=${process.env.API_KEY}&page=1`
  );
  return res.json();
};

async function HomePage({ params }) {
  let selectedCategory;

  const categoryPromise = getCategories();
  const popularPromise = getPopularMovies();
  const topRatedPromise = getTopRatedMovies();

  const [
    { results: popularMovies },
    { results: topRatedMovies },
    { genres: categories },
  ] = await Promise.all([popularPromise, topRatedPromise, categoryPromise]);

  if (params.category?.length > 0) {
    selectedCategory = true;
  }

  return (
    <HomeContainer
      categories={categories}
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? Movies.results.slice(0, 7) : [],
      }}
    />
  );
}

export default HomePage;
