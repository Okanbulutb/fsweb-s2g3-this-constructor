// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
    - Bir Kisi Constructor'ı yazın 'isim ve 'yas' argümanları alsın.
    - Tüm Kisi örnekleri boş bir `mide` dizisi ile yüklensin.
    - Kisi örneklerine `.ye("birYemek")` yeteneği ekleyin:
        + .ye() parametre olarak bir string almalıdır, bu parametre yenilebilir bir yiyeceği temsil eder
        + Bir yiyecek yenildiğinde, `mide` dizisine eklenir.
        + Mide dizisinde 10 eleman varsa `ye` metodu hiçbir etki yapmaz.
    - Kisi örneklerine `.bosalt()` yeteneği ekleyin:
        + Eğer bosalt tetiklenirse, 'mide' dizisi boşaltılır.
    - Kisi örneklerine `.toString()` metodu ekleyin:
        + Bu `isim` ve `yas` i içeren bir string döndürmelidir Örnek: "Mary, 50"
*/

function Kisi(isim,yas){
  this.isim = isim;
  this.yas = yas;
  let mide = [];
  this.ye = function(food) {
    mide.push(food);
    console.log(mide);
  }
  this.bosalt = function(){
    mide = [];
  }
  this.toString = function(){
      console.log(isim);
      console.log(yas);
  }
}

const deneme = new Kisi("Mahmut",27);
deneme.ye('Hamburger');
deneme.bosalt();
deneme.toString();

/*
  GÖREV 2
    - Bir Araba constructoru yazın, parametre olarak `model` ve `milesPerGallon` alsın.
    - Tüm Araba örnekleri:
        + `tank` ı 0 olarak yüklensin
        + `odometer` ı 0 olarak yüklensin
    - Arabalara `.fill(gallons)` metoduyla depoyu fulleme kabiliyeti ekleyin
      + 'gallons', galon sayısını parametre olarak alacak
      + girilen galonu `tank` a ekleyecek.
    - ESNEK: Arabalara `.drive(distance)` yeteneği ekleyin. Distance ile ilgili:
        + `odometer` ın yükselmesine neden olmalı.
        + `MilesPerGallon` hesaba katılarak `tankın` düşmesine neden olmalıdır.
    - ESNEK: Bir arabanın benzini biterse drive metodu etkisiz şunu döndürmelidir:
        +  "x milde benzinim bitti!" x değişkeni `odometer` daki sayı olmalıdır.
*/

function Araba(model,milesPerGallon) {
  this.cars = model;
  this.tank = 0;
  this.odometer = 0;
  this.fill = function(gallons){
    let galon = gallons;
    this.tank = galon;
  }
  this.drive = function(distance){
    this.odometer = this.odometer + distance;
    this.tank = distance - milesPerGallon;
    if (this.tank === 0){
      console.log(`${this.odometer} milde benzinim bitti!`);
    }
  }
}

const car = new Araba("Batmobile",50);

car.fill(50);
car.drive(50);


/* 
  GÖREV 3
  Kendi cümlelerinizle "this" kelimesinin 4 prensibini açıklayın:
  1. Window/Global Bağlaması => Global scope üzerinden "this" değerinin console'a bağlanması çeşididir.
  2. Örtük Bağlama => Bir fonksiyondaki nesneleri çağırmak amacıyla kullanılan bir bağlanma çeşididir.
  3. Yeni Bağlama(New Binding) => Bir fonksiyondaki constructor'u kullanmak amacıyla "new" anahtarı kullanan bir bağlanma çeşididir.
  4. Açık Bağlama(Explicit Binding) => call veya apply yöntemi kullanarak bağlanma çeşididir.
*/


/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as(){
  console.log('Kodlar sorunsuz çalışıyor!');
  return 'sa';
}
as();
module.exports = {
  as,
  Kisi, 
  Araba,
  /* Bebek */
}
