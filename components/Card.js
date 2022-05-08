import React from "react";
import styles from "../styles/Card.module.css";
// import projects from '../src/data.json'
import Link from "next/link";
import Image from "next/image";

function Card({ project }) {
  return (
    <>
      {
        <div key={project.title} className={styles.Card}>
          {project.images.map((img) => (
            <Image
              className={styles.Image}
              key={img}
              src={img}
              width='100vw'
              height='100%'
              objectFit="contain"
              layout="responsive"
              alt="Card Image"
              placeholder="blur"
              blurDataURL={img}
              srcSet={
                `${img} 1200w, 
                 ${img}?w=200 200w,
                 ${img}?w=400 400w, 
                 ${img}?w=800 800w, 
                 ${img}?w=1024 1024w`}
            />
          ))}
          <ul className={styles.tags}>
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className={styles.button_group}>
            {project.buttons.map((btn) => (
              <Link key={btn.name} href={btn.link} passHref>
                <a>
                  <div className={styles.card_btn}>{btn.name}</div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      }
    </>
  );
}


export default Card;
