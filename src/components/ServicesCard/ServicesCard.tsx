import React from 'react'
import styles from './ServicesCard.module.css';

interface ServicesCardProps {
    services:{
        title: string,
        description: string,
        image: string
    }[]
}

export const ServicesCard: React.FC<ServicesCardProps> = ({services}) => {
  return (
		<div>
            {services.map((service, index) => {
                return (
                        <div key={index} className={`row py-5 ${styles.service_container}`}>
                            <h1>{service.title}</h1>
                            <div className={`col-md-6 p-5 ${styles.image_container}`}>
                                <img
                                    className="shadow rounded"
                                    src={service.image}
                                    alt={service.title}
                                />
                            </div>
                            <div className={`col-md-6 p-4   ${styles.description}`}>
                                <p className={`${styles.services_p}`}>
                                    {service.description}
                                </p>
                            </div>
                        </div>
					)
            })}
		</div>
	)
}
