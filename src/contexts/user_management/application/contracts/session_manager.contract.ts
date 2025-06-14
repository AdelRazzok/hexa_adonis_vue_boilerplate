import { Identifier } from '#shared/domain/identifier'

export abstract class SessionManagerContract {
  abstract createSession(userId: Identifier): Promise<void>
}
