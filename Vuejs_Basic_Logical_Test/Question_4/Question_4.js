const data = document.getElementById("data");

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  //check if res is ok(200)
  if (res.ok) {
    const states = await res.json();
    outputHtml(states);
  } else {
    console.log("something went wrong");
  }
};

const outputHtml = (states) => {
  console.log(states);
  const html = states
    .map(
      (content) =>
        `
        <div>
        <h2>${content.title}</h2>
        </div>
    `
    )
    .join("");
  data.innerHTML = html;
};

fetchData();
