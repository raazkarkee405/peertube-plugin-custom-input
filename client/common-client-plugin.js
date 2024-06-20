import Tagify from "@yaireo/tagify";
function register({ registerHook, peertubeHelpers, registerClientRoute }) {
  registerClientRoute({
    route: "/custom-route",
    onMount: async ({ rootEl }) => {
      const input = document.createElement("input");
      input.name = "basic";
      input.placeholder = "Enter here";
      rootEl.append(input);

      const inputField = document.querySelector("input[name=basic]");
      new Tagify(inputField);
    },
  });
}

export { register };

