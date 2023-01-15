function getElement(query: string): HTMLElement {
  const elem: HTMLElement | null = document.querySelector(query);
  if (elem) return elem;
  else throw Error("Element doesnt exist");
}

export { getElement };
