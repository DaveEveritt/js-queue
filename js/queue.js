const createQueue = () => {
  const queue = [];

  return {
    enqueue(item) {
      queue.unshift(item)
    },
    dequeue() {
      return queue.pop()
    },
    peek() {
      return queue[queue.length - 1]
    },
    get length() {
      return queue.length
    },
    isEmpty() {
      return queue.length === 0
    },
    listQueue() {
      return queue
    }
  }
}

const q = createQueue();
// console.log(q.isEmpty());

/* =================================
   Optional: queue items from form
   ================================= */

const showQueue = document.getElementById("showQueue");
const setQueue = document.getElementById("setQueue");
const queueEls = setQueue.elements;
const getItems = () => document.querySelectorAll('[data-choice^="item"]');

const makeList = (el, index) => {
  showQueue.innerHTML += `<input type="checkbox" id="item${index}" name="choices" value="item${index}"><label for="item${index}">${index}: ${el}</label> <span data-choice="item${index}"> x </span><br>`;
}

const popItem = (e) => {
  q.dequeue();
  redrawList();
}

const buttonClick = () => showQueue[showQueue.length-1].addEventListener("click", popItem);

const redrawList = () => {
  showQueue.innerHTML = '';
  q.listQueue().map(makeList);
  if (q.isEmpty() !== true) {
    showQueue.innerHTML += `<button>dequeue</button>`;
    buttonClick();
  }
  [...getItems()].map(showItems);
}

const addItem = (e) => {
  q.enqueue(queueEls[0].value);
  queueEls[0].value = '';
  redrawList();
  e.preventDefault(e);
}
setQueue.addEventListener('submit', addItem);

// toggle highlight selected item
const showItems = (e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("selected");
    e.previousElementSibling.classList.toggle("highlight");
  });
}

