const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useMongoClient: true });

module.exports = { mongoose };

// const Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minLength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   createdAt: {
//     type: Number,
//     default: null
//   }
// });

// // const newTodo = new Todo({
// //   text: 'Cook dinner'
// // });

// // newTodo.save().then(
// //   doc => {
// //     console.log('Saved todo', doc);
// //   },
// //   e => {
// //     console.log('Unable tosave Todo');
// //   }
// // );

// const otherTodo = new Todo({
//   text: ' Got ya!'
// });

// otherTodo.save().then(
//   doc => {
//     console.log(JSON.stringify(doc, undefined, 2));
//   },
//   e => {
//     console.log('Unable tosave Todo');
//   }
// );

// const User = mongoose.model('User', {
//   email: {
//     type: String,
//     trim: true,
//     minLength: 1,
//     required: true
//   }
// });

// const newUser = new User({
//   email: 'aleks.rdvn@gmail.com'
// });

// newUser.save().then(
//   doc => {
//     console.log(JSON.stringify(doc, undefined, 2));
//   },
//   err => {
//     console.log('Unable to save user', err);
//   }
// );
