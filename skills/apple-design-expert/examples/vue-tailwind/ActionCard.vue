<template>
  <article
    class="max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
  >
    <h2
      class="text-xl font-semibold tracking-tight text-slate-950 dark:text-white"
    >
      <slot name="title" />
    </h2>
    <p class="mt-2 leading-6 text-slate-600 dark:text-slate-300"><slot /></p>
    <button
      class="mt-6 min-h-11 rounded-xl bg-blue-600 px-4 font-semibold text-white outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
    >
      <slot name="action" />
    </button>
  </article>
</template>
