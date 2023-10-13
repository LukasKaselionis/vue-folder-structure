Inside the `src/stores` folder, you can use state management tools such as Pinia and create store modules.

You can name the return value of `defineStore()` anything you want,
but it's best to use the name of the store and surround it with `use`
and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
the first argument after "use" is a name which is a unique id of the store.

```
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const username = ref("");
  const getUsername = computed(() => username.value);
  const setUsername = (username: string): void => {
    username.value = username;
  };

  return { username, setUsername }
})
```
