import {ChildProp} from "next/dist/server/app-render";
import styles from "./Card.module.scss";


export default function Card({ children }: ChildProp) {
    return (
        <div className={styles.card}>
            { children }
        </div>
    )
}