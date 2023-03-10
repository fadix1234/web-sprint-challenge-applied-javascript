import axios from 'axios';
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const newsCard = document.createElement('div');
  const newsHeadline = document.createElement('div');
  const newsAuthor = document.createElement('div');
  const newsContainer = document.createElement('div');
  const newsAuthorPhoto = document.createElement('img');
  const newsAuthorName = document.createElement('span');

  newsCard.classList.add('card');
  newsHeadline.classList.add('headline');
  newsAuthor.classList.add('author');
  newsContainer.classList.add('img-container');

  newsAuthorPhoto.src = article.authorPhoto;
  newsHeadline.textContent = article.headline;
  newsAuthorName.textContent = article.authorName;


  newsCard.appendChild(newsHeadline);
  newsCard.appendChild(newsAuthor);
  newsAuthor.appendChild(newsContainer);
  newsContainer.appendChild(newsAuthorPhoto);
  newsAuthor.appendChild(newsAuthorName);

  return newsCard;
  
}

//console.log(Card(newsAuthorPhoto));


//const articleObject = {headline:"Hi", authorPhoto:"empty", authorName:"Jasmin"}

// console.log(Card(articleObject));




const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  
  axios.get(`http://localhost:5001/api/articles`).then(response => {
    response.data.articles.bootstrap.forEach (article => {
     const newsCard = Card(article);
     document.querySelector(selector).appendChild(newsCard);
   });

   axios.get(`http://localhost:5001/api/articles`).then(response => {
    response.data.articles.javascript.forEach (article => {
     const newsCard = Card(article);
     document.querySelector(selector).appendChild(newsCard);
   });


   axios.get(`http://localhost:5001/api/articles`).then(response => {
    response.data.articles.technology.forEach (article => {
     const newsCard = Card(article);
     document.querySelector(selector).appendChild(newsCard);
   });
   
   axios.get(`http://localhost:5001/api/articles`).then(response => {
    response.data.articles.jquery.forEach (article => {
     const newsCard = Card(article);
     document.querySelector(selector).appendChild(newsCard);
   });

   axios.get(`http://localhost:5001/api/articles`).then(response => {
    response.data.articles.node.forEach (article => {
     const newsCard = Card(article);
     document.querySelector(selector).appendChild(newsCard);
   });
  



      //console.log('ORANGE',response.data.articles.bootstrap[1]);
      //console.log('APPLE', response.data.articles.bootstrap[0]);
      //console.log('LIME',response);
      //console.log('CHERRY',Card(response.data.articles.bootstrap[2]));
     // console.log('PEACH',response.data.articles.node.js);
    })
  })
})
  })
  })
   
 
 .catch(err => console.error(err));
 
 };




export { Card, cardAppender }
