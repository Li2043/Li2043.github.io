# Li Shen — academic site

Static portfolio for [https://li2043.github.io](https://li2043.github.io) (the GitHub user site for `Li2043`).

Built with Astro, TypeScript, and Tailwind CSS. Output is fully static.

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

The site URL is configured in `astro.config.mjs` as `https://li2043.github.io` with `base: "/"`, which is what a repository named `Li2043.github.io` needs.

## Experiment videos

Keyframes are already in `public/images/research/fair-marl/`. Videos are optional. If a file is missing, the page shows the keyframe and a “Video coming soon” label.

Add MP4 files here (no audio required; the player is always muted):

| File | Experiment |
| --- | --- |
| `public/videos/exp01-baseline.mp4` | Baseline representative episode |
| `public/videos/exp02-maximin.mp4` | Terminal Maximin |
| `public/videos/exp03-wsc.mp4` | Welfare-state communication |
| `public/videos/exp04-dws.mp4` | Dense welfare shaping |
| `public/videos/exp05-mechanism.mp4` | Mechanism reconstruction |

Suggested encoding: 1920×1080, H.264, no audio. Replace a file and rebuild; paths are listed in `src/data/experiments.ts`.

## CV and thesis PDFs

These links stay visibly unavailable until the files exist:

- `public/docs/Li_Shen_Academic_CV.pdf`
- `public/docs/Li_Shen_MSc_Thesis.pdf`

A public email is also optional. Set `email` in `src/data/profile.ts` when you want it shown.

## Research copy

Editable content lives in:

- `src/data/profile.ts`
- `src/data/research.ts`
- `src/data/experiments.ts`
- `src/data/projects.ts`

Episode clips are illustrative. They are not the 12-seed aggregate results. EXP05 is marked as a mechanism reconstruction, not an exact replay. Selection notes used while writing the site are kept in `source_materials/viva_clips/` and are not published.

## GitHub Pages

1. Create a public repository named `Li2043.github.io`.
2. Push this project to the `main` branch.
3. In the repository settings, set Pages to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds `dist/` and deploys it.

The live site will be `https://li2043.github.io/`.
