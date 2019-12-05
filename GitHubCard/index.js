/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           

  */

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

const entryPoint = document.querySelector('.cards');

  /*axios.get('https://api.github.com/users/amohler09')
      .then (response => {
      entryPoint.appendChild(getUser(response));
    })*/
    

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["TylerBiswell", "asahmed93", "kristian-fulkerson", "derekdyer0309", "dorenafortune"];

followersArray.forEach(user => {
  const myFollowers = `https://api.github.com/users/${user}`;
  axios.get(myFollowers)
  .then(response => {
    entryPoint.appendChild(getUser(response));
  })
})





/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function getUser(object) {
  /*---------Variables-----------------------*/
  const newCard = document.createElement('div');
  const newImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const gitUrl = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  /*-----------Styles--------------------------*/
  name.style.marginBottom = '5%';
  location.style.marginBottom = '3%';
  profile.style.marginBottom = '3%';
  followers.style.marginBottom = '3%';
  following.style.marginBottom = '3%';


  /*------------Text Content------------------ */
  newImg.src = object.data.avatar_url;
  name.textContent = object.data.name;
  username.textContent = `Username: ${object.data.login}`;
  location.textContent = `Location: ${object.data.location}`;
  profile.textContent = `Profile: ${object.data.html_url}`;
  followers.textContent = `Followers: ${object.data.followers}`;
  following.textContent = `Following: ${object.data.following}`;
  bio.textContent = `Bio: ${object.data.bio}`;

  /*--------------Classes------------------------ */
  newCard.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  /*-------------Appendages--------------------- */
  newCard.appendChild(newImg);
  newCard.appendChild(cardInfo);

  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  profile.appendChild(gitUrl);


  return newCard;
}
