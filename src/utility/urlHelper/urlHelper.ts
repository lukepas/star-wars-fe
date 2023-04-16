export const charachterUrlParser = (url: string[]) => {
  const result = url.map((url) =>
    Number(
      url
        .split(
          process.env.API_CHARACTER_URL || "https://swapi.dev/api/people/"
        )[1]
        .split("/")[0]
    )
  );

  return result;
};
