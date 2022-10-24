let images = [
  'https://wallbox.ru/resize/640x960/wallpapers/main/201306/cvety-fioletovye-krasivye-d1981a2.jpg',
  'https://wallpaper-house.com/data/out/9/wallpaper2you_325890.jpg',
  'https://c0.wallpaperflare.com/preview/597/354/530/bloom-bunch-of-flowers-colorful-colourful.jpg',
  'https://i.pinimg.com/736x/41/8e/26/418e26071459110d21f8b5717cb9d10e.jpg',
  'https://c1.wallpaperflare.com/preview/842/616/871/flowers-tulips-purple-our.jpg',
  'https://i.pinimg.com/originals/5d/d2/20/5dd2207ccd83aa56bace474cc603960c.jpg',
  'https://i.pinimg.com/736x/51/a1/9a/51a19ac323e1669bf904eba2a5268f6e.jpg',
  'https://i.pinimg.com/originals/ca/20/9f/ca209f434cb2abaad9b4e34224a11bc5.jpg',
  'https://i.pinimg.com/originals/3e/f5/2e/3ef52eac7a24844bb24a4b437d68c8a3.jpg',
  'https://i.pinimg.com/originals/b9/62/07/b96207bc27870ab7a2ef387b6a4ba045.jpg',
  'https://i.pinimg.com/736x/26/84/b5/2684b512d5af3703e91b84a02b1619d7.jpg',
  'https://i.pinimg.com/originals/94/15/ac/9415ac4303f05ef25a4f0dd702598fb8.jpg',
  'https://i.pinimg.com/736x/12/62/0d/12620dbc1903afa8daa282edb7acb845.jpg',
  'https://wallbox.ru/resize/640x960/wallpapers/main/201236/peyzazhi-bce1ead83786.jpg',
  'https://i.pinimg.com/736x/0c/e7/4d/0ce74d15f1fa507de0416cf5a629bb59.jpg',
  'https://i.pinimg.com/736x/82/d8/79/82d879590865f7c8b8ab5dadc71409d1.jpg',
  'https://i.pinimg.com/736x/71/b6/78/71b678f03af376798994b515615b677e--spring-blooms-spring-bulbs.jpg',
  'https://i.pinimg.com/originals/26/80/ed/2680ed4ead0dbd82c65934d47210a113.jpg',
  'https://i.pinimg.com/originals/2e/da/d4/2edad4f7db7e449a73f08a3a34984a66.png',
  'https://i.pinimg.com/736x/79/a5/ac/79a5acc42ce8148ff79738ee5b0755e1.jpg',
  'https://i.pinimg.com/originals/95/4f/9c/954f9c87c148cb8e4748d1f1ccb3dafc.jpg',
  'https://i.pinimg.com/736x/32/6b/b4/326bb4fa1fb67e31dc6e9c8cf2c5af0e--pink-blossom-cherry-blossoms.jpg',
  'https://i.pinimg.com/originals/f9/71/87/f97187b5d18fb777adb21c1d56873f7f.jpg',
  'https://i.pinimg.com/736x/7e/3f/11/7e3f1199d87ae9ea0da304f5721d1289.jpg',
  'https://i.pinimg.com/originals/88/13/f7/8813f7cad0321cbcf762f21bf8b05851.jpg',
  'https://i.pinimg.com/originals/bf/ec/c9/bfecc961aac82b8f067b180f32a4da2f.jpg',
  'https://i.pinimg.com/originals/94/21/b8/9421b8bcb1627a3764b9f3061f2c3096.jpg',
  'https://cdn62.picsart.com/192363488000202.jpg',
  'https://i.pinimg.com/originals/d0/75/9d/d0759dd8e7d78c9820b109faf8dad255.jpg',
  'https://i.pinimg.com/originals/78/74/70/787470231b6ece0ec99c8e3919597014.jpg',
  'https://s1.1zoom.me/b5050/241/Roses_Many_Pink_color_512131_2048x2732.jpg',
  'https://m.obsuzhday.com/user_media/81e/160/aec/879d4.jpg',
  'https://vsegda-pomnim.com/uploads/posts/2022-04/1649664102_55-vsegda-pomnim-com-p-nezhnie-polevie-tsveti-foto-62.jpg',
  'https://i.pinimg.com/736x/a6/a0/84/a6a0842aca92925488c340e441468f9c.jpg',
  'https://i.pinimg.com/736x/2b/60/ba/2b60ba9bf0c47032701aac7a4a17368f.jpg',
  'https://i.pinimg.com/originals/dc/c1/40/dcc140562745acf75380c6cdc147eadf.jpg',
  'https://img2.goodfon.ru/original/320x400/e/fe/dina-telhami-closings-cvety.jpg',
  'http://file.mobilmusic.ru/30/bd/97/1121672-800.jpg',
  'https://i.pinimg.com/originals/56/ba/ed/56baedaffc20c5225aee197d7df8df23.jpg',
  'https://i.pinimg.com/736x/a0/3c/84/a03c8403c17d4ee98bbdad646a4faffe.jpg',
  'https://i.pinimg.com/736x/ef/04/ae/ef04ae030ccb07cc190ddae8ff4ae4af.jpg',
  'https://postila.ru/data/d3/15/41/72/d31541722a37c70827003eb6487c289a5f076acdd91720b594e6a75723f38cf2.jpg',
  'https://i.pinimg.com/originals/87/7a/ad/877aadface120946ecc3f934e2a3be9a.jpg',
  'https://i.pinimg.com/736x/38/61/ce/3861cea136f5495c5a783b750330bb11--buy-flowers-iris-flowers.jpg',
  'https://i.pinimg.com/736x/63/02/bb/6302bb61183af1fc4aeea03b136ba9e9.jpg',
  'https://img5.goodfon.ru/original/320x400/0/82/cosmos-nebo-rozovye-leto-summer-field-pole-pink-flowers-ts-1.jpg',
  'https://i.pinimg.com/originals/a0/45/ba/a045bad9af0fe38fe0173a9808c7f0df.jpg',
  'https://i.pinimg.com/736x/6e/56/59/6e565951eaaffc6ec89e5be32eb45b90.jpg',
  'https://i.pinimg.com/736x/cc/bd/f2/ccbdf27eaf3f4330ce2c5c292fac2504--red-flowers-pretty-flowers.jpg',
  'https://i.pinimg.com/originals/1d/3d/dc/1d3ddc9b8b248fee9eabe178b76f4c32.jpg',
  'https://i.pinimg.com/736x/47/eb/a3/47eba34ed573eb13b7915c978cb25f10--rain-drops-dew-drops.jpg',
  'https://img.wallpapersafari.com/tablet/1536/2048/84/96/Db9iyY.jpg',
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(images);
  image.src = randomElement
});

function getStartImage(arr) {
  let randomElement = getRandomElement(arr);
  image.src = randomElement
}

getStartImage(images);