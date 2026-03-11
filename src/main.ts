import { setCssVar } from "quasar";
import type { Router } from "vue-router";
import Landing from "./components/Landing.vue";

export default {
  boot({ router }: { router: Router }) {
    setCssVar("primary", "#581845");

    router.addRoute({
      name: "landing",
      path: "/welcome",
      meta: {
        fullpage: true,
        breadcrumbs: [
          {
            type: "siteName",
          },
        ],
      },
      component: Landing,
    });
  },
};
