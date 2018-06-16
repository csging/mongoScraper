import React from 'react';
import Article from './Article';

class Home extends Component {
    render() {
    return (
      <div>
        <div>
        <nav className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
                <h2>Hacker News Scraper</h2>
                <button type="button" className="btn btn-primary" id="scrapeBtn"><a href="/scrape">News</a></button>
                <button type="button" className="btn btn-primary" id="savedBtn"><a href="/saved">Saved Articles</a></button>
            </div>
        </nav>
        <Article />
      </div>
      )}};
export default Home;