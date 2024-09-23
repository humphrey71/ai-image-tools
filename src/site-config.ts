export const siteConfig = {
    name: (t: (key: string) => string) => t('name'),
    description: (t: (key: string) => string) => t('description'),
    baseUrl: "https://typescript-website-template.vercel.app",
    ogImage: "https://nextjs.org/icons/next.svg",
    links: {
        twitter: "https://twitter.com/yourusername",
    }
}