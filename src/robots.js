const random = Math.floor(Math.random() * 101);
const email = ['Somsak@gmail.com', 'Somchai@gmail.com', 'Somruk@gmail.com', 'Somying@gmail.com', 'Sincere@april.biz', 'Nathan@yesenia.net', 'Julianne.OConner@kory.org', 'Lucio_Hettinger@annie.ca', 'Karley_Dach@jasper.info', 'Telly.Hoeger@billy.biz', 'Rey.Padberg@karina.biz', 'Chaim_McDermott@dana.io', 'Sherwood@rosamond.me']
const firstName = ['Arnun', 'Kanchana', 'Kulap', 'Thaksin', 'Wattana', 'Sunan', 'Somying', 'Somboorn', 'Somphorn', 'Seethrong', 'Sakchai', 'Kanya', 'Somchai', 'Kanda', 'Sukhon', 'Ubon', 'Preecha', 'Intira', 'Sasithorn', 'Suriya', 'Pranee', 'Intira', 'Suchart', 'Malai', 'Ubon', 'Amporn', 'Arthit', 'Anong', 'Kanda', 'Porntip', 'Bheerawat', 'Sippakorn', 'Chotivit', 'Suphakom', 'Pasut', 'Nontapat', 'Achira', 'Kanisorn']
const lastName = ['Arnun', 'Kanchana', 'Kulap', 'Thaksin', 'Wattana', 'Sunan', 'Somying', 'Somboorn', 'Somphorn', 'Seethrong', 'Sakchai', 'Kanya', 'Somchai', 'Kanda', 'Sukhon', 'Ubon', 'Preecha', 'Intira', 'Sasithorn', 'Suriya', 'Pranee', 'Intira', 'Suchart', 'Malai', 'Ubon', 'Amporn', 'Arthit', 'Anong', 'Kanda', 'Porntip']
export const robots = [
  {
    id: random + 1,
    name: 'Patiparn Tangmongkolpaisan',
    email: 'patipan1528@gmail.com'
  },
  {
    id: random,
    name: firstName[Math.floor(Math.random()*firstName.length)] + " " + lastName[Math.floor(Math.random()*lastName.length)],
    email: email[Math.floor(Math.random()*email.length)]
  },
  {
    id: random + 2,
    name: firstName[Math.floor(Math.random()*firstName.length)] + " " + lastName[Math.floor(Math.random()*lastName.length)],
    email: email[Math.floor(Math.random()*email.length)]
  },
  {
    id: random + 3,
    name: firstName[Math.floor(Math.random()*firstName.length)] + " " + lastName[Math.floor(Math.random()*lastName.length)],
    email: email[Math.floor(Math.random()*email.length)]
  },
  {
    id: random + 4,
    name: firstName[Math.floor(Math.random()*firstName.length)] + " " + lastName[Math.floor(Math.random()*lastName.length)],
    email: email[Math.floor(Math.random()*email.length)]
  },
  {
    id: random + 5,
    name: firstName[Math.floor(Math.random()*firstName.length)] + " " + lastName[Math.floor(Math.random()*lastName.length)],
    email: email[Math.floor(Math.random()*email.length)]
  },
  {
    id: random + 6,
    name: firstName[Math.floor(Math.random()*firstName.length)] + " " + lastName[Math.floor(Math.random()*lastName.length)],
    email: email[Math.floor(Math.random()*email.length)]
  },
  {
    id: random + 7,
    name: firstName[Math.floor(Math.random()*firstName.length)] + " " + lastName[Math.floor(Math.random()*lastName.length)],
    email: email[Math.floor(Math.random()*email.length)]
  },
  {
    id: random + 8,
    name: firstName[Math.floor(Math.random()*firstName.length)] + " " + lastName[Math.floor(Math.random()*lastName.length)],
    email: email[Math.floor(Math.random()*email.length)]
  },
  {
    id: random + 9,
    name: firstName[Math.floor(Math.random()*firstName.length)] + " " + lastName[Math.floor(Math.random()*lastName.length)],
    email: email[Math.floor(Math.random()*email.length)]
  }
];
