// Handle routing
const connect = require('../utils/sqlConnect');

exports.get_all_movies = (req, res)=> {
  console.log('hit movies');

  connect.getConnection((err, connection)=>{
    if(err)
    {
      return console.log(err.message);
    }
let query = "SELECT * FROM movies m, tbl_genre g WHERE g.genre_id = 1 AND img_user = 'I' ";

connect.query(query, (err, rows)=>{
  connection.release();

  if(err)
  {
    console.log(err.message);
  }
  console.log(rows);

  res.render('home', {
    defaultMovie : rows[Math.floor(Math.random() * rows.length)],
    data : JSON.stringify(rows),
    mainpage : true,
    videopage : false
  });
})
  })
};

exports.get_all_moviesA = (req, res)=> {
  console.log('hit movies');

  connect.getConnection((err, connection)=>{
    if(err)
    {
      return console.log(err.message);
    }
let query = "SELECT * FROM movies m, tbl_genre g WHERE g.genre_id = 1 AND img_user = 'A'";

connect.query(query, (err, rows)=>{
  connection.release();

  if(err)
  {
    console.log(err.message);
  }
  console.log(rows);

  res.render('adults', {
    defaultMovie : rows[Math.floor(Math.random() * rows.length)],
    data : JSON.stringify(rows),
    mainpage : true,
    videopage : false
  });
})
  })
};

exports.get_all_moviesK = (req, res)=> {
  console.log('hit movies');

  connect.getConnection((err, connection)=>{
    if(err)
    {
      return console.log(err.message);
    }
let query = "SELECT * FROM movies m, tbl_genre g WHERE g.genre_id = 1 AND img_user = 'K'";

connect.query(query, (err, rows)=>{
  connection.release();

  if(err)
  {
    console.log(err.message);
  }
  console.log(rows);

  res.render('kids', {
    defaultMovie : rows[Math.floor(Math.random() * rows.length)],
    data : JSON.stringify(rows),
    mainpage : true,
    videopage : false
  });
})
  })
};

exports.get_all_moviesKA = (req, res)=> {
  console.log('hit movies');

  connect.getConnection((err, connection)=>{
    if(err)
    {
      return console.log(err.message);
    }
let query = "SELECT * FROM movies m, tbl_genre g WHERE g.genre_id = 1 AND img_user = 'KA'";

connect.query(query, (err, rows)=>{
  connection.release();

  if(err)
  {
    console.log(err.message);
  }
  console.log(rows);

  res.render('kidsadv', {
    defaultMovie : rows[Math.floor(Math.random() * rows.length)],
    data : JSON.stringify(rows),
    mainpage : true,
    videopage : false
  });
})
  })
};


exports.get_one_movie = (req, res) =>{
  console.log("one movie");

  connect.getConnection((err, connection)=>{
    if(err)
    {
      return console.log(err.message);
    }

    let query = `SELECT * FROM tbl_comments WHERE comments_movie ="${req.params.id}"`;

    connect.query(query, (err, rows)=>{
      connection.release();

      if(err)
      {
        console.log(err.message);
      }
      console.log(rows);

      res.render('movie', {
             movie : req.params.id,
             trailer : req.params.vidsrc,
url: ` http://localhost:3000/${req.params.id}/${req.params.vidsrc} `,
             data : JSON.stringify(rows),
             mainpage : false,
             videopage : true
           });
         })
  })
};

exports.post_new_movie = (req, res) => {
console.log('hit the api');

connect.getConnection((err, connection) => {
if(err) {
return console.log(err.message);
}

let query = `INSERT INTO tbl_comments (comments_id, comments_auth, comments_copy, comments_date, comments_movie, comments_rating) VALUES (NULL, NULL, "${req.body.comment}", CURRENT_TIMESTAMP, "${req.body.id}", "${req.body.stars}");`;

connect.query(query, (err, rows) => {
connection.release(); //let somebodu else use this connection

if(err){
return console.log(err.message);
}

res.json(rows);
})
})
};
