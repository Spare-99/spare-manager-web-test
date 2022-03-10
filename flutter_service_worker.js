'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c5f63284a5730020931808bfe8502eac",
"index.html": "0ffe43546ec9e08cd971b651a4407cbe",
"/": "0ffe43546ec9e08cd971b651a4407cbe",
"firebase-messaging-sw.js": "205d63346ea0eca4a9deb1b1846d378a",
"main.dart.js": "c788afeaa8eef3f1d12bd4a37d4f78e6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "44995d78ceff6492c25a7c9edd16ff5c",
".git/config": "ea1eb88d1067e89811a0dd444cb92257",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/69/44d95573e245d0f6481a1d3a459cbd3b255308": "623f49c0c7637c43b17e1e42f68770b7",
".git/objects/51/e6dee4f5f2a734ef18e5d3864bcd673e6cc600": "e3cc900a24403f150911d592e72bd9fb",
".git/objects/0e/44848ed7bfbf225563bafd22e6b1d0b7e4341c": "4110671b7237046f8c67ea0ea92303f9",
".git/objects/33/4e1d1cf83aa8800ccd1ecb8db68f958e7923e4": "6b0167fa6b41670c9c16842d014f7d3a",
".git/objects/a4/54c8bccceda5669a07be7bd6f8d3115e0f1130": "8830709b4a655730e4f93e971b52ff63",
".git/objects/a4/e76f817ee0a6c8b1f9afa52956576a20de3b41": "d0024231217191efa7fda6defc2879c1",
".git/objects/a4/2b9410fc295d09056573a49358cc9851b28602": "329166fac88929464eeb15da0759f5a6",
".git/objects/b5/3a87af67a9be3606af9b4d52610f78b1737552": "55debd6417862b21443421a1e4455bec",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/bb/c01e3d5bb694addc503607118f34f56d1fff00": "ec02ec4b7fc15ac41f187e45aa33b651",
".git/objects/be/26eeb0b90073b110d14deaaa1765165b46266c": "bd1e896d8eda22c9745ce1d4ef6fa19f",
".git/objects/da/248bc977e8b2d025d37fe55e29df8848ed2a04": "015fc77703cff7bbb7a0bbefff0fc56f",
".git/objects/bd/9ce7f18c2a5a9aadcf0f91119a62c10404c08e": "62395f98412eb1292e3606c50ee335bc",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/bc/6e385c98e90781b9b3f3c4f5c78b595fbf8595": "4e3473b324fdadd5bc8b50c073b461c4",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/e7a572515dc21e5e81ee99ed37bffab5b731fb": "b03f5dd3a4c35455cd47a7d31fc4cc23",
".git/objects/eb/1fb94145ab8eb4eda08d2df4c4acd057436f62": "4bd413b59e28e18dbcf4ca1ea15f8373",
".git/objects/fc/91d9684684126fb048bc93811061e814e5754c": "a1ceb19d9823b622bbaf66c916944be6",
".git/objects/cf/45a021db633bca4fe68b5b0d10873450f09574": "afb7d53dcd99c14b792b0ae09507cb1d",
".git/objects/c1/c9178140c89a26dc16028cdb24d4b7047966b2": "c5ac5a7f07638b969c7bd56c623208c4",
".git/objects/c1/f4e2f2a85bbf38b3b66fb33f392da5a95bef62": "2d7dd231a02b15d2bb9cb0ed14edf7cf",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/009782d4bfb555c3bb65a7a8a480f5fdedf7e6": "261da17f6ae91b97d95d7fc2546d483e",
".git/objects/29/8b3de70d426cb77f140fede495ca518671016b": "a7d270296632e21b026994048f1c93fb",
".git/objects/7c/ccdc7cda8492db7839bcf309ebad3dd7ea1ec8": "d982544147983316b069d93ccfd75a83",
".git/objects/73/7760b5df73bf4e48e8d17146a574e8deabc80d": "13d16aef91d25b6dde089b816cc1d6a7",
".git/objects/87/cf6a5261f5f7c41185e44cf03ad82615dd65a9": "96aa034c0033391496178b489e3266de",
".git/objects/74/5fff9702a1563727a1904ef8af27321690cdd1": "624932878e5fdd2c1d118bac8f41032b",
".git/objects/28/5516445feebbb4c2de2f20c479511305adf25f": "53f4a7b00ff8a57a2d9c8a4b03f434d9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/2f/7522d57cef35346433f6291a71372bd03651c9": "7d2bd3f111be286b75a9f82037537257",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/4bc526c324cc93245d64aa4e05ef6b56a7afea": "0c6820e493c333f91af0f55116c31e0a",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/36/bd06d8872131db70ad40f14aa75d7acc5033fd": "852a086394c418c2ca6d34a78a291de2",
".git/objects/09/5569b94e8d66157d7619d215a24d195af44781": "1d3d7919fcee5ce767ce3bedc568b59a",
".git/objects/09/892098aa943af5fe95e7dd434a07fe03e7ccd1": "41904d8dbe823f1eab8cbcbe748592e5",
".git/objects/5d/838c66b1058d323162d4ae1e133331b56b8fce": "8c94719b9110dde3960ea5939de955ce",
".git/objects/62/8b050e68f42656304f2562fb441010cab599e3": "1a4ce7adf1635251ada0da8a0ef028d9",
".git/objects/3a/fe541f7be826064ef617fb7d5fde341a7b2cf3": "2cf32f07dd0166aa35a0851e1ca4ae1b",
".git/objects/53/cdb39c6653597d92b232d2e127b8cd9aba25aa": "cd16b5aefd84897982d9773c231cb0c2",
".git/objects/5e/446276d884da9278b67387c5e48e286d20f2f4": "8c3b42076cfd83ed685692d808392686",
".git/objects/01/2acd813f8798fc74c4ec01559056b927276623": "53a7c2f192c39a36e216ef7bfa7165c3",
".git/objects/99/d2e873e3a8963bb8dddd1f8a9bece9013d294a": "e702bdee6917de62893906d628bd9844",
".git/objects/63/c778464008a7909e9b02eb6c16305b13df4a30": "d1f0d3914dc27c553a4ca5266ca15fc8",
".git/objects/64/a0c83a421697c323be927cd2848fb6a49405ac": "eace994aaa33005301ca4d7cbb15dd96",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/ba/11ff14c568e1c819446b8d34630f81f0398174": "6c1f8effa02bfdcf663b1bb7ee27399a",
".git/objects/a7/81917e858c2d425e2fe553208b1027778cb409": "e302f21aa24b282f7a93f54d9d59c8cf",
".git/objects/b8/b917c154d67a5cd3678506e7cc05541b9ca585": "f28a278f2a839978d6402b008d1e0092",
".git/objects/dc/5230ae98b5eb17db12875676e1c9a2d8b74caf": "9ddc940c8a093ac1d6413550fd0b5ef0",
".git/objects/d2/109b3548641b90b5f833ad7f6fa71e554f7a33": "8f9275636f711b228ac0ef5aec914fb2",
".git/objects/af/369a23fba135ed4d4bd00642f61a5a7b810b0c": "715cbadcbc1f06250a8fca51bda90bea",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/11a408569788bcaec3c3e4e862afda9dfa7bd8": "667b9e79d9c77e7ab351d3a634472367",
".git/objects/b9/fea6d7e283b6cc65909f1ab0ba6cea2a1c12cb": "ca0d0adb5c8856e1b65d47b522120fd6",
".git/objects/b9/9f418f1d42adc7c61f6368ea28ce63d0cfada1": "0f136a6617f9d369a032191668f0de87",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cc/a1e399be89ba4d809f36c3ee8785db90de8521": "a9dda36a0aaba767fcf12e3aa4d0745a",
".git/objects/f9/889d0a16ede57dd48a1e868ec2782f9d65fbf5": "7e8598b283b35fbb4390e7dbebac368d",
".git/objects/f6/93cf69804a4f8496dc48a1339a02f813e97e17": "ba195e9e72b4db756e7c713341c65965",
".git/objects/e0/c4fec294a7422631f9bfedb559c8e72f0840f6": "2445f92ac44a5421a5702d1bb4dc44ef",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1e/6429cf9013946f75772f732b52baf9d5a45b21": "ac7ba9d8a3c66ce44977e09a7b7bcb23",
".git/objects/23/9d69dc23299efaf89c57c0879b9c18a56919ed": "dbb7f0b3fc967e97fc8a17984de7c584",
".git/objects/40/027a79a5d7f3e518b51a5d2949317fc1205e03": "a89084230637efa1d8dadb85b380e7be",
".git/objects/2b/f6db3344ca99c658d81db245824aae2c607186": "971c8bc3fa28f0057f885d257d1a02da",
".git/objects/13/07ebe6e6fbfa82c0f1b3019fa91f5c8334afc5": "40b3c4226aaca775b5b35707656a35fb",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f6b0c12c5b8298c3a146c40d97914284",
".git/logs/refs/heads/main": "f6b0c12c5b8298c3a146c40d97914284",
".git/logs/refs/remotes/origin/main": "051d7ac29b5b987f852e2203f3a50a7f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "510103100eb7c9245a1e340746f29feb",
".git/refs/remotes/origin/main": "510103100eb7c9245a1e340746f29feb",
".git/index": "12f5030d815b663da480021ad2bd2c31",
".git/COMMIT_EDITMSG": "b503dc1461f2382e8650b61e52ca7fb6",
".git/FETCH_HEAD": "19351deecda7ee752f8186f68a2a775a",
"assets/AssetManifest.json": "4a2f4f83d01ef20cb982dcef073833b0",
"assets/NOTICES": "eb19f463f67ffd9aedd8eb722a8649a1",
"assets/FontManifest.json": "4cd9fd89056de9fc25dcdd5994823fc4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/profile-placeholder.png": "eb2b82c57dda81c9aa7546a27b8399c1",
"assets/assets/images/imageplaceholder.png": "3d600c48dc72cc73081665151d000519",
"assets/assets/images/bags.png": "db1d3e350ff8d95838ed4fc2907f10e2",
"assets/assets/logo/spare99-logo.jpg": "ef5bdd37a7d10fc6151ffe68d802b03d",
"assets/assets/lottiefiles/loader-orange1.json": "b3e33c03def7da4fb99c153785cae4b4",
"assets/assets/lottiefiles/loader-orange.json": "eef0728e8d775686dc697166ac40a2cd",
"assets/assets/lottiefiles/loader-orange3.json": "0ea34d824f4e4b7d4d8b10333071654c",
"assets/assets/lottiefiles/loader-orange2.json": "40c36ec67698b9ad1a005d81811d0fec",
"assets/assets/fonts/metropolis/MetropolisLight.ttf": "4dddd72216bcde33666f934460069555",
"assets/assets/fonts/metropolis/MetropolisMedium.ttf": "a734a76e3ccffbbdb92c7c32e7257c88",
"assets/assets/fonts/metropolis/MetropolisSemiBold.ttf": "b97c44a7562ec3a0c1f55a951b6784d3",
"assets/assets/fonts/metropolis/MetropolisRegular.ttf": "0b443baa92cbb5aafa6147b10d9efc8c",
"assets/assets/fonts/metropolis/MetropolisBold.ttf": "0545ca64d49b2b08f9b138195584ddfa",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
