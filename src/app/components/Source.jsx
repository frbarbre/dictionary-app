export default function Source(props) {
  return (
    <div className="flex gap-2 py-8 flex-col md:flex-row border-t-[1px] border-slate-200">
      <h4 className="border-b-[1px] border-slate-400 text-[14px] text-[#838383] w-max">
        Source
      </h4>
      <div className="flex gap-2 w-max items-center">
        <a
          className="md:ml-2 border-b-[1px] border-slate-400 text-[14px] hover:text-[#a733ff] transition-all"
          href={props.sourceUrls[0]}
          target="_blank"
        >
          {props.sourceUrls[0]}
        </a>
        <img src="/icon-new-window.svg" alt="new-window-icon" />
      </div>
    </div>
  );
}
