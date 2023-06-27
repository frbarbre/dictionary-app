"use client";

import { useState, useEffect, use } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import SearchInput from "./components/SearchInput";
import Error from "./components/Error";
import Loading from "./components/Loading";
import Source from "./components/Source";
import Phonetic from "./components/Phonetic";
import Meaning from "./components/Meaning";
import { motion } from "framer-motion";

export default function Home({ darkMode }) {
  const [word, setWord] = useState("");
  const [searchValue, setSearchValue] = useState("Keyboard");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [audioClip, setAudioClip] = useState()

  async function fetchData(value) {
    setLoaded(false);
    setLoading(true);
    setError(false);
    setTimeout(() => {
      setError(true);
    }, 1000);

    const { data } = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`
    );
    setWord(data[0]);

    setError(false);
    setLoaded(true);
    setLoading(false);
  }

  useEffect(() => {
    fetchData(searchValue);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue === "") {
      console.log("cant contain nothing");
    } else if (searchValue.includes(" ") || searchValue.includes("-")) {
      console.log("one word only");
    } else {
      fetchData(searchValue);
      console.log(word);
    }
  };

  function handleRedirect(word) {
    setSearchValue(word);
    fetchData(word);
  }

  let audioSrc = "";

  if (loaded) {
    audioSrc = word.phonetics.find(
      (phonetic) => phonetic.audio.length > 0
    )?.audio;
  }

  useEffect(() => {
    setAudioClip(new Audio(audioSrc))
  },[loaded])

  const voicePlay = () => {
    audioClip.play();
  };

  return (
    <main className="z-[-2] relative">
      <SearchInput
        darkMode={darkMode}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSubmit={handleSubmit}
      />
      {loaded && loading === false ? (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 0.2, duration: 0.5}}
        >
          <Phonetic
            word={word.word}
            phonetics={word.phonetics}
            voicePlay={voicePlay}
          />
          {word.meanings.map((meaning) => (
            <Meaning
              key={nanoid()}
              meaning={meaning}
              handleRedirect={handleRedirect}
            />
          ))}

          <Source sourceUrls={word.sourceUrls} />
        </motion.section>
      ) : (
        <div>{error ? <Error searchValue={searchValue} /> : <Loading />}</div>
      )}
    </main>
  );
}
