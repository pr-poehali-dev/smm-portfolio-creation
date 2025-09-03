import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Cases = () => {
  const successCases = [
    {
      title: 'ЖК "Премиум Резиденс" - рост продаж на 180%',
      client: 'Застройщик премиум-класса',
      industry: 'Недвижимость',
      challenge: 'Низкая узнаваемость проекта и слабые продажи в первые месяцы',
      solution: 'Комплексная стратегия с фокусом на целевую аудиторию, контент-маркетинг и точечная реклама',
      results: [
        { metric: 'Рост продаж', value: '+180%', icon: 'TrendingUp' },
        { metric: 'Охват аудитории', value: '250К', icon: 'Users' },
        { metric: 'Стоимость лида', value: '-45%', icon: 'DollarSign' },
        { metric: 'Конверсия', value: '12.5%', icon: 'Target' }
      ],
      timeline: '6 месяцев',
      testimonial: 'SMM-Редакция помогла нам не только увеличить продажи, но и создать сильный бренд на рынке недвижимости.',
      clientName: 'Андрей Коваленко, директор по продажам'
    },
    {
      title: 'Туроператор "Мечта-Тур" - 300% рост онлайн-бронирований',
      client: 'Региональный туроператор',
      industry: 'Туризм',
      challenge: 'Снижение продаж после пандемии, необходимость перехода в онлайн',
      solution: 'Цифровая трансформация бизнеса, создание экосистемы онлайн-бронирования',
      results: [
        { metric: 'Онлайн-бронирования', value: '+300%', icon: 'Calendar' },
        { metric: 'Подписчики', value: '85К', icon: 'Heart' },
        { metric: 'Средний чек', value: '+25%', icon: 'CreditCard' },
        { metric: 'Повторные клиенты', value: '67%', icon: 'RotateCcw' }
      ],
      timeline: '8 месяцев',
      testimonial: 'Благодаря профессиональному подходу команды мы не только восстановились, но и превысили допандемийные показатели.',
      clientName: 'Мария Федорова, генеральный директор'
    },
    {
      title: 'Министерство инфраструктуры - 500% рост вовлеченности',
      client: 'Региональное министерство',
      industry: 'Государственные структуры',
      challenge: 'Низкий уровень информированности граждан о государственных программах',
      solution: 'Современная коммуникационная стратегия с использованием всех цифровых каналов',
      results: [
        { metric: 'Вовлеченность', value: '+500%', icon: 'MessageCircle' },
        { metric: 'Охват публикаций', value: '2.1М', icon: 'Eye' },
        { metric: 'Обращения граждан', value: '+150%', icon: 'Phone' },
        { metric: 'Рейтинг доверия', value: '89%', icon: 'Shield' }
      ],
      timeline: '12 месяцев',
      testimonial: 'Профессиональная работа команды помогла нам существенно улучшить взаимодействие с жителями региона.',
      clientName: 'Владимир Петров, пресс-секретарь министерства'
    }
  ];

  return (
    <section id="cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Icon name="Award" size={16} className="mr-2" />
            Успешные кейсы
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Истории успеха наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Каждый проект уникален, но результат всегда превосходит ожидания. 
            Посмотрите, как мы помогаем бизнесу расти
          </p>
        </div>

        <div className="space-y-16">
          {successCases.map((caseStudy, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="lg:grid lg:grid-cols-2">
                  {/* Left column - Content */}
                  <div className="p-8 lg:p-12">
                    <div className="mb-6">
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                        {caseStudy.industry}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {caseStudy.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6">
                        <strong>Клиент:</strong> {caseStudy.client}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Icon name="AlertCircle" size={16} className="mr-2 text-red-500" />
                          Задача
                        </h4>
                        <p className="text-gray-600">{caseStudy.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Icon name="Lightbulb" size={16} className="mr-2 text-yellow-500" />
                          Решение
                        </h4>
                        <p className="text-gray-600">{caseStudy.solution}</p>
                      </div>

                      <div>
                        <div className="flex items-center mb-3">
                          <Icon name="Clock" size={16} className="mr-2 text-blue-500" />
                          <span className="font-semibold text-gray-900">Срок реализации: {caseStudy.timeline}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right column - Results */}
                  <div className="bg-gradient-to-br from-gray-50 to-primary/5 p-8 lg:p-12">
                    <h4 className="font-bold text-gray-900 mb-6 text-xl flex items-center">
                      <Icon name="BarChart3" size={20} className="mr-2 text-primary" />
                      Результаты
                    </h4>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {caseStudy.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                          <div className="flex items-center mb-2">
                            <Icon name={result.icon as any} size={16} className="text-primary mr-2" />
                            <span className="text-sm text-gray-600">{result.metric}</span>
                          </div>
                          <div className="text-2xl font-bold text-primary">{result.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-white p-6 rounded-xl border border-gray-100">
                      <div className="mb-4">
                        <Icon name="Quote" size={24} className="text-primary/30" />
                      </div>
                      <p className="text-gray-700 italic mb-4">
                        "{caseStudy.testimonial}"
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                          <Icon name="User" size={16} className="text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{caseStudy.clientName}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Готовы стать следующей историей успеха?</h3>
            <p className="text-primary-foreground/90 mb-6 text-lg">
              Давайте обсудим, как мы можем помочь вашему бизнесу достичь выдающихся результатов
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
              <Icon name="Rocket" size={20} className="mr-2 inline" />
              Начать проект
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;