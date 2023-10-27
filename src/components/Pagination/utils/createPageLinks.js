const createPageLinksArray = (currentPage, numOfPages) => {
    let padding = 3;
    let left = currentPage - padding;
    let right = currentPage + padding;
    let page = [];
    let pageDotted = [];
    console.log(currentPage, numOfPages, left, right);

    for (let i = 1; i <= numOfPages; i++) {
        if (i == 1 || i == numOfPages || (i >= left && i <= right)) {
            page.push(i);
        }
    }
    console.log(page);

    let prv = page[0];
    pageDotted.push(prv);

    for (let i = 1; i < page.length; i++) {
        if (page[i] - prv === 1) {
            pageDotted.push(page[i]);
            prv = page[i];
        } else {
            pageDotted.push("...");
            pageDotted.push(page[i]);
            prv = page[i];
        }
    }

    return pageDotted;
};

export default createPageLinksArray;
