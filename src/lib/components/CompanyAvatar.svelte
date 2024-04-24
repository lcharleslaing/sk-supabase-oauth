<script>
  export let companyName = import.meta.env.VITE_COMPANY_NAME || "Add to .env";

  export let initials = companyName
    .split(" ")
    .map((/** @type {any[]} */ word) => word[0])
    .join("")
    .toUpperCase();

  $: initials;
</script>

<div class="w-12">
  <svg
    class="text-base-content"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 64 64"
    version="1.1"
    ><circle fill="currentColor" cx="32" cy="32" r="32" /><text
      x="50%"
      y="50%"
      style="color: currentColor;line-height: 1;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
      alignment-baseline="middle"
      text-anchor="middle"
      font-size="26"
      font-weight="400"
      dy=".1em"
      dominant-baseline="middle"
      fill="#ffffff">{initials}</text
    ></svg
  >
</div>
