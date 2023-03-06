///DYNAMIC ELEMENT CREATOR FUNCTION


function createElement(tagName, className, content) {

      let newElement = document.createElement(tagName);
   
      if (className) {
         newElement.setAttribute('class', className);
      }
   
      if (content) {
         newElement.innerHTML = content;
      }
   
      return newElement
   
   }