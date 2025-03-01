const fs = require('fs');
const path = require('path');

document.getElementById('fileInput').addEventListener('change', (event) => {
    const files = event.target.files;
    const fileList = document.getElementById('fileList');
    fileList.innerHTML = '';

    const characterData = [];

    Array.from(files).forEach(file => {
        const filePath = path.join(__dirname, 'uploads', file.name);
        const reader = new FileReader();

        reader.onload = function() {
            fs.writeFile(filePath, Buffer.from(new Uint8Array(this.result)), (err) => {
                if (err) {
                    console.error('File save failed:', err);
                } else {
                    console.log('File saved:', filePath);
                    const listItem = document.createElement('div');
                    listItem.textContent = `Saved: ${file.name}`;
                    fileList.appendChild(listItem);

                    // 更新characterData數組
                    characterData.push({
                        id: file.name.split('.')[0], // 假設文件名作為ID
                        name: file.name,
                        description: "自動生成的描述",
                        link: `uploads/${file.name}`,
                        images: [`uploads/${file.name}`]
                    });

                    // 更新gallery.md文件
                    updateGalleryMD(characterData);
                }
            });
        };

        reader.readAsArrayBuffer(file);
    });
});

// 更新gallery.md文件
function updateGalleryMD(characterData) {
    const galleryPath = path.join(__dirname, 'content', 'gallery.md');
    let content = '---\ntitle: 角色畫廊\n---\n\n';

    characterData.forEach(character => {
        content += `## ${character.name}\n`;
        content += `![${character.name}](${character.images[0]})\n\n`;
        content += `描述: ${character.description}\n\n`;
    });

    fs.writeFile(galleryPath, content, (err) => {
        if (err) {
            console.error('Failed to update gallery.md:', err);
        } else {
            console.log('gallery.md updated successfully.');
        }
    });
}