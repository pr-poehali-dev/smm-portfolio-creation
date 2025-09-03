import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет логика отправки формы
  };

  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      content: '+7 (495) 123-45-67',
      description: 'Звоните в рабочее время'
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'info@smm-redakciya.ru',
      description: 'Ответим в течение часа'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      content: 'г. Москва, ул. Тверская, 15',
      description: 'Офис в центре города'
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      content: 'Пн-Пт: 9:00-19:00',
      description: 'Суббота по договоренности'
    }
  ];

  const socialLinks = [
    { name: 'Telegram', icon: 'MessageCircle', color: 'text-blue-500' },
    { name: 'WhatsApp', icon: 'MessageCircle', color: 'text-green-500' },
    { name: 'Instagram', icon: 'Instagram', color: 'text-pink-500' },
    { name: 'LinkedIn', icon: 'Linkedin', color: 'text-blue-600' }
  ];

  const services = [
    'SMM продвижение',
    'PR и медиа',
    'Контент-маркетинг',
    'Таргетированная реклама',
    'Аналитика и стратегия',
    'Консультации',
    'Другое'
  ];

  return (
    <section id="contacts" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Контакты
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готовы обсудить ваш проект? Мы всегда на связи и готовы ответить 
            на любые вопросы о наших услугах
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Оставьте заявку
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Компания
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Название компании"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Интересующая услуга
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">Выберите услугу</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-3">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Наши контакты
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 bg-white hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name={info.icon as any} size={20} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                          <p className="text-primary font-medium mb-1">{info.content}</p>
                          <p className="text-sm text-gray-600">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social links */}
            <Card className="border-0 bg-white">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Мы в социальных сетях</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <button
                      key={index}
                      className="w-12 h-12 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    >
                      <Icon name={social.icon as any} size={20} className={social.color} />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick contact */}
            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-6 text-white">
              <h4 className="font-bold text-xl mb-2">Срочный вопрос?</h4>
              <p className="text-primary-foreground/90 mb-4">
                Позвоните нам прямо сейчас или напишите в мессенджер
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="secondary" className="bg-white text-primary hover:bg-gray-50">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Позвонить
                </Button>
                <Button variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Telegram
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Приходите к нам в офис</h3>
            <p className="text-gray-600 mb-4">
              Наш офис находится в центре Москвы. Мы всегда рады встретиться 
              лично для обсуждения вашего проекта
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="Navigation" size={16} className="mr-2" />
              Построить маршрут
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;