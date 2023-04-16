import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { StoreState } from "src/config/StoreProvider/StoreProvider";
import { Film } from "../../domain/film";
import * as filmService from "../../store/film/service";
import * as characterService from "../../store/character/service";
import { Carousel } from "react-responsive-carousel";
import logo from "../../assets/star-wars-logo.png";
import styles from "./FilmsList.module.scss";
import Loader from "../../common/Loader/Loader";
import _ from "lodash";
import useWindowSize from "../../hooks/useWindowSize/useWindowSize";
import { Character } from "../../domain/character";
import CharacterCard from "src/common/CharacterCard/CharacterCard";
import { resetCharacterStore } from "../../store/character/actions";
import { charachterUrlParser } from "../../utility/urlHelper/urlHelper";

type Props = {
  error: string | null;
  isFilmListLoading: boolean;
  filmList: Film[] | [];
  onFilmListFetch: () => void;
  onCharacterListFetch: (characterIds: number[]) => void;
  isCharacterListLoading: boolean;
  characterList: Character[] | [];
  onCharacterStoreReset: () => void;
};

const FilmsList = ({
  error,
  isFilmListLoading,
  filmList,
  onFilmListFetch,
  onCharacterListFetch,
  characterList,
  isCharacterListLoading,
  onCharacterStoreReset,
}: Props) => {
  const [selectedFilm, setSelectedFilm] = useState("");
  const { width } = useWindowSize();
  const windowSize = width ?? 0;

  useEffect(() => {
    onCharacterStoreReset();
  }, []);

  useEffect(() => {
    onFilmListFetch();
  }, []);

  if (isFilmListLoading || !filmList) {
    return (
      <section className={styles.carouselContainer}>
        <Loader isLoading />
      </section>
    );
  }

  const sortedFilmList = _.sortBy(filmList, (film) => film.episode_id);

  const onFilmSelect = (film: Film) => {
    const characterIds = charachterUrlParser(film.characters);

    onCharacterListFetch(characterIds);
    setSelectedFilm(film.title);
  };

  const CAROUSEL_BREAK_POINT = 1200 > windowSize ? 100 : 33.33;

  return (
    <>
      <section className={styles.carouselContainer}>
        <img src={logo} alt="Star wars" />
        <Carousel
          showThumbs={false}
          centerMode={true}
          centerSlidePercentage={CAROUSEL_BREAK_POINT}
          infiniteLoop
          showStatus={false}
          className={styles.carousel}
          showIndicators={false}
        >
          {sortedFilmList.map((film) => (
            <div key={film.title} className={styles.carouselItem}>
              <h2>{film.title}</h2>
              <p>Episode {film.episode_id}</p>
              <p>Release date: {film.release_date}</p>
              <button
                className={styles.carouselButton}
                disabled={isCharacterListLoading}
                onClick={() => onFilmSelect(film)}
              >
                Show people
              </button>
            </div>
          ))}
        </Carousel>
      </section>
      <section className={styles.characterCardsContainer}>
        <h2>People in film: {selectedFilm}</h2>
        {isCharacterListLoading ? (
          <Loader isLoading height="200px" />
        ) : (
          characterList.map((character: Character) => {
            return (
              <CharacterCard
                key={character.name + character.birth_year}
                character={character}
              />
            );
          })
        )}
      </section>
    </>
  );
};

const mapStateToProps = (state: StoreState) => ({
  error: state.film.filmsListError,
  isFilmListLoading: state.film.filmsListLoading,
  filmList: state.film.filmsList,
  characterList: state.character.characterList,
  isCharacterListLoading: state.character.characterListLoading,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  onFilmListFetch: () => dispatch(filmService.fetchFilmList()),
  onCharacterListFetch: (characterIds: number[]) =>
    dispatch(characterService.fetchCharacterList(characterIds)),
  onCharacterStoreReset: () => dispatch(resetCharacterStore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmsList);
