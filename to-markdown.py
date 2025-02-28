import os
import re
import glob

# 指定包含Markdown文件的目录
directory = "content/setsuna寫的(DB)"

# 获取目录中的所有md文件
md_files = glob.glob(os.path.join(directory, "*.md"))

for file_path in md_files:
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # 使用正则表达式匹配front matter中的Character属性
    pattern = r"---\s*\n(.*?)Character:\s*\n(.*?)---"
    match = re.search(pattern, content, re.DOTALL)
    
    if match:
        # 提取Character部分
        character_section = match.group(2)
        character_links = re.findall(r'\[\[(.*?)\]\]', character_section)
        
        # 创建要添加到正文的内容
        characters_text = "\n\n**相关角色**：" + ", ".join([f"[[{char}]]" for char in character_links])
        
        # 删除front matter中的Character部分，保留其他属性
        front_matter = match.group(1)
        new_front_matter = f"---\n{front_matter}---\n"
        
        # 替换原始内容
        new_content = re.sub(pattern, new_front_matter, content, flags=re.DOTALL)
        
        # 在正文开头添加角色信息
        first_paragraph_pos = new_content.find("\n\n") + 2
        new_content = new_content[:first_paragraph_pos] + characters_text + new_content[first_paragraph_pos:]
        
        # 写回文件
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(new_content)
        
        print(f"处理完成: {file_path}")