let navbar = document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');  
}

/*

keterangan :
1. let = kata kunci dalam JavaScript yang digunakan untuk mendeklarasikan variabel yang dibatasi oleh blok.
2. document.querySelector('.navbar') = pemanggilan metode 
3. querySelector = digunakan untuk memilih elemen dari dokumen berdasarkan selektor CSS.
4. document.querySelector('#menu-btn') =  sebuah method yang digunakan untuk memilih elemen HTML yang memiliki id 'menu-btn'
5. onclick = digunakan untuk menentukan apa yang harus dilakukan ketika elemen tersebut diklik
6. () => { ... } = sebuah arrow function yang akan dijalankan ketika elemen tersebut diklik
7. navbar.classList.toggle('active') = sebuah method yang digunakan untuk menambahkan atau menghapus kelas dari elemen HTML.
*/



