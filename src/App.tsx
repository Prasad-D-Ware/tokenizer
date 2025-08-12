
import './App.css'
import { useState } from 'react'
import { CustomMappingTokenizer } from './utils/tokenizer';
import TokenizerInterface from './components/text-to-tokens';
import MappingDecoder from './components/mapping-decoder';

function App() {
  const [input, setInput] = useState('')

  const tokenizer = new CustomMappingTokenizer();
  const tokens = tokenizer.encode(input);

  const mappings = tokenizer.getMappings(input);
  // console.log(mappings)

  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-start text-white px-4 py-6 md:py-12 md:justify-center'>
      <div className='mb-6 md:mb-10 w-full max-w-5xl'>
        <div className='text-2xl md:text-4xl text-center font-bold font-afacad mb-4'>Custom Tokenization</div>
        <div className='text-lg md:text-3xl font-bold font-afacad text-center mb-2'>
          <div className='mb-2'>The formula for encoding is :</div>
          <div className='text-base md:text-2xl'>
            <span className='italic text-emerald-300'>char_code</span>-<span className='italic text-emerald-300'>position</span>-<span className='italic text-emerald-300'>frequency</span>
          </div>
        </div>
        <div className='text-sm md:text-xl font-afacad text-center text-gray-400'>* - is replaced with 9 in the final output</div>
      </div>
      <TokenizerInterface input={input} setInput={setInput} tokens={tokens} />
      {input.length > 0 && <MappingDecoder mappings={mappings} />}
    </div>
  )
}

export default App
