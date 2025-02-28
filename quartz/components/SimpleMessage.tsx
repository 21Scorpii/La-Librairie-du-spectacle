import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export const SimpleMessage: QuartzComponentConstructor = () => {
  function Component(props: QuartzComponentProps) {
    return (
      <div className="simple-message">
        <p>這是一個簡單的測試消息。</p>
      </div>
    )
  }

  return {
    Component,
  }
} 