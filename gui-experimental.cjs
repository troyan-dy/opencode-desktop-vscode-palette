const { Plugin, Style } = require("@opencode/plugin/gui");

// Match the installed VS Code One Dark Pro palette. Keep this scoped to the
// existing dark theme so switching themes or color modes works as usual.
const root = ':root[data-theme="onedarkpro"][data-color-scheme="dark"]';
const submit = `${root} [data-component="composer"] [data-action="composer-submit"]`;
const comment = `${root} [data-component="line-comment-v2"][data-variant="editor"]`;
const addComment = `${root} [slot="gutter-utility-slot"] > button`;
const css = `
${root} {
  --v2-background-bg-base: #282c34;
  --v2-background-bg-deep: #21252b;
  --v2-background-bg-layer-01: #21252b;
  --v2-background-bg-layer-02: #2c313c;
  --v2-background-bg-layer-03: #323842;
  --v2-background-bg-layer-04: #404754;
  --v2-background-bg-button-neutral: #404754;
  --v2-background-bg-accent: #4d78cc;
  --v2-text-text-base: #abb2bf;
  --v2-text-text-muted: #9da5b4;
  --v2-text-text-faint: #6b717d;
  --v2-text-text-accent: #61afef;
  --v2-text-text-code-accent: #d19a66;
  --v2-text-text-code-path: #61afef;
  --v2-icon-icon-base: #d7dae0;
  --v2-icon-icon-muted: #9da5b4;
  --v2-icon-icon-faint: #6b717d;
  --v2-border-border-muted: #181a1f;
  --v2-border-border-base: #3e4452;
  --v2-border-border-strong: #404754;
  --v2-border-border-focus: #61afef;
  --v2-state-fg-danger: #c24038;
  --v2-state-fg-warning: #d19a66;
  --v2-state-fg-info: #61afef;
  --v2-state-fg-success: #98c379;

  --background-base: #282c34;
  --background-strong: #21252b;
  --background-stronger: #282c34;
  --background-weak: #21252b;
  --surface-base-hover: #2c313a;
  --surface-base-active: #323842;
  --surface-raised-base: #21252b;
  --surface-float-base: #21252b;
  --input-base: #1d1f23;
  --input-focus: #1d1f23;
  --button-primary-base: #404754;
  --button-secondary-base: #30333d;
  --border-base: #3e4452;
  --border-weak-base: #181a1f;
  --text-base: #abb2bf;
  --text-weak: #9da5b4;
  --text-weaker: #6b717d;
  --text-strong: #d7dae0;
  --text-interactive-base: #61afef;
  --text-diff-add-base: #8cc265;
  --text-diff-delete-base: #e05561;
  --icon-diff-add-base: #109868;
  --icon-diff-delete-base: #9a353d;
  --icon-diff-modified-base: #948b60;
  --surface-diff-unchanged-base: #282c34;
  --surface-diff-add-base: #00809b33;
  --surface-diff-delete-base: #9a353d33;

  /* TextMate foregrounds; OpenCode's "primitive" role colors functions. */
  --syntax-comment: #7f848e;
  --syntax-string: #98c379;
  --syntax-keyword: #c678dd;
  --syntax-primitive: #61afef;
  --syntax-constant: #d19a66;
  --syntax-variable: #e06c75;
  --syntax-property: #d19a66;
  --syntax-type: #e5c07b;
  --syntax-object: #abb2bf;
  --syntax-punctuation: #abb2bf;
  --syntax-operator: #abb2bf;
  --syntax-regexp: #e06c75;
  --syntax-info: #61afef;
  --syntax-diff-add: #98c379;
  --syntax-diff-delete: #e06c75;
  --markdown-text: #abb2bf;
  --markdown-link: #61afef;
  --markdown-code: #d19a66;
}
${root} [data-slot="vertical-tabs-sidebar"],
${root} [data-slot="session-review-v2-sidebar"] {
  background-color: #21252b;
}
${root} [data-titlebar-tab] {
  --tab-base: #21252b;
  --tab-overlay: transparent;
}
${root} [data-titlebar-tab]:hover { --tab-base: #323842; }
${root} [data-titlebar-tab][data-active="true"] {
  --tab-base: #282c34;
  color: #dcdcdc;
}
${root} body [data-component="user-message"] [data-slot="user-message-text"] {
  background-color: #6776961d;
}
${root} body [data-component="user-message"] [data-slot="user-message-text"]:hover {
  background-color: #6776963a;
}
${root} body [data-component="composer"] {
  background-color: #1d1f23;
  border-color: #181a1f;
  caret-color: #528bff;
}
${root} body [data-component="composer"]:focus-within { border-color: #61afef; }
${root} [data-component="composer-editor"] { color: #abb2bf; }
/* Send and Stop share one button; only its native icon changes. */
${submit} {
  background: var(--surface-base-hover);
  color: var(--v2-icon-icon-base);
  box-shadow: none;
  text-shadow: none;
}
${submit}:hover:not(:disabled) { background: var(--button-primary-base); }
${submit}:active:not(:disabled) { background: var(--surface-base-active); }
${submit}:focus-visible { outline: 2px solid var(--v2-border-border-focus); outline-offset: 2px; }
${submit}:disabled { background-color: var(--button-secondary-base); color: var(--v2-icon-icon-muted); opacity: 1; }
/* The gutter + sets its surface and stroke inline through the inverse tokens. */
${addComment} {
  --v2-background-bg-inverse: #2c313a;
  --v2-icon-icon-inverse: #61afef;
  --shadow-xs: inset 0 0 0 1px #4b5362;
}
${addComment}:hover { --v2-background-bg-inverse: #323842; --shadow-xs: inset 0 0 0 1px #61afef; }
${addComment}:active { --v2-background-bg-inverse: #21252b; }
${addComment}:focus-visible { outline: 2px solid #61afef; outline-offset: 1px; }
/* The line annotation has its own shell, input and button variants. */
${comment} [data-slot="line-comment-v2-shell"] {
  background: #21252b;
  box-shadow: inset 0 0 0 1px #3e4452, 0 2px 6px #0004;
}
${comment} [data-slot="line-comment-v2-textarea"] {
  background: #1d1f23;
  color: #abb2bf;
  caret-color: #61afef;
  padding: 7px 9px;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px #3e4452;
}
${comment} [data-slot="line-comment-v2-textarea"]::placeholder { color: #9da5b4; opacity: 1; }
${comment} [data-slot="line-comment-v2-textarea"]:focus,
${comment} [data-slot="line-comment-v2-footer-actions"] button:focus-visible {
  outline: 1px solid #61afef;
  outline-offset: 1px;
}
${comment} [data-slot="line-comment-v2-footer-actions"] button[data-variant="ghost"] {color: #abb2bf;}
${comment} [data-slot="line-comment-v2-footer-actions"] button[data-variant="ghost"]:hover:not(:disabled) {background: #2c313a; color: #d7dae0;}
${comment} [data-slot="line-comment-v2-footer-actions"] button[data-variant="contrast"] {
  background: #404754;
  color: #d7dae0;
  text-shadow: none;
  box-shadow: none;
}
${comment} [data-slot="line-comment-v2-footer-actions"] button[data-variant="contrast"]:hover:not(:disabled) {background: #4a5261;}
${comment} [data-slot="line-comment-v2-footer-actions"] button[data-variant="contrast"]:disabled {background: #30333d; color: #9da5b4; opacity: 1;}
${root} [data-component="markdown"] :not(pre) > code:not(a > code):not([data-inline-code-kind="path"]) {
  color: #d19a66;
}
${root} [data-component="markdown"] blockquote { border-inline-start-color: #4b5362; }
${root} [data-slot="session-timeline-scroll"] { --timeline-quote-background: #67769660; }
${root} ::selection { background-color: #67769660; }
`;

exports.default = Plugin.define({
  setup(ctx) { ctx.add(Style, css); },
});
