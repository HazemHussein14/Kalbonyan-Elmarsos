const button = document.querySelector('button');
const textParagraph = document.querySelector('p');
button.addEventListener('click', () => {
  const text = textParagraph.textContent;
  navigator.clipboard.writeText(text).then(result => {
    console.log(result);
  }).catch(error => {
    console.log(error);
  });
});