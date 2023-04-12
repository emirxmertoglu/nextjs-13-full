import React from "react";

import Genres from "@/mocks/genres.json";
import Movies from "@/mocks/movies.json";

import { FeaturedMovie } from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

function HomeContainer({
  categories = [],
  popularMovies = [],
  topRatedMovies = [],
  selectedCategory,
}) {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={categories.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            Genres.genres.find((genre) => `${genre.id}` === selectedCategory.id)
              ?.name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection
        title="Popular Movies"
        movies={popularMovies.slice(1, 7)}
      />
      <MoviesSection
        title="Your Favorites"
        movies={topRatedMovies.slice(7, 13)}
      />
    </div>
  );
}

export default HomeContainer;
