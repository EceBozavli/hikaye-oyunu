let secim= prompt('Elif ve arkadaşları, haritaları inceleyip adanın yerini bulmaya çalışırken, nasıl bir yol izlemeliler? \n Eski haritaları incelemeye devam et / Bir denizciyle konuşarak bilgi edinmeye çalış');

if(secim='Eski haritaları incelemeye devam et') {   //Eski haritaları incelemeye devam et
  
  let ikinciSecim= prompt('Elif, haritalara yoğunlaşarak adanın yerini bulmak için daha fazla zaman harcıyor. Haritalarda dikkat çekici bir simge buluyor: "Kayalar arasında gizli bir geçit". Bu ipucu, onları adanın derinliklerine götürecek bir yolculuk için hazırlıyor. Fakat, Elifin bu yoğunlaşması, grup içinde bir tartışmaya sebep oluyor.Cenk, daha hızlı bir şekilde yola çıkmaları gerektiğini savunuyor. Zeynep ise, haritanın detaylarını daha iyi incelemeleri gerektiğini düşünüyor. Sonunda, Elif bir uzlaşma öneriyor: Önce haritayı detaylıca inceleyecekler, ardından en yakın limandan başka bir kayık kiralayarak adaya doğru yola çıkacaklar.Deniz yolculuğunda, bir fırtına ile karşılaşırlar. nasıl bir yol izlemeliler? \n  Fırtınadan kaçmak için teknenin hızını artır / Fırtınayı göğüslemek için teknenin yönünü sabit tut');

  if (ikinciSecim='Fırtınadan kaçmak için teknenin hızını artır') { //Fırtınadan kaçmak için teknenin hızını artır

    let ikiBir= prompt('Hızlıca geçtikleri için kayboldukları bir kıyıya varırlar. Bu kıyıda yeni bir hazine ipucu bulurlar.şimdi ne yapmalılar? \n ipuçlarını takip etmeli / yardım beklemeli')

    if (ikiBir='ipuçlarını takip etmeli') {
      let ikiBirIki= prompt('takip ettiğin ipuçları seni tehlikeli bir mağaraya çıkardı. şimdi nasıl bir yol izlemelisin? \n mağaraya gir / farklı iuçları bulmaya çalış  ')

      if (ikiBirIki='mağaraya gir') { //mağaraya gir
        console.log('mağaranın içinde yaşayan peri size yardım etti ve hazineyi buldunuz');
      }
      else { //farklı iuçları bulmaya çalış
        console.log('farklı ipuçları bulmaya çalışırken canavarların saldırısına uğradınız, hazineyi bulamadınız.');

      }
    }

    else { //yardım beklemeli
      let yardim= prompt('yardım ararken ada halkıyla karşılaştın şimdi ne yapmalılar? \n ada halkının tecrübelerinden faydalanmalı / adayı araştırmaya devam etmeli');
      if (yardim='ada halkının tecrübelerinden faydalanmalı') { //ada halkının tecrübelerinden faydalanmalı
        console.log('ada halkının anlattıkları hazineyi bulmaya yetmedi.');
      }
      else { //adayı araştırmaya devam etmeli
        console.log('adayı araştırırken canavarlara yakalandın.');

      }

    }

  }
  else { //Fırtınayı göğüslemek için teknenin yönünü sabit tut
    let dayanisma= prompt('Elif, teknenin yönünü sabit tutma kararı alır. Fırtınanın gücüne karşı koyarak teknenin sağlamlığını test ederler. Bu zorlu süreçte, grup birbirine daha çok kenetlenir. Fırtına sona erdiğinde, grup, adaya çok daha yakın bir konumda olduğunu fark eder. Ancak, bu süreçte teknenin motoru hasar görmüştür ve şimdi adaya ulaşmak için kürek çekmek zorundadırlar. Yine de, birbirlerine olan güvenleri ve dayanışmaları artar. Grup adaya uaştıktan sonra ne yapmalılar? \n adayı keşif turuna çıkmalılar / kıyıya bir teknenin yanaşmasını beklemeliler');

    if (dayanisma='adayı keşif turuna çıkmalılar') { //adayı keşif turuna çıkmalılar

      let canavar= prompt('adayı keşvederken ormanın derinliklerinde bir grup canavarla karşılaşırlar. Şimdi ne yapmalılar? \n savaşmalı / kaçmalı');

      if (canavar='savaşmalı') {  //savaşmalı
        console.log('savaşacak malzemeleri olmadığı için kaybettini, hazineyi bulamadınız');
      }
      else {   //kaçmalı
        console.log('kaçarken diğer canavarlara yakalandınız, hazineyi bulamadınız');
      }

    }

    else { //kıyıya bir teknenin yanaşmasını beklemeliler
      let tekne= prompt('uzun bir bekleyiş ardından denizde tekne görürler ve kaptanın kendilerini görmesini sağlarlar. Tekne yanlarına gelir ve binip açılırlar. Kaptan hikayelerini dinler ve onları araması gereken esas ormana götürür ve bırakır. Ormana gelen ekip şimdi ne yapmalıdır? \n eski harita bilgilerini kullan / kaptanın tecrübelerinden faydalan');

      if (tekne='eski harita bilgilerini kullan') {  //eski harita bilgilerini kullan
        console.log('eski bilgiler seni hazineye ulaştırdı tebrikler.');
      }

      else { //kaptanın tecrübelerinden faydalan
        console.log('kaptanın kandırdığını farkettiniz ve hazineyi bulamadınız.')

      }

    }

  }
}
else if (secim='Bir denizciyle konuşarak bilgi edinmeye çalış') {     //Bir denizciyle konuşarak bilgi edinmeye çalış
   console.log('Denizciyle yapılan konuşma, grup için beklenmedik bir fırsat sunuyor. Denizci, onlara adanın efsanelerini anlatırken, kaybolmuş hazinenin yerini gösteren bir harita parçası veriyor. Bu harita, çok değerli bir ipucu taşıyor. Ancak, denizci ayrıca, adanın kötü şöhretli hırsızlar tarafından hedef alındığını da ekliyor.Bu bilgi, grup içinde bir panik havası yaratıyor. Cenk, hemen harekete geçmeleri gerektiğini savunuyor, Zeynep ise daha fazla bilgi edinmeleri gerektiğini düşünüyor. Sonunda, Elif bir öneride bulunuyor: Önce denizcinin söylediklerini göz önünde bulundurarak plan yapacaklar ve ardından harekete geçecekler.');

   let secondChoice= prompt('nasıl bir yol izlemeliler? \n Hemen yola çıkıp hazineyi bulmaya çalışın / Denizcinin tavsiyelerini dikkate alarak, öncelikle daha fazla bilgi edinmek için plan yapın');

   if (secondChoice='Hemen yola çıkıp hazineyi bulmaya çalışın') { //Hemen yola çıkıp hazineyi bulmaya çalışın
    let secondFirst= prompt('Grup, hızlı bir şekilde tekneye biner ve adaya doğru yola çıkar. Ancak, yola çıkmadan önce hava durumu hakkında yeterli bilgiye sahip olmadıkları için bir fırtınayla karşılaşırlar. Fırtına, onları beklenmedik bir şekilde zorlu bir duruma sokar.Tekne dalgalar arasında savrulurken, Elif ve arkadaşları bir karar vermek zorundadır: \n Fırtınadan kaçmak için hızlanmayı dene / Fırtınayı göğüslemek için sabit kal');
    if (secondFirst='Fırtınadan kaçmak için hızlanmayı dene') { //Fırtınadan kaçmak için hızlanmayı dene

      let secondFirstFirst= prompt('Elif, teknenin direksiyonunu hızla çevirir. Dalgalar yükselirken, tekne rüzgârı arkasına alarak hızlanır. Ancak bu hızlı manevra, teknenin kontrolünü kaybetmesine neden olur. Bir anda büyük bir dalga tekneyi devirmeye çalışır. Elif ve arkadaşları, suya düşmekten son anda kurtulur, ama birkaç ekipman kaybolur. Dalgalar sakinleştiğinde, tekne bir adaya kıyı yapar. Bu adada, kaybolmuş bir hazine ipucu bulacaklardır. Eski bir taş tablet. Üzerinde, hazineye giden yolu gösteren semboller vardır. ne yapmalılar? \n Taş tableti incele ve sembolleri çözmeye çalış. / Eşyalarını bulmak için adayı daha fazla araştır.');
      if (secondFirstFirst='Taş tableti incele ve sembolleri çözmeye çalış') { //Taş tableti incele ve sembolleri çözmeye çalış
        let secondFirstSecond= prompt('Elif, taş tableti dikkatle incelemeye başlar. Üzerindeki semboller, hazineye giden yolu gösteriyor gibi görünmektedir. Cenk, sembolleri çözmeye çalışırken, Zeynep, çevreyi kontrol etmek için etrafta dolaşır.Bir süre sonra, Zeynep, tableti incelediklerinde bir şey fark eder: Sembollerin bazıları adanın çevresindeki yerleri işaret etmektedir. Cenk, bu sembolleri doğru yorumlayarak, hazineye giden doğru yolu belirledi ve hazineyi bulmayı başarırlar.');

      }
      else { //Eşyalarını bulmak için adayı daha fazla araştır
        let aTwo= prompt('Elif ve arkadaşları, kaybolan eşyalarını bulmak için adayı araştırmaya karar verir. Adayı gezmeye başladıklarında, eski bir yapının kalıntılarını keşfederler. Bu yapının, kaybolmuş krallığın tapınağına ait olduğunu anlarlar.Tapınağın içinde, değerli eserler ve eski belgeler bulurlar. Ancak, tapınakta bir tuzak vardır ve bu tuzak harekete geçerse hepsi tehlikeye girebilir.Yeni Seçenekler: Tuzağı çözmeye çalış / Hızla tapınaktan çık ve eşyalarını daha sonra bulmayı dene.');

        if (aTwo='Tuzağı çözmeye çalış') { //Tuzağı çözmeye çalış
          console.log('tuzağı çözemedin, tapınakta mahsur kaldın!');
        }
        else { //Hızla tapınaktan çık ve eşyalarını daha sonra bulmayı dene
          console.log('kayboldun!');
        }
        
      }

    }
    else { //fırtınayı göğüslemek için sabit kal
      let firtina= prompt('Elif, teknenin yönünü sabit tutar. Fırtına ile başa çıkmayı başardıkları için kendilerine güvenleri artar. Fırtınanın geçmesinin ardından, adaya ulaşırlar. Ancak, teknenin motoru hasar görmüştür. Adada karaya çıktıklarında, Cenk, daha önce denizcinin anlattığı canavarı görür. Şimdi ne yapmalılar? \n canavarı etkisiz hale getir / dikkatlice hareket et');

      if (firtina='canavarı etkisiz hale getir') { //canavarı etkisiz hale getir
        console.log('canavarı etkisiz hale getirmeye çalışırken öldünüz');
      }

      else { //dikkatlice hareket et
        console.log('grup içinde anlaşmazlıklar çıktı, hazineyi bulamadınız');
      }

    }

   }
   else { //Denizcinin tavsiyelerini dikkate alarak, öncelikle daha fazla bilgi edinmek için plan yapın
    let secondSecond= prompt('Grup, denizcinin tavsiyelerini dikkate alarak, adada hazineye giden yol hakkında daha fazla bilgi edinmeye karar verir. Denizci, onlara eski bir harita daha vermeyi teklif eder, ancak bu harita için karşılığında bir iyilik istemektedir: Adanın etrafında dolaşan canavarı etkisiz hale getirmeleri gerekmektedir.Bu durumda, grup bir seçim yapar: \n Canavarı etkisiz hale getirmek için hazırlıklara başla. / Denizcinin teklifini reddederek, kendi planınızı yapmaya çalışın');
    
    if (secondSecond='Canavarı etkisiz hale getirmek için hazırlıklara başla') { //Canavarı etkisiz hale getirm için hazırlıklara başla
      let secondSecondThird= prompt('Elif ve arkadaşları, canavarı etkisiz hale getirmek için bir plan yapmaya karar verir. Haritadaki eski kalıntıları kullanarak, canavarı tuzağa düşürmek için bir tuzak kurmaya çalışırlar.Tuzaklarını hazırlarken, canavarın aniden ortaya çıkmasıyla panik başlar. Elif, hızlıca planlarını uygulamak zorunda kalır. Şimdi ne yapmalılar? \n Canavarı tuzağa çekmeye çalış / Canavarla doğrudan savaşmayı dene');
      
      if (secondSecondThird='Canavarı tuzağa çekmeye çalış') {  //Canavarı tuzağa çekmeye çalış
        console.log('canavarı tuzağa çekmeye çalışırken çok zaman kaybettin, hazineyi bulamadın');
      }

      else { //Canavarla doğrudan savaşmayı dene
        console.log('öldürüldünüz..');
      }

    }
    else { //Denizcinin teklifini reddederek, kendi planınızı yapmaya çalışın
      let denizci= prompt('Denizcinin teklifini reddettikten sonra, grup kendi planlarını yapar. Ancak, canavarın varlığını göz ardı etmek, onları beklenmedik bir tehlikeyle karşı karşıya bırakır. Adada dolaşırken, canavar aniden ortaya çıkar. Elif ve arkadaşları kaçmak zorunda kalır. Bu durumda ne yapmalılar? \n saklanma yeri bul / cesaretle canavara karşı savaş');

      if (denizci='saklanma yeri bul') {  //saklanma yeri bul
        console.log('saklanırken diğer canavarlar seni buldu, kaybettin');
      }

      else { //cesaretle canavara karşı savaş
        console.log('fazla cesaret sonunu getirdi, kaybettin');

      }

    }

   }

 }

 else {
  console.log('hatalı seçim yaptınız')
 }