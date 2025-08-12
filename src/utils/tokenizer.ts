
const CHARSET = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0","1","2","3","4","5","6","7","8","9",
    " ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", 
    ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~",
    "\n", "\t", "\r"
  ];
  
  export class CustomMappingTokenizer {
    private charToCode: Map<string, number>;
    private codeToChar: Map<number, string>;
  
    constructor() {
      this.charToCode = new Map();
      this.codeToChar = new Map();
  
      CHARSET.forEach((char, index) => {
        const code = index + 1; // start from 1
        this.charToCode.set(char, code);
        this.codeToChar.set(code, char);
      });
    }
  
    encode(text: string): string[] {
      const chars = text.split("");
      const freqMap: Record<string, number> = {};
  
      for (const ch of chars) {
        freqMap[ch] = (freqMap[ch] || 0) + 1;
      }
  
      return chars.map((ch, pos) => {
        const code = this.charToCode.get(ch);
        if (!code) throw new Error(`Character "${ch}" not in mapping`);
        const freq = freqMap[ch];
        return `${code}9${pos}9${freq}`;
      });
    }
  
    decode(tokens: string[]): string {
      const decodedArray: { pos: number; char: string }[] = [];
  
      for (const token of tokens) {
        const [codeStr, posStr] = token.split("9");
        const code = parseInt(codeStr, 10);
        const pos = parseInt(posStr, 10);
        const char = this.codeToChar.get(code);
        if (!char) throw new Error(`Code "${code}" not in mapping`);
        decodedArray.push({ pos, char });
      }
  
      decodedArray.sort((a, b) => a.pos - b.pos);
      return decodedArray.map(item => item.char).join("");
    }

    getMappings(text: string): Record<string, string> {
      const mappings: Record<string, string> = {};
      const tokens = this.encode(text);
      for (let i = 0; i < tokens.length; i++) {
        const ch = text[i];
        const code = this.charToCode.get(ch);
        mappings[tokens[i]] = `char: "${ch}", code: ${code}, pos: ${i}`;
      }
      return mappings;
    }
  }