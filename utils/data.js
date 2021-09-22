import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const contentDirectory = path.join(process.cwd(), '_content');

export function getAllStories() {
    const allStoryFiles = fs.readdirSync(contentDirectory);
    // console.log(_allStories);
    return allStoryFiles.map((storyFile) => {
        const slug = storyFile.replace('.mdx', '');
        const fileContent = fs.readFileSync(
            path.join(contentDirectory, storyFile),
            'utf-8'
        );
        const { data, content } = matter(fileContent);

        return {
            data,
            content,
            slug,
        };
    });
}

// const stories = [
//     {
//         picture: 'http://placehold.it/32x32',
//         name: 'Dekan Brown',
//         username: '@dekanbro',
//         header: '../public/images/story/@dekanbro.png',
//         excerpt: `With DAOs, you work closely with someone and you get to see how
// 			they conduct themselves... and maybe they're still
// 			anonymous, but you learn to trust them and they build a
// 			reputation with you`,
//     },
//     {
//         picture: 'http://placehold.it/32x32',
//         name: 'Mashura',
//         username: '@mashura',
//         header: '../public/images/story/@dekanbro.png',
//         excerpt: `Hey I'm Mashura`,
//     },
// ];

// export default stories;
