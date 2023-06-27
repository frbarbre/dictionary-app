import { nanoid } from "nanoid";

export default function Antonym(props) {
  return (
    <div className="list-none flex flex-wrap gap-3">
      <h3 className={`${props.length === 0 ? "hidden" : ""}`}>Antonyms</h3>
      {props.antonyms.map((antonym) => (
        <li
        className={`${
            antonym.includes(" ") || antonym.includes("-")
              ? ""
              : "cursor-pointer hover:underline transition-all"
          } text-purple-500 font-bold`}
          key={nanoid()}
          onClick={
            antonym.includes(" ") || antonym.includes("-")
              ? null
              : (e) => props.handleRedirect(antonym)
          }
        >
          {antonym}
        </li>
      ))}
    </div>
  );
}
