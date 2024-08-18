'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "648a5cb0a3b5fa6b22c8989db6e8fff8",
"assets/AssetManifest.bin.json": "84a445e776119598d3ca48f00543284e",
"assets/AssetManifest.json": "908c2977167fd6b7d31733c1a0dc11b3",
"assets/assets/fonts/Pretendard-Black.ttf": "51c73880d5964b36e6373b3fe31f3058",
"assets/assets/fonts/Pretendard-Bold.ttf": "dfb614ebecd405875f50a918ca11c17c",
"assets/assets/fonts/Pretendard-ExtraBold.ttf": "332e9b673b0c1709e93fee01e4543f1d",
"assets/assets/fonts/Pretendard-ExtraLight.ttf": "2f39a307ce00aa5e734137d4cee3b5c1",
"assets/assets/fonts/Pretendard-Light.ttf": "77ecd2ca94928e38ff7c68bb255324f7",
"assets/assets/fonts/Pretendard-Medium.ttf": "7305f90c923d4409825ec2f4380b63d6",
"assets/assets/fonts/Pretendard-Regular.ttf": "d6e0de06bff8b7fda2db4682168e3ddf",
"assets/assets/fonts/Pretendard-SemiBold.ttf": "459eff7ba5380583ccd6eda49c846c85",
"assets/assets/fonts/Pretendard-Thin.ttf": "8b65a9299b173e635e6acac200e80257",
"assets/assets/image/arrow.png": "97575fddbdbc0db8672743ec75b10abc",
"assets/assets/image/arrow_down.png": "fbe91ed20d0807f37cbf9739272514d8",
"assets/assets/image/arrow_right.png": "7261b4bdf0c6ba47d738db7f2cf5b3aa",
"assets/assets/image/attention.png": "09d30593d9c68cfbb36093b43da42b49",
"assets/assets/image/attention_ch.png": "b9cfc0d88f0699e2b8b797c80ae68cc7",
"assets/assets/image/chat.png": "287f8d804970231ab248761d884f089f",
"assets/assets/image/chat_ch.png": "069dff28adbcc36c9904e6d5c8c7ccb9",
"assets/assets/image/chat_change.png": "68b56fac820fd9bfc0e169435e0cac34",
"assets/assets/image/check.png": "87695033f84fbf29c1dbdf18f6558a03",
"assets/assets/image/check_ch.png": "bb4c6cba4c1521129834ce27d45e06ef",
"assets/assets/image/clock.png": "74e9f5cac49b7c9c05e19ef162b3e7f7",
"assets/assets/image/delete.png": "8d2805610d2106cb66eb9fb112903c7a",
"assets/assets/image/delete_black.png": "f78f0cea41f37fb80479798992fe9a0a",
"assets/assets/image/filter.png": "c28c64129d9b43723fc37d6262c8c482",
"assets/assets/image/heart.png": "c0bdc3f6af1944444f6d17e9b4ea4a53",
"assets/assets/image/heart_ch.png": "a39c3b3754a01c8607136be4f505b419",
"assets/assets/image/heart_ch2.png": "fa0c90b8b69d5e30eeac075eeaed9b1a",
"assets/assets/image/heart_change.png": "a42c9a0f0e59522f2753ad50cef8f542",
"assets/assets/image/heart_white.png": "9a471fc7bd5461c03cf4bc4200e213a7",
"assets/assets/image/home.png": "79059074d1dbf40017f4047812404d1e",
"assets/assets/image/home_change.png": "81e287f7a15081053ce3d3f092ba6450",
"assets/assets/image/introduce.png": "33266838d287f1d750ee5f2fd476afd1",
"assets/assets/image/last.png": "aff63d5fcecfd087699b54c6ff6a3fdd",
"assets/assets/image/loading.gif": "45c123b5e477c4683d190a73ec8fda95",
"assets/assets/image/login_apple.png": "46b0dd6f3fd454f6d9b2257861eee6ff",
"assets/assets/image/login_google.png": "ae7b3a9f29973ac29b96e81c18fea435",
"assets/assets/image/login_kakao.png": "6d9ecb37d85574fede1ae0af47877bb8",
"assets/assets/image/logo.png": "45ed9f7f425babf5386fa519b7621412",
"assets/assets/image/logo_login.png": "2300417b2b7e39457e199da1031ee4b4",
"assets/assets/image/Mask.png": "8974bf05b49e34b7eeeeb401dcf62071",
"assets/assets/image/message_2.png": "498ad669e8911cfd4ba0b5761951b886",
"assets/assets/image/message_3.png": "ea4b241db57e239277aebf34a255085b",
"assets/assets/image/mypage.png": "2e9370290cb8ac274e9066777b006f2e",
"assets/assets/image/mypage_change.png": "2dd320dd0d6210bfef7a37f62b6c0e20",
"assets/assets/image/plus.png": "fb42ea5acd08a1d30c497b7c113b3ca6",
"assets/assets/image/point.png": "5664cdd035b76a9ebc3e46c13f432dca",
"assets/assets/image/point_ch.png": "e1b18364d9c8c362ec5c74074b1e78d5",
"assets/assets/image/privious.png": "1762fc421882dd1ab08d521fe7424fe9",
"assets/assets/image/profile1.png": "9b172cba793775b4c1e89e47876086ed",
"assets/assets/image/profile2.png": "db91a722a3c14a9429c5214d9efdfe19",
"assets/assets/image/profile3.png": "261c1bf1138a7e368fda75b632b2e64f",
"assets/assets/image/profile4.png": "9167380fecbc4f61656a6b9bdb26df62",
"assets/assets/image/profile5.png": "bfe6ac498a460f80e94aae189797c130",
"assets/assets/image/profile6.png": "8a511e56aa31383e4cc77544bbc52f58",
"assets/assets/image/profile7.png": "51a264c79ab735b152160276c2450acd",
"assets/assets/image/profile8.png": "2f8af7f8bd75cff76589309780d4dda7",
"assets/assets/image/profileAnnounce.png": "402dca687ebe3b2ef6ec7fede43afe1b",
"assets/assets/image/ring.png": "dadfb0b7e829b48114a55db357d2ee14",
"assets/assets/image/ring_change.png": "0255b3ed29f830ed8eff3cdfffa8a77b",
"assets/assets/image/ruby.png": "4be8e40ca755c99d561d228b64eaf7da",
"assets/assets/image/simulation.png": "74cad59417f0c4597b6bfaff015689c5",
"assets/assets/txt/questions.txt": "c2d7c73d165ecfedbade1b245aabb679",
"assets/assets/txt/questiontitle.txt": "3ee13692f2e7adfafd9f3b0167008001",
"assets/FontManifest.json": "fc2ac3061e6e95ebc02b7994c706a9dd",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "f4f09fb0ea85d52ce69aa40955191930",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d15648c939769fa8c40a33cab56f314e",
"/": "d15648c939769fa8c40a33cab56f314e",
"main.dart.js": "4921130ceef90e01648e642fa677bd73",
"manifest.json": "03bcbf901ec10dd9989d8c29e64042c0",
"version.json": "c18d766302a21da395dd6feccc20526e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
