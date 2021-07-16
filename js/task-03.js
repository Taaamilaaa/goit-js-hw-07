const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryContainerEl = document.querySelector("#gallery");
galleryContainerEl.style.display = "flex";
galleryContainerEl.style.listStyle = "none";
galleryContainerEl.style.margin = "-15px";

const createElementOfGallery = (list) => {
  const { url, alt } = list;
  return `
  <li>
 <img src = ${url}
 alt = ${alt}
 width = '100%'
 height = '100%'
 </li >
 <style>
 li {margin: 15px;
 border: 5px solid lightgrey;}
 </style>
  `
};

const listOfImages = images
  .map(createElementOfGallery)
  .join(' ');
  console.log(listOfImages);

galleryContainerEl.insertAdjacentHTML('afterbegin', listOfImages)



// const createGalleryList = (list) => {
//   list.forEach((item) => {
//     galleryContainerEl.insertAdjacentHTML(
//       "afterbegin",
//       `
// <li>
// <img src = ${images[list.indexOf(item)].url}
// alt = ${images[list.indexOf(item)].alt}
// width = '100%'
// height = '100%'
// </li >
// <style>
// li {margin: 15px;
// border: 5px solid lightgrey;}
// </style>
// `
//     );
//   });
//   return list;
// };

// console.log(createGalleryList(images));



// const createGalleryList = (list) => {
//   return list.map(item => {
//     const { url, alt } = item;
//     const itemEl = document.createElement("li");
//     itemEl.style.margin = '15px';
//     itemEl.style.width = '400px';

//     const imgEl = document.createElement("img");
//     imgEl.src = url;
//     imgEl.alt = alt;
//     imgEl.style.height = '100%';
//     imgEl.style.width = '100%';

//     itemEl.append(imgEl);
//     return itemEl;
//   }
//   );
// }
// console.log(createGalleryList(images));
// const galleryList = createGalleryList(images);

// galleryContainerEl.append(...galleryList);
