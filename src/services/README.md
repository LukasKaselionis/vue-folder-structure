Place code related to data fetching, API interaction, and business logic here.

```
class UserService {
  private user: User | null = null;

  getUser(): User | null {
    return this.user;
  }

  setUser(user: User): void {
    this.user = user;
  }
}
```
