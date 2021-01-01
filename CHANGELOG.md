# Able2 Changelog

## [Unreleased][2.2.0] - TBD

### Added/Changed

#### Sliders:
- All HTML range inputs have been replaced with custom made sliders.
- Holding the shift key while moving any slider slows down the rate of change allowing for precision adjustments.
- Slider snap points have markers.
- Slider actions are now throttled, causing preview to refresh once per 60ms. Huge performance improvement.

#### Preview:
- Timecode slider is now on it's own width-spanning line.
- Timecode display is now editable.
- Preview no longer crops to Start and End. Instead original duration persists and Start and End display as slider markers.
- Keyboard shortcuts in preview window based on Avid's mark in/out shortcuts. I or E = mark start, O or R = mark end, D = clear start, F = clear end, G = clear both, Q = go to start point, W = go to end point.

#### Start/End/Split:
- Introducing Split, a new feature that auto splits the current media into smaller clips by automatically duplicating the media and adjusting the start and end times to the desired subclip duration.
- Double headed slider for Start and End times. Allows for shifting start and end simultaneously.
- Start and End inputs now accept frames.
- Pressing up and down arrows will increment Start and End inputs by 1 frame.
- Start and End times can no longer cross or meet each other. Should entries conflict, they will auto adjust to a positive duration of 1 frame.

#### Formatting:
- Background "Black" option has been replaced by a color picker that defaults to black, allowing for custom background colors.
- While color picker is selected, you can click on any pixel in the preview image to set the bg color. Cursor will become an eyedropper icon when hovering over preview

#### Crop:
- The four Crop sliders have been condensed into two double headed sliders. Allows for shifting both crop values simultaneously.
- Linked crop sliders now adjust relative to the current offset rather than the exact center of the media.
- Crop Bottom and Right values are now counted down from 100 rather than up from 0.
- Double clicking on the crop slider snaps back to center.

#### Scale:
- Scale distortion is now preserved when clicking "Fit to Frame" buttons while x and y are linked.
- Scale X and Y positions now appear as snap points on the opposite slider while x and y are unlinked.

#### Rotation
- Added Offset angle option. For transform mode only. You can now adjust the angle of a video or image by up to 45° in either direction. Intended to be used in combination with the 90/180° options for angles beyond 45° (better for CPU)
- Reflect Horizontally and Vertically now swap values when media is rotated by 90deg.

#### Other:
- Pressing up and down arrows will increment Screen Record Timer by 1 second.
- Reorganized Preferences window and added new prefs: default download mode, default screen capture mode, screen recorder frame rate, default timer duration, timer default on/off, slider snap points on/off, default split duration, start over warning, and outpur frame rates 29.97 and custom field.

### Updated
- Video service compatibility
- Electron 11
- FFmpeg+FFprobe 4.3.1

### Removed
- Percent signs on all sliders. It's obvious what the numbers are and removing the signs allows for more slider track room.
- Enable switches for Start and End inputs.
- Red invalid text for timecode inputs. New min and max properties now prevent bad entries.

### Fixed
- Bug where reflecting was causing 90cw and 90ccw to invert directions.
- Bug causing preview to occasionally not update to the selected frame.

## [2.1.4] - 12.4.2020

### Updated
- Video service compatibility

## [2.1.3] - 11.2.2020

### Added
- Screengrab button in preview window. Takes screengrabs of video and retains settings.
- Screen record now shows time ellapsed (time remaining if timer enabled)
- Holding shift allows for fine tuning of Position, Scale and Crop sliders and number fields.
- Pressing Up and Down arrows now control which media item is selected.
- Keyboard Shortcuts in batch selector for Copy All Settings (Ctrl|Cmd+C), Paste Settings (Ctrl|Cmd+V), Duplicate Media (Ctrl|Cmd+D), Remove Media (Backspace|Delete), Move Up (Ctrl|Cmd+ArrowUp) and Move Down (Ctrl|Cmd+ArrowDown)
- All optional warning dialogs now have a "Don't show this message again" option
- "Directory Not Found" dialog now has a "Remove from Save Locations" option

### Changed
- Downloads can be cancelled during the pending phase (grey dot).
- Screen record timer, start and end timecode fields now turn red when set to a value that will result in empty media.

### Updated
- Video service compatibility

### Fixed
- Bug preventing negative sign and leading decimal point from being typed into the number fields next to the sliders.
- Bug causing Radio buttons to lose focus on select.
- Bug allowing tabbed browsing under record source selector and render queue.
- Bug preventing some start and end times from changing with multiple media items.
- No longer renders a dud file when end timecode is set to zero. Error message now displays during render.

## [2.1.2] - 9.21.20

### Added
- Media items can now be rearranged by dragging and dropping in both the Ready Queue and Batch Selector as can Save Locations in Preferences.
- Help page is back.
- Added $b token for file and batch names. Can be used for inserting batch size ('Video $n of $b' ---> 'Video 1 of 10', 'Video 2 of 10', 'Video 3 of 10'...)
- Added $r token for file and batch names. Will number media items in descending order.

### Changed
- Duplicate filenames now follow the "&lt;#&gt; of &lt;total&gt;" pattern instead of just a single digit.
- No more overwrites on save. Number will append to filename if file with same name exists.

### Updated
- Video service compatibility
- Electron 10.1.2. It seems this fixed the not-opening bug.

### Fixed
- Duplicate filename numbering no longer adds characters to filename beyond max character length. If filename is nearing 255 characters, enough characters will be deleted to make room for concatenating number string.
- Bug causing filename in a single item batch to remain disabled if a left over batch name is present with "replace" selected.

## [2.1.1] - 9.3.2020

### Added
- Stop button to allow partial downloading of livestreams.
- Can now disable filtering out of characters that cause errors in Aspera (allows you to keep foreign characters in a filename if aspera is not needed).
- Restore Default button in Preferences window.

### Changed
- Illegal filename characters are now replaced by an underscore instead of their respective URI code.
- Duplicate numbering now concatenates to filename with a space instead of period.

### Fixed
- Bug causing some downloaded videos to be loaded as audio
- Bug causing save errors by allowing filename length to be up to 280 characters, beyond system max length. Now 250.

## [2.1.0] - 8.20.2020

### Added
- Audio file conversion to either .wav, .mp3 or .mp4 with color bars.
- Ability to extract or remove audio from videos.
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