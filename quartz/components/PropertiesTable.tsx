import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export const PropertiesTable: QuartzComponentConstructor = () => {
  function Component(props: QuartzComponentProps) {
    const { fileData } = props
    const frontmatter = fileData.frontmatter
    
    // 排除一些不需要顯示的標準屬性
    const excludeKeys = ["title", "tags", "date", "lastmod", "draft", "layout", "description"]
    
    // 過濾要顯示的屬性
    const propertiesToShow = Object.entries(frontmatter || {}).filter(([key]) => 
      !excludeKeys.includes(key) && key !== "category"
    )
    
    // 如果沒有可顯示的屬性，不顯示組件
    if (propertiesToShow.length === 0) {
      return null
    }
    
    return (
      <div className="properties-container">
        <table className="properties-table">
          <tbody>
            {propertiesToShow.map(([key, value]) => (
              <tr key={key} className="property-row">
                <th className="property-key">{key}</th>
                <td className="property-value">
                  {renderPropertyValue(value)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  
  // 根據屬性值類型來渲染不同格式
  function renderPropertyValue(value: any) {
    if (value === null || value === undefined) {
      return "-"
    }
    
    if (Array.isArray(value)) {
      return value.map((item, i) => (
        <div key={i} className="array-item">
          {typeof item === 'object' ? JSON.stringify(item) : String(item)}
        </div>
      ))
    }
    
    if (typeof value === 'object') {
      return (
        <pre className="object-value">
          {JSON.stringify(value, null, 2)}
        </pre>
      )
    }
    
    return String(value)
  }

  return {
    Component,
  }
} 