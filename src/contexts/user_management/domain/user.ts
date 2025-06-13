import { Entity } from '#shared/domain/entity'
import { Identifier } from '#shared/domain/identifier'
import { Email } from '#user_management/domain/email'
import { HashedPassword } from './hashed_password.js'

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
