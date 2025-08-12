import { Button } from "./ui/button";
import { Dialog, DialogTitle, DialogContent, DialogHeader, DialogTrigger, DialogDescription } from "./ui/dialog";

const MappingDecoder = ({ mappings }: { mappings: Record<string, string> }) => {
  const entries = Object.entries(mappings);

  function parseMapping(info: string): { char: string; code: number; pos: number } | null {
    const match = info.match(/char:\s*"([\s\S]*?)",\s*code:\s*(\d+),\s*pos:\s*(\d+)/);
    if (!match) return null;
    return { char: match[1], code: Number(match[2]), pos: Number(match[3]) };
  }

  function getDisplayChar(char: string): string {
    const specialChars: Record<string, string> = {
      '\n': '\\n',
      '\t': '\\t',
      '\r': '\\r',
      ' ': '␣' // visible space character
    };
    return specialChars[char] || char;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="mt-5">Get Input Mappings</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl bg-gray-900/90 border-gray-700">
        <DialogHeader>
          <DialogTitle>Input Mappings</DialogTitle>
          <DialogDescription>
            Showing {entries.length} token{entries.length === 1 ? "" : "s"} and their decoded details.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-2 max-h-[70vh] overflow-auto scrollbar-hide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {entries
              .map(([token, info]) => ({ token, info, parsed: parseMapping(info) }))
              .sort((a, b) => (a.parsed?.pos ?? Number.MAX_SAFE_INTEGER) - (b.parsed?.pos ?? Number.MAX_SAFE_INTEGER))
              .map(({ token, info, parsed }) => {
              return (
                <div
                  key={token}
                  className="group rounded-xl border border-gray-700 bg-gray-800/60 p-4 backdrop-blur-sm transition hover:border-emerald-400/40"
                >
                  <div className="text-[10px] uppercase tracking-wider text-gray-400">Token</div>
                  <div className="font-mono text-sm md:text-base text-emerald-300 break-all">{token}</div>
                  <div className="h-px my-3 bg-gray-700/60" />
                  {parsed ? (
                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center justify-center size-10 rounded-lg border border-emerald-500/40 bg-emerald-400/10 text-emerald-200 text-lg font-semibold shadow-inner">
                        {getDisplayChar(parsed.char)}
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center rounded-md border border-gray-600/60 bg-gray-700/40 px-2 py-1 text-xs text-gray-200">
                          code: <span className="ml-1 font-semibold text-emerald-300">{parsed.code}</span>
                        </span>
                        <span className="inline-flex items-center rounded-md border border-gray-600/60 bg-gray-700/40 px-2 py-1 text-xs text-gray-200">
                          pos: <span className="ml-1 font-semibold text-emerald-300">{parsed.pos}</span>
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-gray-400">Mapping</div>
                      <div className="font-mono text-xs text-gray-200 whitespace-pre-wrap break-words">{info}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MappingDecoder;