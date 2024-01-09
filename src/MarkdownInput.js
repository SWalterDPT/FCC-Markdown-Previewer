import React from 'react';
import { connect } from 'react-redux';
import { unified } from 'unified';
import * as remark from 'remark';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import DOMPurify from 'dompurify';
import { updateMarkdown } from './Reducers';

const MarkdownInput = ({ markdown, updateMarkdown }) => {
  const handleChange = (event) => {
    updateMarkdown(event.target.value);
}

    const placeholderText = `
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

    return (
        <div className="md container markdown-editor">
            <div className="row justify-content-center">
                <div className="col-md-8">
                  <h2 className="text-center">Markdown Previewer</h2>
                    <div className="card">
                        <div className="md card-header">
                            <i className="fas fa-edit"></i> Editor
                        </div>
                        <div className="card-body">
                        <textarea
                          id="editor"
                          className="form-control"
                          rows="10"
                          placeholder={placeholderText}
                          onChange={handleChange}
                          value={markdown}
                      ></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    markdown: state.markdown
})

export default connect(mapStateToProps, { updateMarkdown })(MarkdownInput);
