import { QuartzComponentProps } from "./types"
import { FullSlug } from "../util/path"
import { resolveRelative } from "../util/path"
import { jsx } from "preact/jsx-runtime"
import { obscure } from "./styles"
import { Options, FileNode } from "./ExplorerNode"

// 此组件基于原始 Explorer 组件修改
export function CustomExplorer({
  tree,
  fileData,
  allFiles,
  folderDefaultState = "open",
  folderClickBehavior = "link",
  useSavedState = true,
  sortFn,
  filterFn,
  mapFn,
  order = ["sort", "filter", "map"],
  ...props
}: QuartzComponentProps & Options) {
  // 过滤文件
  const files = allFiles.filter(
    (file) => file && file.slug && !file.slug.includes("tags/") && file.slug !== "index" && !file.frontmatter?.private
  )

  function Node({ node, slug }: { node: FileNode; slug: FullSlug }) {
    const currentFile = files.find((file) => file.slug === slug)
    const icon = currentFile?.frontmatter?.icon || "" // 获取 frontmatter 中的 icon

    return (
      <li>
        {node.file ? (
          <a href={resolveRelative(props.fileData.slug!, slug)} class="filename">
            {icon && <span class="file-icon">{icon}</span>} {/* 显示图标 */}
            <span>{node.displayName}</span>
          </a>
        ) : (
          <div class="folder">
            {/* 可以为文件夹也添加图标逻辑 */}
            <span class="folder-name">{node.displayName}</span>
          </div>
        )}
        {node.children.length > 0 && (
          <ul>
            {node.children.map((child) => (
              <Node node={child} slug={child.slug!} />
            ))}
          </ul>
        )}
      </li>
    )
  }

  return (
    <nav class="explorer">
      <ul class="overflow">
        {tree.children.map((child) => (
          <Node node={child} slug={child.slug!} />
        ))}
      </ul>
      <div class={obscure}>
        <hr />
        <p>
          Powered by <a href="https://quartz.jzhao.xyz/">Quartz</a>
        </p>
      </div>
    </nav>
  )
}
