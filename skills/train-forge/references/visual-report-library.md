# Interactive exercise library and offline webpage

Read this reference only when a visual training report needs exercise demonstrations, day-by-day interaction, installability, or offline access.

## Build the action inventory first

Create one canonical inventory for every displayed day before choosing media or building the interface.

- A **module or concept** describes the purpose or structure of a block: warm-up, explosive activation, main strength, auxiliary superset, conditioning, mobility, or recovery.
- A **concrete action** is something the trainee can perform and demonstrate: medicine-ball chest pass, barbell squat, jab–cross with exit, stationary bike, or thoracic rotation.
- Expand combined rows and supersets into their component actions. A row such as “face pull + dead bug” contributes two actions.
- Extract actions from descriptions as well as titles. If “explosive activation” contains a medicine-ball chest pass, the action library must show the chest pass, while “explosive activation” remains a secondary module label.
- Do not create demonstration cards for abstract labels, intensity zones, rest periods, or readiness states.
- Keep one entry per concrete action within a day unless two variants need materially different technique or equipment.

For each day, compare the planned action set with the library action set. Every planned action that benefits from technique guidance must appear, and no stale action from another day may remain.

## Synchronize the interface

Use the selected day as the only state that drives the daily summary, timed session, module chips, load guidance, and action library.

- Clicking a day updates all dependent sections together.
- Show the exact concrete action in the timeline; show its module or purpose as supporting text.
- List multiple concrete actions when a timeline block combines them.
- For rest days, show a clear no-training state instead of retaining the previous day's library.
- Preserve the selected day and keyboard focus where practical.

## Choose truthful demonstrations

Match the exact movement, equipment, direction, and intent. Do not use a visually similar exercise when its mechanics differ. For example, a medicine-ball chest pass, overhead throw, and rotational side throw require different demonstrations.

Prefer, in order:

1. Locally stored real-person video with a license that permits the intended use.
2. Public-domain or appropriately licensed start/end photos.
3. A purpose-made original or generated teaching image when no accurate reusable media exists.

For two-pose images, label start and finish and keep the same person, camera angle, equipment, and environment. Generated media must be identified as generated. Do not imply that generated imagery is a licensed photograph.

Do not rely on an external player, hotlinked media, or a network request for normal playback when offline access is requested. Store the chosen files with the report and retain the source page, creator, and license metadata. Reject media with unclear rights or missing provenance.

## Make the page work offline

- Keep core HTML, scripts, styles, icons, images, GIFs, and videos local.
- Add a web app manifest and a service worker when installability is requested.
- Cache the application shell and every action-library asset needed by the plan.
- Version the cache name whenever the asset list or application code changes, and remove older app-cache versions during activation.
- Display offline-ready status only after the service worker is ready and required assets are cached.
- Explain that each device needs one successful online load before it can work offline.
- Keep relative paths so the report remains portable under a subdirectory.

## Demonstration card content

Each action card should contain:

- Exact action name and training purpose
- Local video, animation, or clearly labeled start/end images
- Two to four short execution steps
- One or two common mistakes or stop cues
- Equipment or load note when it affects execution
- Source and license attribution, or an original/generated-media label

Keep cues concise. A demonstration supports coaching but does not replace supervision for unfamiliar, ballistic, contact, or high-risk work.

## Validate before delivery

- Switch through every displayed day and verify its expected action count and names.
- Confirm that every media file loads and that no card shows the previous day's content.
- Test the page once online, then reload it without the server or network and recheck all required media.
- Check a narrow mobile viewport for horizontal overflow, unreadable labels, and controls that are too small.
- Confirm that module names remain secondary to concrete movement names.
- Recheck source links and license labels for every third-party asset.
