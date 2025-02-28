import { QuartzComponentProps } from "./types"

export function CharacterGallery(props: QuartzComponentProps) {
  const { fileData } = props
  const characterId = fileData.slug?.split('/').pop() || ''

  return <div dangerouslySetInnerHTML={{
    __html: `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.core.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.theme.min.css">
    <script src="https://cdn.jsdelivr.net/npm/@glidejs/glide"></script>

    <div id="${characterId}-slider" class="glide character-slider">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <div class="image-container">
              <img src="/_Attach/Image/avatar/tachie/${characterId}-tachie.PNG" alt="${characterId}立繪" />
            </div>
          </li>
        </ul>
      </div>
    </div>

    <style>
    .character-slider {
      margin: 20px 0;
      width: 100%;
      max-width: 400px;
    }

    .image-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .glide__slide img {
      max-width: 100%;
      max-height: 500px;
      width: auto;
      height: auto;
      object-fit: contain;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    </style>

    <script>
    document.addEventListener('DOMContentLoaded', function () {
      new Glide('#${characterId}-slider', {
        type: 'carousel',
        perView: 1,
        focusAt: 'center',
        gap: 0,
        autoplay: 5000,
        hoverpause: true,
        animationDuration: 800
      }).mount();
    });
    </script>
    `
  }} />
} 