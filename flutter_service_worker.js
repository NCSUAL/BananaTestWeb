'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d5922486569ef4c794215b4c5f1d3945",
".git/config": "c10816a5e03c040b3b447990e324cb9d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "969ff7cbf9c2b015f5b3c9b7fe97d859",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c1a83b558045f1ce516e22c81706daf7",
".git/logs/refs/heads/main": "c1a83b558045f1ce516e22c81706daf7",
".git/logs/refs/remotes/origin/main": "c1312d4d77accbab15aa986cb6c831aa",
".git/objects/01/147e9991c91198235e8deefe9c3145dfad8d2a": "cfaf7b92d9d17b80550e0dd1f4d3915e",
".git/objects/01/f6f6480633dbc9c84061fa7d1b92b341dbf9a7": "e5471a689bee022ce2bf5eb1b3a2a319",
".git/objects/05/db751a18b23e7bf44d98adce212d823989509d": "667835057a77dce2c5d67b9dbeb00a3c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/0c505eecfd35315305fdaaeda65e68884f1b75": "de9344e33cc680df077d0a9df9e02990",
".git/objects/09/e6542842287348f8f562dfd69f1b149233d005": "85233b8ee0395b322734294ff981fbbb",
".git/objects/09/fc786189258e273536447571c823fbebe51194": "4f86181e6be1f3afd7a90c8aa32b9746",
".git/objects/0a/481801268da2d5f3b660ec2fc19b6115a26af3": "dbd20a2d52f19e0097d72e4bcd1138f7",
".git/objects/0e/1f6f5f0938bedd69ce9481b453a582abbaa197": "47397053177bce4dd0ca138006aa3377",
".git/objects/15/e2fd5005591e022f629555f77e7a2698e0d6b6": "0a77f9b6bff70022f9652f2fd4ae145a",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/8f1a5cbc65250f6a1056b6474869de1e4f1551": "690c3f3404c541667c3434221d547e19",
".git/objects/1b/ee457d254cc154f7234717827c6ca51f84fed8": "362033e0ca9dbf567d0052965db7b27d",
".git/objects/1c/73cc5753f2b242a3c076ed3c49501a6e2307ea": "49218ff2ab45f14da6af5c164e912b6d",
".git/objects/1d/b67c68fbd6922637bda59b917ae2d8721971c3": "80d21e2e7620cc810d4973d24d22b8ea",
".git/objects/1e/516c31119b650f1bf29f80a116618ce2c05db3": "37638edb3ae682f4f2a2fec99d33f4f1",
".git/objects/1e/54aff8107a8db6585f7667b9e62370a713cc34": "e28149ecda59fddb84572fc20aa52424",
".git/objects/1f/42f6907bd3fa8377bf2b622eecd8604a125aef": "9282866484f44fa16a41acbcb119f6a2",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/0d47c49ad0e69dacf020279328e7ce6eb7247d": "8b2faf7feaaf37571aba4eba361d0627",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2e/3806fcc9868f395fbc188a8c66f980daa72edf": "408f365047bda9beb8976c2407359a4c",
".git/objects/2e/416540248ed7b831833aae0374f63b692301bf": "7a88e90f6f699d7c829426c5700f19f4",
".git/objects/2e/8541d699c937146bd1422d3624e94e53e2d589": "0b1d3f56d393deab0730e1a9b431a5f2",
".git/objects/2f/184b71ce5247d1a662ba6456fa652c3fab6879": "68376da4963f47a46969d1dfb8f08105",
".git/objects/30/8e692bf951979b01e9089bb32687787262aea5": "a9300c0152c8fc5bb584ca69da1596e5",
".git/objects/30/babb314dc49bf4a1f56c97b337398c0b41ee85": "26af41441c81a80e92deac870d9bc328",
".git/objects/32/a07bc10621235cba73ea4907c509ccd035fe68": "70e7eceb59c1c227bbbb2aa78314efe1",
".git/objects/34/3c423de3dc8e05ff7dab9b369e79a6bc17f84a": "cd1244c045cc5b5a117b7531b551f7d1",
".git/objects/38/00f337639882da5b79467fa59833df9794837e": "b48a9fa32091f6672c1a5a7979f95e07",
".git/objects/38/96c001b32b5247427da4c7ca7c8f9a5b43563f": "8d31e9178413f04e6869b0cab6acf08a",
".git/objects/3d/ccb1906158151828dbd6eb85bf490378ea1e12": "a5de4eeade93e1331700294ce23452de",
".git/objects/3f/6c58c5eb344c3a09f5f8bb8f84ad9fe4f9f4a6": "c3d8222b1f3ea9f4a89aa33019eaaabb",
".git/objects/41/7c5845fcddfc7462632c574239eb7ca827746d": "ed28d20df925473dfd578793ba17e664",
".git/objects/42/48c52f66362bf2736c9b2fc8f93cccda7f2982": "a62cd1a0325d026f2106e704c65c4b09",
".git/objects/43/e9787e106db555b4b4fa317621901c42aa1a69": "1519b489af86c0a32cebc67eba9915f3",
".git/objects/44/d1f51ec052a7564e7490a9e258b12131ccbb72": "8d28fb9b9f01775fb025ee3cc72eafe2",
".git/objects/45/0c53c4a8dc938e528e2bec3169a055e37c8b2e": "088120d578aed5eb1ceeb5e2b8517c94",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4e/395c19e1aa04b3ce93780b0f45cc53b0d9a0b7": "6f4d851667817df29ba835ac29863bf0",
".git/objects/4f/1aec995d5c9cfacde52041a6399609b1edc6e8": "fb31ee6335e837c44f1f46c7fb1d7781",
".git/objects/54/9a24501969cf22c17a104ae0d721cf7ee79928": "02a212a472bd948344ba37dfddb24ce3",
".git/objects/55/a6ea848e42f8cf8c008f8a9e32b4140c137f10": "f4e20e7b4bb31194fed3e20373ecb227",
".git/objects/59/bbe6c83571c6db08e33822edf56874d5868f49": "0aabef97a2ffc43cd2ccec8494e73760",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/c26905be08372bb21fb14a0f599a2037b3380b": "0c322464126577f31e463641dbc0014b",
".git/objects/60/a7cf739f8e73f59cc3eb64477548a2b3b963c1": "f64724394b7a98f8aa4bd5ba5c5f1a91",
".git/objects/68/b511f3adf05767a4ba70be6dc8cf5e9972175b": "4014bca64386e9dc6db2e773f810c2c5",
".git/objects/6f/809bae1d93d4d9807d39bd6e8a53d3583af0a0": "ab73156be7cb85c090a35b5aef881317",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/2f20f43dbf7c9f071ea4ebe7609889cca86b55": "938386a35703cd890dc2d821f4570e9a",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/73/b5b465c16fcc02c3712c2de601ae7bacb392e9": "d0e4caca7f7cc99ece4b8f80ca93e3d1",
".git/objects/78/be5f62f5e6dcfe169dda04e0cc2c53d82e6f48": "a53bb3d3b61eccbeac7e8a3d4ea64d59",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7e/e4b9b77fa041a004d3ad4c55338f58df3b94d7": "0dc1d6642013bd7c0690981afef9d0a5",
".git/objects/80/5a510dbbb0990415492c425a2d88af00d9a0c1": "93365ac2c7f071ebc6152b4ee8e81ca4",
".git/objects/81/b33ec6c2976844897adf68dcc81ea52959f99c": "070ff8163e6e5c9f3fe33da3d7fbc547",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/48c31543dc7b6b0ab5ae4e05f29686a5725cf3": "b9fef7b1b1e53a20f2f343365a39629f",
".git/objects/88/70109208eeb06509ac567d790327d969b9bc9e": "c76817e7b2cc22e4d4ed884624036f25",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/dfb1c2fa9696a9b511a4c6d907e4b3727bd1a8": "1275c894d07bae44801199554969ce86",
".git/objects/89/5917720205d6dd97ee1141e830bed4a3ae761b": "be6a6caaf2ff46e2d7093f1ce52ab676",
".git/objects/89/ee09ee22a1e82c3dd55745d4f4c04496bf2028": "20194f3940cd5b80b53b31c2dfa128ed",
".git/objects/8a/4ae9a6e0abbe74f5e98bc5a8b9eeafc22ca71a": "cf6d204366833659e49e4ff4c927deed",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/96/c6499c2a440490bd64bbb5cf30b83f6e7231bc": "74ac660978079d18beb62277e8405501",
".git/objects/99/9a0dc4b7a92ca966559f3d8daabc3fa655e287": "bcdac05e767467e1d4bbe903f67bea1b",
".git/objects/9c/13727721cfaa84a6d64c9e30f653c66286e3fd": "52c07b6a8521cc13da404ee0156c046a",
".git/objects/9d/5fe072877c2f8bbec95f9ca99a5e4f43eb84f6": "b7a1bdbd3ab9a398ef7a57777cb0b6b8",
".git/objects/9f/2690f0979cfcbf1492fc3927536284e346d065": "d181cd7db507804b1c46db7c16fca635",
".git/objects/a3/08be9047d2fcb3e304bbef0e40cfea1db61671": "2ea5e223d2b4a1a53e7a51017f7f3cbb",
".git/objects/a3/7376b0eb15dfa323ed49a15b2afbf23b085074": "68283e6b8797f22f4cdf8b7d0281a878",
".git/objects/a5/123ae4f226eafa7c18a8343b69e19a2c94f3ca": "0c7e0800402681274fd777471620c74c",
".git/objects/a9/41ceab3edd6717d0e0d45c7d4ca41230c3e455": "6712788e6eb35eeac00a8fb50e316e2f",
".git/objects/ab/7622e706b4b9207d0f92d85dfc533d93135353": "a0d1a2b5ab59c27900896f20644be925",
".git/objects/ad/d7a05a0d4a89d6d74afd702a5a083cdf26ba41": "5bf2a5ec8272e19cf0a350f4b4ac9886",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b2/02e1594915f52bcda871655f8744b930885291": "fb7fa647cffdf715de605f0dc5c3e63e",
".git/objects/b3/acd8360a1c8da13e609fe53b4351b4539de704": "fb0c548a1bbdbb746f3926ac9a17fcda",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b6/7ccb25f3b318e6f9f30a0d2cdb213cb9238df1": "80471b56e7c959301fe29a3cb0b96290",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cc/f89b69bfb4223af16bdbf67fd2a143eaaf0a0e": "37de7fbb5e33161ff1f21e44dfd7d9ad",
".git/objects/cd/72e9d9067323b8aa98b7666093375bcf132256": "9a837eb4acc2d06bebc6cf9bb270960e",
".git/objects/d0/c1db81faeeae35197608e5f408177ea78f25b9": "562d7a150691e47b975f8e32a061f5a8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/99b38eb604a6d490503d1b060597e9a4a08c3b": "346ad0eb5927441c5a659b225093916d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/24ed7e249ac0a968c8297db616d3e7ab8ccf5e": "4f4f33ea455bc2d7f7de0075ac447f53",
".git/objects/df/f0f241d2485c84e5ee4ecfcab44315bfefbe5f": "8527e3a7e3ab619b4d7fcc4d1bf5e8dd",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/02ef1f283178ec35f1b0729d9916595476905f": "d9a804fa291d1301c78c8fb742d6571b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/e18c3b4f85fed64bf10f835370ffded44f82ab": "60c834ef67a34df9c2ef41f6fd4a133b",
".git/objects/f8/ba4296bc14317bd2845bb682f330de0cd69e10": "4613304dced7338700c4068d4937fdaa",
".git/objects/fb/07fc65e8e568c60dfd985fb6fcdfd114da4d64": "b1ab81f0fade99f15a8ab4858d03b0e1",
".git/objects/fe/9825f1bba8a714e6a4f2f08f10386ae5f5c9a0": "34c7fd46750da3c63947e4b858a20502",
".git/refs/heads/main": "007316c18ffe4831045f11c278cdeaef",
".git/refs/remotes/origin/main": "007316c18ffe4831045f11c278cdeaef",
"assets/AssetManifest.bin": "648a5cb0a3b5fa6b22c8989db6e8fff8",
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
"index.html": "3d10d684abe088c35e450da82f000e86",
"/": "3d10d684abe088c35e450da82f000e86",
"main.dart.js": "c9ea559ee5a5ac698c7678fd2a06cc5b",
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
