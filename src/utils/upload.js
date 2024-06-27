/*
   Herhangi bir medya içeriğini (foto,video,ses,dosya,belge) veritabanlarına doğrudan kaydetmeyiz. 
   Bu sorunu çözüm olarak medya içeriklerini sadece medya verisi depolaması için tasarlanmış olan 
   yapılarda depolayıp medyaya erişmek için kullanılan url adreslerini veritabanında saklarırız.
 */

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";

// Dosyayı firebase storage'a yükleyip  url'ini return et.
const upload = async (file) => {
  // 1) dosya resim değilse veya dosya yoksa fonksiyonu durdur
  if (!file?.type.startsWith("image") || !file) {
    return null;
  }

  // 2) dosyanın yükleneceği konumun referansını al
  const imageRef = ref(storage, v4() + file.name);

  // 3) referansını oluşturduğumuz konuma dosyayı yükle
  await uploadBytes(imageRef, file);

  // 4) yüklenen dosyanın url'ini al ve return et
  return await getDownloadURL(imageRef);
};

export default upload;
