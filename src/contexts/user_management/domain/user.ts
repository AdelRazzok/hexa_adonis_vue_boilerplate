import { Entity } from '#shared/domain/entity'
import { Identifier } from '#shared/domain/identifier'
import { Email } from '#user_management/domain/email'
import { HashedPassword } from '#user_management/domain/hashed_password'

interface Properties {
  id: Identifier
  email: Email
  password: HashedPassword
}

export class User extends Entity<Properties> {
  getPassword(): HashedPassword {
    return this.props.password
  }
}
