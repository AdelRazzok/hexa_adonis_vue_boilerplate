import { UserRepository } from '#user_management/application/repositories/user.repository'
import { AuthenticationRequestDTO } from '#user_management/application/dtos/authentication_request.dto'
import { InvalidCredentialsException } from '#user_management/application/exceptions/invalid_crendentials.exception'
import { PasswordHashingContract } from '#user_management/application/contracts/password_hashing.contract'

export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private passwordHashingContract: PasswordHashingContract
  ) {}

  async authenticate(payload: AuthenticationRequestDTO) {
    const user = await this.userRepository.findByEmail(payload.email)

    if (!user) {
      throw new InvalidCredentialsException()
    }

    const isPasswordValid = this.passwordHashingContract.verify(
      payload.password,
      user.getPassword()
    )

    if (!isPasswordValid) {
      throw new InvalidCredentialsException()
    }
  }
}
