'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9e4a522bdde30eda0a4a52ac6182df56",
"index.html": "e8d2c0c6ee716cbaaee6da019bd10e45",
"/": "874064a35243e3d51c81df934dd87b3d",
"test/widget_test.dart": "6b2218306343168469bea21c0f53457c",
"main.dart.js": "44288412d64faf9ead3198d617cf3ec8",
"web/index.html": "ac843c6fb58f9c45e5740c67eb3d3e78",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/manifest.json": "1f566b509698542d126fbd8f162102f7",
"pubspec.lock": "4249db4f2e39b387e382fdbe00a1f9f7",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"ios/Runner/Runner-Bridging-Header.h": "e07862ac930ed4d8479185d52c6cc66d",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "e175e436acacf76c814d83532d0b662c",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "770f4f65e02ca2fc57f46f4f4148d15d",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "c0fa6a088a2d486e4d75a012096d611b",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "9595f5692fac4a15b50616d6549e9ed4",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "19898f3eea0783250a0e2a20dc147827",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "e2b9a9fb66c6f8165a179d370eb723c0",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "d86de75e9341c42432a12b3d58e364b8",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "128e30cc061e49f503f48c338a21380e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "c3cdf9688b604d14f2e76a8287e16167",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "19898f3eea0783250a0e2a20dc147827",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "f8e7955550407d4ec71d28e7c2d8c8c6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "a34a631e106b9e7251e55fa199d34bca",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "7af6f2ed506e771a319d46846dde1f26",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "975d8a8c44f5d28ac65263294b84b0c5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "2adf6396c0f80a2ddc96ead2f2405220",
"ios/Runner/GeneratedPluginRegistrant.h": "51e4cefb306d339b47a67bb0477a1d27",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "89e8363b3b781ee4977c3c9422b88a37",
"ios/Runner/Base.lproj/Main.storyboard": "0e0faca0bc5766e8640496223a31706a",
"ios/Runner/AppDelegate.swift": "640effd31ad5be56ac222976d95a5878",
"ios/Runner/GeneratedPluginRegistrant.m": "7c20af7f75e9fa38e8686b147b13159a",
"ios/Runner/Info.plist": "ed046f74abf3f49ccb6cd7498b037b6c",
"ios/Runner.xcodeproj/project.pbxproj": "fb7253a95a40118273dea45c6d241cac",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "a54b6450d65c401d48911394f6a65bd2",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "74fd196a515b5a746527f7b275f8785b",
"ios/Flutter/flutter_export_environment.sh": "08b10241824f501250d63b37f21d5ced",
"ios/Flutter/Debug.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"ios/Flutter/Release.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"ios/Flutter/AppFrameworkInfo.plist": "3c00b2cf8a8ead87c06edee95b639fe9",
"ios/Flutter/Generated.xcconfig": "37dc5a0f1f9e3b475eb9223918169156",
"README.md": "819ac07eefd10498065880dd0d4e318e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"pubspec.yaml": "4f442ec3347ab987ddc459d7b52dbad2",
"android/app/build.gradle": "5ed6a2a9a6fa3018922253d574e13115",
"android/app/src/profile/AndroidManifest.xml": "3550dc2715aa6b5f0f0bb04b30a11063",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/drawable/launch_background.xml": "79c59c987bd2e693cd741ec3035ef383",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/values-night/styles.xml": "38d2da8c073ef21cb1ea7c8bb237caa5",
"android/app/src/main/res/values/styles.xml": "8c2485c661cc2eecc76d6ac7e61e236d",
"android/app/src/main/res/drawable-v21/launch_background.xml": "ab00f2bfdce1a5187d1ba31e9e68b921",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/AndroidManifest.xml": "0991df1bb2ebbcfe5481551937b7ba68",
"android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "52533b7c97ea341b8c6a13aba97f53e6",
"android/app/src/main/kotlin/com/example/web/MainActivity.kt": "43434a410f350a43526ada5ffea4d5ae",
"android/app/src/debug/AndroidManifest.xml": "3550dc2715aa6b5f0f0bb04b30a11063",
"android/local.properties": "d51465d393313b7b8d1f013bf9e0f898",
"android/web_android.iml": "e631be658ada5ed327bf47f851a6ed5b",
"android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"android/gradle/wrapper/gradle-wrapper.properties": "4a3ac42d3bba3464a5c2ed6ccb15ccf9",
"android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"android/build.gradle": "02b901cef4f1185bb3daeefeee9c8ec9",
"android/gradle.properties": "4a756df24e4431aa00ea27ee9b863c97",
"android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"android/settings.gradle": "10881f279cc48040996c7354515e0da7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4157af18c8b63892ea9e8fba20a6b217",
"lib/main.dart": "4f608b55f2fe7a9ca3d119a44f7041b4",
"build/web/version.json": "1f308f6516a18ecd7674c9a450a742cd",
"build/web/index.html": "874064a35243e3d51c81df934dd87b3d",
"build/web/main.dart.js": "f04a6b9dca3cf55f1e0a1e4a23e5cb67",
"build/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"build/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"build/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"build/web/manifest.json": "1f566b509698542d126fbd8f162102f7",
"build/web/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"build/web/assets/NOTICES": "b87e7ceb9de555cb3775cbfd1db2618c",
"build/web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"build/web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"build/web/assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
".dart_tool/package_config.json": "3ce6afdcd19c25181d8178920f207fd3",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/web_service_worker.stamp": "4b03c73bf8bf0083395703fe697934f2",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/dart2js.d": "c53a596ecbef2bae61ecbf0ebe95d6a6",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/main.dart.js.deps": "09453a5ab417d15c46846fe2783592e8",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/main.dart.js": "f04a6b9dca3cf55f1e0a1e4a23e5cb67",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/app.dill": "2724516f84ef44205c083d91ffbc1dbb",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/outputs.json": "78eb2d502fdfcdbf5e3032dc271a36c7",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/web_release_bundle.stamp": "829b95f9b73368e25d4399559d3322d0",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/flutter_assets.d": "dfb40ff9f586656424d2a1d43508d34e",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/main.dart": "94ccc3b9765cf7f1c580ec2a5d33e6d9",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/dart2js.stamp": "a8cc7a8c32e5761f8889ce5f185ae64d",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/service_worker.d": "835a9982f0889846059e444ebec7fc36",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/web_resources.d": "8f8fdb96493bf2fb2fa90809d2382f07",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/app.dill.deps": "89d1b2bac2b2515b97ca415afe310230",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/web_entrypoint.stamp": "49460ecef9899e001ba282962be28755",
".dart_tool/package_config_subset": "716c77a09a8838b4a62fd02c9e3c53a8",
".dart_tool/version": "637e04f2396ca85e7777a5a7d3b39f03",
".git/ORIG_HEAD": "959235f5bf5aa37d7aaaf89b30593a30",
".git/config": "0cf8b55336033efdf5d483d675443134",
".git/objects/59/2ceee85b89bd111b779db6116b130509ab6d4b": "348329ef452b809389b6496387db6913",
".git/objects/57/9b8dcc92e99c0fc7306a00e28827fb5097fdea": "240bb2a6d3d6ca06fa2797f00d99c216",
".git/objects/6f/caf409794df3e7f9e992677891740abe1498fc": "cec360896a0cda2de778b0ec01915108",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/6a/84f41e14e27f4b11f16f9ee39279ac98f8d5ac": "a913aaf750cc736879f14f53488f5c42",
".git/objects/69/0dbba97f29a0d912cb5f24e1591c2883d489da": "efe79b3600ee5ddf8649e80f229a4f5a",
".git/objects/3d/f3d1a91dec9f419bbf32c7dbd7ffe3049577b7": "2da7aed2720fec500109845fe6130ee3",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/0b/edcf2fd46788ae3a01a423467513ff59b5c120": "23a6b285e31cde5ab29a2fc1ebfdb935",
".git/objects/93/67d483e44e14a7b58321035967961ed024d732": "ec5e9adea8ee35ee79c9613b26a34286",
".git/objects/93/3c557b1dc72a9dcc6449327c9ffaa693589983": "a1ff0d5c948cdcf59bf3c5c3d69b2e97",
".git/objects/94/adc3a3f97aa8ae37ba567d080f94f95ee8f9b7": "daee15d8fbbf348420b6eaf3d86cbf40",
".git/objects/60/f9734f75546795d4d47952a9183584fabe17e1": "cb2b17342a67e8720a2757ecc45217b5",
".git/objects/9d/a19eacad3b03bb08bbddbbf4ac48dd78b3d838": "1176aaa6ff7a19c56cf9a6ea692a2c03",
".git/objects/9c/e628d50ace5b403fe304c2dfb583dd473b91f4": "4e3de8f8624924cca6a946e072d96753",
".git/objects/02/d572dc7665db6ca0cf8107f3b8cbd8b4f2b03a": "84a6c61755b2e5d69f71702173ec6372",
".git/objects/a3/95d54a1e76d281e32054705f8e28962dcd608d": "ad303ddeafccc684008058c4ce7793d7",
".git/objects/ac/5ecfc2f72913b46efd375786136f3b56cd9d4a": "84cca2d006bbfc800be823e44a808015",
".git/objects/d7/4aa35c28261a8e78264252be7f0f6f9406ec35": "f6d907a3303a508436779980f9fb2dfd",
".git/objects/d7/61c53178cc135119f252e047fb2f6e08512ed0": "54c64d1a96d272170806761ec67134b6",
".git/objects/d0/e1f58536026aebc4f1f70e481f6993c9ff088d": "18109e32e7fc3bf04e529c14b8723746",
".git/objects/d0/ef06e7edb86cdfe0d15b4b0d98334a86163658": "4d865184682ad08c3405e3934cd91fa9",
".git/objects/be/a602a1b43d3b1d306158957afc6e672296f98a": "7f43eba2680499df6d19bd27c9ac9591",
".git/objects/df/ca47a24626957be3af9b5dd29c29a4f5d3ade5": "806712e3ca3b8d43f6fbfcc65a42c5d3",
".git/objects/b4/6a01cd123943e1f05c040250862b95ce62613d": "91575ebd346a6ab0bc4f5639c4d10d22",
".git/objects/a2/8140cfdb3ff9b7a11a9497b84546d615db2afa": "6d7635289ce43450f1e676e1c5444b06",
".git/objects/a5/74fb9e3907608e950927d928b60aed4a83795a": "7523ce0bb7bc23ef4659f02814cc43df",
".git/objects/d1/458fcfe93e7c4d336667447d4bc0203a645e8f": "0f33b4ac5869fc4c88e4146c49428c54",
".git/objects/bc/eaabf54278f2f712a2b7828ab776bb71279269": "45d30b31ef170033f657a6ac720789f6",
".git/objects/bc/6a58afdda22a443c752eaae3d60c2480511a9f": "d86646f2e9abb9d77e2e8346ade8749b",
".git/objects/d8/a052651e72f6c4b7cb15992dc88280a6e78a22": "fe0886e812848dcc8f00cafa8e3a229d",
".git/objects/d8/698e3c246dbca60d51a53272da579d3db3b15a": "2ba38bc1331e237de93e0622d7e469c6",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/c28516fb38e64d88cfcf5fb1791175df078f2f": "bccf9d20d0adcc345fe8e5f4a745c4ae",
".git/objects/f3/46021e5e353f2f827b3a136a02d0f53631c785": "95dac5423c0c75a27b351527c71190cf",
".git/objects/f2/e259c7c9390ff69a6bbe1e0907e6dc366848e7": "094726a4a1cc307c0a019e65a323f850",
".git/objects/f2/0f989e2907b02aa8858f9da5ba307bb8681d93": "1be894735099f56716b0573ffdef88a8",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/e3/4dce9afe4bfb86b96cb579519435256f63b4bf": "45b0900402f9a4ace01ab818b613b0b0",
".git/objects/c8/f9ed8f5cee1c98386d13b17e89f719e83555b2": "0fc2e076b543f37f90a9e7159555320c",
".git/objects/c8/07d1d1cccaba1ae765f090c9d5f9b940c07377": "0f1e4f649b7e367c0751b3c394d596c5",
".git/objects/fb/1ef5c1ee9b14ed29d8fc587cdcdccb3fb262a7": "1f8740221bca4b38fe322ad96b645846",
".git/objects/c1/ee81b328176e1d29d7c3a412aa47d28e816b3d": "d6775a08e852a6b03317aa4c9df7ea3f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/d981003d68d0546c4804ac2ff47dd97c6e7921": "318597cf2655c5770342bae4ab7b90a3",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/29/cfdc84400ab8a7898075be2b8959fc1ce1326d": "f1c14b66e999957d08283625cea91d34",
".git/objects/89/c2725b70f1882be97f5214fafe22d27a0ec01e": "99b17ebd650decc04c5de3b0893b27f7",
".git/objects/45/303f9958e638faf87374486d0e96b89023351d": "7aaa290d8b5e7f86e33d4bffbaf2bf32",
".git/objects/80/dd6848309958801f535eb1fdd3069e37929959": "273e930701b67a4e962d9880203f0801",
".git/objects/28/c6bf03016f6c994b70f38d1b7346e5831b531f": "859e347621927457ff896dba865a18fd",
".git/objects/17/987b79bb8a35cc66c3c1fd44f5a5526c1b78be": "f47de426b1d6c272d2659c734c9de80f",
".git/objects/17/e9516a74074fad22bac3e52e39131886697622": "2cccf0b2cd7b787a1f969f9552b76de3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/de12118dda48d71e01fcb589a74d069c5d7cb5": "28e8a446706511f1a67da714824896ea",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
".git/objects/75/b2d164a5a98e212cca15ea7bf2ab5de5108680": "d453ef5dc75a6b2e158c081f7a51acac",
".git/objects/86/ab07529b7577d2dce7315ea9cd43655b38b3a3": "b508e00168e2b4fa77711089d587c04d",
".git/objects/86/4a0d28df8a409f465690e62aa8ff814494248b": "fd309b67973388ea21187784c9f35afe",
".git/objects/72/79f5c3a5bee60d74a4fc684ca9f1166ae853e5": "fb470ab0927d24346ddce72840cc12c2",
".git/objects/44/63b0e9624da39eacf92d20e7bc7c087c64f03a": "51d879ece7fa7be5ad7faba5a87c6cea",
".git/objects/44/cc7187a41a11d3c239908b3bcd2b2162529cd1": "623d6cfcce9470458974fc6783e25e34",
".git/objects/44/9a9f930826851b495d039f0c0d57f247536615": "64152505999d8f1e4fd9224415d1ffad",
".git/objects/44/e62bcf06ae649ea809590f8a861059886502e8": "2e42f843c31c0484de7ce7a7c79cd856",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/3333da69b551a0382f161791b46eb1d1103b77": "3a724caa790e09a6434d2abe04e289d2",
".git/objects/00/1f3a6ec059ab22519aced591a060c8a5a3cb3e": "866f5c0b746fb66ac2a5624ebaa4a375",
".git/objects/36/cbce676bcfbddfa689b9d0abf23ac40fd2e60b": "8c963983d40f36e775abdac45c7810e0",
".git/objects/09/d4391482be68e9e4a07fab769b5de337d16eb1": "a603712ac5534497bc4fd35ebd46b0b7",
".git/objects/91/9434a6254f0e9651f402737811be6634a03e9c": "6da5342c04a33ac2131fdae2e4a84892",
".git/objects/30/4732f8842013497e14bd02f67a55f2614fb8f7": "76eb293b5c9304707852ee681a90e8fc",
".git/objects/30/c8aea78acd16f3d51c08fa16ede8612a269184": "59dafa85d56ffe05580706200620ddb2",
".git/objects/30/8a2a560b42f17aaf3c36e4e9c8cd07182fbb7e": "bc183808cfc617fa9474743616eb4aee",
".git/objects/6d/ab594db03516d08380602cd5c3d7a680a4899e": "4298e4243e38d32370ef4dabc9961076",
".git/objects/01/6512c716091729c0672d7b7ff9fdc674a5956c": "a69277bcf7db1359d10e1c9956874717",
".git/objects/6c/8e736c9131cbed40246aad6c478f4be38fbd3f": "f2b1e79be5b3a72ec8b64640a7d3e089",
".git/objects/99/1f5ff5b255a6d218e6d0382c462fc8889d163b": "f41a0f88ddb95b6f8d4739e7413f5484",
".git/objects/99/0df0549bcc76bb9d8f0de9e066d337de97d0ce": "e438e0b890a99652d59df6f5178998e8",
".git/objects/52/18928833984a2bb86d2f8ad4a9ed3022aaf42c": "fb81a348c23c23d0c2886493e49e0117",
".git/objects/0f/a6b675c0a52be9242fc68269eefce46828ad43": "3732df75a452960f40377486a7eb2955",
".git/objects/0a/6277bc9ea8ca8fb81c3aaee4eb69e526d0b3be": "3e8dd879ea03f913806c48ec08854414",
".git/objects/0a/741cb43d66c6790a2a913fa24c8878fb1ab7b5": "307011b7f3f57c355deba17946cc9f69",
".git/objects/64/a71d06ebba6e74316c225c52e1a44d68c72eba": "2de8608201d2fc12a231804403c944b2",
".git/objects/64/23d0a1754313c50ab39e2ddaa8f3d74892134b": "dec1800386794d7c316af2e4a78e0d27",
".git/objects/64/35c65440662b7a656ef98832aacb5b0b6f93e3": "3658f753542e4521f133cdca225e59c4",
".git/objects/bf/9dd781f5df1a71c69e414913c939f1c2ae7ac1": "a9a061e2bd74367ee31013bf895b5bdc",
".git/objects/d3/6b1fab2d9dea668a4f83df94d525897d9e68dd": "f19c13a91df6187b27767a0c81787173",
".git/objects/d3/b9e0aafa70e7b518de6d7f36503def555e3867": "c4acea7ad0add3f7670f8bff8463c738",
".git/objects/d3/41b6f55a656d8fb73e0a3750e1dd0ad1d54aeb": "2687b71ff655cf81b04f6c989dd2a158",
".git/objects/d3/2978c86605b2c1a36a99b5549a2d47f9fc3b60": "6bf449ac589fb0f63edd8ac1eaca288b",
".git/objects/a7/7f2965348a5ae843b29a073171f2bec78be079": "c28dd2d2140ee9bf5aac6577d4b164de",
".git/objects/b1/0002aa16e351dd2f371eb31a3a03e7b8651e6f": "f3445ff8cee90548e8ad9c34f00e4d3f",
".git/objects/dc/9ada4725e9b0ddb1deab583e5b5102493aa332": "e8022082c258e4c83e27519f77484618",
".git/objects/dc/dc2306c28505ebc0b6c3a359c4d252bf626b9f": "e712bf13b0d526e57c6ee1c8acc412d4",
".git/objects/b6/4cc2b4cf1042cc3333ba750923ad195d5e8f7d": "9b14fe71e098e87acfc07bf4836c1f63",
".git/objects/d5/f1c8d34e7a88e3f88bea192c3a370d44689c3c": "2e5a4148dc9ebc15b186574d9fb60432",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/77bb4b7b0906d62b1847e87f15cdcacf6a4f29": "a2e10fc9c4f60ac00e2b9b1ed3a0b5ac",
".git/objects/db/1d9fa5a3058ebd89d1c24295da1ddb5fe2014b": "9e9257d7c7b6fa1c5adb8468ce1c2c33",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a6/d6b8609df07bf62e5100a53a01510388bd2b22": "821831c6c42de47994c16f6a1db3ea7e",
".git/objects/a6/368af0ee7628fa194ef8fe3bbe4523113d6e05": "bafb07bb0e67f8a015ad7c670f7072fd",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/0e979f1f36fce9f2998f7b1a6e6098ce25ba5d": "552253523b15b1883b1f2dbdb8f9361e",
".git/objects/c4/df70d39da7941ef3f6dcb7f06a192d8dcb308d": "d394f8200d968d57839b22cbe657146e",
".git/objects/f9/b0d7c5ea15f194be85eb6ee8e6721a87ff4644": "db1ee38473c66e5ffa9d28f6dfe66938",
".git/objects/f0/91b6b0bca859a3f474b03065bef75ba58a9e4c": "1aef8d0dea7cfdb7ffb51559c81d2fdf",
".git/objects/f7/4085f3f6a2b995f8ad1f9ff7b2c46dc118a9e0": "c04177ec14f012cb2c99851a5e1ca941",
".git/objects/f7/d718f006b24b452d10df8f9b0993891a84aeb7": "ec6e08c00a24fbc7f67307da21d8eb63",
".git/objects/ff/f68a41baa8db3a34fd930544e09d9d40678f6f": "adc4c94dc66895f3b6048b51d980df9e",
".git/objects/ff/94fe52a13d51447182a06ec12796c2c5608fdb": "d019ab9833ca734030b1bee03c0b490a",
".git/objects/c5/05a8635265e70591a0ef5546d84e1ce44b91ad": "a101838a2a2a3dae7d913ddb73dc41a1",
".git/objects/c2/0fc11f04c4be27935fa7c2b3863ab368f28414": "91066b827cc12ff0bc5f0f4ca5c6881f",
".git/objects/e9/6ef602b8d172f7cd28ba656aac097f741c736d": "c3323f418dab0a55952c00cd3adbeb55",
".git/objects/f8/4657af5ff632a85debd4a6484cd7b6e69ed570": "2b35901cbc2b44aedc108b9cae52f35e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/b726bd53d47e61ba941eb355b9c8633ebbaa20": "480b1cf7af4c452e5722818c06aca052",
".git/objects/2c/fa6c27ccd7f352b27c19a3ae9d19eb84873ba8": "2fa8587a72daf46dd92557fe1e604c44",
".git/objects/2c/9d4a0d74b4b9afa3a630c9f3f6e0eb1398b642": "e0e5193baa22e313e78f8acb8125781a",
".git/objects/2c/cbfd967d9697cd4b83225558af2911e9571c9b": "79f574379587d27e91d5ebf05ea6e777",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/70/693e4a8c128fc4350b157416374ca599ac8c7b": "6942d9ddf2906a8e847e7ef6889a4221",
".git/objects/84/b6494fc98b9c670b1ee5f1294c4c236673a2ee": "5f705e128350b175d33e013c137f7aba",
".git/objects/84/d08f7b151f10507b1d8c24043ab1d088f4c0aa": "a6fbdf88da12c6ac558a3a6de7fc2c33",
".git/objects/24/7f5694ce6ce339f35bb58a657960ba9b26a6bc": "26ea2621da751d7b92d3f1984d54851b",
".git/objects/24/d2a98c36b09e214e158a5f389ed4754bd16d5e": "aacd281109d240568711462f49f78b7b",
".git/objects/12/07907107a69225128cf802edc5ea23f2e3bcda": "f4f5682dae647d62bd2dca62ce7823a9",
".git/objects/85/9df5f72ab5b55b5ac8bf7ab7d99fcc4373ba39": "5a1e2bb5b8e783b5a95dc8d6963fb1c4",
".git/objects/1d/526a16ed0f1cd0c2409d848bf489b93fefa3b2": "12bcdfd9683b55567627456d0773a4e5",
".git/objects/8b/8985b4e1d73059a02a87f561ac3741039aa9ea": "eafbefd2248229991550b91d67a21049",
".git/objects/14/8da3098986ea6c098d5a7b1f8e9cbf6b427b56": "9bfb32c54891d8b9226a37dddd010698",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1c5aa5cb7463e7b6d40bbabe3f8ac96b",
".git/logs/refs/heads/main": "2bea31283b727d0b2c9742db8c6dd724",
".git/logs/refs/remotes/origin/main": "44c5e5408d09d2595b457b57bc307e5d",
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
".git/refs/heads/main": "cd6e628642a5376e1e00c3a5fc1b1b71",
".git/refs/remotes/origin/main": "cd6e628642a5376e1e00c3a5fc1b1b71",
".git/index": "33ab71651c385cbc25f0c6f2ecc6d761",
".git/COMMIT_EDITMSG": "0b3779f0aad0fee78f21b666a60db042",
".git/FETCH_HEAD": "3fea4f23105788ece26e848a8bfd79b2",
"web.iml": "0e10d326c956d57be354882dfdf4d740",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "b87e7ceb9de555cb3775cbfd1db2618c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
".idea/runConfigurations/main_dart.xml": "2b82ac5d547e7256de51268edfd10dc3",
".idea/libraries/Dart_SDK.xml": "29e82596f551e9d372d42ad6e9eb5fd6",
".idea/libraries/KotlinJavaRuntime.xml": "4b0df607078b06360237b0a81046129d",
".idea/workspace.xml": "cc5f609be0f96835c87839f62217d14b",
".idea/modules.xml": "6e562bd2e74aaa79b0f10c5b25fab769"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
