# Contributing to Universal Editor

Thank you for your interest in contributing to **Universal Editor**! This document outlines how to help improve the project.

## Code of Conduct

Be respectful, inclusive, and constructive in all interactions. We value diverse perspectives and welcome contributors from all backgrounds.

## How to Contribute

### 1. **Report Issues**

Found a bug or have a feature request?

- Search [existing issues](https://github.com/universal-editor-203/universal-editor-203.github.io/issues) first to avoid duplicates
- Create a new issue with:
  - Clear title describing the problem
  - Steps to reproduce (for bugs)
  - Expected vs. actual behavior
  - Screenshots or error messages if applicable
  - Your browser/environment details

### 2. **Submit Pull Requests**

#### Fork & Clone
```bash
git clone https://github.com/your-username/universal-editor-203.github.io.git
cd universal-editor-203.github.io
```

#### Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
# or for bug fixes:
git checkout -b fix/bug-description
```

#### Make Changes

- Keep commits atomic and well-documented
- Follow existing code style and formatting
- Test changes locally before submitting
- Update documentation if needed

#### Push & Open PR
```bash
git push origin feature/your-feature-name
```

Then open a **Pull Request** on GitHub with:
- Clear description of changes
- Reference related issues (e.g., "Closes #123")
- Screenshot/demo for UI changes
- Testing notes

## Project Structure

```
├── editor.html           # Main editor interface
├── index.html           # Home page
├── changelog.html       # Version history
├── styles.css          # Design system & shared styles
├── favicon.svg         # Logo (timeline + play mark)
├── robots.txt          # Crawler rules (Wayback Machine)
├── sitemap.xml         # Page index for search engines
└── astro/              # Astro.js starter scaffold
```

## Key Technologies

- **Video Module**: FFmpeg.wasm for client-side processing
- **Design**: Black & Orange color scheme, responsive HTML/CSS
- **SEO/Archival**: robots.txt & sitemap.xml for Wayback Machine
- **Framework Support**: Astro scaffold included; Next.js companion at [universal-editor-next](https://github.com/universal-editor-203/universal-editor-next)

## Development Workflow

### Local Testing

1. Open `index.html` or `editor.html` in a modern browser
2. Use browser DevTools for debugging
3. Test all modules:
   - 🎬 Video editing
   - 🎮 ROM inspection
   - 📄 File editing
   - 🎵 Audio preview
   - 🦀 Rust templates

### Building with Astro (Optional)
```bash
cd astro
npm install
npm run dev      # Local dev server
npm run build    # Production build
```

## Contribution Guidelines

### ✅ Do's

- Write clear commit messages
- Test your changes in multiple browsers
- Maintain the black & orange design aesthetic
- Document new features
- Keep pull requests focused (one feature/fix per PR)
- Reference issues when applicable

### ❌ Don'ts

- Don't modify the license
- Don't claim affiliation with Adobe
- Don't introduce breaking changes without discussion
- Don't commit node_modules or build artifacts
- Don't bypass browser-native APIs unnecessarily

## Reporting Security Issues

**Do not open public issues for security vulnerabilities.** Instead:
1. Email [FoxPhantom203](https://github.com/FoxPhantom203) directly
2. Provide detailed reproduction steps
3. Allow time for a patch before disclosure

## Areas for Contribution

- **Bug fixes**: Squash reported bugs
- **Performance**: Optimize FFmpeg.wasm usage or media handling
- **New modules**: Expand editor capabilities (e.g., image editing)
- **UI/UX**: Improve interface or accessibility
- **Documentation**: Clarify code or setup instructions
- **Testing**: Add test coverage for modules
- **Archival**: Improve Wayback Machine integration

## Commit Message Conventions

Follow this format:

```
[type] brief description

optional longer explanation
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting, no logic change
- `refactor:` Code restructuring
- `perf:` Performance improvement
- `test:` Test additions/updates

**Example:**
```
feat: add video timeline scrubbing

Allows users to click the timeline to jump to a specific frame.
Improves video editing workflow for precision cuts.
```

## Questions?

- Check the [README.md](./README.md) for project overview
- Review [existing issues & discussions](https://github.com/universal-editor-203/universal-editor-203.github.io/discussions)
- Reach out to [FoxPhantom203](https://github.com/FoxPhantom203)

---

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](./LICENSE).

**Thank you for making Universal Editor better! 🦊🎨**
