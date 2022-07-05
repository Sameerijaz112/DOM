/* let changecolor = () => {
    try {
      let MyHeader = document.querySelector('h1');
      console.log(MyHeader);
      MyHeader.style.color ='red';
    } catch (error) {
        alert(error.message)
    }
} */
/* let changecolor = () => {
    let Myheading = document.querySelector('h1');
    Myheading.style.color ='red';
    Myheading.style.border = "1px solid red" ;
} */
let changecolor = ( ) => {
    let myheading = document.querySelectorAll('h1');
  myheading.forEach(element => {
    console.log(element);
  });
  /*   myheading.style.color = "Green";
    myheading.style.border = "1px solid Red"; */
}