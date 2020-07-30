# Able2

This repo was made for hosting JSON and public releases for my app.

## [Unreleased][2.0.1] - TBD

### Fixed
- Bug causing TV and Laptop overlay to only render the first 5 secs of video
- Focus rings for accessibilty, accidentally left out of 2.0.0

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

### Changed
- Video now downloads before choosing render settings

### Updated
- Video service compatibility

### Removed
- Windows 32bit support resulting in a smaller application size and faster updates
- Help page. A little too much for this lone developer to write right now. Open to any contributions.

## v1.2.6 - 7.17.2020

### Fixed
- Bug causing uninstallation, reinstallation and updates to fail

## v1.2.5 - 7.9.2020

### Updated
- Video service compatibility

## v1.2.4 - 4.29.2020

### Changed
- In accordance with our graphics department change, source overlay has been moved slightly higher to avoid it appearing under the ticker.

## v1.2.3 - 4.24.2020

### Fixed
- Inaccurate download numbers

### Changed
- Increased character limit on filename field

## v1.2.2 - 2.4.2020

### Fixed
- Bug causing to temp files to not delete after a batch process

## v1.2.1 - 2/4/2020

### Updated
- Video service compatibility

## v1.2.0 - 1.16.2020

### Added
- Source on Top feature, allowing source overlay to appear on top of video instead of bottom
- Retry button after update fails

### Changed
- Major security improvements

## v1.1.3 - 12.30.2019

### Changed
- Added .m2ts to accepted extensions

### Updated
- Video service compatibility

## v1.1.2 - 11.01.2019

### Fixed
- Occasionally inaccurate frame rate display

### Changed
- Added .mts to accepted extensions

## v1.1.1 - 9.30.2020

### Changed
- Safe character filtering for filename field. Now filters out any character that causes errors in Aspera.

## v1.1.0 - 9.24.2020

### Added
- Rotate and Flip feature
- No audio warning on screen record on Mac Version
- Version number appears on help page

### Fixed
- Improved error catching on downloads. Was throwing errors for minor error that did not effect obtaining video.
