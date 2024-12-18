export abstract class ValidatableComponent {
  protected validateAndSetProperty<T>(
    propertyKey: string,
    value: T,
    validator: (value: T) => boolean
  ): void {
    if (validator(value)) {
      (this as any)[propertyKey] = value;
    }
  }
}
