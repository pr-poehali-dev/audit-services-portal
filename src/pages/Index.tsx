import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-md">
                <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 10 L12 18 Q12 20 14 20 L18 20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M12 14 L17 14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M22 10 L22 18 L28 10 L28 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="20" cy="28" r="2" fill="white"/>
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-primary">СК-Аудит</span>
                <span className="text-xs text-muted-foreground">с 2003 года</span>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("hero")} className="text-sm font-medium hover:text-accent transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-accent transition-colors">
                О компании
              </button>
              <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-accent transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection("team")} className="text-sm font-medium hover:text-accent transition-colors">
                Команда
              </button>
              <button onClick={() => scrollToSection("licenses")} className="text-sm font-medium hover:text-accent transition-colors">
                Лицензии
              </button>
              <button onClick={() => scrollToSection("contacts")} className="text-sm font-medium hover:text-accent transition-colors">
                Контакты
              </button>
            </nav>

            <Button onClick={() => scrollToSection("contacts")} className="hidden md:flex">
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>

      <section id="hero" className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-accent/20 text-white border-white/30" variant="outline">
              С 2003 года на рынке аудиторских услуг
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Профессиональный аудит для вашего бизнеса
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              ООО «Компания «СК-Аудит» — член СРО ААС с 2012 года. 
              Оказываем аудиторские и сопутствующие услуги для компаний различных отраслей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => scrollToSection("services")} size="lg" className="bg-white text-primary hover:bg-white/90">
                Наши услуги
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button onClick={() => scrollToSection("contacts")} size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Получить консультацию
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <Card className="text-center bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="mx-auto mb-4 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Icon name="Award" size={24} />
                </div>
                <CardTitle className="text-white">20+ лет</CardTitle>
                <CardDescription className="text-white/80">опыта работы</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="mx-auto mb-4 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Icon name="Users" size={24} />
                </div>
                <CardTitle className="text-white">Команда</CardTitle>
                <CardDescription className="text-white/80">аттестованных аудиторов</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="mx-auto mb-4 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Icon name="ShieldCheck" size={24} />
                </div>
                <CardTitle className="text-white">СРО ААС</CardTitle>
                <CardDescription className="text-white/80">член с 2012 года</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="outline">О компании</Badge>
              <h2 className="text-4xl font-bold text-primary mb-4">
                История и достижения
              </h2>
              <p className="text-lg text-muted-foreground">
                Более 20 лет профессионального опыта в аудите
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Calendar" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Основание</CardTitle>
                  <CardDescription className="text-base">
                    ООО «Компания «СК-Аудит» была создана в 2003 году. 
                    За годы работы мы заслужили репутацию надежного партнера для бизнеса.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="FileCheck" className="text-accent" size={24} />
                  </div>
                  <CardTitle>Членство в СРО</CardTitle>
                  <CardDescription className="text-base">
                    С 17 августа 2012 года — член Ассоциации "Содружество" (СРО ААС). 
                    Регистрационный номер: 11206027552, свидетельство № 4618.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Наша миссия</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Коллектив нашей Компании состоит из опытных, ответственных профессионалов своего дела. 
                      Все аудиторы нашей фирмы имеют квалификационный аттестат и являются членами СРО аудиторов.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Мы специализируемся на общем аудите для компаний различных отраслей, включая производство, 
                      строительство, инвестиционную деятельность и управление недвижимостью.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">Услуги</Badge>
            <h2 className="text-4xl font-bold text-primary mb-4">
              Что мы предлагаем
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр аудиторских и консалтинговых услуг для развития вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center">
                  <Icon name="FileText" className="text-white" size={28} />
                </div>
                <CardTitle>Общий аудит</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Комплексная проверка финансовой отчетности и бухгалтерского учета организаций
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 w-14 h-14 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center">
                  <Icon name="Building" className="text-white" size={28} />
                </div>
                <CardTitle>Аудит строительства</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Специализированный аудит для строительных и девелоперских компаний
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 w-14 h-14 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl flex items-center justify-center">
                  <Icon name="Factory" className="text-white" size={28} />
                </div>
                <CardTitle>Аудит производства</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Проверка производственных предприятий с учетом отраслевой специфики
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center">
                  <Icon name="TrendingUp" className="text-white" size={28} />
                </div>
                <CardTitle>Инвестиционный аудит</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Оценка эффективности инвестиционных проектов и финансовых вложений
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 w-14 h-14 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center">
                  <Icon name="Home" className="text-white" size={28} />
                </div>
                <CardTitle>Управление недвижимостью</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Аудит компаний по управлению недвижимостью и земельным фондом
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 w-14 h-14 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl flex items-center justify-center">
                  <Icon name="Calculator" className="text-white" size={28} />
                </div>
                <CardTitle>Консалтинг</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Сопутствующие аудиту услуги, консультации по бухгалтерскому и налоговому учету
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">Команда</Badge>
            <h2 className="text-4xl font-bold text-primary mb-4">
              Наши специалисты
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Опытные профессионалы с квалификационными аттестатами
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="text-center hover:shadow-xl transition-all">
              <CardHeader>
                <div className="mx-auto mb-4 w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
                  <Icon name="User" className="text-white" size={40} />
                </div>
                <CardTitle>Старший аудитор</CardTitle>
                <CardDescription className="text-base">
                  Квалификационный аттестат, член СРО ААС, опыт работы более 15 лет
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all">
              <CardHeader>
                <div className="mx-auto mb-4 w-24 h-24 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center">
                  <Icon name="User" className="text-white" size={40} />
                </div>
                <CardTitle>Ведущий специалист</CardTitle>
                <CardDescription className="text-base">
                  Квалификационный аттестат, специализация в строительстве и производстве
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all">
              <CardHeader>
                <div className="mx-auto mb-4 w-24 h-24 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center">
                  <Icon name="User" className="text-white" size={40} />
                </div>
                <CardTitle>Аудитор-консультант</CardTitle>
                <CardDescription className="text-base">
                  Квалификационный аттестат, эксперт по инвестиционной деятельности
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="max-w-4xl mx-auto bg-accent/5 border-accent/20">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="GraduationCap" className="text-accent" size={36} />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2">Квалификация команды</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Все аудиторы нашей фирмы имеют квалификационный аттестат и являются членами СРО аудиторов. 
                    Мы регулярно повышаем квалификацию и следим за изменениями в законодательстве.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="licenses" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">Лицензии и сертификаты</Badge>
            <h2 className="text-4xl font-bold text-primary mb-4">
              Наши документы
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полное соответствие требованиям законодательства
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" className="text-primary" size={32} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">Членство в СРО ААС</CardTitle>
                    <CardDescription className="text-base space-y-2">
                      <p>
                        <strong>Организация:</strong> Саморегулируемая организация аудиторов Ассоциация "Содружество"
                      </p>
                      <p>
                        <strong>Решение Правления:</strong> от 17 августа 2012 года, протокол №67
                      </p>
                      <p>
                        <strong>Дата включения в реестр:</strong> 12 августа 2012 года
                      </p>
                      <p>
                        <strong>Регистрационный номер:</strong> 11206027552
                      </p>
                      <p>
                        <strong>Свидетельство о членстве:</strong> № 4618
                      </p>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon name="FileCheck" className="text-accent" size={24} />
                    </div>
                    <CardTitle>Квалификационные аттестаты</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Все аудиторы компании имеют действующие квалификационные аттестаты аудитора
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Icon name="ShieldCheck" className="text-secondary" size={24} />
                    </div>
                    <CardTitle>Регистрация в реестре</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Компания включена в реестр аудиторов и аудиторских организаций НП ААС
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">Контакты</Badge>
            <h2 className="text-4xl font-bold text-primary mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Готовы ответить на ваши вопросы и предложить оптимальные решения
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Отправить сообщение</CardTitle>
                  <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="email@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea placeholder="Расскажите о вашем запросе..." rows={4} />
                  </div>
                  <Button className="w-full" size="lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Building2" className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle>Наш офис</CardTitle>
                      <CardDescription>г. Москва, ул. Примерная, д. 1</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" className="text-accent" size={24} />
                    </div>
                    <div>
                      <CardTitle>Телефон</CardTitle>
                      <CardDescription>+7 (495) 000-00-00</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <CardTitle>Email</CardTitle>
                      <CardDescription>info@sk-audit.ru</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-muted-foreground mt-1" size={20} />
                    <div>
                      <p className="font-medium mb-1">Режим работы</p>
                      <p className="text-sm text-muted-foreground">
                        Пн-Пт: 9:00 - 18:00<br />
                        Сб-Вс: выходной
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 10 L12 18 Q12 20 14 20 L18 20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M12 14 L17 14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M22 10 L22 18 L28 10 L28 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="20" cy="28" r="2" fill="white"/>
                  </svg>
                </div>
                <span className="text-lg font-bold">СК-Аудит</span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                ООО «Компания «СК-Аудит» — профессиональные аудиторские услуги с 2003 года
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Быстрые ссылки</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => scrollToSection("about")} className="text-white/80 hover:text-white transition-colors">
                    О компании
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("services")} className="text-white/80 hover:text-white transition-colors">
                    Услуги
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("team")} className="text-white/80 hover:text-white transition-colors">
                    Команда
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("licenses")} className="text-white/80 hover:text-white transition-colors">
                    Лицензии
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 000-00-00
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@sk-audit.ru
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-1" />
                  г. Москва, ул. Примерная, д. 1
                </li>
              </ul>
            </div>
          </div>

          <Separator className="bg-white/20 mb-6" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2024 ООО «Компания «СК-Аудит». Все права защищены.</p>
            <p>Член СРО ААС, регистрационный номер 11206027552</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;