# Custom Tokenizer

A web-based text tokenization tool that implements a custom character-position-frequency encoding scheme. This project demonstrates how tokenization works in natural language processing by creating a visual interface to encode and decode text using a custom algorithm.

## 🌐 Live Demo

**[Try the Custom Tokenizer →](https://tokenizer-zeta.vercel.app/)**

## 📸 Screenshots

### Main Tokenizer Interface
![Custom Tokenizer Main Interface](https://github.com/user-attachments/assets/fa37d0d5-b540-4a17-940a-ac240fa6bedf)
*The main interface showing real-time text tokenization with the custom encoding formula*

### Token Mapping Decoder
![Token Mapping Decoder](https://github.com/user-attachments/assets/fea40b6c-d3a6-4952-b869-5a6cecd4a656)
*Detailed view of token mappings showing character codes, positions, and frequencies*

## 🔧 How It Works

The tokenizer uses a unique encoding formula:
```
token = char_code-position-frequency
```

Where:
- **char_code**: The numerical code assigned to each character (based on a predefined charset)
- **position**: The zero-based position of the character in the input text
- **frequency**: How many times this character appears in the entire input text
- **Separator**: The `-` character is replaced with `9` in the final token output

### Example
For the input text "hello":
- 'h' at position 0 appears 1 time → encoded as a token like `479091`
- 'e' at position 1 appears 1 time → encoded as a token like `579191`
- And so on...

## 🚀 Features

- **Real-time Tokenization**: See tokens generated as you type
- **Visual Mapping**: View detailed breakdown of each token
- **Character Support**: Handles letters, numbers, special characters, and whitespace
- **Interactive Interface**: Clean, modern UI with responsive design
- **Token Count**: Live display of total token count

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: TailwindCSS with custom animations
- **UI Components**: Radix UI primitives
- **Build Tool**: Vite
- **Package Manager**: Bun

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd custom-tokenizer
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🎮 Usage

1. **Enter Text**: Type or paste any text into the input area
2. **View Tokens**: See the generated tokens in real-time in the output panel
3. **Explore Mappings**: Click "Get Input Mappings" to see detailed breakdown of each token
4. **Analyze**: Review character codes, positions, and frequencies for each character

## 📁 Project Structure

```
src/
├── components/
│   ├── text-to-tokens.tsx    # Main tokenizer interface
│   ├── mapping-decoder.tsx   # Token mapping visualization
│   └── ui/                   # Reusable UI components
├── utils/
│   └── tokenizer.ts          # Core tokenization logic
├── App.tsx                   # Main application component
└── main.tsx                  # Application entry point
```

## 🔍 Character Set

The tokenizer supports a comprehensive character set including:
- Uppercase letters (A-Z)
- Lowercase letters (a-z)
- Numbers (0-9)
- Special characters and punctuation
- Whitespace characters (space, newline, tab, carriage return)

## 🧪 Development

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run lint` - Run ESLint

### Building for Production

```bash
bun run build
```

The built files will be in the `dist/` directory.

## 🎯 Educational Purpose

This project is part of a GenAI bootcamp and serves as an educational tool to understand:
- How tokenization works in NLP and AI models
- Custom encoding schemes
- Character-level text processing
- Frontend development with modern React

## 🤝 Contributing

This is a learning project. Feel free to fork and experiment with different tokenization strategies!

## 📄 License

This project is for educational purposes. Feel free to use and modify as needed for learning.