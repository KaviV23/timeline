# Timeline: Kavi's Personal Blog Website

## 🚀 Quick Startup

Run the following commands to setup the local development server

1. Install dependencies:

    ```
    pnpm install
    ```

2. Run dev server:

    ```
    pnpm dev
    ```

3. Browse at http://localhost:4321/.

## 📝 Adding a New Blog Post

Posts are commited into this project as **markdown files**. Add them to 
`src/content/posts/<your-markdown-file.md>`. 

Any **supporting files such as images** used in your post can be saved under a 
corresponding folder name such as `src/content/posts/<your-markdown-file-name>/`.

```text
\
├── src
│   ├── content/posts
│   │   ├── my-blog-post/      # supporting files (e.g. images etc.)
│   │   │   ├── image-1.png
│   │   │   └── image-2.webp
│   │   └── my-blog-post.md    # main post markdown file
...
```

Your markdown posts will need a few metadata stored in the frontmatter file itself.
For example:

**my-blog-post.md**

```plaintext
---
title: 'My First Blog Post'
pubDate: 2022-07-01
description: 'This is the first post of my new Astro blog.'
author: 'Astro Learner'
image: '/src/content/posts/sample-1/rose.webp'
imageAlt: 'The Astro logo on a dark background with a pink glow.'
tags: ["astro", "blogging", "learning in public"]
---

# Your post content goes here
```

## 💻 All Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm dev`                | Starts local dev server at `localhost:4321`      |
| `pnpm build`              | Build your production site to `./dist/`          |
| `pnpm preview`            | Preview your build locally, before deploying     |
| `pnpm astro ...`          | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help`    | Get help using the Astro CLI                     |

## 📦 Deployments

This blog website isn't deployed at the moment. GitHub Actions workflows will be 
used soon to deploy this website to GitHub pages. Stay tuned!
