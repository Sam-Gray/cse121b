let myProfile = {};

myProfile.name = "Sam Gray";
myProfile.photo = "images/Sam.png";
myProfile.favoriteFoods = [
  'CheeseBurgers',
  'Apples',
  'Poki Bowl',
];
myProfile.hobbies = [
  'Reading',
  'Patch Collecting',
  'Scouting',
  ];
myProfile.placesLived = [];

myProfile.placesLived.push({ place: 'Midway, Utah', length: '10 years' });
myProfile.placesLived.push({ place: 'Dublin Ireland', length: '3 years' });

document.querySelector('#name').textContent = myProfile.name;

document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
});

myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  dt.textContent = place.place;

  let dd = document.createElement('dd');
  dd.textContent = place.length;

  let dl = document.querySelector('#places-lived');
  dl.appendChild(dt);
  dl.appendChild(dd);
});