import Image from "next/image";
import styles from "./LinkedImage.module.css";
export default function LinkedImage() {

  const selfieWidth = 300;
  return (
    <div className={styles.wrapper}>
      <Image
        alt="A cute picture of the developer"
        width={selfieWidth}
        height={(3900 / 3081) * selfieWidth}
        src="/picme.webp"
      />
    </div>
  )

}
