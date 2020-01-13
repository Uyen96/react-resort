import React from 'react'
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default function Services() {

    const services = [
        {
            icon: <FaCocktail />,
            title: "Free Cocktail",
            infor: "Vậy hook sinh ra cho mục đích gì nó gồm những thành phần nào? các cụ tự tìm hiểu."
        },
        {
            icon: <FaHiking />,
            title: "Hiking is died",
            infor: "Vậy hook sinh ra cho mục đích gì nó gồm những thành phần nào? các cụ tự tìm hiểu."
        },
        {
            icon: <FaShuttleVan />,
            title: "Free ShuttleVan",
            infor: "Vậy hook sinh ra cho mục đích gì nó gồm những thành phần nào? các cụ tự tìm hiểu."
        },
        {
            icon: <FaBeer />,
            title: "Stronget Beer",
            infor: "Vậy hook sinh ra cho mục đích gì nó gồm những thành phần nào? các cụ tự tìm hiểu."
        },
    ];

    return (
        <section className="services">
            <Title title="Services" />
            <div className="services-center">
                {services.map((item, index) => {
                    return (
                        <article className="services" key={index}>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.infor}</p>
                        </article>
                    )
                })}
            </div>

        </section>
    )
}
