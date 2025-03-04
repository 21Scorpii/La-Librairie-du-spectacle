import { PageLayout, SharedLayout } from "./quartz/cfg"
import { 
  ArticleTitle,
  Content,
  TagContent,
  FolderContent,
  Darkmode,
  Head,
  PageTitle,
  ContentMeta,
  Spacer,
  TableOfContents,
  Explorer,
  TagList,
  Graph,
  Backlinks,
  Search,
  Footer,
  DesktopOnly,
  MobileOnly,
  RecentNotes,
  NotFound,
  Breadcrumbs,
  Comments,
  GlossaryCard,
  CharacterCard
} from "./quartz/components"
import ImageGallery from "./quartz/components/ImageGallery"
import PortraitSidebar from "./quartz/components/PortraitSidebar"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Head(),
  header: [],
  afterBody: [],
  footer: Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Breadcrumbs(),
    ArticleTitle(),
    ContentMeta(),
    TagList(),
    ImageGallery,
    CharacterCard,
    GlossaryCard,
  ],
  left: [
    PageTitle(),
    MobileOnly(Spacer()),
    Search(),
    Darkmode(),
    Explorer({}),
  ],
  right: [
    Graph(),
    DesktopOnly(TableOfContents()),
    Backlinks(),
    PortraitSidebar(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Breadcrumbs(), ArticleTitle(), ContentMeta()],
  left: [
    PageTitle(),
    MobileOnly(Spacer()),
    Search(),
    Darkmode(),
    Explorer({}),
  ],
  right: [],
}
