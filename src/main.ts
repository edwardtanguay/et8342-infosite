import './style.css'

const createTitle = (part1: string, part2: string) => {
  return part1 + part2;
}


const title:string = "info site";
const num:number = 34;

// const title2 = title + num;
const title2 = createTitle(title, String(num));

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>${title}</h1>
  <h2>${title2}</h2>
  <p>The number is ${num}.</p>
`