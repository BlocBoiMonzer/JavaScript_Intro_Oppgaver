import 'styles.css';
import { users } from 'util.js';
// klarer ikke å importere. Vet ikke noe om modules, ES modules, mjs og sånt. Plz forklar
// av alt sammen, synes jeg det vanskeligste er å kjøre javascript filer

const searchInput = document.getElementById('searchInput');
const filterInput = document.getElementById('filterInput');
const filterButton = document.getElementById('filterButton');
const userUl = document.getElementById('userUl');

const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

const handleSearch = () => {
  const searchName = searchInput.value;
  if (searchName) {
    const searchResult = users.find((user) => user.name === searchName);
    if (searchResult) {
      createTableUI([searchResult]);
    } else {
      userUl.innerHTML = 'No matching user found.';
    }
  } else {
    createTableUI(users);
  }
};

const handleFilter = () => {
  const filterValue = filterInput.value;
  if (filterValue && !isNaN(filterValue)) {
    const filterResult = users.filter((user) => user.age > filterValue);
    if (filterResult.length > 0) {
      createTableUI(filterResult);
    } else {
      userUl.innerHTML = 'No users found with age higher than the filter value.';
    }
  } else {
    createTableUI(users);
  }
};

const main = () => {
  createTableUI(users);
};

main();

searchInput.addEventListener('keyup', handleSearch);
filterButton.addEventListener('click', handleFilter);