function imports() {

}

document.getElementById('maxbt').onclick = () => {
  console.log('hello vscode!')
  // ipc.send('window-close');
}

console.log(document.getElementById('maxbt').onclick)
document.getElementById('maxbt').click()
// document.getElementById('maxbt').addEventListener('click', () => {
//   console.log('hello vscode!')
//   ipc.send('window-max');
// })

document.getElementById('minbt').addEventListener('click', () => {
  console.log('hello vscode!')
  // ipc.send('window-min');

})
// document.getElementById('closebt').addEventListener('click', () => {
//   console.log('hello vscode!')
//   ipc.send('window-close');

// })