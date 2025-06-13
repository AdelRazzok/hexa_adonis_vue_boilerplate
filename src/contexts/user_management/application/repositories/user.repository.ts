import { Email } from '#user_management/domain/email'
import { User } from '#user_management/domain/user'

export abstract class UserRepository {
  abstract findByEmail(email: Email): Promise<User | null>
}
