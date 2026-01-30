# Able2 Changelog

## [2.5.8] - 1.29.2026

### Updated
- Updated internal downloader to latest stable version.

## [2.5.7] - 10.23.2025

### Updated
- Updated internal downloader to latest stable version.

## [2.5.6] - 10.20.2025

### Updated
- Updated internal downloader to latest stable version.

## [2.5.5] - 11.13.2024

### Updated
- Updated internal downloader to latest stable version.
- Electron 32

## [2.5.4] - 7.13.2024

### Updated
- Updated internal downloader to latest stable version.
- Electron 31

## [2.5.3] - 5.30.2024

### Updated
- Updated internal downloader to latest stable version. (a certain major social media site that shortened its name within the last year is now compatible under the new name)

## [2.5.2] - 5.24.2024

### Changed
- Anamorphic video is now automatically detected and resized to its display aspect ratio in Fill, Fit and Transform modes. None preserves the anamorphic sample size and metadata.

### Updated
- Updated internal downloader to latest stable version.
- Electron 30.

## [2.5.1] - 2.22.2024

### Changed
- Increased source overlay font size

## [2.5.0] - 2.16.2024

### Added
- New blue background
- New source look
- New date and time tokens: $ds, $ts (Date/Time import started)

### Changed
- Consolidated token dropdown and submenu's

### Updated
- Updated internal downloader to latest stable version.

### Removed
- Old blue background
- Grey BG
- TV and Laptop Overlays (TV may come back in a future version)
- Date/Time Source option in the preferences (obsolete with new tokens)

### Fixed
- Bug causing preview to freeze if "Close" is selected after rendering.

## [2.4.1] - 12.14.2023

### Fixed
- Bug causing all Fill Frame exports to error.

### Changed
- All subwindows on PC are back to draggable.

## [2.4.0] - 12.7.2023

### Added
- Presets! Able2 can now store and apply preset media attributes to media clips. There are two types of Presets. Presets and Batch Presets. Batch Presets allow users to create multiple versions of a single or multiple media clips in a single click. Both Presets and Batch Presets can be created, modified, sorted and deleted in the new Preset Editor window.
- Undo and Redo. Able2 now supports undo history for nearly every action. Select Edit > Undo|Redo or press <kbd>Ctrl</kbd>|<kbd>Cmd</kbd>+<kbd>Z</kbd> to Undo or <kbd>Ctrl</kbd>|<kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd> to Redo (to match Avid, Redo via <kbd>Ctrl</kbd>|<kbd>Cmd</kbd>+<kbd>R</kbd> is also supported).
- Ability to select multiple media clips for editing. Able2 previously could only edit 1 clip or all clips. Now it can edit 1, all or some. Use <kbd>Shift</kbd>+Click to select multiple media clips in sequence and <kbd>Ctrl</kbd>|<kbd>Cmd</kbd>+Click to select out of order. Use <kbd>Ctrl</kbd>|<kbd>Cmd</kbd>+Click to deselect selected clips.
- Select All and Deselect All buttons in place of the Edit All checkbox.
- Edit All dropdown menu with options: Select All, Deselect All, Duplicate Selected/All, Apply Preset to Selected/All, Apply Preset to Selected/All as Duplicate, Remove Selected/All.
- New media dropdown options: Apply Attributes to Selected, Select Duplicates, Apply Preset, Apply Preset as Duplicate, Save as Preset.
- New panel dropdown options: Apply to Selected, Save as Preset.
- Insert Replacement Token menu next to Filename, Batch Name and new Preset Name text fields. User no longer needs to remember what the tokens are or that they exist.
- New tokens $i, $li, $v and $lv for instance and version numbering of media clips.
- Date and Time Source setting in the preferences. User can now select whether that date and time tokens are replaced by import started (default), import completed or export started time.
- Render queue now displays a "View in Explorer|Finder" button next to each successfully rendered item. A popup menu of directories displays if multiple save locations were selected.
- Select All by Default setting in the preferences.
- Dropdown menus now display their keyboard shortcut to the right if available.
- Creative Commons License Agreement and Help > View License menu option.

### Changed
- Fit to Height and Fit to Width buttons in the Scale panel now fit any selected media relative to the media and frame dimensions as opposed to just copying the percentages from the selected media.
- Render Queue has a new look with performance improvements under the hood.
- Batch name panel is now collapsible and text can be prepended/appended to the filename simultaneously instead of one or the other.
- Deleting a displayed media clip will now auto display the nearest selected clip in the current media selection. If no other clips are selected, it will display the next clip in sequence like normal.
- Dropdown menus can be navigated with arrow keys and closed with the escape key.
- $s, $e, $r and $c timecode tokens now include frames and are concatenated with 1 letter units (e.g. 01h02m03s04f).
- Formatting Panels Open/Closed state and Preview Quality now retain their last state when Able2 is reopened.
- Replaced the Twitter logo with the stupid X thing.

### Updated
- Updated internal downloader to latest stable version.
- Electron 28

### Fixed
- Focus rings are back.
- Bug where images with a transparent background were missing an alpha channel.
- Grid Color selector width is back to normal.
- Crop values adjust correctly when reflecting a clip rotated 90deg or -90deg.

### Removed
- Edit All checkbox and Edit All by Default preference setting. Edit All has been completely replaced by the multi selection feature outlines above.
- Default Preview Quality preference setting. Preview Quality is now auto saved and retained.
- Live stream downloads, hopefully temporarily. Feature has not worked since switching internal downloaders.

## [2.3.6] - 9.26.2023

### Updated
- Updated internal downloader to latest stable version.

## [2.3.5] - 9.8.2023

### Updated
- Updated internal downloader to latest beta. Facebook is working again.

## [2.3.4] - 8.28.2023

### Updated
- Updated internal downloader to latest beta. Facebook is still not working, but a certain site-that-will-not-be-named should be working again.

## [2.3.3] - 7.6.2023

### Updated
- Updated internal downloader to latest version.

### Fixed
- If a certain site-that-will-not-be-named was suddenly not working for you today, the update mentioned above has fixed it.
- Sortable items can be sorted again. Drag and drop feature was accidentally reset in the last update.
- Bug causing lengthy media titles to reset after scroll pan.

## [2.3.2] - 6.30.2023

### Added
- Free Rotate Mode options "With Bounds" and "Inside Bounds". Content can now be rotated with its bounding box (as it previously has) or inside of its bounding box while being auto scaled to cover said bounding box. This can be used to correct crooked photos.
- Centering slider. Enabled when Free Rotate Mode: With Bounds is selected. This can shift the bounding box along the available rotated space.
- New warning: Remove Referenced Media. Warning will fire when attempting remove media on the acqusition page that has duplicates referencing it on the formatting page. Remove Referenced Media warning can be enabled/disabled under Preferences.
- New batch/filename tokens for timecodes: $s = start timecode, $e = end timecode, $r = media runtime and $c = subclip runtime. All are in the format of HHMMSS with frames rounded. If any of these tokens are used for an image, they will be replaced with "000000".
- New batch name token: $f. Will auto insert the filename into the batchname. Only works in the Batch Name field. Can be used for custom batch name templates more complex than the "Prepend" and "Append" options allow.
- Adding a backslash (\\) in front of a token will prevent it from being replaced. Can be used if the characters of a media title happen to overlap with a token. The backslash will be automatically removed.

### Changed
- Offset has been renamed to Free Rotate.
- Offset angle range has been expanded from ±45° to ±180°
- For non-orthogonal angles, fit buttons in the Scale panel now snap the content's rotated width or height to the frame edges instead of original dimensions.
- Improved preview rendering.
- Duplicates of media no longer display on the acquisition page. Acquisition page now only displays 1 media element per source file.
- Formatting panel has been renamed to Framing to avoid confusion with the "Formatting" page. Panel contents are unchanged.
- Filename no longer disables when a Batch name is typed in while "Replace" is selected. This is to allow use of the new $f token described above.

### Updated
- Updated internal downloader to latest version.
- Electron 25

### Fixed
- Added race condition handlers to preview rendering. Older preview stills will no longer overwrite the newest when rendering is delayed.

### Removed
- Ability to sort media via drag and drop on the acquisition page. Media can only be sorted on the formatting page.
- $r token for reversed clip numbered. Now using $r for media runtime as stated above which is more useful. Reversed clip number no longer supported.

## [2.3.1] - 2.22.23

### Added
- The Preview Panel can now be resized vertically and its new height will be retained on closing Able2. This will allow for more layout flexibility with wider window sizes.
- Keyboard shortcut for File > Open (Ctrl|Cmd + O).

### Changed
- All .mp4 and .png exports will now have the pixel format of yuv420p and rgb24 respectively. This will allow for better compatibility with common media software. All .mov alpha channel containing exports will continue to have a yuva444p101e pixel format.

### Updated
- Updated internal downloader to latest version..

### Fixed
- In Color Correction panel, clicking between white and black point slider heads will snap nearest head to this clicked spot. This was previously only working for the outer regions of the white balance slider.

## [2.3.0] - 1.18.2023

### Added
- New panel added: Color Correction. Able2 can now color correct photos and video. Panel contains a Photoshop-style curve adjustment grid along with white and black point eyedropper tools.
- New panel added: Key. Able2 now supports basic keying for both video and images. Includes options for Color, Chroma or Luma key with color picker.
- Dark mode with options to sync to system color scheme or force Dark or Classic mode.
- Background motion options. Video backgrounds can now be set to moving or still allowing Content Center to output .png's with a ch9 bg. Can set default bg motion to either animated, still or auto. Auto will automatically default images to still and videos to animated.
- Light Blue, Dark Blue, Teal and Tan WFTV Tonight backgrounds. They must be enabled in preferences. Full support for Animated/Still backgrounds and 720/1080 resolutions.
- WFTV Tonight style for sources. No way or need to choose the style. Simply selecting a WFTV Tonight background will automatically style the source in the WFTV Tonight format.
- Quality button for preview image. Choose between 100%, 75% or 50% quality.
- Custom aspect ratio markers.
- Color picker button next to background color input.
- Ability to set default ARC Correction mode in preferences.
- Ability to toggle visibility of Save Location checkboxes in preferences.
- You can now right-click on a file and choose Able2 for "open with".
- File>Open menu option.

### Changed
- Preview now enlarges and rerenders when resizing the application window.
- Able2 now retains last window size on open.
- Preferences has a completely new look with tabbed sections.
- Replaced Soundflower compatibility with Existential Audio's BlackHole for screen record audio support on mac. This is because BlackHole supports the Apple chip while Soundflower does not.
- Wavform data preview for audio is now seekable. Preview window displays current frame of audio instead of entire track. See item 1 in 'Fixed' below for reasons.
- Aspect ratio marker buttons now consolidate to a dropdown if there is more than three with the first two remaining on the preview control bar.
- Replaced split button icon with a scissor icon.

### Updated
- Updated internal downloader to latest version..

### Fixed
- Bug where waveform data would appear in preview window after deselecting Audio Only + .wav/.mp3. This was because longer media took a while to render. Waveform render would finally complete and immediately overwrite the current preview. Fixed by making waveform data seekable as mentioned. Now only needs to render 1 frame at a time - super fast.

## [2.2.6] - 12.7.2022

### Changed
- Aspect ratio marker drawing logic completely recoded. Hard to tell with the naked eye, but markers are more accurate than before.

### Updated
- Updated internal downloader to latest version..
- Electron 22

### Fixed
- Record light blink animation is now in exact sync with the seconds counter.
- Audio panel will no longer appear for screengrabs.

### Removed
- Eyedropper feature when hovering over the preview window with a color bg selected. The HTML color pick popup now comes with its own eyedropper tool rendering Able2's eyedropper redundant.

## [2.2.5] - 11.6.2022

### Changed
- Audio panel will no longer appear for videos lacking an audio track (Only when track is completely removed. Panel will still appear for silent tracks.)
- Replaced youtube-dl with yt-dlp due to lack of support and slow download speed.

### Updated
- Ffmpeg+Ffprobe
- Electron 21

### Fixed
- Slow download speeds (see Changed section, item 2)
- Overall sluggishness (Started with Electon 12, finally fixed in Electron 18)
- Bug where screen recordings were importing with the incorrect duration.

## [2.2.4] - 2.17.2022

### Added
- New menu command File > Open Import Cache.

### Changed
- When Able2 opens it now clears its cache of files older than 24hrs. Previously it would clear everything. This gives the user a window to recover raw downloads/recordings should Able2 crash.
- Warning dialog now displays when clicking "Reveal in Cache" from media selector or File > Open Import Cache from application menu.
- Improved error handling.

### Updated
- Updated internal downloader to latest version.

### Fixed
- Bug where uploaded .webp's were condsidered video and rejected with error "unable to find media duration"

## [2.2.3] - 6.4.2021

### Updated
- Updated internal downloader to latest version.
- Ffmpeg+Ffprobe
- Electron 13 (Windows only)

### Fixed
- Bug where "Copy All Settings" and "Apply Settings to All" options were not copying audio settings.

## [2.2.2] - 3.2.2021

### Updated
- Updated internal downloader to latest version.
- Ffmpeg+Ffprobe

### Fixed
- Bug while holding shift and moving slider

## [2.2.1] - 1.28.2021

### Changed
- Render queue media titles can now be selected for copy and pasting

### Updated
- Updated internal downloader to latest version.
- Help page

### Fixed
- Bug enabling eyedropper tool while background option is disabled

## [2.2.0] - 1.5.2021

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
- While color picker is selected, you can click on any pixel in the preview image to set the bg color. Cursor will become an eyedropper icon when hovering over preview.

#### Scale:
- Scale distortion is now preserved when clicking "Fit to Frame" buttons while x and y are linked.
- Scale X and Y positions now appear as snap points on the opposite slider while x and y are unlinked.

#### Crop:
- The four Crop sliders have been condensed into two double headed sliders. Allows for shifting both crop values simultaneously.
- Linked crop sliders now adjust relative to the current offset rather than the exact center of the media.
- Crop Bottom and Right values are now counted down from 100 rather than up from 0.
- Double clicking on the crop slider snaps back to center.

#### Rotation
- Added Offset angle option. For transform mode only. You can now adjust the angle of a video or image by up to 45° in either direction. Intended to be used in combination with the 90/180° options for angles beyond 45° (better for performance)
- Reflect Horizontally and Vertically now swap values when media is rotated by 90deg.
- Reflect column now appears before rotate column.

#### Other:
- Pressing up and down arrows will increment Screen Record Timer by 1 second.
- Reorganized Preferences window and added new prefs: default download mode, default screen capture mode, screen recorder frame rate, default timer duration, timer default on/off, slider snap points on/off, default split duration, start over warning, and outpur frame rates 29.97 and custom field.

### Updated
- Updated internal downloader to latest version.
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
- Updated internal downloader to latest version.

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
- Updated internal downloader to latest version.

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
- Updated internal downloader to latest version.
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
- Updated internal downloader to latest version.

### Removed
- Windows 32bit support resulting in a smaller application size and faster updates
- Help page. A little too much for this lone developer to write right now. Open to any contributions.

## [1.2.6] - 7.17.2020

### Fixed
- Bug causing uninstallation, reinstallation and updates to fail

## [1.2.5] - 7.9.2020

### Updated
- Updated internal downloader to latest version.

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
- Updated internal downloader to latest version.

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
- Updated internal downloader to latest version.

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