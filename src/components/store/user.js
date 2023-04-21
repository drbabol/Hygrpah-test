import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    name: "Luke",
    lastName: "Gallos",
    email: "jimmy.test@gmail.com",
  }),
  actions: {
    setUser(user) {
      this.name = user.name;
      this.lastName = user.lastName;
      this.email = user.email;
    },
  },
});
