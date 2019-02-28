// using this file is optional
// you can also load the code snippets in using your browser's console

    const main = document.getElementById('main');
     
    main.addEventListener('click', function(event) {
      alert('I was clicked!');
    });



// This is added to console in the http being served
    // const input = document.querySelector('input');
     
    // input.addEventListener('keydown', function(e) {
    //   console.log(e.key);
    // });
    
     
    // input.addEventListener('keydown', function(e) {
    //   if (e.key === "g") {
    //     return e.preventDefault()
    //   } else {
    //     console.log(e.key)
    //   }
    // });
    
    
    
//  TO BUBBLE    
//     let divs = document.querySelectorAll('div');
 
// function bubble(e) {
//     console.log(this.firstChild.nodeValue.trim() + ' bubbled');
// }
 
// for (let i = 0; i < divs.length; i++) {
//   divs[i].addEventListener('click', bubble);
// }


// TO CAPTURE 

// divs = document.querySelectorAll('div');
 
// function capture(e) {
//   console.log(this.firstChild.nodeValue.trim() + ' captured');
// }

// for (let i = 0; i < divs.length; i++) {
//   // set the third argument to `true`!
//   divs[i].addEventListener('click', capture, true);
// }




// Let's rewrite the bubbling example to stop propagation 
// so that only one event is triggered 


// const divs = document.querySelectorAll('div');
 
// function bubble(e) {
//   // stop! that! propagation!
//   e.stopPropagation();
 

//   console.log(this.firstChild.nodeValue.trim() + ' bubbled');
// }
 
// for (let i = 0; i < divs.length; i++) {
//   divs[i].addEventListener('click', bubble);
// }


