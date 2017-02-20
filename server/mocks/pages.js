/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var pagesRouter = express.Router();
  var pages = [
    {
      id: 1,
      title: 'Home',
      content: 'This is home page',
      author: 'xyz',
      createdon: '2017-08-02',
      active: 'Yes',
    },
    {
      id: 2,
      title: 'About',
      content: 'This is about page',
      author: 'xyz',
      createdon: '2017-08-02',
      active: 'Yes',
    },
    {
      id: 3,
      title: 'Contact',
      content: 'This is contact page',
      author: 'xyz',
      createdon: '2017-08-02',
      active: 'Yes',
    },

  ];

  
  pagesRouter.get('/', function(req, res) {
    var data = [];
    pages.forEach(function(item){
      data.push({
        type: 'pages',
        id: item.id.toString(),
        attributes:{
          title: item.title,
          content: item.content,
          author: item.author,
          createdon: item.createdon,
          active: item.active
        }
      });
      
    });

    res.set('Content_Type','application/vnd.api+json');
    res.send({
      data: data
    });
  });

  pagesRouter.post('/', function(req, res) {
    var newPage = req.body.pages;
    var newId = pages.length + 1;
    newPage.id = newId;
    pages.push(newPage);
    res.send({
      page: newPage
    });
  });

  pagesRouter.get('/:id', function(req, res) {
    res.send({
      'pages': {
        id: req.params.id
      }
    });
  });

  pagesRouter.put('/:id', function(req, res) {
    res.send({
      'pages': {
        id: req.params.id
      }
    });
  });

  pagesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/pages', require('body-parser').json());
  app.use('/api/pages', pagesRouter);
};
