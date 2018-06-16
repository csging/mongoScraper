import react, {Component} from 'react';
app.get("/", function(req, res){ 
    request('https://news.ycombinator.com', function (error, response, html){
      if(!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var results = [];
        $('span.comhead').each(function(i, element){
          var a = $(this).prev();
          results.title = a.text();
          results.url = a.attr('href');
          var subtext = a.parent().parent().next().children('.subtext').children();
          results.time = $(subtext).eq(2).text();
          results.author = $(subtext).eq(1).text();
          var metadata = {
            title: results.title,
            url: results.url,
            time: "posted: " + results.time,
            author: "by " + results.author
          }
          db.Article.create(results)
            .then(function(dbArticle){
              // console.log(dbArticle);/
            })
            .catch(function(err){
              return res.json(err);
            });
        // console.log(metadata);
        });
        console.log("SCRAPE COMPLETE" + results);
      }
    });
    });
class Results extends Component {
    render(

        
    )
    return()

}