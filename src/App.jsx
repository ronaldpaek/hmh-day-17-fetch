import { Section } from "./components";

const App = () => {
  return (
    <main>
      <h1>Can you catch them all?</h1>
      <Section
        heading="Dogs"
        apiEndpoint="https://dog.ceo/api/breeds/image/random/10"
        text="Here's an API to fetch 10 random dog images"
      >
        {(data) => (
          <ul className="dog-list">
            {data.message.map((src, i) => {
              return (
                <li className="dog-item" key={i}>
                  <img className="dog-img" src={src} alt="" />
                </li>
              );
            })}
          </ul>
        )}
      </Section>
      <Section
        heading="Memes"
        apiEndpoint="https://api.imgflip.com/get_memes"
        text="Here's an API to fetch random memes"
      >
        {(data) => (
          <ul className="meme-list">
            {data.data.memes.map((meme, i) => {
              return (
                <li className="meme-item" key={i}>
                  <img
                    className="meme-img"
                    src={meme.url}
                    alt={meme.name}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </Section>
      {/* <Section
        heading="Pokemon"
        apiEndpoint="https://pokeapi.co/api/v2/pokemon/ditto"
        text="Here's a pokemon api"
      /> */}
      {/* <Section
        heading="Beer"
        apiEndpoint="https://random-data-api.com/api/v2/beers?size=20"
        text="Here's an API to fetch 20 beers"
      /> */}
    </main>
  );
};

export default App;
