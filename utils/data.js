import fs from "fs";
import matter from "gray-matter";
import path from "path";

const contentDirectory = path.join(process.cwd(), "_content");
const subcontentDirectory = path.join(process.cwd(), "_subcontent");

export function getAllStories() {
  const allStoryFiles = fs.readdirSync(contentDirectory);

  return allStoryFiles.map((storyFile) => {
    const slug = storyFile.replace(".mdx", "");
    const fileContent = fs.readFileSync(
      path.join(contentDirectory, storyFile),
      "utf-8"
    );
    const { data, content } = matter(fileContent);

    return {
      data,
      content,
      slug,
    };
  });
}
