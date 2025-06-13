import { v7 as uuidv7 } from 'uuid'
import { ValueObject } from '#shared/domain/value_object'

export class Identifier extends ValueObject<{ value: string }> {
  protected constructor(props: { value: string }) {
    super(props)
  }

  static generate(): Identifier {
    return new Identifier({ value: uuidv7() })
  }

  static fromString(value: string): Identifier {
    return new Identifier({ value })
  }
}
