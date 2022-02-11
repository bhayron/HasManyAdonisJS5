import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/users', 'UsersController.index')
Route.post('/users/register', 'UsersController.UserRegister')
Route.post('/post', 'UsersController.PostRegister')
Route.delete('/delete/:id', 'UsersController.delete')
