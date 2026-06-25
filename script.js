const letterText = `Dad,

There are some people who build houses.

There are some people who build businesses.

And then there are people like you...

People who build lives, opportunities, friendships, and families.

Thank you for everything you've done for us.

Thank you for always being there.

Thank you for teaching me what hard work, integrity, and success really mean.

I am proud to be your son.`;

const quotes = [
  '⚽ "Champions keep playing until they get it right."',
  '⚽ "Hard work beats talent when talent does not work hard."',
  '⚽ "Success is earned one day at a time."',
  '⚽ "Great teams are built on trust."',
  '⚽ "Every win begins with effort."'
];

const gratitudeMessages = [
  "❤️ Your support",
  "❤️ Your advice",
  "❤️ Your generosity",
  "❤️ Your patience",
  "❤️ Your humor",
  "❤️ Your strength",
  "❤️ Your sacrifices",
  "❤️ Your example",
  "❤️ Your belief in me",
  "❤️ Infinite Reasons"
];

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

document.querySelectorAll("[data-scroll]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(button.dataset.scroll)?.scrollIntoView({ behavior: "smooth" });
  });
});

let typed = false;
const typewriter = document.getElementById("typewriter");
const letterObserver = new IntersectionObserver((entries) => {
  if (!entries[0].isIntersecting || typed) return;
  typed = true;
  let index = 0;
  const tick = () => {
    typewriter.textContent = letterText.slice(0, index);
    index += 1;
    if (index <= letterText.length) {
      setTimeout(tick, index % 7 === 0 ? 18 : 10);
    }
  };
  tick();
}, { threshold: 0.42 });

letterObserver.observe(document.getElementById("letter"));

document.querySelectorAll(".timeline-card").forEach((card) => {
  const toggle = () => card.classList.toggle("active");
  card.addEventListener("click", toggle);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  });
});

const footballBall = document.getElementById("footballBall");
const footballQuote = document.getElementById("footballQuote");
let quoteIndex = 0;

footballBall.addEventListener("click", () => {
  footballBall.classList.remove("spin");
  void footballBall.offsetWidth;
  footballBall.classList.add("spin");
  footballQuote.textContent = quotes[quoteIndex % quotes.length];
  quoteIndex += 1;
});

const gratitudeButton = document.getElementById("gratitudeButton");
const gratitudeMessage = document.getElementById("gratitudeMessage");
let gratitudeIndex = 0;

gratitudeButton.addEventListener("click", () => {
  gratitudeIndex += 1;
  const message = gratitudeMessages[Math.min(gratitudeIndex, gratitudeMessages.length - 1)];
  gratitudeMessage.textContent = message;
  gratitudeMessage.style.animation = "none";
  void gratitudeMessage.offsetWidth;
  gratitudeMessage.style.animation = "floatIn .35s ease";

  if (message === "❤️ Infinite Reasons") {
    gratitudeButton.textContent = "Because there will never be enough reasons to thank you.";
    gratitudeButton.disabled = true;
  }
});

const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");

giftBox.addEventListener("click", () => {
  giftBox.classList.add("open");
  giftMessage.classList.add("show");
});
