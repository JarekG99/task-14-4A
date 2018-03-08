
var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju.',
    poster: 'photos/harrypotter.jpeg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o lwie - królu sawanny.',
    poster: 'photos/king_lion.jpeg'
  },
  {
    id: 3,
    title: 'Czterysta batów',
    desc: 'Moving story of a young boy who, left without attention, delves into a life of petty crime.',
    poster: 'photos/czterysta_batow.jpg'
  },
];

var Movie = React.createClass({
  propTypes: {
    key: React.Proptypes.string.isRequired,
  },
  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.movie.id))
    )
  }
})

var MovieTitle = React.createClass({
  propTypes: {
    title: React.Proptypes.string.isRequired,
  },
  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h1', {}, this.props.movie.title))
    )
  }
})

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.Proptypes.string.isRequired,
  },
  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h3', {}, this.props.movie.desc))
    )
  }
})

var MoviePoster = React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('img', {src: this.props.movie.src})
      )
    )
  },
});


var movie = React.createElement(Movie, {key: movie.id, title: movie.title, desc: movie.desc, src: movie.poster });
var title = React.createElement(MovieTitle, {key: movie.id, title: movie.title, desc: movie.desc, src: movie.poster });
var desc = React.createElement(MovieDescription, {key: movie.id, title: movie.title, desc: movie.desc, src: movie.poster });
var poster = React.createElement(MoviePoster, {key: movie.id, title: movie.title, desc: movie.desc, src: movie.poster });

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.poster})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));
