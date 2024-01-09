import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { unified } from 'unified';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import DOMPurify from 'dompurify';

const HTMLOutput = ({ markdown }) => {
  const processedHtml = unified()
      .use(remarkParse)
      .use(remarkHtml)
      .processSync(markdown)
      .toString();
   const sanitizedHtml = DOMPurify.sanitize(processedHtml);

   return (
    <div className="container mt-5 markdown-editor">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">
                        <i className="fas fa-eye"></i> Preview
                    </div>
                    <div className="card-body">
                        <div
                            id="preview"
                            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
                            className="html-output"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

const mapStateToProps = (state) => ({
  markdown: state.markdown
});

export default connect(mapStateToProps)(HTMLOutput);