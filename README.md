# opencode-desktop-vscode-palette

One Dark Pro colors for the OpenCode Desktop dark theme.

## Install in OpenCode Desktop

From the global OpenCode configuration directory (normally `~/.config/opencode`), run:

```sh
git clone https://github.com/troyan-dy/opencode-desktop-vscode-palette.git local-themes/vscode-palette
```

Add the following entries to the existing `plugins` array in your global `opencode.jsonc`:

```jsonc
{
  "plugins": [
    "./local-themes/vscode-palette"
  ]
}
```

## Usage

Select the **One Dark Pro** theme and dark color mode in OpenCode Desktop. The palette is scoped to that combination. Colors are based on [One Dark Pro](https://github.com/Binaryify/OneDark-Pro); its license is in `third-party/`.

This plugin uses the [experimental OpenCode Desktop GUI plugin API](https://opencode.ai/docs/build/plugins/gui).
