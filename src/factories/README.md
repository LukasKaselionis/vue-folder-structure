Store functions or classes responsible for creating instances of objects or generating data.

```
export class UserFactory {
  static createUser({ id, name, email }: User): User {
    return {
      id,
      name,
      email,
    };
  }
}
```
