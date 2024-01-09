import { unified } from 'unified';
import * as remark from 'remark';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';

const initialMarkdownState = `
# Heading 1

## Subheading

Here is a [link](https://www.example.com).

Inline code: \`console.log('Hello, world!');\`

\`\`\`
// Code block
function greeting() {
  return 'Hello, world!';
}
\`\`\`

- List item 1
- List item 2

> Blockquote: This is a blockquote.

![Image](https://www.example.com/image.jpg)

**Bold text**
`;

const processor = unified().use(remarkParse).use(remark).use(remarkHtml);

// Process the initial Markdown to HTML
const initialHTMLState = processor.processSync(initialMarkdownState).toString();

export const markdownReducer = (state = initialMarkdownState, action) => {
    switch (action.type) {
        case 'UPDATE_MARKDOWN':
            return action.payload;
        default:
            return state;
    }
};

export const htmlReducer = (state = initialHTMLState, action) => {
    switch (action.type) {
      case 'UPDATE_MARKDOWN':
        return processor.processSync(action.payload).toString();
      default:
        return state;
    }
};

export const updateMarkdown = (markdown) => {
  return {
      type: 'UPDATE_MARKDOWN',
      payload: markdown,
  };
};
