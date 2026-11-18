/* ============================================================
   DATA SITUS — edit di sini saja (pengganti database)
   ============================================================ */
const SITE = {
  name: 'Bali Wahyu Cargo',
  phone: '0878 6214 9398',
  wa: '6287862149398',
  email1: 'baliwahyu@gmail.com',
  email2: 'nsukesa@gmail.com',
  address: 'Jl. Raya Singapadu No. 15, Sukawati, Gianyar, Bali',
  owner: 'I Nyoman Sukesa'
};

/* Urutan array = urutan tampil. Hapus item untuk menyembunyikan layanan.
   "lengkap" = array paragraf untuk halaman detail. */
const SERVICES = [
  { slug: 'air-freight', icon: '✈️', nama: 'Air Freight',
    singkat: 'Fast and reliable air cargo from Bali to major airports worldwide.',
    lengkap: [
      'Our air freight service is ideal for time-sensitive, high-value, or lightweight shipments. We work with major airlines and a global agent network to get your cargo moving quickly.',
      'We handle booking, documentation, airport handling, and tracking, so you always know where your cargo is.'
    ] },
  { slug: 'sea-freight', icon: '🚢', nama: 'Sea Freight',
    singkat: 'Cost-effective FCL and LCL ocean shipping for large and heavy cargo.',
    lengkap: [
      'Sea freight is the most economical choice for furniture, handicrafts, and bulk commercial goods. We offer both FCL (full container) and LCL (shared container) options.',
      'From container booking and stuffing to port handling and destination delivery, we manage the whole process.'
    ] },
  { slug: 'custom-clearance', icon: '📋', nama: 'Custom Clearance',
    singkat: 'Smooth export documentation and customs handling, done correctly.',
    lengkap: [
      'Customs paperwork can delay a shipment. Our team prepares and verifies export documents so your cargo clears without surprises.',
      'We also advise on permits, certificates, and requirements for your destination country.'
    ] },
  { slug: 'packing-crating', icon: '📦', nama: 'Packing & Crating',
    singkat: 'Professional packing so fragile and valuable items arrive safely.',
    lengkap: [
      'Balinese handicrafts, furniture, and artwork need careful protection. We provide custom wooden crating, bubble wrap, foam, and palletizing.',
      'Every package is built for the rigors of international transit.'
    ] },
  { slug: 'warehousing', icon: '🏭', nama: 'Warehousing',
    singkat: 'Secure storage and consolidation before your cargo ships out.',
    lengkap: [
      'Need to gather goods from several suppliers? Our warehouse offers secure storage, inspection, and consolidation before shipment.',
      'Short-term and flexible arrangements are available.'
    ] },
  { slug: 'door-to-door', icon: '🚚', nama: 'Door to Door',
    singkat: 'Pickup at your location and delivery to the recipient’s door abroad.',
    lengkap: [
      'One service, no hassle: we collect from your home, shop, or factory and deliver to the final address overseas.',
      'Packing, documentation, freight, and destination handling are all coordinated by us.'
    ] }
];

/* CONTOH — ganti dengan testimoni klien asli sebelum dipublikasikan */
const TESTIMONIALS = [
  { nama: 'Client Name', asal: 'Country', bintang: 5, isi: 'Replace this with a real client review.' },
  { nama: 'Client Name', asal: 'Country', bintang: 5, isi: 'Replace this with a real client review.' },
  { nama: 'Client Name', asal: 'Country', bintang: 5, isi: 'Replace this with a real client review.' },
  { nama: 'Client Name', asal: 'Country', bintang: 5, isi: 'Replace this with a real client review.' }
];
