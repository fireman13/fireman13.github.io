import React from 'react';
import './Classes.css';
import siteInfo from '../config/siteInfo';

const Classes = () => {
  const classData = [
    {
      id: 1,
      title: 'Batch 1',
      badge: 'Ages 6-9',
      days: 'Thursday',
      time: '4:00 PM - 5:00 PM',
      fee: '$20/month',
      focus: 'coordination, rhythm',
      featured: true,
    },
    {
      id: 2,
      title: 'Batch 2',
      badge: 'Ages 4.5-8',
      days: 'Friday',
      time: '5:30 PM - 6:45 PM',
      fee: '$20/month',
      focus: 'mid-intermediate',
      featured: false,
    },
    {
      id: 3,
      title: 'Batch 3',
      badge: 'Ages 3-4.5',
      days: 'Saturday',
      time: '10:00 AM - 11:00 AM',
      fee: '$20/month',
      focus: 'basic fundamentals, fun activities',
      featured: false,
    }
  ];

  return (
    <section id="classes" className="classes-section">
      <div className="container">
        <h2 className="section-title">{siteInfo.name} Classes & Timings</h2>
        <p className="section-subtitle">Choose the perfect batch for your schedule</p>
        
        <div className="classes-grid">
          {classData.map((classItem) => (
            <div 
              key={classItem.id} 
              className={`class-card ${classItem.featured ? 'featured' : ''}`}
            >
              <div className="class-header">
                <h3>{classItem.title}</h3>
                <span className="class-badge">{classItem.badge}</span>
              </div>
              <div className="class-details">
                <div className="detail-item">
                  <span className="icon">📅</span>
                  <div>
                    {classItem.days}
                  </div>
                </div>
                <div className="detail-item">
                  <span className="icon">⏰</span>
                  <div>
                    {classItem.time}
                  </div>
                </div>
                <div className="detail-item">
                  <span className="icon">💵</span>
                  <div>
                    {classItem.fee}
                  </div>
                </div>
                <div className="detail-item">
                  <span className="icon">🎯</span>
                  <div>
                    {classItem.focus}
                  </div>
                </div>
              </div>
              {classItem.featured && (
                <div className="popular-badge">Girls only</div>
              )}
            </div>
          ))}
        </div>

        <div className="info-box">
          <p>
            <strong>Note:</strong> All classes include a 15-minute warm-up and cool-down session. 
            Special workshops and masterclasses are announced monthly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Classes;
