import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js";
// console.log(Vue);

Vue.component("loader", {
  template: `
  <div style="display:flex; justify-content:center; align-items:center">  
  <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>
    `,
});

new Vue({
  el: "#app",
  data() {
    return {
      loading: false,
      form: {
        name: "",
        value: "",
      },
      contacts: [],
    };
  },
  computed: {
    canCreate() {
      return this.form.value.trim() && this.form.name.trim();
    },
  },
  methods: {
    async createContact() {
      //   const { ...contact } = this.form;
      const contact = { ...this.form };
      const newContact = await request("/api/contacts", "POST", contact);
      console.log("response newContact>>", newContact);
      //   console.log(contact);
      this.contacts.push(newContact);

      this.form.name = this.form.value = "";
      //   console.log(this.contacts);
    },
    async markContact(id) {
      const contact = this.contacts.find((c) => c.id === id);
      const updated = await request(`/api/contacts/${id}`, "PUT", {
        ...contact,
        marked: true,
      });

      contact.marked = updated.marked;
    },
    async removeContact(id) {
      await request(`/api/contacts/${id}`, "DELETE");
      this.contacts = this.contacts.filter((c) => c.id !== id);
    },
  },
  async mounted() {
    this.loading = true;
    const data = await request("/api/contacts");
    console.log("data>>", data);
    this.contacts = data;
    this.loading = false;
  },
});
//50:00 Универсальный метод запроса
async function request(url, method = "GET", data = null) {
  try {
    const headers = {};
    let body;
    if (data) {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(data);
    }

    const response = await fetch(url, {
      method,
      headers,
      body,
    });
    return await response.json();
  } catch (error) {
    console.warn("Error", error.message);
  }
}