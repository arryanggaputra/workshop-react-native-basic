# Workshop React Native

https://colorhunt.co/palette/fbf4e9b1e6936ecb63ec9cd3

## Requirements

- `npm` untuk instalasi NPM dapat dibaca secara lengkap di https://www.niagahoster.co.id/blog/npm/
- `expo cli` untuk installasi dapat dibaca di https://docs.expo.dev/workflow/expo-cli/

## Membuat Project Baru

Setelah `npm` dan `expo cli` terinstall di komputer, langkah selanjutnya adalah membuat project baru dengan perintah

```
expo init NamaProjectAnda
```

Setelah itu pada terminal, akan muncul tampilan seperti

```
Choose a template: › - Use arrow-keys. Return to submit.
    ----- Managed workflow -----
❯   blank               a minimal app as clean as an empty canvas
    blank (TypeScript)  same as blank but with TypeScript configuration
    tabs (TypeScript)   several example screens and tabs using react-navigation and TypeScript
    ----- Bare workflow -----
    minimal             bare and minimal, just the essentials to get you started
```

Kita dapat memilih opsi yang ada dengan menggunakan panah pada keyboard, pada workshop kali ini, kita pilih yang paling atas yaitu `blank`

Setelah anda memilih `blank` pada opsi diatas, `expo cli` akan menjalankan proses instalasi untuk persiapan project Anda.

```
✔ Choose a template: › blank               a minimal app as clean as an empty canvas
  Downloading and extracting project files.
🧶 Using Yarn to install packages. Pass --npm to use npm instead.
⠼ Installing JavaScript dependencies.
```

Apabila instalasi berjalan lancar, akan muncul pesan seperti ini

```
✅ Your project is ready!

To run your project, navigate to the directory and run one of the following yarn commands.

- cd NamaProjectAnda
- yarn start # you can open iOS, Android, or web from here, or run them directly with the commands below.
- yarn android
- yarn ios
- yarn web
```

Selanjutnya, kita masuk ke folder yang telah dibuat dengan perintah

```
cd NamaProjectAnda
```

Setelah Anda berada didalam folder yang akan dikerjakan, kita jalankan perintah `yarn start` , setelah itu akan muncul tampilan seperti ini di browser.

![server.png](https://i.ibb.co/XZmJRr2/server.png)

## Menjalankan aplikasinya di HPmu

Kamu harus mendownload aplikasi Expo client terlebih dahulu

**1.** **Download aplikasi Expo client**

* 🤖 [**D**](https://play.google.com/store/apps/details?id=host.exp.exponent)[**ownload Expo client untuk Android**](https://play.google.com/store/apps/details?id=host.exp.exponent)
* 🍎 [**Download Expo client untuk IOS**](https://itunes.com/apps/exponent)

**2. Buka aplikasinya pada hpmu lalu pilih "Scan QR Code" **

**3.** **Scan QR Code yang ada di pojok kiri bawah pada browsermu tadi**

**4.** **Tampilan pada HPmu**

![rsz-screenshot-1595521097.png](https://i.ibb.co/9rMp39k/rsz-screenshot-1595521097.png)

## Install AsyncStorage

Ada banyak metode yang dapat digunakan untuk menyimpan data di Android dan iOS, pada workshop kali ini, kita akan belajar menggunakan penyimpanan data di local, salah satunya adalah dengan menggunakan fitur AsyncStorage, sehingga data tidak akan hilang walaupun aplikasi di close dan perangkat anda di restart. Untuk menginstall AsyncStorage, cukup jalankan perintah dibawah ini di terminal.

```
expo install @react-native-async-storage/async-storage
```
