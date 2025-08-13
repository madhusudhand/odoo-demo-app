# Feature Flag Demo

A comprehensive demonstration of different types of feature flags using [@darkfeature/sdk-react](https://github.com/darkfeature/sdk-react).

## Overview

This demo showcases three main types of feature flags with real-world examples:

- **Boolean Flags**: Simple on/off switches for features
- **String Flags**: Dynamic text content and themes
- **Number Flags**: Numeric values for configuration

## Features

- 🚀 **Boolean Flags**: Beta features, A/B testing, maintenance mode
- 📝 **String Flags**: Theme customization, language settings, personalized messages
- 🔢 **Number Flags**: Rate limiting, pagination limits, cache TTL
- 🎯 **Live Demos**: Interactive examples for each flag type
- 💻 **Code Examples**: Implementation snippets for developers
- 🎨 **Clean Design**: Minimalist black and white interface

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd odoo-demo
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
# Create .env.local file
NEXT_PUBLIC_DARKFEATURE_API_KEY=your_api_key_here
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Boolean Flags

Perfect for:

- Gradual feature rollouts
- A/B testing
- Emergency feature toggles
- Beta feature access control

### String Flags

Ideal for:

- Dynamic content
- Theme switching
- Localization
- Personalized messaging

### Number Flags

Great for:

- Configuration parameters
- Rate limiting
- Performance tuning
- User tier limits

## Technology Stack

- **Framework**: Next.js 15
- **Feature Flags**: @darkfeature/sdk-react
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Heroicons (via SVG)

## Project Structure

```
app/
├── components/
│   └── Navigation.tsx          # Main navigation component
├── boolean-flags/
│   └── page.tsx               # Boolean flags examples
├── string-flags/
│   └── page.tsx               # String flags examples
├── number-flags/
│   └── page.tsx               # Number flags examples
├── layout.tsx                  # Root layout with providers
├── page.tsx                    # Homepage
└── globals.css                 # Global styles
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).

## Learn More

- [@darkfeature/sdk-react Documentation](https://docs.darkfeature.com)
- [Feature Flag Best Practices](https://docs.darkfeature.com/best-practices)
- [Next.js Documentation](https://nextjs.org/docs)
