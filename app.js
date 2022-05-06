var images;


images = ['https://images.unsplash.com/photo-1650225502063-0e69901fad8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1650275140172-5269844b09ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1650205511636-12479f0133d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1650262673518-c31fa33dedf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1650288021655-28883d80e1bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'];


document.getElementById('prev').addEventListener('click', (event) => {
  images.unshift(images.pop());
  let element_img = document.getElementById('img');
  element_img.setAttribute("src", images.slice(-1)[0]);

});

document.getElementById('next').addEventListener('click', (event) => {
  images.push(images[0]);
  let element_img2 = document.getElementById('img');
  element_img2.setAttribute("src", images.shift());

});