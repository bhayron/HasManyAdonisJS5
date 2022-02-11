import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Profile from 'App/Models/Post'
import User from 'App/Models/User'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    const users = await User.query().preload('posts')

    return response.ok(users)
  }
  public async UserRegister({ request, response }: HttpContextContract) {
    const data = request.only(['email', 'password'])

    const user = await User.create(data)

    return response.created({ user })
  }
  public async PostRegister({ request, response }: HttpContextContract) {
    const data = request.only(['userId', 'title', 'body'])

    const profile = await Profile.create(data)

    return response.created({ profile })
  }
  public async delete({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    await user.delete()
  }
}
