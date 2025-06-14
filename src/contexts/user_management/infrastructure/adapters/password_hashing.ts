import hash from '@adonisjs/core/services/hash'
import { PasswordHashingContract } from '#user_management/application/contracts/password_hashing.contract'
import { HashedPassword } from '#user_management/domain/hashed_password'
import type { PlainPassword } from '#user_management/domain/plain_password'

export class PasswordHashing implements PasswordHashingContract {
  async hash(password: PlainPassword): Promise<HashedPassword> {
    const hashedPassword = await hash.make(password.toString())
    return HashedPassword.fromString(hashedPassword)
  }

  async verify(password: PlainPassword, hashedPassword: HashedPassword): Promise<boolean> {
    return hash.verify(password.toString(), hashedPassword.toString())
  }

  async fakeVerify(): Promise<void> {
    await hash.make('fake')
  }
}
