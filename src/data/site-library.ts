export interface LibrarySite {
  name: string
  url: string
  category: string
}

export const siteLibrary: LibrarySite[] = [
  // Social
  { name: "Twitter / X", url: "https://x.com", category: "social" },
  { name: "Instagram", url: "https://instagram.com", category: "social" },
  { name: "Facebook", url: "https://facebook.com", category: "social" },
  { name: "LinkedIn", url: "https://linkedin.com", category: "social" },
  { name: "Reddit", url: "https://reddit.com", category: "social" },
  { name: "TikTok", url: "https://tiktok.com", category: "social" },
  { name: "Snapchat", url: "https://snapchat.com", category: "social" },
  { name: "Pinterest", url: "https://pinterest.com", category: "social" },
  { name: "Tumblr", url: "https://tumblr.com", category: "social" },
  { name: "Mastodon", url: "https://mastodon.social", category: "social" },

  // Communication
  { name: "Discord", url: "https://discord.com/app", category: "communication" },
  { name: "Slack", url: "https://app.slack.com", category: "communication" },
  { name: "WhatsApp", url: "https://web.whatsapp.com", category: "communication" },
  { name: "Telegram", url: "https://web.telegram.org", category: "communication" },
  { name: "Gmail", url: "https://mail.google.com", category: "communication" },
  { name: "Outlook", url: "https://outlook.live.com", category: "communication" },
  { name: "Zoom", url: "https://zoom.us", category: "communication" },
  { name: "Microsoft Teams", url: "https://teams.microsoft.com", category: "communication" },
  { name: "Google Meet", url: "https://meet.google.com", category: "communication" },

  // Entertainment
  { name: "YouTube", url: "https://youtube.com", category: "entertainment" },
  { name: "Netflix", url: "https://netflix.com", category: "entertainment" },
  { name: "Twitch", url: "https://twitch.tv", category: "entertainment" },
  { name: "Disney+", url: "https://disneyplus.com", category: "entertainment" },
  { name: "HBO Max", url: "https://max.com", category: "entertainment" },
  { name: "Hulu", url: "https://hulu.com", category: "entertainment" },
  { name: "Prime Video", url: "https://primevideo.com", category: "entertainment" },
  { name: "Spotify", url: "https://open.spotify.com", category: "entertainment" },
  { name: "Apple Music", url: "https://music.apple.com", category: "entertainment" },
  { name: "SoundCloud", url: "https://soundcloud.com", category: "entertainment" },

  // Gaming
  { name: "Steam", url: "https://store.steampowered.com", category: "gaming" },
  { name: "Epic Games", url: "https://store.epicgames.com", category: "gaming" },
  { name: "GOG", url: "https://gog.com", category: "gaming" },
  { name: "PokeRogue", url: "https://pokerogue.net", category: "gaming" },
  { name: "IGN", url: "https://ign.com", category: "gaming" },
  { name: "GameFAQs", url: "https://gamefaqs.gamespot.com", category: "gaming" },
  { name: "Humble Bundle", url: "https://humblebundle.com", category: "gaming" },
  { name: "itch.io", url: "https://itch.io", category: "gaming" },
  { name: "Metacritic", url: "https://metacritic.com", category: "gaming" },
  { name: "PSN", url: "https://playstation.com", category: "gaming" },
  { name: "Xbox", url: "https://xbox.com", category: "gaming" },

  // Productivity
  { name: "Notion", url: "https://notion.so", category: "productivity" },
  { name: "Trello", url: "https://trello.com", category: "productivity" },
  { name: "Asana", url: "https://asana.com", category: "productivity" },
  { name: "Monday.com", url: "https://monday.com", category: "productivity" },
  { name: "Todoist", url: "https://todoist.com", category: "productivity" },
  { name: "Google Drive", url: "https://drive.google.com", category: "productivity" },
  { name: "Google Docs", url: "https://docs.google.com", category: "productivity" },
  { name: "Google Sheets", url: "https://sheets.google.com", category: "productivity" },
  { name: "Google Calendar", url: "https://calendar.google.com", category: "productivity" },
  { name: "Dropbox", url: "https://dropbox.com", category: "productivity" },
  { name: "Airtable", url: "https://airtable.com", category: "productivity" },
  { name: "ClickUp", url: "https://clickup.com", category: "productivity" },
  { name: "Obsidian", url: "https://obsidian.md", category: "productivity" },

  // Coding
  { name: "GitHub", url: "https://github.com", category: "coding" },
  { name: "GitLab", url: "https://gitlab.com", category: "coding" },
  { name: "Stack Overflow", url: "https://stackoverflow.com", category: "coding" },
  { name: "MDN", url: "https://developer.mozilla.org", category: "coding" },
  { name: "React Docs", url: "https://react.dev", category: "coding" },
  { name: "TypeScript Docs", url: "https://typescriptlang.org/docs", category: "coding" },
  { name: "JavaScript Info", url: "https://javascript.info", category: "coding" },
  { name: "Kotlin Docs", url: "https://kotlinlang.org/docs", category: "coding" },
  { name: "Tailwind Docs", url: "https://tailwindcss.com/docs", category: "coding" },
  { name: "Big O Cheatsheet", url: "https://bigocheatsheet.com", category: "coding" },
  { name: "DevDocs", url: "https://devdocs.io", category: "coding" },
  { name: "Can I Use", url: "https://caniuse.com", category: "coding" },
  { name: "CodePen", url: "https://codepen.io", category: "coding" },
  { name: "npm", url: "https://npmjs.com", category: "coding" },
  { name: "Vercel", url: "https://vercel.com", category: "coding" },
  { name: "Netlify", url: "https://netlify.com", category: "coding" },
  { name: "Railway", url: "https://railway.app", category: "coding" },
  { name: "Supabase", url: "https://supabase.com", category: "coding" },
  { name: "Claude", url: "https://claude.ai", category: "coding" },
  { name: "ChatGPT", url: "https://chatgpt.com", category: "coding" },

  // News
  { name: "BBC News", url: "https://bbc.com/news", category: "news" },
  { name: "CNN", url: "https://cnn.com", category: "news" },
  { name: "The Guardian", url: "https://theguardian.com", category: "news" },
  { name: "Hacker News", url: "https://news.ycombinator.com", category: "news" },
  { name: "Reuters", url: "https://reuters.com", category: "news" },
  { name: "Al Jazeera", url: "https://aljazeera.com", category: "news" },

  // Finance
  { name: "Yahoo Finance", url: "https://finance.yahoo.com", category: "finance" },
  { name: "CoinGecko", url: "https://coingecko.com", category: "finance" },
  { name: "Binance", url: "https://binance.com", category: "finance" },
  { name: "PayPal", url: "https://paypal.com", category: "finance" },
  { name: "Stripe", url: "https://stripe.com", category: "finance" },
  { name: "Wise", url: "https://wise.com", category: "finance" },

  // Design
  { name: "Figma", url: "https://figma.com", category: "design" },
  { name: "Dribbble", url: "https://dribbble.com", category: "design" },
  { name: "Behance", url: "https://behance.net", category: "design" },
  { name: "Coolors", url: "https://coolors.co", category: "design" },
  { name: "FontAwesome", url: "https://fontawesome.com", category: "design" },
  { name: "Google Fonts", url: "https://fonts.google.com", category: "design" },
  { name: "Unsplash", url: "https://unsplash.com", category: "design" },
  { name: "Canva", url: "https://canva.com", category: "design" },
  { name: "Adobe", url: "https://adobe.com", category: "design" },

  // Shopping
  { name: "Amazon", url: "https://amazon.com", category: "shopping" },
  { name: "eBay", url: "https://ebay.com", category: "shopping" },
  { name: "Etsy", url: "https://etsy.com", category: "shopping" },
  { name: "AliExpress", url: "https://aliexpress.com", category: "shopping" },
]