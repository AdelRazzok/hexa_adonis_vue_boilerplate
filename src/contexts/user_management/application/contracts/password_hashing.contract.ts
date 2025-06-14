import { HashedPassword } from '#user_management/domain/hashed_password'
import { PlainPassword } from '#user_management/domain/plain_password'

export abstract class PasswordHashingContract {
  abstract verify(password: PlainPassword, hashedPassword: HashedPassword): Promise<boolean>
  abstract fakeVerify(): Promise<void>
}
