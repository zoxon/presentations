(function(window, document) {
  "use strict";
  // Run Button
  const runButton = (elements, _options) => {
    const defaults = {
      buttonClassName: "run-button",
      buttonText: "Выполнить код"
    };
    const options = Object.assign({}, defaults, _options);

    [].forEach.call(elements, element => {
      const code = element.innerText;
      const button = document.createElement("button");
      button.type = "button";
      button.className = options.buttonClassName;
      button.innerText = options.buttonText;
      element.parentNode.insertBefore(button, element);
      button.addEventListener("click", () => {
        console.log("Running\n---\n" + code + "\n---\nResult:");
        eval(code);
      });
    });
  };

  // const pre = document.querySelectorAll('pre[data-lang="javascript"]');
  // runButton(pre);
})(window, document);
