import { nanoid } from "nanoid";
import Definition from "./Definition";
import Synonym from "./Synonym";
import Antonym from "./Antonym";

export default function Meaning(props) {
  return (
    <div className="mb-8">
      <div className="flex gap-12 w-full items-center">
        <h2 className="font-bold text-[18px] md:text-[24px]">
          {props.meaning.partOfSpeech}
        </h2>
        <hr className="h-[1px] w-full bg-slate-200 translate-y-[2px]" />
      </div>
      <h3 className="text-[16px] md:text-[20px] text-[#838383] my-4">
        Meaning
      </h3>
      <article className="flex flex-col gap-4">
        {props.meaning.definitions.map((define) => (
          <Definition define={define} key={nanoid()} />
        ))}
        <Synonym
          length={props.meaning.synonyms.length}
          synonyms={props.meaning.synonyms}
          handleRedirect={props.handleRedirect}
        />
        <Antonym
          length={props.meaning.antonyms.length}
          antonyms={props.meaning.antonyms}
          handleRedirect={props.handleRedirect}
        />
      </article>
    </div>
  );
}
