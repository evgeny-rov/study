const treeWalker = (div) => {
    if (div instanceof Text && div.parentNode.tagName === 'DIV') {
      const pEl = document.createElement('p')
      const textNode = document.createTextNode(div.textContent.trim())
      if (textNode.length > 0) {
        pEl.append(textNode)
        div.replaceWith(pEl)
      }
    }
      div.childNodes.forEach(treeWalker)
  }
  
  const prettifier = (doc) => {
    const divs = [...doc.getElementsByTagName('div')]
    divs.forEach(treeWalker)
  }
  
  ///// teacher's solution
  
  export default (document) => {
    const divs = document.getElementsByTagName('div');
  
    divs.forEach((div) => {
      const textNodes = [...div.childNodes]
        .filter((child) => child instanceof Text)
        .filter((child) => child.textContent.trim() !== '');
      textNodes.forEach((node) => {
        const p = document.createElement('p');
        p.textContent = node.textContent;
        node.replaceWith(p);
      });
    });
  };