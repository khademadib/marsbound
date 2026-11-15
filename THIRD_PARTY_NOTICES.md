# Third-party notices

## Press Start 2P

The game loads the **Press Start 2P** display font through a Google Fonts stylesheet:

- [Google Fonts specimen](https://fonts.google.com/specimen/Press+Start+2P)
- [Official font license file in the Google Fonts repository](https://raw.githubusercontent.com/google/fonts/main/ofl/pressstart2p/OFL.txt)

The font's notice identifies:

> Copyright 2012 The Press Start 2P Project Authors (cody@zone38.net), with Reserved Font Name "Press Start 2P".

Press Start 2P is licensed under the **SIL Open Font License, Version 1.1 (OFL-1.1)**. The font remains under its own license and is not relicensed under the MarsBound project license. The current repository loads the font from Google Fonts and does not bundle a font binary. If font files are later copied into the repository or distributed with a release, include the required OFL notice and license with them.

## NASA/JPL images

The game displays NASA/JPL images in its learning cards. Images are loaded remotely from NASA's image service and NASA/JPL Photojournal; they are not bundled in the repository. The card interface displays a credit line and a link to the source page. The current image IDs, source pages, and credit text are listed in [SOURCES.md](SOURCES.md).

NASA's [Images and Media Usage Guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/) state that NASA media is generally not subject to U.S. copyright and may be used for factual educational or informational purposes under the guidelines. NASA should be acknowledged as the source, and the use must not imply NASA endorsement. NASA also explains that some material on its sites is third-party copyrighted; a third-party copyright notice means NASA's permission does not automatically give others permission to reuse that item.

The game therefore:
- identifies the NASA/JPL image source and image credit on each photo card;
- links to the corresponding NASA/JPL source page;
- uses the images in an educational, factual context;
- does not use NASA's insignia, logotype, or seal, and does not claim NASA approved or endorsed the game.

Before adding any new NASA-hosted image, check the individual image's page for third-party copyright notices and update [SOURCES.md](SOURCES.md) with the exact ID, source, and credit. Do not assume every file hosted on a NASA website is automatically free of third-party rights.

## Other assets and code

The current game draws its pixel-art world in Canvas and generates sounds/music with the Web Audio API. The `favicon.svg` is a project-created MarsBound icon. No third-party JavaScript libraries, separate audio files, or external stock-photo libraries were found in the reviewed v16 HTML.

Update this file whenever the game adds a new font, image, sound, library, dataset, template, or other third-party material. Record the creator/source, exact license or usage terms, and any required attribution. Do not bundle a third-party asset unless the team has the rights to do so.
