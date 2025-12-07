import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Palette" className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Школа Рисования
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О школе</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Портфолио</a>
            <a href="#learning" className="text-sm font-medium hover:text-primary transition-colors">Обучение</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">Блог</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            Записаться
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-20 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0">
                Онлайн-обучение
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Научись рисовать
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  с нуля
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Художник-самоучка с многолетним опытом создания портретов научит вас базовым основам и профессиональным техникам. Удобный онлайн-формат в любое время.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  <Icon name="Sparkles" className="mr-2 h-5 w-5" />
                  Начать обучение
                </Button>
                <Button size="lg" variant="outline" className="border-2 hover:bg-muted">
                  <Icon name="Play" className="mr-2 h-5 w-5" />
                  Смотреть видео
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">500+</div>
                  <div className="text-sm text-muted-foreground">Учеников</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">1000+</div>
                  <div className="text-sm text-muted-foreground">Портретов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">5+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop" 
                alt="Художник за работой" 
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=800&fit=crop" 
                alt="Портретная живопись" 
                className="rounded-3xl shadow-xl w-full"
              />
            </div>
            <div className="space-y-6 animate-slide-up">
              <Badge className="bg-primary/10 text-primary border-0">О школе</Badge>
              <h2 className="text-3xl md:text-5xl font-bold">
                От самоучки до профессионала
              </h2>
              <p className="text-lg text-muted-foreground">
                Я начинал с простых набросков и самостоятельного изучения основ. Через годы практики и тысячи портретов я создал собственную методику обучения, которая помогла сотням людей раскрыть свой творческий потенциал.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-lg bg-primary/10">
                    <Icon name="Palette" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Портреты на заказ</h3>
                    <p className="text-muted-foreground">Работаю по фото, видео и в живую. Любые техники и стили.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-lg bg-secondary/10">
                    <Icon name="GraduationCap" className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Обучение с нуля</h3>
                    <p className="text-muted-foreground">Объясню базовые основы рисования примитивов и построения объёма.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-lg bg-accent/10">
                    <Icon name="Video" className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Видео-уроки</h3>
                    <p className="text-muted-foreground">Смотрите, как образуется объём на плоскости листа.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-primary/10 text-primary border-0 mb-4">Услуги</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Что я предлагаю</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              От индивидуальных портретов до комплексного обучения рисованию
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Image",
                title: "Портреты на заказ",
                description: "Реалистичные портреты по фото или видео референсам. Работаю в разных техниках и стилях.",
                features: ["По фото", "По видео", "В живую", "Любая техника"],
                color: "primary"
              },
              {
                icon: "BookOpen",
                title: "Базовый курс",
                description: "Научу основам рисования примитивов, построению композиции и работе с объёмом.",
                features: ["Теория", "Практика", "Домашние задания", "Обратная связь"],
                color: "secondary"
              },
              {
                icon: "Trophy",
                title: "Продвинутый курс",
                description: "Углублённое изучение портретной живописи, работа с различными материалами.",
                features: ["Портреты", "Светотень", "Материалы", "Личная консультация"],
                color: "accent"
              }
            ].map((service, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className={`inline-flex p-3 rounded-xl bg-${service.color}/10 mb-4`}>
                    <Icon name={service.icon} className={`h-8 w-8 text-${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="Check" className={`h-4 w-4 text-${service.color}`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-primary/10 text-primary border-0 mb-4">Портфолио</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Мои работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Избранные портреты и учебные работы моих учеников
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1578926288207-a90a5366759e?w=500&h=600&fit=crop",
              "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&h=600&fit=crop",
              "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&h=600&fit=crop",
              "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=500&h=600&fit=crop",
              "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?w=500&h=600&fit=crop",
              "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&h=600&fit=crop"
            ].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl animate-scale-in cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
                <img 
                  src={image} 
                  alt={`Работа ${index + 1}`} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white font-semibold mb-1">Портрет #{index + 1}</h3>
                    <p className="text-white/80 text-sm">Техника: Карандаш</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="learning" className="py-20 md:py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/10 text-primary border-0">Обучение</Badge>
              <h2 className="text-3xl md:text-5xl font-bold">
                Учись в удобное время онлайн
              </h2>
              <p className="text-lg text-muted-foreground">
                Мой подход к обучению основан на понимании базовых принципов. Вы научитесь видеть объём, понимать светотень и создавать реалистичные изображения.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: "Clock", title: "Гибкий график", desc: "Учитесь когда удобно" },
                  { icon: "Video", title: "Видео-уроки", desc: "Подробные объяснения" },
                  { icon: "MessageSquare", title: "Обратная связь", desc: "Разбор ваших работ" },
                  { icon: "Award", title: "Сертификат", desc: "По окончании курса" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon name={item.icon} className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                <Icon name="Rocket" className="mr-2 h-5 w-5" />
                Начать обучение
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <Card className="relative border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Что входит в курс</h3>
                  <div className="space-y-4">
                    {[
                      "30+ видео-уроков",
                      "Теория построения объёма",
                      "Работа с примитивами",
                      "Техники штриховки",
                      "Светотень и композиция",
                      "Практические задания",
                      "Личные консультации",
                      "Доступ навсегда"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="p-1 rounded-full bg-primary/10">
                          <Icon name="Check" className="h-4 w-4 text-primary" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-8 border-t">
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        4 990₽
                      </span>
                      <span className="text-muted-foreground line-through">7 990₽</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                      Купить курс
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-primary/10 text-primary border-0 mb-4">Отзывы</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Что говорят ученики</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные отзывы людей, которые прошли обучение
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                role: "Начинающий художник",
                avatar: "https://i.pravatar.cc/150?img=1",
                text: "Никогда не думала, что смогу рисовать портреты! Всего за 2 месяца я научилась основам и создала свою первую работу. Спасибо за терпение и профессионализм!",
                rating: 5
              },
              {
                name: "Дмитрий Иванов",
                role: "Дизайнер",
                avatar: "https://i.pravatar.cc/150?img=12",
                text: "Отличный курс для тех, кто хочет понять основы академического рисунка. Объяснения простые и понятные, много практики. Рекомендую!",
                rating: 5
              },
              {
                name: "Мария Сидорова",
                role: "Студентка",
                avatar: "https://i.pravatar.cc/150?img=5",
                text: "Заказала портрет мамы на день рождения - получилось невероятно! Очень похоже и профессионально. Теперь сама учусь рисовать у этого мастера.",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="border-2 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-primary/10 text-primary border-0 mb-4">Блог</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Полезные статьи</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Советы, техники и вдохновение для начинающих художников
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop",
                category: "Уроки",
                title: "Как начать рисовать с нуля",
                excerpt: "Базовые упражнения и техники для новичков",
                date: "15 ноября 2024"
              },
              {
                image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop",
                category: "Техники",
                title: "Секреты реалистичного портрета",
                excerpt: "Как добиться сходства и передать характер",
                date: "10 ноября 2024"
              },
              {
                image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=400&h=300&fit=crop",
                category: "Материалы",
                title: "Выбор карандашей для рисования",
                excerpt: "Какие карандаши нужны начинающему художнику",
                date: "5 ноября 2024"
              }
            ].map((post, index) => (
              <Card key={index} className="group overflow-hidden border-2 hover:shadow-xl transition-all duration-300 cursor-pointer animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-primary/10 text-primary border-0">{post.category}</Badge>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <Icon name="ArrowRight" className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/10 text-primary border-0">Контакты</Badge>
              <h2 className="text-3xl md:text-5xl font-bold">
                Свяжитесь со мной
              </h2>
              <p className="text-lg text-muted-foreground">
                Есть вопросы о курсах или хотите заказать портрет? Напишите мне, и я отвечу в ближайшее время.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Icon name="Mail" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">art@example.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-secondary/10">
                    <Icon name="Phone" className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <Icon name="MapPin" className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Онлайн</div>
                    <div className="text-muted-foreground">Обучение из любой точки мира</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <Button size="icon" variant="outline" className="rounded-full hover:bg-primary hover:text-white transition-colors">
                  <Icon name="Instagram" className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full hover:bg-primary hover:text-white transition-colors">
                  <Icon name="Facebook" className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full hover:bg-primary hover:text-white transition-colors">
                  <Icon name="Youtube" className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <Card className="border-2 animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Напишите мне</h3>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea placeholder="Расскажите, чем я могу помочь..." rows={4} />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                    <Icon name="Send" className="mr-2 h-5 w-5" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Palette" className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Школа Рисования
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Учитесь рисовать онлайн в удобное время с профессиональным художником.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">О школе</a></li>
                <li><a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Услуги</a></li>
                <li><a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">Портфолио</a></li>
                <li><a href="#learning" className="text-sm text-muted-foreground hover:text-primary transition-colors">Обучение</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2">
                <li><a href="#reviews" className="text-sm text-muted-foreground hover:text-primary transition-colors">Отзывы</a></li>
                <li><a href="#blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Подписка</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Получайте советы и новости о новых курсах
              </p>
              <div className="flex gap-2">
                <Input placeholder="Email" className="text-sm" />
                <Button size="icon" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shrink-0">
                  <Icon name="Send" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 Школа Рисования. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
