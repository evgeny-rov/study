  const listen = [...document.getElementsByClassName('nav-link')];
  const handler = (one) => {
    const nav = one.closest("ul[class='nav nav-tabs']");
    const active = nav.getElementsByClassName('active');
    const activetab = document.getElementById(`${active[0].hash.slice(1)}`);
    const newActiveTab = document.getElementById(`${one.hash.slice(1)}`);
    [...active, activetab, one, newActiveTab]
      .forEach((nel) => nel.classList.toggle('active'));
  };
  listen.forEach((el) => el.addEventListener('click', () => handler(el)));


/////teacher's solution

  const handle = ({ target }) => {
    const nav = target.closest('.nav');
    const current = nav.querySelector('a.active');
    current.classList.remove('active');
    const currentTabContentId = current.hash.slice(1);
    const currentTabContent = document.getElementById(currentTabContentId);
    currentTabContent.classList.remove('active');

    target.classList.add('active');
    const nextTabContentId = target.hash.slice(1);
    const nextTabContent = document.getElementById(nextTabContentId);
    nextTabContent.classList.add('active');
  };

  const links = document.querySelectorAll('a[data-toggle]');
  links.forEach((element) => {
    element.addEventListener('click', handle);
  });