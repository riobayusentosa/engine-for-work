# Tentang API
System API ini dibuat menggunakan express dan database postgresql digunakan untuk backend


## Konfigurasi Aplikasi
buat file dengan nama `.env` pada directory root folder api


```
PORT = 5000 [sesuaikan dengan port yang anda gunakan]
SECRET = [isi dengan password rahasia anda]

SERVER_URL = http://localhost:5000 [sesuikan alamat dengan port yang digunakan]
CLIENT_URL = http://localhost:6000 [sesuikan alamat dengan port yang digunakan - ini nantinya digunakan untuk frontend]

DB_DRIVER   = postgresql
DB_HOSTNAME = localhost / alamat ip database postgresql
DB_USERNAME = username postgresql
DB_PASSWORD = password postgresql
DB_NAME     = nama database postgresql
```

## Memulai Menggunakan API.

```
npm run dev
```

