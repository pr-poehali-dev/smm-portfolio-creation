import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section id="main" className="relative min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Icon name="Sparkles" size={16} className="mr-2" />
                Ведущее агентство PR и SMM
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-primary">SMM</span>-Редакция
                <br />
                <span className="text-gray-700 text-4xl lg:text-5xl">ваш успех в цифровом мире</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Профессиональные услуги продвижения для бизнеса в сфере недвижимости, 
                туризма и работы с федеральными структурами
              </p>
            </div>

            {/* Key points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: 'Building2', label: 'Недвижимость' },
                { icon: 'Plane', label: 'Туризм' },
                { icon: 'Shield', label: 'Гос.структуры' }
              ].map((item) => (
                <div key={item.label} className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-gray-100">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={item.icon as any} size={16} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Начать проект
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть кейсы
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200">
              {[
                { number: '200+', label: 'Довольных клиентов' },
                { number: '5', label: 'Лет опыта' },
                { number: '98%', label: 'Успешных проектов' }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
              <img 
                src="https://cdn.poehali.dev/files/0967ef57-33c6-4109-9eb8-97898214fd92.jpg" 
                alt="Маркетинг и SMM услуги" 
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute -top-4 -right-4 bg-primary text-white p-3 rounded-full">
                <Icon name="TrendingUp" size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-white p-3 rounded-full">
                <Icon name="Target" size={24} />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-10 -right-10 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Проект активен</span>
              </div>
            </div>
            
            <div className="absolute bottom-10 -left-10 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-primary">+147%</div>
              <div className="text-sm text-gray-600">Рост вовлеченности</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;