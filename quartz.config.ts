import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: " La Librairie du spectacle",
    pageTitleSuffix: "La Librairie du spectacle",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      // 原始配置使用 "plausible"，但在本地開發環境中會顯示 "Ignoring Event: localhost" 錯誤
      // 如果不需要分析功能，可以將下行注釋掉
      provider: "plausible",
    },
    locale: "zh-TW",
    baseUrl: "https://llds.netlify.app",
    ignorePatterns: [
      "private", 
      "templates", 
      ".obsidian", 
      "_*",                // 匹配根目录下以下划线开头的文件
      "**/_*",             // 匹配任意深度目录下以下划线开头的文件
      "**/人物設定(DB)/_*",  // 特别针对这个目录的匹配
    ],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "Noto Sans Traditional Chinese",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#000000",
          secondary: "#002fa7",
          tertiary: "#84a59d",
          highlight: "rgba(0, 47, 167, 0.15)",
          textHighlight: "#002fa788",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#002fa7",
          tertiary: "#84a59d",
          highlight: "rgba(0, 47, 167, 0.15)",
          textHighlight: "#002fa788",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
