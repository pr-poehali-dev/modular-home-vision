import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/e97a9065-ef4c-4276-8034-487d6c7639a3/files/e50e8ad7-6fc3-4167-96bc-373ff0af1b06.jpg";
const INTERIOR_IMG = "https://cdn.poehali.dev/projects/e97a9065-ef4c-4276-8034-487d6c7639a3/files/17b90a72-e432-4bae-9575-c148baffabee.jpg";
const BUILD_IMG = "https://cdn.poehali.dev/projects/e97a9065-ef4c-4276-8034-487d6c7639a3/files/a33f397a-bae6-42ac-884b-95358097a292.jpg";

const navLinks = [
  { label: "О проекте", href: "#about" },
  { label: "Характеристики", href: "#specs" },
  { label: "Галерея", href: "#gallery" },
  { label: "Заказать", href: "#order" },
  { label: "Контакты", href: "#contacts" },
];

const specs = [
  { icon: "Home", title: "Площадь", value: "от 60 до 300 м²", desc: "Проекты любой площади под ваши задачи" },
  { icon: "Thermometer", title: "Теплопотери", value: "до 30 Вт/м²", desc: "Современная теплоизоляция минеральной ватой 200 мм" },
  { icon: "Clock", title: "Срок строительства", value: "3–6 месяцев", desc: "Быстровозводимая технология каркасного строительства" },
  { icon: "Shield", title: "Срок службы", value: "50+ лет", desc: "Качественные материалы и продуманные конструкции" },
  { icon: "Leaf", title: "Энергоэффективность", value: "А+", desc: "Высокий класс энергоэффективности, низкие счета за отопление" },
  { icon: "Layers", title: "Фундамент", value: "Свайный / лента", desc: "Подбор под геологию участка" },
  { icon: "Wind", title: "Вентиляция", value: "Приточно-вытяжная", desc: "Принудительная вентиляция с рекуперацией тепла" },
  { icon: "Wrench", title: "Гарантия", value: "5 лет", desc: "Письменная гарантия на все конструктивные элементы" },
];

const gallery = [
  { src: HERO_IMG, caption: "Загородный дом, 120 м²" },
  { src: INTERIOR_IMG, caption: "Интерьер гостиной" },
  { src: BUILD_IMG, caption: "Процесс строительства" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[hsl(36,20%,97%)] shadow-sm" : "bg-white/15 backdrop-blur-sm"}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[hsl(97,22%,28%)] flex items-center justify-center">
              <span className="text-[hsl(36,20%,97%)] text-xs font-bold font-body tracking-wider">GF</span>
            </div>
            <span className={`font-display text-xl font-semibold tracking-wide transition-colors duration-300 ${scrolled ? "text-[hsl(30,15%,12%)]" : "text-white"}`}>
              GreenFrame<span className={scrolled ? "text-[hsl(97,22%,28%)]" : "text-[hsl(97,40%,75%)]"}>House</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className={`nav-link transition-colors duration-300 ${scrolled ? "" : "!text-white hover:!text-[hsl(97,40%,75%)]"}`}>
                {l.label}
              </a>
            ))}
          </nav>

          <button
            className={`md:hidden transition-colors duration-300 ${scrolled ? "text-[hsl(30,15%,12%)]" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[hsl(36,20%,97%)] border-t border-[hsl(36,15%,85%)] px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link text-base"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Каркасный дом" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(30,15%,10%)]/80 via-[hsl(30,15%,10%)]/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl animate-fade-in-up" style={{ animationFillMode: "forwards" }}>
            <p className="text-[hsl(36,20%,97%)]/70 font-body text-sm tracking-widest uppercase mb-4">
              Каркасное строительство
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-[hsl(36,20%,97%)] leading-tight mb-6">
              Ваш дом —<br />
              <em className="not-italic text-[hsl(97,40%,65%)]">живой и тёплый</em>
            </h1>
            <p className="font-body text-[hsl(36,20%,97%)]/80 text-lg leading-relaxed mb-10">
              Строим каркасные дома с 2015 года. Используем только сертифицированные материалы и проверенные технологии.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#order" className="btn-primary text-center">Рассчитать стоимость</a>
              <a href="#gallery" className="btn-outline text-center">Смотреть проекты</a>
            </div>
          </div>
        </div>

        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[hsl(36,20%,97%)]/60 animate-bounce">
          <Icon name="ChevronDown" size={24} />
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-line" />
              <p className="font-body text-xs tracking-widest uppercase text-[hsl(97,22%,28%)] mb-3">О проекте</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-[hsl(30,15%,12%)] leading-tight mb-8">
                Строительство каркасных домов <em className="not-italic text-[hsl(97,22%,28%)]">нового поколения</em>
              </h2>
              <p className="font-body text-[hsl(30,10%,45%)] leading-relaxed mb-6">
                GreenFrameHouse — это команда опытных строителей, архитекторов и проектировщиков. Мы создаём энергоэффективные каркасные дома, в которых тепло зимой и прохладно летом.
              </p>
              <p className="font-body text-[hsl(30,10%,45%)] leading-relaxed mb-10">
                Каждый проект разрабатывается индивидуально — от концепции до ключей в руках. Мы контролируем каждый этап: проектирование, закупку материалов, строительство и финишную отделку.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { num: "9+", label: "лет опыта" },
                  { num: "130+", label: "домов построено" },
                  { num: "100%", label: "довольных клиентов" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-4xl font-light text-[hsl(97,22%,28%)] mb-1">{s.num}</div>
                    <div className="font-body text-xs text-[hsl(30,10%,45%)] uppercase tracking-wide">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img src={INTERIOR_IMG} alt="Интерьер каркасного дома" className="w-full aspect-[4/5] object-cover" />
              <div className="absolute -bottom-6 -left-6 bg-[hsl(97,22%,28%)] p-6 hidden md:block">
                <p className="font-display text-3xl font-light text-[hsl(36,20%,97%)]">с 2015</p>
                <p className="font-body text-xs text-[hsl(36,20%,97%)]/80 uppercase tracking-wide">года на рынке</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section id="specs" className="py-24 bg-[hsl(36,15%,93%)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="section-line" />
            <p className="font-body text-xs tracking-widest uppercase text-[hsl(97,22%,28%)] mb-3">Технические характеристики</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[hsl(30,15%,12%)] leading-tight">
              Цифры, которые <em className="not-italic text-[hsl(97,22%,28%)]">говорят сами</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((s) => (
              <div key={s.title} className="spec-card bg-background p-6 rounded-sm">
                <div className="w-10 h-10 bg-[hsl(97,22%,28%)]/10 flex items-center justify-center rounded-sm mb-4">
                  <Icon name={s.icon} size={18} className="text-[hsl(97,22%,28%)]" />
                </div>
                <p className="font-body text-xs text-[hsl(30,10%,45%)] uppercase tracking-wide mb-1">{s.title}</p>
                <p className="font-display text-2xl font-semibold text-[hsl(30,15%,12%)] mb-2">{s.value}</p>
                <p className="font-body text-sm text-[hsl(30,10%,45%)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="section-line" />
            <p className="font-body text-xs tracking-widest uppercase text-[hsl(97,22%,28%)] mb-3">Галерея</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[hsl(30,15%,12%)] leading-tight">
              Наши <em className="not-italic text-[hsl(97,22%,28%)]">реализованные</em> проекты
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {gallery.map((item, i) => (
              <div key={i} className="gallery-item group relative">
                <img
                  src={item.src}
                  alt={item.caption}
                  className={`w-full object-cover ${i === 0 ? "aspect-[3/4]" : "aspect-square"}`}
                />
                <div className="absolute inset-0 bg-[hsl(30,15%,12%)]/0 group-hover:bg-[hsl(30,15%,12%)]/40 transition-all duration-300 flex items-end">
                  <p className="font-body text-[hsl(36,20%,97%)] text-sm p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER */}
      <section id="order" className="py-24 bg-[hsl(97,22%,28%)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img src={BUILD_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="font-body text-xs tracking-widest uppercase text-[hsl(36,20%,97%)]/70 mb-3">Заказать</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[hsl(36,20%,97%)] leading-tight mb-6">
              Готовы обсудить<br />ваш проект?
            </h2>
            <p className="font-body text-[hsl(36,20%,97%)]/80 leading-relaxed mb-10 text-lg">
              Оставьте заявку — мы свяжемся в течение 30 минут и бесплатно проконсультируем вас по выбору проекта, участку и бюджету.
            </p>

            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Ваше имя"
                className="flex-1 px-5 py-4 bg-[hsl(36,20%,97%)]/10 border border-[hsl(36,20%,97%)]/30 text-[hsl(36,20%,97%)] placeholder-[hsl(36,20%,97%)]/50 font-body text-sm focus:outline-none focus:border-[hsl(36,20%,97%)]/70 transition"
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="flex-1 px-5 py-4 bg-[hsl(36,20%,97%)]/10 border border-[hsl(36,20%,97%)]/30 text-[hsl(36,20%,97%)] placeholder-[hsl(36,20%,97%)]/50 font-body text-sm focus:outline-none focus:border-[hsl(36,20%,97%)]/70 transition"
              />
              <button type="submit" className="bg-[hsl(36,20%,97%)] text-[hsl(97,22%,28%)] px-8 py-4 font-body text-sm tracking-widest uppercase font-semibold hover:bg-white transition-colors whitespace-nowrap">
                Отправить
              </button>
            </form>

            <p className="font-body text-[hsl(36,20%,97%)]/50 text-xs mt-4">
              Нажимая «Отправить», вы соглашаетесь с политикой конфиденциальности
            </p>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="section-line" />
              <p className="font-body text-xs tracking-widest uppercase text-[hsl(97,22%,28%)] mb-3">Контакты</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-[hsl(30,15%,12%)] leading-tight mb-10">
                Свяжитесь с нами
              </h2>

              <div className="space-y-6">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (900) 000-00-00" },
                  { icon: "Mail", label: "Email", value: "info@greenframehouse.ru" },
                  { icon: "MapPin", label: "Сайт", value: "greenframehouse.ru" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00 – 19:00" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[hsl(97,22%,28%)]/10 flex items-center justify-center rounded-sm flex-shrink-0">
                      <Icon name={c.icon} size={18} className="text-[hsl(97,22%,28%)]" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-[hsl(30,10%,45%)] uppercase tracking-wide mb-0.5">{c.label}</p>
                      <p className="font-body text-[hsl(30,15%,12%)] font-medium">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[hsl(36,15%,93%)] p-8 md:p-12">
              <h3 className="font-display text-2xl font-light text-[hsl(30,15%,12%)] mb-6">Задать вопрос</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Имя"
                  className="w-full px-4 py-3 bg-background border border-[hsl(36,15%,85%)] font-body text-sm text-[hsl(30,15%,12%)] placeholder-[hsl(30,10%,45%)] focus:outline-none focus:border-[hsl(97,22%,28%)] transition"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-3 bg-background border border-[hsl(36,15%,85%)] font-body text-sm text-[hsl(30,15%,12%)] placeholder-[hsl(30,10%,45%)] focus:outline-none focus:border-[hsl(97,22%,28%)] transition"
                />
                <textarea
                  placeholder="Опишите ваш проект или вопрос"
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-[hsl(36,15%,85%)] font-body text-sm text-[hsl(30,15%,12%)] placeholder-[hsl(30,10%,45%)] focus:outline-none focus:border-[hsl(97,22%,28%)] transition resize-none"
                />
                <button type="submit" className="btn-primary w-full text-center">
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[hsl(30,15%,12%)] py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-xl font-light text-[hsl(36,20%,97%)]">
            GreenFrame<span className="text-[hsl(97,40%,65%)]">House</span>
          </span>
          <p className="font-body text-xs text-[hsl(36,20%,97%)]/40 text-center">
            © 2024 GreenFrameHouse. Все права защищены. | greenframehouse.ru
          </p>
          <div className="flex gap-6">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="font-body text-xs text-[hsl(36,20%,97%)]/50 hover:text-[hsl(36,20%,97%)] transition uppercase tracking-wide">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}