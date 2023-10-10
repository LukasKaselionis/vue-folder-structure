### Enums are used to define a set of named constant values.

```
enum UserType {
  Admin = "admin",
  Customer = "customer"
}

interface User {
  email: string;
  type: UserType;
}

const user: User = {
  email: “user@example.com”, 
  type: UserType.Admin
}
```
