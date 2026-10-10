const CACHE_NAME = 'boxing-training-offline-v6';
const EXERCISE_IDS = [
  'Medicine_Ball_Chest_Pass', 'Barbell_Squat', 'Barbell_Bench_Press_-_Medium_Grip',
  'Wide-Grip_Lat_Pulldown', 'Romanian_Deadlift', 'Face_Pull', 'Dead_Bug', 'Rope_Jumping',
  'Side_Bridge', 'Walking_Treadmill', 'Ankle_Circles', 'Kneeling_Hip_Flexor',
  'Torso_Rotation', 'Shoulder_Stretch', 'Medicine_Ball_Scoop_Throw', 'Medicine_Ball_Full_Twist',
  'Trap_Bar_Deadlift', 'Split_Squat_with_Dumbbells', 'Smith_Single-Leg_Split_Squat',
  'Landmine_Linear_Jammer', 'Dumbbell_One-Arm_Shoulder_Press', 'Seated_Cable_Rows',
  'Dumbbell_Bicep_Curl', 'Pallof_Press', 'Bicycling_Stationary', 'Elliptical_Trainer',
  'Dynamic_Chest_Stretch', 'External_Rotation_with_Band'
];
const APP_ASSETS = [
  './',
  './index.html',
  './app.js',
  './manifest.webmanifest',
  './assets/videos/squat.webm',
  './assets/videos/bench-press.webm',
  './assets/videos/pull-ups.webm',
  './assets/videos/deadlift.webm',
  './assets/videos/shoulder-press.webm',
  './assets/videos/boxing.webm',
  './assets/videos/medicine-ball.mp4',
  './assets/videos/jump-rope.mp4',
  './assets/videos/boxing-heavy-bag.gif',
  './assets/exercises/medicine-ball-rotational-throw.png'
];

EXERCISE_IDS.forEach(function (id) {
  APP_ASSETS.push('./assets/exercises/' + id + '/0.jpg');
  APP_ASSETS.push('./assets/exercises/' + id + '/1.jpg');
});

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) { return cache.addAll(APP_ASSETS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.filter(function (key) {
          return key.startsWith('boxing-training-offline-') && key !== CACHE_NAME;
        }).map(function (key) {
          return caches.delete(key);
        }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

function rangeResponse(request, response) {
  const range = request.headers.get('range');
  if (!range) return response;

  return response.arrayBuffer().then(function (buffer) {
    const size = buffer.byteLength;
    const match = /bytes=(\d*)-(\d*)/.exec(range);
    let start = match && match[1] ? Number(match[1]) : 0;
    let end = match && match[2] ? Number(match[2]) : size - 1;

    if (match && !match[1] && match[2]) {
      const suffixLength = Number(match[2]);
      start = Math.max(size - suffixLength, 0);
      end = size - 1;
    }

    start = Math.min(start, size - 1);
    end = Math.min(Math.max(end, start), size - 1);
    const headers = new Headers(response.headers);
    headers.set('Content-Range', 'bytes ' + start + '-' + end + '/' + size);
    headers.set('Content-Length', String(end - start + 1));
    headers.set('Accept-Ranges', 'bytes');

    return new Response(buffer.slice(start, end + 1), {
      status: 206,
      statusText: 'Partial Content',
      headers: headers
    });
  });
}

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (event.request.destination === 'video') {
    event.respondWith(
      caches.open(CACHE_NAME).then(function (cache) {
        return cache.match(url.pathname).then(function (cached) {
          if (cached) return rangeResponse(event.request, cached.clone());
          return fetch(event.request);
        });
      })
    );
    return;
  }

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).then(function (response) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(function (cache) { cache.put('./index.html', copy); });
        return response;
      }).catch(function () {
        return caches.match('./index.html');
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function (cached) {
      return cached || fetch(event.request).then(function (response) {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, copy); });
        }
        return response;
      });
    })
  );
});
