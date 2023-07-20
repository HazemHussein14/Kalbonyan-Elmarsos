const storeBtn = document.getElementById('store-btn')
const retBtn = document.getElementById('retrieve-btn')

const userId = 'us123';

const user = {
  name: 'Hazem',
  age: 20,
  hobbies: ['Coding', 'Reading']
}

storeBtn.addEventListener('click', () => {
  sessionStorage.setItem('userId',userId)
  localStorage.setItem('userInfo',JSON.stringify(user))
})

retBtn.addEventListener('click', () => {
  const extractedId = sessionStorage.getItem('userId')
  const extractedUser = JSON.parse(localStorage.getItem('userInfo'))
  console.log(extractedUser)
  if (extractedId) {
    console.log('Id found - ' + extractedId)
  } else {
    console.log('Id not found')
  }
})