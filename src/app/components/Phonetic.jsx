export default function Phonetic(props) {
  return (
    <div className="flex justify-between items-center py-6">
      <div>
        <h1 className="text-[32px] md:text-[64px] font-medium">{props.word}</h1>
        {props.phonetics.length > 0 && (
          <h2 className="text-[#a733ff] text-[18px] md:text-[24px]">{props.phonetics.find((phonetic) => phonetic.text)?.text}</h2>
        )}
      </div>

      {!props.phonetics.find((phonetic) => phonetic.audio.length > 0)?.audio ==
        "" && (
        <div onClick={props.voicePlay} className="cursor-pointer">
          <img src="/icon-play.svg" alt="play-btn" />
        </div>
      )}
    </div>
  );
}
