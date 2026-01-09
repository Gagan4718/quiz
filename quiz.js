const quesJSON = [
  {
    correctAnswer: "Three",
    options: ["Two", "Three", "four", "five"],
    question: "how many pieces of bun are in Mcdonald big Mac?",
  },
  {
    correctAnswer: "L frank baum",
    options: ["Sum", "Jams", "L frk", "Donns"],
    question: "Which author wrote the wonderful wizerd of QZ?",
  },
  {
    correctAnswer: "Atlanta united",
    options: ["united", "impace", "bulles", "star"],
    question: "which of these is a soccer team  in atlenta?",
  },
  {
    correctAnswer: "A navery ",
    options: ["Saw", "Lioner", "Hen", "A henney"],
    question: "A female goal is known as what?",
  },

  {
    correctAnswer: "P L Tavers ",
    options: ["JRR Tolkeien", "Travers", "lewis", "enid"],
    question: "which author wrote ' Mary poppis;",
  },
];

// const questionObj = {
//   catagory: "food & drink",
//   id: "qa-1",
//   correctAnswer: "Three",
//   options: ["Two", "Three", "Four", "Five"],
//   question: "How many pieces of bun are in a McDonald's Big Mac?",
// };

let score = 0;
let currentQuestion = 0;
const totalSrore = quesJSON.length;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("option");
const scoreEl = document.getElementById("score");
const nextEl = document.getElementById("next");

function shuffleOptionsFunc(option) {
  for (let i = option.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    [option[i], option[j]] = [option[j], option[i]];
  }
  return option;
}

showQuestion();

nextEl.addEventListener("click", () => {
  scoreEl.textContent = `score: ${score}/ ${totalSrore}`;
  nextQuestion();
});

function showQuestion() {
  const { correctAnswer, options, question } = quesJSON[currentQuestion];
  console.log({ options });
  questionEl.textContent = question;

  const shuffleOptions = shuffleOptionsFunc(options);

  shuffleOptions.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    optionsEl.appendChild(btn);

    btn.addEventListener("click", () => {
      if (opt === correctAnswer) {
        score++;
      } else {
        score = score - 0.25;
      }
      console.log(score);
      scoreEl.textContent = `Score: ${score}/ ${totalSrore}`;
      nextQuestion();
      // questionEl.textContent = "Quiz Completed!!";
      // optionsEl.textContent = "";
    });
  });
}

function nextQuestion() {
  currentQuestion++;
  optionsEl.textContent = "";
  if (currentQuestion >= quesJSON.length) {
    questionEl.textContent = "Quiz Completed";
    nextEl.remove();
  } else {
    showQuestion();
  }
}

// Set question text

// shuffle Options

// shuffleOptions([1, 2, 3, 4, 5]);

// //Create the event Listener for the buttons.
// let post1 = {
//   id: 1,
//   author: "John",
//   content: "My first Post!",
//   likes: 10,
//   comments: ["Great post!", "Nice photo!"],
//   image: "https://files.codingninjas.in/image2-28694.jpg",
// };

// function renderPosts() {
//   const postsContainer = document.getElementById("posts");
//   postsContainer.innerHTML = "";

//   const postElement = document.createElement("div");
//   postElement.classList.add("post");

//   const authorElement = document.createElement("h3");
//   authorElement.textContent = post1.author;

//   const contentElement = document.createElement("p");
//   contentElement.textContent = post1.content;

//   const imageElement = document.createElement("img");
//   imageElement.src = post1.image;
//   imageElement.alt = "Post Image";

//   const likeButton = document.createElement("button");
//   likeButton.textContent = `Like`;
//   likeButton.classList.add("like-button");

//   //Add eventListerner here to update the likes.
//   let liked = false;
//   likeButton.addEventListener("click", () => {
//     if (!liked) {
//       post1.likes++;
//       liked = true;
//       likeButton.style.backgroundColor = "red"; // change to red
//       updateFooter();
//     }
//   });

//   const commentInput = document.createElement("input");
//   commentInput.type = "text";
//   commentInput.placeholder = "Write a comment...";

//   const commentButton = document.createElement("button");
//   commentButton.textContent = "Comment";
//   commentButton.classList.add("comment-button");

//   //Create eventListener here for the comment button
//   commentButton.addEventListener("click", () => {
//     const userComment = commentInput.value.trim();

//     if (userComment.length > 0) {
//       post1.comments.push(userComment);

//       // Display new comment
//       const newComment = document.createElement("p");
//       newComment.textContent = userComment;
//       commentsContainer.appendChild(newComment);

//       commentInput.value = ""; // clear input
//       updateFooter();
//     }
//   });

//   const postFooter = document.createElement("div");
//   postFooter.classList.add("post-footer");
//   postFooter.textContent = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;

//   const commentsContainer = document.createElement("div");
//   commentsContainer.classList.add("comments-container");
//   commentsContainer.style.display = "none";

//   post1.comments.forEach((comment) => {
//     const commentElement = document.createElement("p");
//     commentElement.textContent = comment;
//     commentsContainer.appendChild(commentElement);
//   });

//   postElement.appendChild(authorElement);
//   postElement.appendChild(imageElement);
//   postElement.appendChild(contentElement);
//   postElement.appendChild(likeButton);
//   postElement.appendChild(commentInput);
//   postElement.appendChild(commentButton);
//   postElement.appendChild(postFooter);
//   postElement.appendChild(commentsContainer);

//   postFooter.addEventListener("click", () => {
//     if (commentsContainer.style.display === "none") {
//       commentsContainer.style.display = "block";
//     } else {
//       commentsContainer.style.display = "none";
//     }
//   });

//   postsContainer.appendChild(postElement);
// }

// renderPosts();
