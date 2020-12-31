console.log(history);
console.log(window.location);

const rootElement = document.getElementById('root');
const navElement = document.createElement('nav');
const navElementList = document.createElement('ul');
navElement.appendChild(navElementList);

const routes = [];

const renderer = (pathname) => {
  const nextPage = routes.find((route) => route.pathname === pathname)
    .pageElement;

  rootElement.replaceChildren(navElement, nextPage);
};

const createPage = (pathname, content) => {
  const pageElement = document.createElement('div');

  if (typeof content === 'string') {
    pageElement.innerHTML = content;
  } else {
    pageElement.appendChild(content);
  }

  const navigateAction = (e) => {
    e.preventDefault();
    window.history.pushState({}, pathname, window.location.origin + pathname);
    renderer(pathname);
  };

  const link = document.createElement('a');
  link.setAttribute('href', '#');
  link.textContent = pathname.slice(1);
  link.addEventListener('click', navigateAction);

  return { pathname, pageElement, link };
};

const appendPage = (page) => {
  const navItem = document.createElement('li');
  navItem.appendChild(page.link);
  navElementList.appendChild(navItem);

  routes.push(page);
};

window.onpopstate = () => {
  renderer(window.location.pathname);
};

const homePage = createPage('/home', '<h1>This is Home Page.</h1>');
appendPage(homePage);

const contactPage = createPage('/contact', '<h1>This is Contact Page.</h1>');
appendPage(contactPage);

const aboutPageContent = document.createElement('h1');
aboutPageContent.textContent = 'This is About Page.';
const aboutPage = createPage('/about', aboutPageContent);
appendPage(aboutPage);

// init

renderer(homePage.pathname);