import { Textarea } from "./ui/textarea";

const TokenizerInterface = ({
  input,
  setInput,
  tokens,
}: {
  input: string;
  setInput: (input: string) => void;
  tokens: string[];
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-10 mx-auto w-full max-w-5xl">
      <div className="w-full lg:w-1/2 bg-gray-800 p-3 md:p-4 rounded-xl overflow-hidden">
        <div className="text-xl md:text-2xl lg:text-4xl font-bold font-afacad">Input:</div>
        <Textarea
          placeholder="Enter your text here"
          className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg min-h-20 md:min-h-24 max-h-48 md:max-h-56 resize-y overflow-auto"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="text-xs md:text-sm mt-3 md:mt-4 flex justify-between">
          <div className="rounded-md border border-gray-600/60 bg-gray-700/40 px-2 md:px-3 py-1 md:py-2">
            <span className="text-gray-400">Token count: </span>
            <span className="font-semibold text-emerald-300">{tokens.length}</span>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 min-h-72 md:min-h-80 lg:min-h-96 bg-gray-800 p-3 md:p-4 rounded-xl overflow-auto scrollbar-hide">
        <div className="text-xl md:text-2xl lg:text-4xl font-bold font-afacad">Input Text:</div>
        <div className="text-base md:text-xl lg:text-2xl font-afacad p-3 md:p-4 border border-gray-500 rounded-xl mt-3 md:mt-4 h-20 md:h-24 lg:h-28 overflow-auto whitespace-pre-wrap break-words">
          {input}
        </div>
        
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold font-afacad mt-3 md:mt-4">Tokens:</div>
        <div className="text-sm md:text-xl lg:text-2xl font-mono p-3 md:p-4 border border-gray-500 rounded-xl mt-3 md:mt-4 h-32 md:h-40 lg:h-48 overflow-auto whitespace-pre-wrap break-words leading-6 md:leading-7">
          {tokens.join(" ")}
        </div>
      </div>
    </div>
  );
};

export default TokenizerInterface;
