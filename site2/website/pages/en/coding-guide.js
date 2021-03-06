const React = require('react');

const CompLibrary = require('../../core/CompLibrary');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const CWD = process.cwd();

const siteConfig = require(`${CWD}/siteConfig.js`);

const codingGuide = require('fs').readFileSync(`${CWD}/coding-guide.md`, 'utf8')

class Coding extends React.Component {
  render() {

    return (
      <div className="pageContainer">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Coding guide</h1>
              <hr />
            </header>
            <MarkdownBlock>
              {codingGuide}
            </MarkdownBlock>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Coding;
