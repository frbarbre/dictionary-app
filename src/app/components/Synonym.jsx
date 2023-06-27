import { nanoid } from "nanoid";

export default function Synonym(props) {
  return (
    <div className="list-none flex flex-wrap gap-3">
      <h3 className={`${props.length === 0 ? "hidden" : ""}`}>Synonyms</h3>
      {props.synonyms.map((synonym) => (
        <li
          className={`
          ${synonym.includes(" ") || synonym.includes("-")
              ? ""
              : "cursor-pointer hover:border-b-[2px] hover:border-purple-500"}
            text-purple-500 font-bold`}
          key={nanoid()}
          onClick={
            synonym.includes(" ") || synonym.includes("-")
              ? null
              : (e) => props.handleRedirect(synonym)
          }
        >
          {synonym}
        </li>
      ))}
    </div>
  );
}
