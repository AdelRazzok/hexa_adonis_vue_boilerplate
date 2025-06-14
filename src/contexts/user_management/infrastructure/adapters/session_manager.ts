import { Identifier } from '#shared/domain/identifier'
import { SessionManagerContract } from '#user_management/application/contracts/session_manager.contract'
import { HttpContext } from '@adonisjs/core/http'
import { Session } from '@adonisjs/session'

const kUserIdSessionKey = 'user_management::user_id'

export class SessionManager implements SessionManagerContract {
  #session: Session

  constructor() {
    this.#session = HttpContext.getOrFail().session
  }

  #initiateSession() {
    return this.#session.initiate(false)
  }

  async createSession(userId: Identifier): Promise<void> {
    await this.#initiateSession()
    this.#session.put(kUserIdSessionKey, userId.toString())
  }
}
