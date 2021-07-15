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

const galleryEl = document.querySelector("#gallery");

const elements = images.map((item) => {
  const { url, alt } = item;
  const el = document.createElement("li");
  const img = document.createElement("img");
    
  img.src = url;
  img.alt = alt;
  img.style.width = "300px";
  img.style.listStyleType = "none";
  img.style.display = "flexWrap";
  img.style.margin = "30px";
  el.appendChild(img);
  galleryEl.insertAdjacentElement("afterbegin", el);
  return galleryEl;
});

console.log(elements);

// const createGalleryList = (list) => {
//   let el;
//   let img;
//   const arrItems = [];

//   for (let item of list) {
//     const { url, alt } = item;
//     el = document.createElement("li");
//     img = document.createElement("img");
//     img.src = url;
//     img.alt = alt;
//       img.style.width = '300px';
//       img.style.listStyleType = 'none';
//       img.style.display = 'flex';
//       img.style.justifyContent = 'spaceBetween'

//     el.append(img);

//     arrItems.push(el);
//   }

//   return arrItems;
// };
// const galleryListEl = createGalleryList(images);
// console.log(galleryListEl);

// galleryEl.append(...galleryListEl);
