import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  //  AUTO GENARETED INCREMENTAL ID:
  const id = await generateUserId()
  user.id = id

  //  DEFAULT PASSWORD
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error(`Failed to create User!`)
  }
  return createdUser
}

export default {
  createUser,
}
