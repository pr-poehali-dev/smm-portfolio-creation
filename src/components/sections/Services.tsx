import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      icon: 'Megaphone',
      title: 'SMM продвижение',
      description: 'Комплексное продвижение в социальных сетях с увеличением охвата и вовлеченности',
      features: ['Контент-стратегия', 'Таргетированная реклама', 'Аналитика и отчеты']
    },
    {
      icon: 'Newspaper',
      title: 'PR и медиа',
      description: 'Работа с прессой, создание позитивного имиджа и управление репутацией',
      features: ['Пресс-релизы', 'Медиапланирование', 'Кризисный PR']
    },
    {
      icon: 'PenTool',
      title: 'Контент-маркетинг',
      description: 'Создание качественного контента для привлечения и удержания аудитории',
      features: ['Тексты и статьи', 'Визуальный контент', 'Email-маркетинг']
    },
    {
      icon: 'BarChart3',
      title: 'Аналитика и стратегия',
      description: 'Глубокий анализ рынка и конкурентов для построения эффективной стратегии',
      features: ['Исследование рынка', 'Стратегическое планирование', 'KPI и метрики']
    },
    {
      icon: 'Users',
      title: 'Работа с сообществами',
      description: 'Создание и развитие активных сообществ вокруг вашего бренда',
      features: ['Модерация групп', 'Вовлечение аудитории', 'Event-маркетинг']
    },
    {
      icon: 'Zap',
      title: 'Консультации',
      description: 'Экспертные консультации по всем вопросам цифрового маркетинга',
      features: ['Аудит проекта', 'Стратегические сессии', 'Обучение команды']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Icon name="Settings" size={16} className="mr-2" />
            Наши услуги
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Полный спектр услуг для вашего успеха
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предлагаем комплексные решения в области PR и SMM, 
            адаптированные под специфику вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Icon name="Check" size={16} className="text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="text-primary font-medium text-sm hover:text-primary/80 transition-colors group-hover:underline">
                    Подробнее →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Готовы начать проект?</h3>
            <p className="text-primary-foreground/90 mb-6">
              Получите бесплатную консультацию и узнайте, как мы можем помочь вашему бизнесу
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;