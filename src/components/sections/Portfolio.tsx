import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Все проекты' },
    { id: 'realestate', label: 'Недвижимость' },
    { id: 'tourism', label: 'Туризм' },
    { id: 'government', label: 'Гос.структуры' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Жилой комплекс "Новые горизонты"',
      category: 'realestate',
      description: 'Комплексное продвижение премиального жилого комплекса с увеличением продаж на 180%',
      image: 'img/b8b02a61-0389-400f-9616-5f2e0ccb3797.jpg',
      metrics: ['+180% продаж', '50K охват', '12% CTR'],
      tags: ['SMM', 'Таргетинг', 'Контент']
    },
    {
      id: 2,
      title: 'Туристический оператор "Мир путешествий"',
      category: 'tourism',
      description: 'Развитие бренда туроператора и увеличение онлайн-бронирований',
      image: 'img/2766d413-e797-4985-aa00-13ae4ec3a412.jpg',
      metrics: ['+250% бронирований', '100K подписчиков', '8.5% вовлеченность'],
      tags: ['Контент-маркетинг', 'Соцсети', 'PR']
    },
    {
      id: 3,
      title: 'Министерство развития региона',
      category: 'government',
      description: 'Информационная поддержка государственных программ и инициатив',
      image: 'img/9438ee16-36fb-4682-a8a4-52872a8c3e80.jpg',
      metrics: ['+400% охват', '95% доверие', '200+ публикаций'],
      tags: ['PR', 'Медиа', 'Репутация']
    },
    {
      id: 4,
      title: 'Курортный комплекс "Лазурный берег"',
      category: 'tourism',
      description: 'Сезонная рекламная кампания с фокусом на семейный отдых',
      image: 'img/2766d413-e797-4985-aa00-13ae4ec3a412.jpg',
      metrics: ['+320% бронирований', '80K охват', '15% конверсия'],
      tags: ['Сезонная реклама', 'Семейный сегмент', 'SMM']
    },
    {
      id: 5,
      title: 'Коммерческая недвижимость "Бизнес-центр"',
      category: 'realestate',
      description: 'Лидогенерация для коммерческой недвижимости класса А',
      image: 'img/b8b02a61-0389-400f-9616-5f2e0ccb3797.jpg',
      metrics: ['+150 лидов', '25K охват', '18% конверсия'],
      tags: ['B2B маркетинг', 'Лидогенерация', 'Email-маркетинг']
    },
    {
      id: 6,
      title: 'Региональная администрация',
      category: 'government',
      description: 'Цифровизация коммуникаций с жителями региона',
      image: 'img/9438ee16-36fb-4682-a8a4-52872a8c3e80.jpg',
      metrics: ['+500% активность', '1M охват', '300+ обращений'],
      tags: ['Цифровизация', 'Обратная связь', 'Мобильные решения']
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Icon name="Briefcase" size={16} className="mr-2" />
            Портфолио
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Наши успешные проекты
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Каждый проект — это история успеха. Посмотрите, как мы помогли нашим клиентам 
            достичь выдающихся результатов
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === category.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon name="ExternalLink" size={20} className="text-white" />
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gray-50 rounded-lg">
                  {project.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-sm font-bold text-primary">{metric}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-primary/5 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Хотите такой же результат?
            </h3>
            <p className="text-gray-600 mb-6">
              Обсудим ваш проект и найдем лучшие решения для достижения ваших целей
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors">
              <Icon name="MessageCircle" size={20} className="mr-2 inline" />
              Обсудить проект
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;