# Able2

Able2 is an all-in-one News Editor's video acquisition tool customized for the Editors and Photographers of WFTV in Orlando, FL. Able2 is able to download media from various online services, record video and audio from a user's desktop and convert and format video, image and audio files for air.

This repo does not contain source code. It is intended to host Able2 public releases and JSON.

## [Unreleased][2.1.1] - TBD

### Added
- Stop button to allow partial downloading of youtube livestreams.
- Can now disable filtering out of characters that cause errors in Aspera (allows you to keep foreign characters in a filename if aspera is not needed).

## [2.1.0] - 8.20.2020

### Added
- Audio file conversion to either .wav, .mp3 or .mp4 with color bars.
- Ability to extract or remove audio from videos.
- Support for downloading from SoundCloud and other audio services covered by youtube-dl.
- Preview displays actual waveform data for audio files.
- .psd support. Treats them just like an image.
- Now encodes all video audio streams as AAC 192k 48kHz.
- Batchname options: Replace, Prepend, Append.
- Ability to sort items in a batch: Move Up and Move Down options added to dropdown menus.

### Changed
- Codec support maximized. No longer prechecking by parsing file extensions. Using Fprobe for prechecking so all available codecs in Ffmpeg are now supported.
- Animated PNGs and Motion JPEGS are now treated like GIFS.
- Images that lack a visible moving background are now exported as .png's rather than video.
- Images can now have box overlays.
- Fill Frame mode can now have a background if an alpha channel is detected.

### Updated
- Ffmpeg and Ffprobe binaries.

### Fixed
- Got rid of the huge delay that occurs after a screen recording. Was caused by the need to convert the video. Finally found a work around.
- Mac version now supports audio during screen records... sort of. An app called Soundflower has to be an installed on the user's machine. It's not ideal, but the best option to get around Mac's unfortunate limitations.
- Preview can now display alpha channels.
- Filenames are now retained after hitting Back when a Batch Name was entered.
- Bug causing the combined settings of ARC: Fit to Frame + Background: Transparent + Overlay: TV|Laptop to not output an alpha channel.
- Bug causing files not to save when directory selector popup appears in lieu of active save locations.

### Removed
- No longer providing a mac .zip version. It won't work on OS Catalina. Waiting on electron-builder to fix the issue.

## [2.0.1] - 7.31.2020

### Added
- Output frame rate feature in preferences, can set it to 'auto' or '59.94fps'.

### Fixed
- Bug causing TV and Laptop overlay to only render the first 5 secs of video.
- Focus rings for accessibilty, accidentally left out of 2.0.0.

## [2.0.0] - 7.29.2020

### Added
- Multiple Downloads
- Multiple Screen Records
- Mixed batches of downloads, files and screen records
- Ability to record on individual monitors and windows
- Individual settings for each item in a batch
- A Preview thumbnail, with grid and ability to customize grid color
- Transform mode featuring sliders for Position, Scale and Crop
- A position slider for Fill Frame mode
- Custom background and ARC modes for TV and Laptop overlays
- Edit All feature allowing user to edit all videos/images simultaneously
- Copy, Paste and Apply to All features for all settings or individual settings
- Ability to duplicate videos/images for multiple versions
- Reveal in cache feature as a failsafe for when downloads work but rendering fails
- Batch name feature with tokens for batch number ($n), date ($d, $D) and time ($t, $T)
- Concurrent Renders, and ability to adjust how many
- Custom scratch disks locations
- Splash screen on app start

### Changed
- Video now downloads before choosing render settings
- Update now opens as separate window with new look for download meter

### Updated
- Video service compatibility

### Removed
- Windows 32bit support resulting in a smaller application size and faster updates
- Help page. A little too much for this lone developer to write right now. Open to any contributions.

## [1.2.6] - 7.17.2020

### Fixed
- Bug causing uninstallation, reinstallation and updates to fail

## [1.2.5] - 7.9.2020

### Updated
- Video service compatibility

## [1.2.4] - 4.29.2020

### Changed
- In accordance with our graphics department change, source overlay has been moved slightly higher to avoid it appearing under the ticker.

## [1.2.3] - 4.24.2020

### Fixed
- Inaccurate download numbers

### Changed
- Increased character limit on filename field

## [1.2.2] - 2.4.2020

### Fixed
- Bug causing temp files to not delete after a batch process

## [1.2.1] - 2.4.2020

### Updated
- Video service compatibility

## [1.2.0] - 1.16.2020

### Added
- Source on Top feature, allowing source overlay to appear on top of video instead of bottom
- Retry button after update fails

### Changed
- Major security improvements

## [1.1.3] - 12.30.2019

### Changed
- Added .m2ts to accepted extensions

### Updated
- Video service compatibility

## [1.1.2] - 11.01.2019

### Fixed
- Occasionally inaccurate frame rate display

### Changed
- Added .mts to accepted extensions

## [1.1.1] - 9.30.2019

### Changed
- Safe character filtering for filename field. Now filters out any character that causes errors in Aspera.

## [1.1.0] - 9.24.2019

### Added
- Rotate and Flip feature
- No audio warning on screen record on Mac Version
- Version number appears on help page

### Fixed
- Improved error catching on downloads. Was throwing errors for minor error that did not effect obtaining video.

## [1.0.0] - 9.16.2019
