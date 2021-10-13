<script>
  import logo from "./assets/svelte.png";
  import Counter from "./lib/Counter.svelte";
  import { Router } from "@roxi/routify";
  import routes from "../.routify/routes.default.js";
</script>

<Router {routes} />
