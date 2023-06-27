export default function Definition(props) {
  return (
    <ul className="pl-6 flex flex-col gap-4">
      <li className="list-disc marker:text-[#a733ff]">
        {props.define.definition}
      </li>
      <li
        className={`text-[#838383] ${
          props.define.example === undefined ? "hidden" : ""
        }`}
      >
        "{props.define.example}"
      </li>
    </ul>
  );
}
