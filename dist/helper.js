function getElement(query) {
    const elem = document.querySelector(query);
    if (elem)
        return elem;
    else
        throw Error("Element doesnt exist");
}
export { getElement };
//# sourceMappingURL=helper.js.map