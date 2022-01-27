interface User {
  id: string;
  username:string;
}

interface Users {
  [key: string]: User;
}

const users: Users = {
  '1':{id:"1", username:'kaka'},
  '2':{id:"2", username:'suzuki'},
}

const me = users[1]

const posts = [
  {
    id:'1',
    title:'こころ',
    author: '夏目漱石'
  },
  {
    id:'2',
    title:'舞姫',
    author:'森'
  },
  {
    id:'3',
    title:'羅生門',
    author:'芥川龍之介'
  }
]

module.exports = { posts, users};
