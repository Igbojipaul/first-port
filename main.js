const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show')
    }
  });
});

const hiddenElements = document.querySelectorAll('.s');
hiddenElements.forEach((el) => observer.observe(el));

const observer2 = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show')
    }
  });
});

const hiddenElements2 = document.querySelectorAll('.fr');
hiddenElements2.forEach((el) => observer2.observe(el));
const observer3 = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show')
    }
  });
});

const hiddenElements3 = document.querySelectorAll('.cd');
hiddenElements3.forEach((el) => observer3.observe(el));

const observer4= new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show')
    }
  });
});

const hiddenElements4 = document.querySelectorAll('.path');
hiddenElements4.forEach((el) => observer4.observe(el));

const observer5= new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show')
    }
  });
});

const hiddenElements5 = document.querySelectorAll('.about');
hiddenElements5.forEach((el) => observer5.observe(el));

