# opencode-desktop-vscode-palette

## Установка через агента

Скопируйте в чат агента:

```text
Установи https://github.com/troyan-dy/opencode-desktop-vscode-palette для OpenCode Desktop по инструкции в README. Подключи плагин глобально, сохрани текущие настройки и не дублируй запись, если он уже подключён.
```

Из терминала ту же задачу можно передать агенту OpenCode:

```sh
opencode run "Установи https://github.com/troyan-dy/opencode-desktop-vscode-palette для OpenCode Desktop по инструкции в README. Подключи плагин глобально, сохрани текущие настройки и не дублируй запись, если он уже подключён."
```

---

One Dark Pro colors for the OpenCode Desktop dark theme.

From your global OpenCode configuration directory (normally `~/.config/opencode`):

```sh
git clone https://github.com/troyan-dy/opencode-desktop-vscode-palette.git local-themes/vscode-palette
```

Add `"./local-themes/vscode-palette"` to the `plugins` array in the global `opencode.jsonc`.
