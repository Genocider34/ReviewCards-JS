const reviews = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu6HDBtI54IpUGOhj12tQUEEAHmgGVWFpXuw&usqp=CAU",
    name: "Elon Musk",
    job: "CEO of Tesla Motors",
    info: "“A supremely practical and useful book. James Clear distills the most fundamental information about habit formation, so you can accomplish more by focusing on less.”",
  },
  {
    id: 2,
    img: "https://hips.hearstapps.com/hmg-prod/images/apple-ceo-steve-jobs-speaks-during-an-apple-special-event-news-photo-1683661736.jpg?crop=0.800xw:0.563xh;0.0657xw,0.0147xh&resize=1200:*",
    name: "Steve Jobs",
    job: "Former CEO of Apple",
    info: "“One of my all-time favorite books.”",
  },
  {
    id: 3,
    img: "https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/410228176_932270294930570_249126081286619479_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=lFfQ_ftiYCcAX8aVplV&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfA7bZvkmq9f5i82-2BeM2Szy69erh4QKdjQJZ9o8mZ6Tg&oe=65AEB0C2",
    name: "Bill Gates",
    job: "Former CEO of Microsoft",
    info: "“James Clear has spent years honing the art and studying the science of habits. This engaging, hands-on book is the guide you need to break bad routines and make good ones.”",
  },
];

const img = document.querySelector("img");
const author = document.querySelector(".name");
const job = document.querySelector(".job");
const info = document.querySelector(".info");
const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");
const randomBtn = document.querySelector(".random-button");

let currentItem = 0;

// Initial start up
window.addEventListener("DOMContentLoaded", () => {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.info;
});

function otherReviews(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.info;
}

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  otherReviews(currentItem);
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  otherReviews(currentItem);
});

randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  otherReviews(currentItem);
});
