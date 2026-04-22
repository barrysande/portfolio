# Designs

## Design 1

/\*

- Atelier â€” by Dehlya Studio (2026)
- Editorial ivory, considered ink
-
- Generated from Dehlya Studio / AuraFlow Theme Studio.
- Drop this file into your site and apply via <html data-theme="atelier">,
- or copy the :root variables to use directly.
  \*/

:root[data-theme="atelier"],
.theme-atelier {
--color-background: #F4EFE6;
--color-surface: #FFFBF2;
--color-surface-alt: #EAE3D3;
--color-border: #CEC2A4;
--color-text: #1F1B15;
--color-text-muted: #6B6357;
--color-text-inverse: #FFFBF2;
--color-primary: #2A4A3E;
--color-primary-contrast: #FFFBF2;
--color-secondary: #8B6F47;
--color-accent: #C9A96E;
--color-success: #6B8E5A;
--color-warning: #C9A96E;
--color-danger: #9B3C3C;
--radius: 0.25rem;
--radius-lg: 0.5rem;
--shadow: 0 2px 16px -6px rgba(31, 27, 21, 0.12);
--shadow-lg: 0 20px 50px -18px rgba(31, 27, 21, 0.22);
--font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
--font-display: "Cormorant Garamond", "Playfair Display", Georgia, serif;
--font-mono: "Roboto Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
--gradient: linear-gradient(135deg, #2A4A3E 0%, #C9A96E 100%);
--pattern: radial-gradient(rgba(31,27,21,0.08) 1px, transparent 1px), radial-gradient(rgba(201,169,110,0.08) 1px, transparent 1px);
}

:root[data-theme="atelier"] body,
.theme-atelier body {
background: var(--color-background);
color: var(--color-text);
font-family: var(--font-sans);
}

/_ Utility classes â€” optional, use if you like _/
.theme-atelier .af-surface { background: var(--color-surface); color: var(--color-text); border-radius: var(--radius-lg); box-shadow: var(--shadow); padding: 1.5rem; border: 1px solid var(--color-border); }
.theme-atelier .af-button { background: var(--color-primary); color: var(--color-primary-contrast); border-radius: var(--radius); padding: 0.75rem 1.5rem; font-weight: 600; border: 0; cursor: pointer; box-shadow: var(--shadow); font-family: var(--font-sans); }
.theme-atelier .af-display { font-family: var(--font-display); color: var(--color-text); }
.theme-atelier .af-muted { color: var(--color-text-muted); }

## Design 2

/\*

- Blueprint â€” by Dehlya Studio (2026)
- Technical drawings on cyanotype paper
-
- Generated from Dehlya Studio / AuraFlow Theme Studio.
- Drop this file into your site and apply via <html data-theme="blueprint">,
- or copy the :root variables to use directly.
  \*/

:root[data-theme="blueprint"],
.theme-blueprint {
--color-background: #0A1929;
--color-surface: #112A3F;
--color-surface-alt: #1A3952;
--color-border: #2A5580;
--color-text: #D0E4F5;
--color-text-muted: #7FA5C8;
--color-text-inverse: #0A1929;
--color-primary: #4FC3F7;
--color-primary-contrast: #0A1929;
--color-secondary: #FFFFFF;
--color-accent: #FFB74D;
--color-success: #66BB6A;
--color-warning: #FFB74D;
--color-danger: #EF5350;
--radius: 0;
--radius-lg: 0.125rem;
--shadow: 0 2px 8px rgba(0,0,0,0.4);
--shadow-lg: 0 12px 32px -4px rgba(0,0,0,0.6), 0 0 0 1px rgba(79,195,247,0.1);
--font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
--font-display: "Roboto Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
--font-mono: "Roboto Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
--gradient: linear-gradient(135deg, #0A1929 0%, #2A5580 60%, #4FC3F7 100%);
--pattern: linear-gradient(to right, rgba(79,195,247,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(79,195,247,0.08) 1px, transparent 1px);
}

:root[data-theme="blueprint"] body,
.theme-blueprint body {
background: var(--color-background);
color: var(--color-text);
font-family: var(--font-sans);
}

/_ Utility classes â€” optional, use if you like _/
.theme-blueprint .af-surface { background: var(--color-surface); color: var(--color-text); border-radius: var(--radius-lg); box-shadow: var(--shadow); padding: 1.5rem; border: 1px solid var(--color-border); }
.theme-blueprint .af-button { background: var(--color-primary); color: var(--color-primary-contrast); border-radius: var(--radius); padding: 0.75rem 1.5rem; font-weight: 600; border: 0; cursor: pointer; box-shadow: var(--shadow); font-family: var(--font-sans); }
.theme-blueprint .af-display { font-family: var(--font-display); color: var(--color-text); }
.theme-blueprint .af-muted { color: var(--color-text-muted); }

