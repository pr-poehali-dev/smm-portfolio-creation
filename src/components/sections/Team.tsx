import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Team = () => {
  const teamMembers = [
    {
      name: 'Анна Петрова',
      position: 'Руководитель проектов',
      specialization: 'SMM стратегии, недвижимость',
      experience: '8 лет опыта',
      avatar: '👩‍💼',
      skills: ['Стратегическое планирование', 'Управление проектами', 'B2B коммуникации'],
      achievements: '200+ успешных проектов'
    },
    {
      name: 'Михаил Иванов',
      position: 'PR-директор',
      specialization: 'Связи с общественностью',
      experience: '10 лет опыта',
      avatar: '👨‍💻',
      skills: ['Кризисные коммуникации', 'Медиапланирование', 'Работа с госструктурами'],
      achievements: 'Эксперт по антикризисному PR'
    },
    {
      name: 'Елена Сидорова',
      position: 'Контент-менеджер',
      specialization: 'Туристический контент',
      experience: '6 лет опыта',
      avatar: '👩‍🎨',
      skills: ['Копирайтинг', 'Визуальный контент', 'Travel-маркетинг'],
      achievements: 'Автор 500+ статей'
    },
    {
      name: 'Дмитрий Козлов',
      position: 'Таргетолог',
      specialization: 'Рекламные кампании',
      experience: '7 лет опыта',
      avatar: '👨‍📊',
      skills: ['Facebook Ads', 'Google Ads', 'Аналитика'],
      achievements: '50М+ рекламных бюджетов'
    },
    {
      name: 'Ольга Морозова',
      position: 'Дизайнер',
      specialization: 'Визуальная концепция',
      experience: '5 лет опыта',
      avatar: '👩‍🎨',
      skills: ['Брендинг', 'UI/UX дизайн', 'Социальная графика'],
      achievements: 'Победитель конкурсов дизайна'
    },
    {
      name: 'Сергей Волков',
      position: 'Аналитик',
      specialization: 'Данные и метрики',
      experience: '4 года опыта',
      avatar: '👨‍💼',
      skills: ['Google Analytics', 'Прогнозирование', 'A/B тестирование'],
      achievements: 'Эксперт по конверсиям'
    }
  ];

  const companyValues = [
    {
      icon: 'Target',
      title: 'Результат',
      description: 'Каждый проект измеряется конкретными KPI и достижениями'
    },
    {
      icon: 'Users',
      title: 'Командная работа',
      description: 'Сильная команда профессионалов с опытом в разных сферах'
    },
    {
      icon: 'Lightbulb',
      title: 'Инновации',
      description: 'Используем самые современные инструменты и подходы'
    },
    {
      icon: 'Heart',
      title: 'Персональный подход',
      description: 'Индивидуальное решение для каждого клиента и проекта'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Icon name="Users" size={16} className="mr-2" />
            О команде
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Эксперты, которые создают успех
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Наша команда объединяет профессионалов с глубоким пониманием специфики 
            каждой отрасли и современных трендов маркетинга
          </p>
        </div>

        {/* Team members grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-1">{member.position}</p>
                  <p className="text-sm text-gray-600 mb-2">{member.specialization}</p>
                  <p className="text-sm text-accent font-medium">{member.experience}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-primary mb-2">{member.achievements}</p>
                </div>

                <div className="space-y-2">
                  {member.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-gray-50 px-3 py-1 rounded-full text-sm text-gray-700">
                      {skill}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex justify-center space-x-3">
                    <button className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                      <Icon name="Mail" size={16} />
                    </button>
                    <button className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                      <Icon name="Phone" size={16} />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Наши ценности</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Icon name={value.icon as any} size={24} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-8">Команда в цифрах</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '35+', label: 'Лет суммарного опыта' },
              { number: '200+', label: 'Реализованных проектов' },
              { number: '15', label: 'Отраслевых экспертиз' },
              { number: '98%', label: 'Довольных клиентов' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;