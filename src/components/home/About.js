import aboutImg from "../../utils/about.avif";
import profileImg from "../../utils/profile.avif";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.card}>
        <img src={aboutImg} alt="" />
        <div className={styles["card-content"]}>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            debitis.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            molestiae! Quidem est esse numquam odio deleniti, beatae, magni
            dolores provident quaerat totam eos, aperiam architecto eius quis
            quibusdam fugiat dicta.
          </p>
          <button>Get in Touch</button>
        </div>
      </div>
      <div className={styles.cardReview}>
        <ReviewCard para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis." />
        <ReviewCard para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores." />
        <ReviewCard para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt." />
        <ReviewCard para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum." />
        <ReviewCard para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!" />
        <ReviewCard para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima." />
      </div>
    </section>
  );
}

function ReviewCard(props) {
  return (
    <div className={styles.reviewCard}>
      <p className={styles.review}>{props.para}</p>
      <div className={styles.profile}>
        <div className={styles.image}>
          <img src={profileImg} alt="" />
        </div>
        <div className={styles.profileOwner}>
          <p className={styles.name}>Gladis Lennon</p>
          <p className={styles.profesion}>Head of SEO</p>
        </div>
      </div>
    </div>
  );
}

export default About;
