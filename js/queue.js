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

q.enqueue('Stop hacking');
q.enqueue('Make dinner');
q.enqueue('Eat dinner');
q.enqueue('Wash up');
// console.log(q.listQueue());

// console.log(q.peek());
// q.dequeue();
// console.log(q.peek());

/* =================================
 Optional code to show on the screen
   ================================= */

const showList = document.getElementById("showlist");

const makeList = (el, index) => {
  showList.innerHTML += `<input type="checkbox" id="item${index}" name="choices" value="item${index}"><label for="item${index}">${el}</label><br>`;
}
q.listQueue().map(makeList);

// q.listQueue().map((el, index) => {
//   showList.innerHTML += `<input type="checkbox" id="item${index}" name="choices" value="item${index}"><label for="item${index}">${el}</label><br>`;
// });

