# typescript-website-template
clone this template and start coding
```bash
mkdir my-website
cd my-website
git init
git remote add template https://github.com/humphrey71/typescript-website-template.git
git fetch template

git branch -m template main
git branch dev
git checkout dev

git remote add origin https://github.com/humphrey71/my-website.git
git push -u origin main
git push -u origin dev
```

install dependencies
```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




1. in the header sections, the logo on the left is a file icon，the buttons on the right are user avatar, language switcher and theme switcher
2. in the hero section, there is a title, a description on the left 2/3 of the screen, and on the right 1/3 of the screen are function buttons
   1. the 2 parts are in a row, same height
   2. the buttons split into 2 parts, basic tools and ai tools
      1. basic tools: Crop & Resize \ Rotate & Flip \ Merge Images \ Split Images \ Conversion & Compression \ Text & Stickers \Brightness, Contrast & Saturation
      2. ai tools: Auto Retouch \ Background Removal \ Object Cropping \ Style Transfer \ Image Upscaling \  Image Colorization
3. in the features section, there are 3 cards, each card has a title, a description and a big icon representing the feature
4. in the faq section, there is a question, an answer and an expand icon
5. in the footer section, there is a copyright text, and some social media links
6. the whole page is responsive, and adapts to different screen sizes
