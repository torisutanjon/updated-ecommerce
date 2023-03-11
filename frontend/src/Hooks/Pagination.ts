let currentPage = 1
let pageLenght = 1
let id = 0;

export const paginationHook = (command:string) => {
}

export const elementsCheckerHandler = (elements:Array<number>) => {
    console.log(elements)
    if (elements === undefined) return [id];
    elements.forEach((data) => {
      console.log(id);
      console.log(data);
      if (data === id) {
        console.log(data === id);
        id++;
      } else {
        return [...elements, id];
      }
    });
  };