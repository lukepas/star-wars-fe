import React from "react";
import { Character } from "../../domain/character";
import styles from "./CharacterCard.module.scss";

type Props = {
  character: Character;
};

const CharacterCard = ({ character }: Props) => {
  return (
    <section className={styles.cardContainer}>
      <p className={styles.cardItem}>
        <span>Name: </span> {character.name}
      </p>
      <p className={styles.cardItem}>
        <span>Birth year: </span> {character.birth_year}
      </p>
      <p className={styles.cardItem}>
        <span>Gender: </span>
        {character.gender}
      </p>
      <p className={styles.cardItem}>
        <span>Mass: </span> {character.mass} Kg.
      </p>
    </section>
  );
};

export default CharacterCard;
