const categories = [
  ['👕','الملابس','رجالية ونسائية وأطفال'],
  ['🏠','الأدوات المنزلية','مطبخ وديكور وتنظيم'],
  ['💄','الجمال والعناية','عناية شخصية ومنتجات تجميل'],
  ['📱','الجوال والخدمات','إكسسوارات وصيانة وشحن'],
  ['🗂️','المكتبية','قرطاسية ومستلزمات مكتبية']
];

export default function Home() {
  const whatsapp = '967782884203';
  return (
    <main>
      <header className="topbar">
        <div className="container nav">
          <div className="brand">الحسام للتسوق المنزلي</div>
          <a className="channel" href="https://whatsapp.com/channel/0029VbDoeGPBPzjakjjkOQ0l" target="_blank" rel="noreferrer">📢 قناة الواتساب</a>
        </div>
      </header>
      <section className="hero">
        <div className="container">
          <span className="badge">🛍️ متجر عربي</span>
          <h1>كل ما تحتاجه في مكان واحد</h1>
          <p>ملابس، أدوات منزلية، عناية شخصية، خدمات جوال ومستلزمات مكتبية.</p>
          <div className="actions">
            <a className="primary" href="#categories">تصفح الأقسام</a>
            <a className="secondary" href={`https://wa.me/${whatsapp}?text=${encodeURIComponent('السلام عليكم، أريد الاستفسار عن المنتجات في متجر الحسام للتسوق المنزلي.')}`} target="_blank" rel="noreferrer">اطلب عبر الواتساب</a>
          </div>
        </div>
      </section>
      <section className="notice"><div className="container"><strong>📢 انضم إلى قناتنا على الواتساب</strong><span>ليصلك كل عرض جديد فور نزوله</span><a href="https://whatsapp.com/channel/0029VbDoeGPBPzjakjjkOQ0l" target="_blank" rel="noreferrer">انضم الآن</a></div></section>
      <section id="categories" className="section container">
        <div className="sectionHead"><h2>أقسام المتجر</h2><a href="#offers">العروض والتخفيضات</a></div>
        <div className="grid">{categories.map(([icon,title,desc]) => <article className="card" key={title}><div className="icon">{icon}</div><h3>{title}</h3><p>{desc}</p><button>استعراض المنتجات</button></article>)}</div>
      </section>
      <section id="offers" className="offers"><div className="container"><h2>🔥 العروض والتخفيضات</h2><p>سيتم عرض المنتجات المخفضة هنا عند ربط لوحة الإدارة وقاعدة البيانات.</p></div></section>
      <footer><div className="container"><strong>الحسام للتسوق المنزلي</strong><span>مدينة مأرب • الطلب والاستفسار عبر الواتساب</span></div></footer>
    </main>
  );
}
