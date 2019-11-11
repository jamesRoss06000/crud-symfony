// create variable to link to table's class name
const articles = document.getElementById('articles')

if (articles) {
  // on click of a delete button
  articles.addEventListener('click', (e) => {
    if (e.target.className === 'btn btn-danger delete-article') {
      if (confirm('Confirm delete?')) {
        // if confirmed yes, get button id
        const id = e.target.getAttribute('data-id');
        // fetch row using id, use method to delete then reload page
        // use backticks to allow a template string
        // two params, url + method object
        fetch(`/article/delete/${id}`, {
          method: 'DELETE'
        }).then(res => window.location.reload());
      }
    }
  });
}